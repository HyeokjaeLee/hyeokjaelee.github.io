---
title: 'Tailwind 디자인 토큰과 한국어 접근성, 그리고 프론트엔드 함정 4종'
description: '비디자이너가 디자인 시스템 토큰을 반으로 줄이고 Tailwind 기본 line-height의 한국어 접근성 문제를 수정한 기록'
date: '2026-08-08'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 디자인 토큰을 반으로 줄이기로 했다

비디자이너인 내가 화면을 보다가 하나의 판단을 내렸다.
컬러가 너무 많아서 촌스러웠다.

기존에는 49개 CSS 변수가 있었다.
hue만 7종(indigo, cyan, violet, blue, green, red, amber)이었고 거기에 glass morphism 토큰 4개, mesh 토큰 8개, gauge 토큰 4개가 얹혀 있었다.
전부 semantic 토큰으로 통합하거나 제거했다.
결과는 약 20개 코어 변수.

가장 결정이 빨랐던 건 glass morphism이었다.
glass의 시각적 효과는 배경의 컬러풀한 콘텐츠를 블러하는 데서 나온다.
내 화면은 배경을 순백이나 순흑으로 고정해 두었다.
`backdrop-filter: blur()`가 아무것도 블러하지 않는 상태였다.
결국 glass 75곳은 "약간 투명한 카드"에 불과했다.
opacity modifier(`/5`~`/80`)로 대체했다.

WCAG AA 대비율도 전 토큰을 통과시켰다.
v1에서는 success 토큰이 4.27:1로 미달이었는데 v2에서는 5.50:1로 올렸다.
순백 토큰은 3개만 남겼다.
순흑은 아예 쓰지 않는다.
가장 어두운 `--foreground`도 bluish-gray 계열의 `#0f1319`다.

## radius와 사이즈도 단일화

radius는 7개에서 4개로 줄였다.
핵심은 모든 인터랙티브 컨트롤을 단일 radius `lg`(6px)로 통일한 것이다.
Button, Input, Select, Toggle이 같은 둥글기를 공유한다.

사이즈 체계도 정리했다.
Button과 Input은 높이가 같다.
sm 36 / default 40 / lg 44 / xl 48.
모바일 최소 터치 타겟은 `lg`(44px)로 잡았다.
Apple HIG와 WCAG 2.5.5 권장을 따른 것이다.

Toss와 비교해 보면 흥미로운 점이 있다.
Toss는 radius가 사이즈에 비례해서 커진다(8→10→14→16).
대형 버튼이 더 부드러워 보인다.
나는 고정값(6/6/6/6)이라 각이 조금 더 느껴진다.
비례 radius는 흡수 가능한 개선점이지만 토큰 수가 늘어나는 트레이드오프가 있다.

## 한국어와 Tailwind 기본 line-height

이 부분이 이번 작업에서 가장 큰 발견이었다.
grep 기반으로 감사를 돌려 보니 텍스트 크기를 사용한 곳이 437곳이었다.
`text-sm`(14px)이 251건으로 가장 많았다.

문제는 line-height였다.
KRDS와 WCAG는 한국어 body에 LH 1.5(150%) 하한선을 요구한다.
그런데 Tailwind v3 기본값은 이를 충족하지 못한다.

`text-sm`(14px)의 기본 LH는 1.429다.
`text-xs`(12px)는 1.333이다.
둘 다 1.5에 못 미친다.

해결책은 의외로 단순했다.
`theme.extend.fontSize`에서 기존 `text-sm`과 `text-xs`의 LH만 override하면 됐다.

```js
// tailwind.preset.ts
xs: ["0.75rem",  "1.125rem"],   // LH 1.50 (기존 1.333 → 수정)
sm: ["0.875rem", "1.3125rem"],  // LH 1.50 (기존 1.429 → 수정)
```

437곳의 코드를 한 줄도 안 바꾸고 접근성을 수정한 셈이다.
문제는 폰트 크기가 아니라 line-height였다.

14px body는 유지했다.
이건 대시보드지, 읽기 매체가 아니다.
토스나 카카오페이뱅크도 13~14px를 쓴다.
KRDS의 17px은 정부 포털이나 뉴스용 기준이다.

## 프론트엔드 함정 4종

토큰 재설계 과정에서 함정 4종을 만났다.
하나씩 정리해둔다.

### CSS @import 순서

CSS 스펙상 `@import`는 다른 모든 규칙보다 먼저 와야 한다.
`@tailwind` 디렉티브 뒤에 두면 무효 처리된다.
Storybook에서 색이 하나도 안 나온 적이 있었다.
콘솔 에러 없이 조용히 실패했다.
해결은 `@import`를 맨 위로 옮기는 것이었다.

```css
/* @import를 맨 위로 */
@import "./tokens.css";
@import "./components.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

HMR이 변경분을 반영한 뒤에도 브라우저 수동 새로고침이 필요했다.
Storybook HMR만 믿으면 안 된다.

### tailwind-merge가 커스텀 fontSize 토큰을 색으로 오분류

`text-` prefix가 font-size와 text-color 양쪽에 겹친다.
tailwind-merge는 등록되지 않은 커스텀 토큰을 가장 비슷해 보이는 기본 그룹으로 추론한다.

Button에서 `text-primary-foreground`(색)와 `text-body`(크기)를 함께 썼다.
tailwind-merge가 같은 그룹으로 취급해서 `text-body`만 남기고 흰색 텍스트 색을 제거해버렸다.
모든 버튼 텍스트가 검게 됐다.

해결은 `extendTailwindMerge`로 font-size 그룹을 명시 등록하는 것이었다.

```ts
export const cn = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-caption", "text-body", "text-body-lg",
        "text-title", "text-headline",
        "text-display-1", "text-display-2", "text-display-3",
      ],
    },
  },
});
```

### tailwindcss-animate가 transform을 강제 주입

`tailwindcss-animate`의 `animate-in`이 keyframe 안에서 `transform`을 항상 주입한다.
이 transform이 `fixed + left/top 50% + translate-x/y`로 중앙정렬한 DialogContent의 centering을 덮어썼다.
Dialog가 우하단에서 중앙으로 밀려왔다.

`zoom-in-95`를 빼면 해결될 줄 알았다.
하지만 `--tw-enter-scale`만 안 쓰게 만들 뿐, transform 자체를 주입하는 keyframe은 그대로였다.

결국 opacity 전용 커스텀 keyframe을 정의했다.

```js
// tailwind.preset.ts
keyframes: {
  "dialog-enter": { from: { opacity: "0" }, to: { opacity: "1" } },
  "dialog-exit":  { from: { opacity: "1" }, to: { opacity: "0" } },
},
animation: {
  "dialog-enter": "dialog-enter 0.2s ease-out",
  "dialog-exit":  "dialog-exit 0.15s ease-in",
},
```

방어 원칙은 명확해졌다.
transform은 애니메이션과 위치 지정 중 한 곳에서만 소유해야 한다.

### Radix asChild Slot이 props를 미전달

Radix `DialogTrigger asChild`는 Slot으로 `onClick`과 `ref`, `props`를 단일 자식에 주입한다.
커스텀 `TriggerButton`이 `{...props}`를 spread하지 않으면 `onClick`이 도달하지 못한다.
콘솔 에러 없이 다이얼로그가 안 열렸다.

가장 까다로운 함정이었다.
에러가 0건이라 디버깅 난이도가 높았다.

## 컴포넌트 라이브러리 생명주기

같은 날 컴포넌트 라이브러리 패키지가 3단계로 진화했다.

Phase 1은 dead code 감사였다.
`@nakchulai/ui` 컴포넌트 import가 0건이었다.
CSS import도 dead code였다.
패키지를 통째로 제거했다.

Phase 2는 재추출이었다.
6단계 프로세스로 26개 shadcn 컴포넌트를 추출하고, 48개 import 사이트를 마이그레이션했다.
Radix 16종 의존성도 이관했다.

Phase 3은 Storybook 구축이었다.
26개 CSF3 스토리를 작성하고, `tailwind.preset.ts`를 토큰 SOT로 두었다.
전 스토리 검증을 통과했다.

Storybook 10에서는 Controls가 코어에 내장됐다.
addon-essentials를 제거해도 GUI props 컨트롤이 작동한다.
다만 Default 스토리(`args` + `argTypes` + `render(args)`)에서만 Controls가 활성화된다.
정적 쇼케이스 스토리에는 Controls가 없다.

Meta 타이핑에도 함정이 있다.
`Meta<TArgs>`는 타입 인자를 최대 1개만 받는다.
`children` 같은 required prop이 있는 컴포넌트는 `component` 필드를 생략해야 한다.
그렇지 않으면 required prop 충족 부담으로 에러가 난다.

## Atomic Design 분류 기준

작업하다 보니 "복합처럼 보이는 단순 컨트롤"을 Organism으로 과대분류하는 함정을 발견했다.
Accordion, Tabs, Table, Select는 Molecule이다.
단순 제어와 그룹핑이 핵심 역할이라서 그렇다.
Organism은 포털이나 오버레이, 다중 파트 복합 섹션에 한정하는 게 맞다.

## 마무리하며

이번 작업의 핵심은 "문제는 크기가 아니라 line-height"라는 문장으로 요약된다.
디자인 토큰의 양을 줄이는 것도 중요했지만 Tailwind 기본값이 한국어 접근성 기준에 미달한다는 사실을 발견한 게 더 큰 수확이었다.

437곳을 손대지 않고 `theme.extend.fontSize` 한 줄로 수정할 수 있다는 점이 Tailwind의 장점이기도 하고 반대로 기본값을 맹신하면 안 된다는 교훈이기도 하다.
