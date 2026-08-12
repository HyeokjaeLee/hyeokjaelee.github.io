---
title: 'DB 스키마 드리프트, WAF 복구 아키텍처, GLM 에러 1210 정체'
description: '3자간 DB 스키마 동기화, 분산 크롤 WAF 복구 설계, GLM 에러 1210이 쿼터 소프트 리미팅의 위장이었던 진단 과정'
date: '2026-08-11'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## DB 스키마 드리프트, 3자간을 묶다

법원경매 권리분석 프로젝트의 production DB 스키마를 정리했다.
로컬에서만 마이그레이션이 쌓이고 production은 과거 상태에 고착된 지 오래였다.
schema.sql, migrations 디렉토리, production DB — 셋이 제각각이었다.

3자간 드리프트의 원인은 단순하다.
마이그레이션 DDL이 production에 전달되지 않았다.
로컬에서는 `push.ts`가 schema.sql과 31개 마이그레이션을 순서대로 적용하지만, production은 그 흐름에서 떨어져 있었다.

감사를 돌렸다.
핵심 운영 테이블 4종, 활성 테이블 5종, 그리고 잔재 3종.
운영 테이블은 법원경매 물건 56컬럼짜리 `properties`, LLM 분석 결과를 담는 `property_analysis`, 시세 데이터, 낙찰 결과다.
잔재는 이름만 남아 아무 코드도 참조하지 않는 테이블이었다.
전부 DROP 했다.
테이블이 8개에서 13개로 정리됐다.

`packages/db` 패키지 구조를 이번에 처음으로 끝까지 들여다봤다.
schema.sql이 단일 소스고 migrations가 증분 DDL을 담당한다.
client.ts는 service-role 클라이언트라서 RLS를 우회한다 — batch 크롤러가 테이블 권한 정책과 무관하게 쓰기 가능한 이유다.
types.ts는 자동 생성이 아니라 사람이 schema.sql과 동기화한다.
mappers.ts는 snake_case DB row와 camelCase 도메인 타입 사이의 경계를 격리한다.
batch-repository.ts는 크롤러 전용 upsert/replace RPC 래퍼다.

가장 유용했던 발견은 `supabase db dump --linked`다.
production DB 비밀번호 없이 CLI 토큰 인증만으로 스키마를 덤프할 수 있다.
비밀번호를 찾을 필요가 없었다.
db:pull 스크립트를 새로 작성했다 — production 덤프를 로컬로 복원하는 스크립트다.

## WAF 차단, 회피 대신 복구

법원경매 크롤러가 약 40건을 연속 처리하면 WAF에 차단된다.
기존엔 단일 잡이 차단되는 순간 전체가 즉시 실패했다.
이 구조를 분산 크롤 아키텍처로 바꿨다.

설계 원칙은 하나다.
"차단을 회피하려 하지 말고, 차단되면 복구하라."
WAF 차단 타임라인이 축적 → 차단 → 해제의 정규 패턴이라면, IP 로테이션이나 요청 지연 같은 회피 기법은 불필요한 복잡도만 만든다.
차단을 당하면 복구하는 쪽이 더 견고하다.

아키텍처는 coordinator와 병렬 크롤 청크로 나뉜다.
각 청크는 DB에 직접 쓰지 않고 MemorySink에 결과를 쌓는다.
coordinator가 성공한 청크만 DB에 일괄 flush한다.
실패한 청크는 재시도한다.

재개는 compositeKey로 처리한다.
sido, sigungu, dong, case_no를 조합한 키로 각 청크를 식별한다.
coordinator가 manifest에 청크 상태를 기록한다.
재시작하면 완료된 청크는 스킵하고 미완료만 이어서 처리한다.

자기 재예약은 Cloud Tasks로 구현했다.
coordinator가 완료되지 않으면 Cloud Tasks 큐에 자신을 다시 예약한다.
지연 재실행을 위한 execute API가 없어서 Cloud Tasks를 쓴다.

크롤과 LLM 분석은 이미 95% 분리돼 있었다.
properties 테이블은 크롤러 facts와 보강 데이터만 담고, LLM 결과는 property_analysis 테이블에 별도로 들어간다.
분석은 analyze-only.ts 잡이 별도로 돌린다.
법원 API 제한과 무관하게 분석만 다시 돌릴 수 있다.

Reviewer가 HIGH 이슈 7건을 짚었다.
패턴을 보면 대부분 정상 경로가 아니라 비정상 경로의 데이터 무결성에 집중돼 있다.
복구 경로 누락, MemorySink 메모리 한계, WAF 차단 중 재시도 폭주, manifest 동시 쓰기 경합, Cloud Tasks 페이로드 한계, LLM 분석 독립성 미보장, 상태 전이 가시성 부족.
"복구 기반" 설계에서 가장 위험한 건 복구 자체의 무한 루프다 — 이미 처리한 걸 다시 처리하는 것.
크롤과 분석을 분리한 건 성능이 아니라 장애 격리가 본 목적이었다.

건축HUB 보강은 0% 성공률이었다.
법원경매 코어 데이터는 100% 충전되는데 건축HUB API는 전부 실패했다.
그래서 VWorld 공간정보플랫폼 건축물 API를 대안 보강 소스로 도입했다.
VWorld API 키를 발급받아 GCP Secret Manager에 등록했다 — 연 1회 갱신이 필요하다.

## GLM-5.2 에러 1210, 쿼터 소프트 리미팅의 위장

GLM-5.2에서 에러 1210이 여러 세션에서 동시에 터졌다.
공통점은 컨텍스트 50% 초과, 즉 500K 토큰 이상이었다.
처음엔 일시적 서버 장애로 추정했다.
하지만 소거법으로 전부 부숴졌다.

500K 이상의 토큰을 API로 직접 재현해봤다.
900K 토큰 요청까지 전부 통과했다.
컨텍스트 크기 자체가 원인이 아니었다.
캐시 적중도 확인했다 — 550K 캐시 적중을 관측했고, 캐시 가설도 기각했다.

진단은 Z.AI Coding Plan의 쿼터 소프트 리미팅이었다.
5시간 쿼터 윈도우에서 소프트 리미팅이 발생하면, 정확한 코드인 1308 대신 1210(잘못된 요청)으로 노출되는 것이다.
1210 메시지를 글자 그대로 믿으면 안 된다.
대형 요청이 쿼터를 빨리 소비하니 50% 컨텍스트와 상관관계가 생기는 구조다.

구조적 회피로 models.json의 contextWindow를 인하했다.
대형 요청이 형성되기 전에 compaction이 먼저 발동하도록 임계값을 낮추는 것이다.
500K 이하 요청에서 compaction이 먼저 일어나면 쿼터 소프트 리미팅에 도달하기 어렵다.

## pi 0.46, context-notice, phantom loop

pi 0.46 업데이트를 적용했다.
pi-subagents 0.46은 prompts.render, mission 지속성, async-wait 복구를 가져왔다.
pi-web-access 0.21은 외부 fetch를 캐시로 처리해 JSONL 팽창을 막고, per-tool 등록 게이트를 추가했다.

업데이트를 적용할 때 changelog만 보지 않았다.
config-audit 패턴으로 실제 설정에서 영향 범위를 확인했다.
changelog에 적혀 있지 않은 설정 함정이 자주 있기 때문이다.

context-notice를 확장했다.
컨텍스트 70%, 85% 임계치에서 넛지를 보내는 기능이다.
핵심 수정은 deliveryAt 값이었다.
`deliveryAt: "nextUserRequest"`는 중단을 방지하려는 의도지만 1턴 지연이 생긴다.
`"nextStep"`(deliverAs: "steer"와 유사)으로 바꿔서 즉시 전달되게 했다.
compaction 임계값은 contextWindow에서 16384를 뺀 단일 조건이다 — 백분율이 아니다.

phantom working 루프 버그를 잡았다.
세션 종료 후에도 status가 working인 루프가 유령으로 남아 부활하는 결함이었다.
원인은 session_shutdown 강등 로직 부재, restore 무검증, persistState 순서 문제였다.
4곳을 수정하고 16개 smoke-test를 전부 통과했다.

pnpm v11로 전환하면서 드리프트가 생겼다.
pnpm 필드가 폐지돼서 공급망 설정은 pnpm-workspace.yaml로 옮겼다.
`--ignore-workspace`를 줘도 workspace.yaml은 여전히 읽힌다.
catalog literal 자동 전환과 peerDep 잔류 함정도 있었다.

## 위키 정리

42개 raw 드래프트를 13페이지로 클러스터링했다.
드래프트를 그대로 승격하지 않고, 주제별로 묶어 통합 페이지로 만들었다.
위키 인덱스가 2163페이지로 재생성됐다.
