---
title: 'KRDS 디자인 시스템 전면 마이그레이션 — 17라운드 검증 루프와 사일런트 실패'
description: 'KRDS v1.0.0 토큰을 공식 JSON 기준으로 전면 정렬하고, 검증 루프의 false-fail과 사일런트 실패를 잡아낸 과정'
date: '2026-08-10'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## KRDS 디자인 시스템을 17라운드에 걸쳐 전면 마이그레이션했다

어제 하루는 디자인 시스템 전면 교체 작업에 거의 다 쏟았다.
KRDS(Korea Design System) v1.0.0 공식 JSON을 기준으로, 기존에 임의로 잡아두던 토큰 값을 전부 정확한 공식 값으로 치환하는 작업이었다.
컬러 9 패밀리 13단계 HEX, 섀도우 4단계, 8-point grid 간격, 래디어스 7종, Pretendard_GOV 타이포그래피 스케일까지 한 줄도 빠짐없이 정렬했다.

공식 JSON(`transformed_tokens.json`)을 정준 원천(source of truth)으로 삼은 게 출발이었다.
커뮤니티 Figma 파일도 있긴 한데, 공식 JSON이 더 정확하더라.
Figma는 참고용일 뿐 권위는 Storybook과 JSON에 뒀다.

### 13단계 의존성 그래프와 병렬 Wave

그냥 토큰 값을 하나씩 바꾸는 게 아니다.
Tailwind full `theme` 교체(P0)가 선행되어야 하고 그 위에서 컬러 시맨틱 매핑(P4)이 올라가며 그 다음에야 각 컴포넌트 그룹(P5~P8)에 토큰을 입힐 수 있다.
플래너(planner) 서브에이전트가 이 의존성을 13단계로 쪼개서 그래프를 그려줬다.

독립 컴포넌트 그룹은 6개 병렬 Wave로 돌렸다.
Selectbox·Combobox, Header·Navigation, PDP 카드·목록, Calendar·Chart 네 그룹이 동시에 진행되니 속도가 확 난다.
boundary-aware 코딩 모드로 `text-xs → text-caption`, `z-10 → z-dropdown` 같은 클래스를 일괄 치환하는 게 핵심이었다.

### 검증 루프의 가장 흔한 false-fail

여기서 진짜 짜증 나는 함정이 하나 있다.
`.next/` 디렉토리에 lock 파일이 남아 있으면 빌드가 구 버전을 서빙한다.
그 위에서 axe-core가 캐시된 HTML을 감사하면, 이미 고친 위반을 또 보고한다.

매 라운드마다 "수정했는데 왜 위반이 사라지지 않지?" 하고 헤맨 끝에 원인을 찾았다.
검증 전에 `.next/`를 완전 삭제하고, `node_modules/.cache`도 날리고, fresh production build를 올린 다음에 axe를 돌려야 한다.
이 세 단계를 안 지키면 false-fail이 무한 반복된다.

결국 type-check, Biome, 304 테스트, Storybook 빌드, web 빌드 전부 통과했고 axe-core 전체 규칙 기준 light+dark 0 violations까지 찍었다.
3명의 검증 agent(oracle, reviewer, design-reviewer)가 17라운드 끝에 전원 passed를 줬다.

## 연쇄 함정과 사일런트 실패

KRDS DropdownList 컴포넌트 작업 중에는 4종 연쇄 함정이 한꺼번에 터졌다.

`cn()` 유틸리티에서 `font-regular`와 `font-bold`를 병합했는데 bold가 안 먹었다.
`extendTailwindMerge`에 `font-weight` classGroup이 등록 안 되어 있어서다.
거기에 `theme.colors`까지 등록해야 커스텀 토큰이 정확히 분류된다는 것도 design-reviewer가 computed style로 폰트가 10px인 걸 잡아내면서 알아냈다.
Radix Popover.Arrow는 자동 위치만 지원해서 고정 위치 꼬리를 못 만들어 커스텀 SVG로 전환했고 Biome에서 JSX 안에 bare `// biome-ignore`를 쓰면 `noCommentText`에 걸려서 반드시 `{/* */}`로 감싸야 했다.

에러 없이 조용히 실패하는 사일런트 실패도 있었다.
Tailwind `h-18`은 spacing scale에 18이 없어서 에러 없이 무시된다.
Selectbox 트리거는 `htmlFor`가 안 먹어서 `aria-labelledby`로 가야 한다.
이런 것들을 디자인 토큰 준수 전수감사로 하나씩 잡아냈다.

## 같은 날, 다른 루프에서 배운 것

같은 날 agent 루프 평가 시스템에서도 근본적인 결함을 수정했다.

검증 루프(verifier loop)가 매 라운드마다 과거 평결 파일(`loop-verdict-*.json`)을 읽어서 이미 해결된 FAIL을 또 보고하는 현상이 있었다.
첫 접근은 "legacy 파일도 삭제 코드를 추가하자"였다.
근데 그러면 파일 라이프사이클이 더 복잡해지고 새로운 결함이 생길 수 있다.

결국 legacy 로직 자체를 완전 제거했다.
판정 작성 측 17줄, 수집 측 35줄을 지우고 dead `isLegacy` 분기까지 정리했다.
"삭제 추가"는 증상 치료고, "로직 제거"가 근본 수정이다.
파일 라이프사이클이 복잡해지면 제거가 정답이라는 걸 다시 한번 확인했다.

다른 루프에서는 검증 agent가 평가 텍스트는 쓰면서 `submit_verdict` 도구 호출만 누락해서 4번이나 reset이 반복된 케이스도 있었다.
LLM이 자연어로 "no blockers"라고 쓰는 것과 실제로 도구를 호출하는 건 분리된 액션이다.
자연어 판단과 도구 호출(action)이 항상 짝으로 오지 않는다는 걸 실물로 봤다.
최소 태스크로 검증 범위를 좁히고 "반드시 `submit_verdict`를 호출하라"는 강력한 지시를 넣어서야 수렴했다.

## 의존성 모델을 pnpm catalog로 전환

같은 기간에 생태계 의존성 관리 모델도 바꿨다.
bun global 기반에서 pnpm catalog 기반으로 전환했다.
내가 만든 4개 패키지를 `pnpm-workspace.yaml`의 catalog 블록으로 통합 관리하니, 버전 드리프트가 원천 차단된다.

syncpack으로 38개 패키지 드리프트를 점검해봤더니 94건 중 실제 드리프트는 4건이었다.
신호 대 잡음비가 4%.
syncpack fix는 루트 devDeps 3개를 `*`로 다운그레이드해서 재현성을 깨먹기까지 했다.
pnpm catalog가 네이티브로 해결해주는 걸 외부 도구로 억지로 끼워맞추는 건 정답이 아니었다.

## 마무리하며

디자인 시스템 토큰 하나 바꾸는 게 왜 이렇게 복잡한가 싶다가도, 막상 정리하고 나면 그래프가 명확해진다.
의존성 순서를 그래프로 그리고 검증 루프의 false-fail을 제거하고 파일 라이프사이클을 단순화하는 건 전부 같은 맥락이다.
복잡도를 줄이는 쪽으로 설계를 기울여야 한다는 걸 어제 하루 동안 세 번이나 다시 배웠다.

> 참고 자료: KRDS v1.0.0 공식 토큰 JSON, Tailwind CSS full theme 교체, axe-core 검증 가이드, pnpm catalog 문서
