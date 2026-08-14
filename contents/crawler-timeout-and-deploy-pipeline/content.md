---
title: '크롤러가 자꾸 죽던 원인을 찾고, 배포 파이프라인까지 갈아엎었다'
description: '외부 API 타임아웃 누락이 만든 IDLE TIMEOUT 오탐, Cloud Run 롤백 전략, Docker 빌드 최적화, Drizzle 전환 역설까지'
date: '2026-08-13'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 크롤러 워커가 자꾸 죽던 문제

법원 경매 정보를 긁어오는 크롤러 워커가 며칠째 자꾸 죽었다.

로그를 보면 명확한 에러 없이 5분쯤 뒤에 IDLE TIMEOUT으로 종료됐다.

워커가 죽는 직전에 외부 API를 호출하는 구간이 있었는데, 정작 그 요청이 끝났는지는 확인이 안 됐다.

원인을 추적하니 외부 API fetch()에 **타임아웃이 없었다.**

외부 서비스가 응답을 안 주면 fetch()는 무한 대기하고 그 사이 Cloud Run의 IDLE TIMEOUT이 발동해서 워커를 강제로 끊어버린 것이다.

`AbortSignal.timeout`으로 외부 API 전체에 타임아웃을 부여하니 더 이상 워커가 원인 모르게 죽는 일은 사라졌다.

### watchdog도 같이 손봤다

기존에는 페이지 처리 시작 시 한 번만 watchdog를 reset했다.

문제는 40개 물건을 순차 처리하는 동안 발생하는 정상적인 HTTP 요청을 watchdog가 인식하지 못한다는 거였다.

네트워크는 바쁘게 돌아가고 있는데, watchdog 입장에서는 "활동이 없다"고 판단해서 약 5분 뒤 오탐을 띄운다.

근본 원인은 처리량 기반 작업 시간과 무활동 시간을 같은 타이머로 재고 있었다는 거다.

해결은 I/O 활동 자동 추적이다.

공통 HTTP 래퍼에서 모든 요청이 시작될 때 activity를 기록하도록 하고 수동으로 reset하던 부분은 전부 제거했다.

이제 브라우저나 네트워크가 실제로 멈췄을 때만 30초 watchdog가 동작한다.

## 물건 단위 트랜잭션 원자화

크롤러 안정성을 손보면서 DB 쓰기 구조도 같이 정리했다.

기존에는 물건 하나를 저장할 때 6~7개의 개별 DB 호출이 순차로 발생했다.

중간에 하나라도 실패하면 불완전한 데이터가 DB에 영구히 남는 구조였다.

`db.transaction()`으로 7단계를 하나로 묶어 원자화했다.

fingerprint를 idempotency 키로 쓰니까 같은 물건을 다시 크롤해도 안전하다.

다만 기존에 이미 쌓인 불완전 데이터는 자동 복구가 안 된다.

별도 마이그레이션이 필요한 부분이라 당장은 남겨뒀다.

## 배포 파이프라인 전면 리팩토링

크롤러만 손 본 게 아니라 배포 파이프라인도 전면 갈아없었다.

### 직렬에서 병렬로

기존에는 빌드부터 health check까지 단일 job 안에서 순차 실행됐다.

같은 Docker 이미지를 batch와 health-check가 각각 빌드하는 중복도 있었다.

보일러플레이트도 GCP auth, 패키지 매니저 설치가 매 job마다 반복됐다.

리팩토링은 세 방향으로 진행했다.

`setup-gcp-bun` composite action을 만들어서 공통 스텝을 한 번에 처리했다.

build job에서 이미지를 먼저 빌드하고 deploy job 3개를 병렬로 돌렸다.

중복 빌드를 없애고 `checkout` 버전도 v4/v7 혼재를 v7로 통일했다.

### Cloud Run 롤백 전략

`:latest` 단일 태그로는 롤백이 안 된다.

이전 이미지를 보관해둬도 digest로 식별할 수 없기 때문이다.

진짜 롤백 수단은 Cloud Run 자체 revision이다.

빌드 단계에 SHA 이중 태깅을 적용했다.

`:latest`와 함께 `:sha-${GITHUB_SHA:0:7}`를 붙이고 수동 rollback 워크플로우에서 직전 버전을 자동 선택하도록 만들었다.

Artifact Registry 이미지가 계속 쌓이는 것도 정리했다.

cleanup policy를 keep 3, untagged는 1일 뒤 삭제로 잡으니까 42GB였던 레지스트리가 자동으로 관리된다.

gcloud CLI에는 cleanup-policy-file 플래그가 없어서 REST API로 설정해야 하는 것도 이 과정에서 알게 됐다.

정책 항목에 `name` 필드를 넣으면 400 에러가 뜬다.

3회 연속 에러를 겪고 나서야 map 포맷이라는 걸 파악했다.

### Docker 빌드 93초에서 7초로

빌드 최적화에서 가장 효과가 컸던 건 base image 분리다.

의존성 설치와 codegen 환경은 자주 안 바뀌니까 base image로 분리했다.

실제 배포에서는 소스 복사만 하는 thin overlay를 얹는다.

빌드 시간이 93초에서 7초로 줄었다.

GitHub Actions cache export도 함정이 있었다.

`type=gha` 캐시는 히트하는데 총 시간이 안 줄어든다.

확인해보니 EXPORT 단계에서 65초 오버헤드가 발생하고 있었다.

GitHub 서버를 경유하는 구조라 피할 수 없는 비용이다.

결국 base image 분리로 캐시 의존도 자체를 낮추는 쪽이 낫다고 판단했다.

## Drizzle 전환의 역설

PostgREST 접근층을 Drizzle ORM으로 전환하는 작업도 진행했다.

전수조사 후 이원 검증을 거쳐 6건을 전환하고 2건은 raw SQL을 보존했다.

Postgres `excluded`(ON CONFLICT)와 `TRUNCATE`는 Drizzle 대안이 없다.

전환 과정에서 흥미로운 점을 발견했다.

**ORM으로 전환할수록 생성 스키마에 대한 의존이 커진다.**

raw SQL 시절에는 컴파일 타임에 스키마를 몰라도 됐다.

하지만 ORM은 codegen으로 만들어진 스키마 타입에 정적으로 의존한다.

코드는 안전해지지만 codegen 정확도에 대한 부담은 오히려 늘어난다.

이 역설 때문에 codegen 파이프라인을 3단계로 정비하고 `__generated__/` 디렉토리로 산출물을 통합했다.

배포 시 프로덕션 DB 스키마와 불일치를 자동 검출하는 것도 안전장치로 넣었다.

## Cloud Run Jobs 종료 시맨틱스

배치 작업을 운영하다 보니 Cloud Run Jobs의 종료 처리도 정리할 필요가 있었다.

핵심은 자체 복구 가능한 실패와 복구 불가능한 즉사를 구분하는 것이다.

| 상황 | exit code | Cloud Run 판정 | maxRetries |
|---|---|---|---|
| Rate limit / IDLE | 0 (self-reschedule) | 성공 | 재시도 안 함 |
| OOM (SIGKILL) | 강제 종료 | 실패 | 재시도 1회 |

API rate limit에 걸리면 앱이 exit(0)으로 30분 뒤 재실행을 예약하고 정상 종료한다.

Cloud Run은 이걸 성공으로 판정한다.

반면 OOM으로 SIGKILL을 받으면 maxRetries가 1회 재시도를 시도한다.

두 메커니즘은 직교한다.

같은 "실패"처럼 보이지만 처리 방식이 완전히 다르다.

## GitHub Actions 함정 네 가지

리팩토링 과정에서 만난 GHA 함정도 기록으로 남긴다.

composite action의 input에 하이픈을 쓰면 뺄셈으로 파싱돼서 에러가 난다.

언더스코어를 써야 한다.

local action을 사용할 때는 checkout이 workspace를 채운 뒤에 실행해야 action.yml을 찾을 수 있다.

`workflow_dispatch`의 `${{ inputs.X }}`를 `run:`에 직접 끼워넣으면 임의 셸 명령 주입이 가능해진다.

`env:`로 감싸서 셸 변수로 참조해야 한다.

scheduled 워크플로는 정시에 발화하지 않고 한 사이클 지연이 발생할 수 있다.

신규 스케줄 등록 시 첫 실행이 밀리고 기본 브랜치가 전제 조건이라는 것도 확인이 필요하다.

