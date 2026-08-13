---
title: '로마자 표기 하나 바꿨더니 인프라 전체가 흔들렸다'
description: '사이드 프로젝트 이름 표기 정정 한 건이 GCP 풀스택 마이그레이션, ORM 전환, 데드코드 대정리, 크롤러 직렬화까지 몰고 온 하루'
date: '2026-08-12'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 시작은 단순한 오타 정정이었다

사이드 프로젝트 이름을 로마자로 쓸 때 표기가 틀렸다는 걸 알았다.
'낙출'로 읽히던 이름을 '낙찰'에 맞는 철자로 고치기로 했다.

국립국어원 개정 로마자 표기법을 기준으로 확인하니, 내가 쓰던 철자는 '낙출'에 해당하는 표기였다.
글자 하나 바꾸는 일인 줄 알았는데, 이게 전체 인프라를 갈아엎는 작업으로 번졌다.

## GCP 풀스택 마이그레이션

문제는 소스코드가 아니었다.
코드 안의 패키지명을 일괄 치환하면 되니까 모노레포 전체를 훑어서 142개 파일을 교체했다.

진짜 걸림돌은 인프라 리소스였다.
GCP 프로젝트 ID, GCS 버킷명, Supabase 프로젝트명은 한 번 만들면 변경할 수 없다.
즉 새 철자를 쓰려면 프로젝트 자체를 새로 만들어야 했다.

그래서 API 15개를 활성화하고 서비스 계정 2개를 세팅하고 Artifact Registry 2개를 만들고 Secret Manager 시크릿 전체를 새 프로젝트로 복사했다.
GCS 버킷도 새로 파서 데이터를 이전했다.

여기서 얻은 교훈은 명확하다.
rename은 코드 수준에서는 끝나지만 인프라 리소스명은 대부분 불변이다.
"무엇이 rename 가능하고 불가능한가"를 사전에 분류하는 게 마이그레이션 계획의 핵심이다.

## DNS 마이그레이션과 SSL 트러블슈팅

DNS는 Cloudflare를 쓰고 있었다.
Cloudflare 프록시와 Cloud Run을 직접 연결하니, Google Frontend에서 404가 떴다.
Host 헤더가 도메인으로 가니까 Cloud Run 입장에서는 매핑된 도메인이 아닌 셈이다.

처음에는 Cloudflare Transform Rule로 Host 헤더를 재작성해서 우회했다.
그런데 Cloudflare 프록시에 의존하는 구조가 마음에 걸렸다.
DNS를 GCP Cloud DNS로 전환하기로 했다.

그 과정에서 SSL 발급 문제가 터졌다.
Cloud Run 도메인 매핑은 SSL 인증서가 발급되어야 트래픽을 라우팅한다.
근데 AAAA 레코드 4개 중 1개가 빠 있었다.
한 개라도 누락되면 SSL 발급이 영구 차단된다.
전부 채우고 나서야 해결됐다.

## 배포: Vercel vs Cloud Run

Vercel Pro는 월 20달러다.
Cloud Run은 트래픽 없을 때 인스턴스를 0으로 줄이는 scale-to-zero가 가능하다.
사이드 프로젝트 규모에서는 트래픽이 들어올 때만 비용이 발생하는 쪽이 합리적이었다.

Cloud Run을 유지하기로 했다.

## Supabase에서 Drizzle ORM으로

DB 접근이 두 곳에 나뉘어 있었다.
배치 작업은 batch-repository.ts에서 PostgREST를 쓰고, 웹은 queries.ts에서 따로 쿼리를 날렸다.
같은 DB를 다루는데 접근 계층이 이원화되어 있으니 일관성이 흐려졌다.

PostgREST의 한계도 눈에 밟혔다.
JOIN을 못 해서 N+1 HTTP 라운드트립이 발생하고 트랜잭션을 쓰려면 PL/pgSQL RPC로 우회해야 했다.
Drizzle을 쓰면 `db.transaction()` 하나로 끝나는 일이다.

그래서 Supabase 의존을 Drizzle으로 전면 전환하기로 했다.
4단계로 나눴다.
레포지토리를 완성하고 웹 쪽을 포팅하고 호출부를 교체하고 마지막에 cleanup.

## drizzle-kit introspect 버그 2종

도입 과정에서 introspect 버그 두 개를 만났다.

첫째, 빈문자열 default가 `default()`로 깨져서 TS 컴파일 에러가 났다.
둘째, Supabase의 `auth.users` 크로스스키마 외래키를 인식하지 못해 TS2304 에러가 떴다.

둘 다 drizzle v1 beta에만 수정되어 있고, 정식 0.31.x에는 백포트되지 않았다.
auth.users 문제는 `drizzle-orm/supabase`에서 제공하는 `authUsers` 테이블 import로 해결했다.

마이그레이션 오디트를 하다가 기존 코드의 잠재 버그도 발견했다.
PostgREST로 짜던 시절 `market_prices.tradeType`의 `SALE` 필터가 누락되어 있었다.
마이그레이션은 내가 만든 회귀와 원래 있던 잠재 버그를 구분하는 작업이기도 하다.

## Knip 데드코드 대정리

Bun 모노레포 전체를 Knip으로 긁었다.
의존성 7개, 파일 35개, 미선언 의존성 1개가 잡혔다.

여기서 중요한 건 정제 과정이다.
Knip이 잡은 항목이 전부 진짜 미사용은 아니다.
동적 import로 쓰는 패키지, CLI entry로만 쓰는 패키지, Next.js가 암시적으로 참조하는 패키지는 오탐이다.

하나씩 grep으로 교차검증했다.
오탐 4개를 걸러내고, 진짜 미사용 3개를 확정했다.
knip.json을 다듬어서 Configuration hints를 0으로 떨어뜨렸다.
pre-commit 훅에 넣으니 전체 스캔이 1.2초 걸린다.

정리하다가 phantom dependency도 발견했다.
fast-xml-parser가 어디에도 선언되지 않았는데 Bun hoisting 덕에 우연히 동작하고 있었다.

## 크롤러 직렬화와 레이트리밋

법원경매 크롤러에서 429 문제가 있었다.
한 법원의 일일 요청 한도를 소진하면 429가 뜨는 게 아니라, 브라우저가 알아서 다음 법원으로 넘어가버렸다.
차단을 감지해야 하는데 흘려보내고 있었다.

그래서 60개 법원을 순차 크롤링하는 직렬화 전략으로 바꿨다.
429가 발생하면 즉시 중단하고 2시간 대기 후 재개한다.
중단 지점부터 이어서 크롤링한다.

XHR pageSize도 조정했다.
`page.route()`로 `pageSize: 10` 요청을 가로채서 `40`으로 재작성했다.
한 번에 더 많은 데이터를 가져오는 셈이다.

건축HUB API는 100% 실패하고 있었다.
법정동 코드를 역추론하는 방식의 한계였다.
도로명주소 기반 VWorld API로 전환하니 성공률이 95% 이상으로 올라갔다.

## Biome, lint-staged, husky 툴링 충돌

Biome에서 `noRestrictedImports`로 깊은 상대경로 import를 금지했다.
그런데 TS 모노레포에서 패키지에 정의한 path alias가 소비 app으로 자동 전파되지 않는다.
각 app의 tsconfig에 alias를 복제해야 한다.

Biome 2.x에서 `organizeImports`는 linter rule이 아니라 assist action이다.
그래서 `biome lint .`는 import 정렬을 검사하지 않는다.
`biome check .`만 import 정렬까지 잡는다.

husky pre-commit에서 lint-staged, lint:custom, type-check를 병렬로 돌렸더니 문제가 생겼다.
lint-staged의 내부 git stash → restore 과정이 다른 프로세스의 git 조작과 경쟁한다.
결정적으로 `'Failed to stage changes from tasks'` 에러가 떴다.

근본 원인은 따로 있었다.
lint-staged가 커밋 후 재스테이지할 때 tracked 파일 경로가 `.gitignore`에 걸리면 `git add`가 실패한다.
biome과 type-check는 통과해도 커밋이 차단된다.

## tRPC 도입 검토 — 결국 안 썼다

tRPC를 도입할지 검토했다.
이전에는 App Router에서 1급 지원이 아니라는 이유로 보류했는데 tRPC v11에서 App Router 1급 지원이 확인됐다.
그래서 판단을 정정했다.

하지만 API Route 8개 중 5개가 Supabase 래퍼다.
tRPC 프로시저가 결국 Supabase 호출을 한 번 더 감싸는 꼴이 된다.
추상화 계층만 늘어나는 셈이다.

RLS 정책이 인가를 이미 처리하고 있으니 tRPC 미들웨어는 중복이다.
TanStack Query + Supabase 클라이언트 직접 호출로 통일하기로 했다.

## 에이전트 인프라 디버깅

작업 도구인 에이전트 쪽에서도 이슈가 있었다.

code-index가 0%로 정지한 원인은 유령 inode였다.
인덱서가 이미 삭제된 inode에 계속 쓰고 세션은 같은 경로의 새 파일(빈 파일)을 읽고 있었다.
inode 불일치로 인한 desync였다.

Node 데몬이 조용히 죽는 문제도 있었다.
`setTimeout(...).unref()` 폴 타이머와 지연 연결 소켓 조합에서, 이벤트 루프가 비어서 즉시 종료되는 현상이었다.
`.unref()`는 타이머 참조를 해제하는데 다른 활성 핸들이 없으면 프로세스가 끝난다.

## 돌아보면

글자 하나 고치려다 인프라, ORM, 크롤러, 린트 툴체인까지 전부 손을 댄 하루였다.
다행히 각 작업에서 "왜 이렇게 했는지"를 위키에 남겨둬서, 나중에 다시 봐도 맥락이 사라지지 않을 것 같다.

다음에는 크롤러 직렬화 전략이 실제 운영에서 429 없이 안정적으로 도는지 지켜볼 생각이다.

