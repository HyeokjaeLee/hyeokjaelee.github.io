---
title: '보이지 않는 1px이 만든 유령 스크롤 — Tailwind sr-only 디버깅'
description: 'sr-only 스팬 하나가 문서 전체에 311px 빈 스크롤을 만든 이야기'
date: '2026-08-28'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 증상 — 패널은 멀쩡한데 페이지가 늘어났다

경매 매물 정보를 보여주는 개인 프로젝트에서 이상한 버그를 만났다.

분할 화면에서 오른쪽 상세 패널의 내부 스크롤은 잘 작동하는데 콘텐츠가 끝난 지점 아래로 빈 여백까지 통째로 스크롤됐다.

뷰포트는 933px인데 문서 전체 높이가 1,244px로 딱 311px 더 큰 상태였다.

전체 페이지 모드로 바꾸면 재현되지 않았고, 분할 화면에서만 나타났다.

## 첫 삼중 가설은 전부 빗나갔다

뷰포트 밖으로 삐져나온 요소가 있을 거라 생각하고 전체 요소의 rect를 스캔했다.

0건이었다.

그다음은 마진 겹침이나 음수 마진 의심이었는데 마진 기여 스캔도 0건이었다.

박스 자체는 문서를 늘리지 않고 있었다.

결국 남은 건 위치 문제라는 결론에 도달했다.

## 범인은 sr-only 스팬이었다

이전 작업에서 칩에 원본 코드값을 스크린리더에만 노출하려고 `<span class="sr-only">`를 추가했었다.

Tailwind의 `sr-only`는 `position: absolute`다.

absolute 요소는 위치 기준이 되는 positioned 조상이 필요한데 분할 화면 모드에서는 그 조상이 존재하지 않았다.

전체 페이지 모드에서는 패널이 `position: fixed`라 기준이 있어서 무해했고 분할 모드에서는 패널이 의도적으로 `static`이라 기준이 사라진 것.

기준이 없는 absolute 요소는 ICB, 즉 뷰포트를 기준으로 배치된다.

콘텐츠 깊은 곳의 static 위치 계산 결과가 y≈1,244px에 떨어지면서 보이지 않는 1px 스팬이 html 스크롤 영역만 311px 늘렸다.

조상의 `overflow: hidden`으로도 클립되지 않는 게 이 패턴의 까다로운 점이다.

## html과 body의 scrollHeight를 갈라놓으면 지문이 나온다

이 버그를 특정한 결정적 단서는 `document.body.scrollHeight`(933px)와 `document.documentElement.scrollHeight`(1,244px)의 차이였다.

body는 정상인데 html만 늘어나 있다면, 조상 체인의 클립을 무시하면서 문서 스크롤을 늘리는 경로는 ICB 앵커 absolute 요소뿐이다.

rect 스캔은 Shadow DOM 누락이나 클립 계산 오차로 놓치기 쉬운데 이 분기는 정확히 이 패턴만 잡아낸다.

앞으로 유령 스크롤을 만나면 요소 스캔보다 이 측정을 먼저 할 생각이다.

## 수정은 relative 한 클래스

칩 래퍼에 `relative` 하나를 추가해서 스팬의 기준을 ICB가 아닌 래퍼로 한정했다.

```tsx
// before — sr-only 스팬의 기준이 ICB로 튄다
<span className="flex flex-wrap items-center gap-1.5">

// after — 스팬 기준을 래퍼로 한정, 패널 스크롤러가 클립
<span className="relative flex flex-wrap items-center gap-1.5">
```

분할 화면 문서 높이가 1,244px에서 933px로 뷰포트와 같아졌고 `scrollTo(0, 500)`을 날려도 scrollY가 0으로 잠겼다.

패널 내부 스크롤 회귀도 없었고 전체 페이지 모드도 정상이었다.

같은 패턴의 숨김 h1은 static 위치가 뷰포트 안에 계산돼서 무해했다.

전부 고칠 필요 없이 기준이 없는 요소만 잡으면 된다.

접근성을 위한 요소가 레이아웃을 깨는 건 아이러니하지만 absolute의 기준이 어디인지 항상 묻는 습관이 생겼다.
