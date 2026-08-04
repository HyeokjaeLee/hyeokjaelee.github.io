---
title: 'pnpm catalog 범프 비대칭과 Astro 블로그 CSS 함정'
description: 'pnpm catalog 도입 중 add와 update의 비대칭 동작을 실측하고, 블로그 CSS 함정 두 개를 Playwright로 원인 추적한 기록.'
date: '2026-08-02'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## pnpm catalog 범프 비대칭 실측

의존성 버전을 모노레포 전체에 하나로 고정하려고 pnpm의 catalog 기능을 도입했다.
catalog는 pnpm-workspace.yaml에 버전을 한 번 적어두고, 각 package.json에서 catalog: 키워드로 참조하는 방식이다.
최초 도입은 syncpack을 대체하려는 의도였다.

syncpack은 94건의 lint 에러를 뱉었는데, 실제 의존성 드리프트는 4건뿐이었다.
신호 대 잡음

비가 4%라는 뜻이다.

syncpack의 fix 명령은 루트 devDependencies를 `*`로 바꿔버리는 파괴적 동작이라 사용을 포기했다.
네이티브 기능이고 의존성이 없는 catalog 쪽이 더 가벼웠다.

도입 자체는 es-toolkit과 내부 패키지 4종으로 끝났다.
그런데 peerDep를 catalog로 전환하면서 Extension API의 이중 버전 문제가 드러났다.
`자동 의존성 설치 설정: true` 환경에서 peerDep를 `*`로 두면, pnpm이 구 버전을 고정하는 함정이 있었다.

### add와 update는 catalog를 다르게 취급한다

여기서 핵심 발견이 나온다.
임시 워크스페이스를 만들어 before/after로 직접 실측했다.

`pnpm update <패키지> --latest -r`는 catalog 참조를 그대로 유지한다.
catalog 항목만 최신으로 범프되고, 각 package.json의 catalog: 키워드는 건드리지 않는다.
메이저 버전 횡단도 허용한다.

반면 `pnpm add -D <패키지>@latest`는 catalog 패턴을 파괴한다.
package.json의 catalog: 참조가 literal 버전 문자열로 치환되고 catalog 항목은 아무도 참조하지 않는 고아가 된다.
더 골치인 건 pnpm이 정상 종료되면서 아무런 경고도 주지 않는다는 점이다.
`git diff`로 package.json을 확인해야만 깨달을 수 있다.

그래서 catalog를 쓰는 워크스페이스에서는 범위 내 갱신은 `pnpm update -r`, 메이저 횡단은 `pnpm update --latest -r`, 직접 편집은 pnpm-workspace.yaml의 catalog 항목을 수정한 뒤 `pnpm install`로 확정했다.
`pnpm add`는 catalog 패키지에 절대 쓰지 않는다.

### 업데이트 스크립트 네 건을 손봤다

이 실측 결과는 곧장 `/update-pi` 커맨드 개선으로 이어졌다.
기존 스크립트는 `pnpm add -D`를 쓰고 있어서 매 실행마다 catalog를 literal로 되돌려놓았다.
catalog 참조를 보존하는 `pnpm update --latest -r`로 교체했다.
운영체제별 경로 탐지를 런타임에 하도록 고치고 확장 목록을 동적으로 생성하도록 바꿨다.
중복 코드를 압축해 401줄에서 393줄로 줄였다.

pnpm 글로벌 경로 탐지도 소소한 함정이 있었다.
`pnpm root -g`가 환경마다 불안정해서, 결국 node 스크립트로 경로를 순회하며 찾는 방식만 견고했다.

활성 버전이 global/5(0.82.1)이라는 것도 이 과정에서 정정했다.

## Astro 블로그 — 이미지 마이그레이션과 CSS 함정 두 개

같은 날 블로그 작업도 대규모로 진행했다.
GitHub 이슈에 올려둔 이미지 51개를 로컬로 전부 이관했다.
에셋 종류에 따라 경로 규칙이 갈라진다는 걸 이 과정에서 확정했다.

titleImage는 frontmatter에서 상대경로 문자열로 적으면 빌드 시 import.meta.glob이 URL로 매핑한다.
본문 이미지는 마크다운 `![]()`로 상대경로를 쓰면 Astro가 빌드타임에 WebP와 srcset을 만든다.
문제는 GIF를 video로 바꿀 때다.
마크다운 안에 직접 쓴 raw HTML의 src는 Astro가 전혀 건드리지 않는다.
그래서 `public/videos/<slug>/`에 파일을 두고 루트 절대경로로 참조해야 한다.

GIF를 WebM으로 바꾸니 용량이 약 95% 줄었다.
3.3MB짜리 GIF가 169KB가 됐다.
GIF 압축률이 워낙 나빠서 video 전환만으로 20배 가까이 줄어든다.

### 와이드 테이블 가로스크롤

`/good-commit-message/` 페이지에서 테이블이 페이지 전체 가로스크롤을 유발하고 있었다.
원인을 Playwright로 실측했다.
375px 모바일 뷰포트에서 본문 폭은 343px인데 테이블이 471px까지 밀어내고 있었다.

핵심은 브라우저가 display:table 요소의 overflow를 무시한다는 점이다.
테이블에 overflow-x:auto만 줘봤자 동작하지 않는다.
반드시 display:block으로 바꿔야 overflow가 걸린다.
거기에 width:max-content, `max-width:100%`, overflow-x:auto를 더한 네 선언으로 테이블 자체가 가로 스크롤되도록 잡았다.

좁은 토큰이 원인이었다.
`octo-org/octo-repo#100` 같은 형태는 중간에 줄바꿈 포인트가 없어서 셀 너비를 밀어낸다.

### Tailwind size-full 하단 패딩 함정

랜딩 페이지 하단에 여백이 안 생기는 현상도 Playwright로 측정했다.
scrollHeight가 3147px인데 article의 paddingBottom은 0px, bottomGap은 0.5px였다.

`<article>`이 size-full, 즉 `width:100%; height:100%`를 쓰고 있었다.
고정 높이를 가진 요소는 padding-bottom을 줘도 오버플로우된 콘텐츠 아래까지 닿지 않는다.
padding은 요소 높이 내부의 여백으로만 작동한다.

size-full을 `min-h-full w-full`로 바꿔서 고정 높이를 최소 높이로 풀었다.
그 위에 pb-16을 주니 하단에 64px 여백이 잡혔다.
오버플로우 레이아웃에서 하단 여백은 고정 높이 해제가 선행 조건이다.

## 위키 저널을 블로그로 옮기는 파이프라인

116개의 위키 저널을 블로그 콘텐츠로 전환하는 작업을 설계하기 시작했다.
주간 개발 일기와 실패 일기, 두 방향으로 나누고 있다.
익명화 원칙을 먼저 세웠다.
내부 티켓 번호, 사내 코드네임, 인프라 정보는 한 글자도 들어가면 안 된다.

GLM-5.2 환각 사건의 첫 산출물도 이날 작업의 일환이다.
AI가 지어낸 내용을 걸러내는 기준이 필요했고, 그 기준 자체를 글로 남겼다.

## 마무리

내가 이날 배운 핵심은 다음과 같다.

하루에 몰아서 한 느낌이 강하다.
catalog 비대칭 같은 발견은 실측 없이는 절대 문서만 보고 알 수 없는 종류다.
블로그 CSS 함정 두 개도 Playwright로 DOM을 직접 찍어보기 전까지는 원인 추측만 반복할 뻔했다.
눈이 아닌 실측이라는 원칙이 이번 작업 전체를 관통한다.
