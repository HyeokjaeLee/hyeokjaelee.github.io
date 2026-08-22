---
title: 'HeroUI v3 전면 개편 — hydration crash와 radius 토큰과 싸운 하루'
description: '법원경매 프로젝트 웹을 HeroUI v3와 Tailwind v4로 하루 만에 재구축했다 RSC 스트리밍 children이 React Aria Tabs를 깨는 hydration crash를 만났고 radius 토큰 하나로는 전면 제어가 안 된다는 구조적 충돌도 해결했다.'
date: '2026-08-21'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

법원경매 정보를 모아보는 개인 프로젝트(nakchalai)의 웹을 하루 만에 전부 갈아엎었다.
기존 디자인 시스템을 걷어내고 HeroUI v3로 재구축했고 Tailwind도 v3에서 v4로 옮겼다.
그 과정에서 문서에 없는 함정 두 개를 만났다.
RSC 스트리밍과 Tabs의 hydration crash, 그리고 radius 토큰 충돌이다.
해결 과정을 정리해본다.

## 점진적 리스타일이 아니라 전면 재구축

백엔드와 배치는 안정됐는데 웹이 그 변경사항을 전혀 못 따라가고 있었다.
매물 데이터 컬럼이 70개 가까이 쌓였는데 화면에 나오는 건 일부였다.
고쳐 쓰는 것보다 새로 짜는 게 빠르겠다고 판단해서 모든 페이지를 처음부터 만들기로 했다.

기존 디자인 시스템은 Radix 기반 자체 컴포넌트였는데 GalleryCarousel 하나만 남기고 전부 제거했다.
대신 HeroUI v3를 도입했다.
accent는 blue-600, radius는 xs(2px)로 못 박고 시작했다.

HeroUI v3는 v2와 다른 게 많았다.
일단 프로바이더가 없다.
HeroUIProvider 같은 래퍼 없이 @heroui/styles를 임포트하고 CSS 변수를 오버라이드하는 방식이다.
React 19 이상과 Tailwind v4 이상이 필수라서 Tailwind 마이그레이션을 피할 수 없었다.

Tailwind v4는 tailwind.config.ts를 버리고 CSS 파일 안에서 설정하는 CSS-first 방식으로 바뀌었다.
테마 파일 하나를 만들어서 웹과 Storybook이 같이 임포트하게 했다.
덕분에 스토리북에서 컴포넌트가 다르게 보이는 이중 관리 문제는 원천 차단됐다.

### PC는 페이지네이션, 모바일은 무한 스크롤

리스트 UX는 기기를 나눴다.
PC는 페이지네이션, 모바일은 무한 스크롤에 윈도잉을 얹었다.
여기서 중요한 건 무한 스크롤 위치를 쿼리스트링에 남기는 것이다.
새로고침해도 스크롤 위치가 복원되어야 하니까 URL이 리스트 상태의 단일 소스가 되어야 한다.
anchor와 offset을 갱신할 때 router.replace를 쓰면 라우터 상태와 충돌한다.
그래서 window.history.replaceState로만 관리하는 디테일도 필요했다.

## RSC 스트리밍 children이 Tabs를 깨다

배포하고 나니 매물 상세 페이지에서 hydration 에러가 났다.

배포된 HTML을 뜯어보니 이상한 게 있었다.
Tabs 앞에 template 태그가 중첩으로 박혀 있었다.
template 안에 또 template id="P:4" 같은 게 들어있는 구조였다.

원인을 추적하니 구조적인 문제였다.
React Server Components가 클라이언트 컴포넌트로 children을 넘길 때 template 태그로 감싸서 스트리밍한다.
그런데 React Aria 기반인 HeroUI Tabs는 비활성 패널을 inert template으로 감싸는 방식이라 둘이 만나면 중첩된다.
React 스트리밍 스크립트가 getElementById("P:4")를 찾는데 null이 떠서 b.parentNode 에러로 터지는 것이었다.

해결은 클라이언트 경계를 옮기는 것이었다.
Tabs에 서버 렌더링된 패널을 children으로 넘기지 않고 탭 전체를 use client 컴포넌트(DetailTabs)로 뽑았다.
데이터를 props로 받아서 패널도 클라이언트 안에서 조립한다.

일반화하면 이렇다.
RSC 콘텐츠를 클라이언트 탭이나 아코디언 패널의 children으로 직접 스트리밍하지 마라.
경계를 명확히 하고 데이터를 props로 받는 래퍼를 만들어라.

비슷한 hydration 이슈가 하나 더 있었다.
날짜 렌더링인데 서버는 UTC, 클라이언트는 KST라 같은 컴포넌트가 다른 문자열을 뽑아냈다.
Intl.DateTimeFormat에 timeZone: "Asia/Seoul"을 고정해서 어디서 호출해도 같은 문자열이 나오게 막았다.

## radius 하나로는 못 맞춘다

radius를 xs(2px)로 통일하겠다고 했는데 이게 제일 오래 걸렸다.

Tailwind v4는 --radius-xs를 calc(var(--radius) * 0.25)처럼 파생시킨다.
rounded-xs가 2px가 되려면 --radius를 8px로 잡아야 한다.
그런데 HeroUI 컴포넌트 CSS도 내부적으로 calc(var(--radius) * 2.5)를 쓴다.
--radius가 8px면 Tabs 라운드가 20px가 되어버린다.
하나의 --radius 값으로 Tailwind 유틸리티와 HeroUI 컴포넌트를 동시에 2px로 맞출 수 없는 구조다.

더 골치 아픈 건 사전 컴파일된 리터럴이었다.
HeroUI 컴포넌트 CSS에 rounded-3xl 같은 클래스가 그냥 박혀 있다.
CSS 변수 오버라이드로는 잡히지 않는다.

풀어간 순서는 이렇다.
먼저 --radius-3xl 변수 오버라이드로 Card와 Chip을 잡았다.
다음으로 @layer components 오버라이드를 시도했는데 일부 컴포넌트만 잡혔다.
결국 @utility 재정의에 !important를 붙이는 것으로 수렴했다.

```css
@utility rounded-xs { border-radius: 0.125rem !important; }
@utility rounded-sm { border-radius: 0.125rem !important; }
```

!important가 마지막 수단이라는 건 알지만 이 경우엔 구조적으로 선택지가 없었다.
라이브러리 CSS가 변수를 안 타는 리터럴을 쓰는 이상 캐스케이드로 이길 방법이 없다.

## 검증 17라운드

이번 개편은 코드·스펙·디자인 세 역할의 검증을 돌려가며 진행했다.
총 17라운드를 돌았다.

실측 기반이라 잡히는 것들이 달랐다.
계산기에서 taxRate를 4.6으로 넣고 percent 포맷을 붙였더니 460%로 렌더링되는 걸 잡았다.
percent 포맷은 값에 100을 곱한다.
axe-core로 WCAG 대비를 재니 placeholder 색이 2.56, footer가 4.42로 기준 4.5에 못 미쳤다.
muted 색을 진하게 바꿔서 해결했다.

배포는 전 페이지 200 확인하고 마쳤다.
Storybook에 스토리 85개를 등록했고 남은 건 Skeleton의 radius 잔여와 모바일에서 page=2 새로고침 시 중복 fetch 정도다.
둘 다 다음 세션에서 잡을 과제로 남겨뒀다.

## 다음 생각

radius 충돌은 HeroUI v3가 Tailwind v4 세계로 넘어오는 과도기 특성이라 본다.
업스트림이 변수 구조를 정리하면 @utility 해킹은 걷어낼 수 있다.
hydration crash 쪽은 React Aria와 RSC의 조합 문제라서 어느 쪽 이슈 트래커에 올릴 만한 주제인지 좀 더 확인해보려 한다.
