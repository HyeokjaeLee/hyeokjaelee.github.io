---
title: '갤러리 캐러셀 3대 버그와 Lottie 상태 컴포넌트 정착기'
description: 'Embla 캐러셀 버그 추적, Lottie 상태 컴포넌트 계승, Tailwind canonical 검증 스캐너 만들기'
date: '2026-08-30'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 갤러리 캐러셀 이식

개인 프로젝트에 매물 사진 갤러리를 붙이는 작업을 마무리했다.

원천은 내 다른 레포인 briend의 DotLottie 래퍼다.

설계 리뷰를 해보니 구조는 괜찮은데 견고성과 접근성에 구멍이 4개나 있었다.

이벤트 cleanup이 실행되지 않는 잠복 결함, 완료 이벤트가 내비게이션의 유일한 조건인 SPOF, presentation 속성과 aria-label의 모순, Suspense 폴백 순환까지.

라이브러리를 검증하다가 더 흥미로운 걸 찾았다.

dotlottie-react 0.12.3의 `dotLottieRefCallback`은 반환값인 cleanup 함수를 버린다.

useEffect 의존성 배열에서 호출만 하고 반환을 무시하는 구조라, 리스너 해제와 재등록이 불가능하고 첫 렌더의 클로저가 남는다.

그래서 재등록 시 기존 리스너를 정리하는 안전 어댑터 패턴을 얹어서 이식했다.

## Embla 캐러셀 3대 버그

캐러셀은 Embla v8.6.0로 구성했는데 버그가 3개나 터졌다.

첫째, end-gap 함정.

`SlideSizes.measureEndGap()`이 마지막 슬라이드의 margin-end만 읽고 컨테이너 padding-right를 무시한다.

마지막 썸네일이 컨테이너에 딱 붙어버렸다.

px 패딩 대신 pl 유틸리티로 전환하고 마지막 슬라이드에 margin을 주는 걸로 해결했다.

둘째, 스냅 모드 스크롤바 동결.

스크롤바가 썸네일 스트립 위치만 추적하도록 짜면 메인 캐러셀을 드래그할 때 무반응이거나 블록 점프를 한다.

mainApi의 scroll 이벤트를 구독해서 실시간으로 추적하게 바꿨다.

Storybook에서는 재현이 안 된 게 단서였다.

실앱 컨텍스트에 의존하는 버그라는 뜻이다.

셋째, transition 재시작.

썸네일의 `transition-all duration-300`이 매 프레임 marginLeft가 갱신될 때마다 재시작되면서 제자리에서 기어가는 듯한 움직임을 만들었다.

transition을 제거해서 1:1 즉시 추적으로 바꿨다.

검증은 style의 목표값이 아니라 렌더 좌표를 Playwright로 실측했다.

CSS가 옳아 보여도 실제 픽셀이 움직여야 진짜다.

## Lottie 상태 컴포넌트

Lottie는 상태 표시 전용으로만 쓰는 정책을 세웠다.

EmptyState, UnauthorizedState, NotFoundState 셋과 공유 베이스 LottieStateBase 구성이다.

원래 설계는 HeroUI EmptyState와 공존하는 안이었는데, 내 판단으로 방향을 바꿨다.

재수출을 삭제하고 Lottie 컴포넌트가 EmptyState 이름을 계승하게 했다.

웹 적용 4곳과 리스트 빈 상태 4곳을 마이그레이션하면서 '없습니다' 텍스트를 전수 grep해서 누락을 잡아냈다.

크래시 경계인 error.tsx는 로티 없이 일반 마크업을 유지했다.

복구 UI는 애니메이션 스택이 죽어도 동작해야 하기 때문이다.

디자이너 스펙이 text-lg bold였는데 실사용 피드백에서 과해서 text-base font-medium까지 축소했다.

LottieStateBase 토큰 하나만 고치니 3개 컴포넌트에 전파됐다.

공유 베이스를 둔 보람이 있는 순간이다.

## Tailwind canonical 검증

에디터에서 `outline-offset-[-2px] can be written as -outline-offset-2` 같은 경고가 떠서 정체를 쫓았다.

이 경고는 Biome이 아니라 Tailwind IntelliSense 확장 전용 기능이었다.

Biome의 noTailwindArbitraryValue 룰은 named 대체 존재 여부와 무관하게 arbitrary 값을 전부 신고한다.

318건 중 정당한 arbitrary는 17곳뿐인데 구분 없이 경보를 뿌린다.

Tailwind v4는 `--spacing` 기반 동적 스케일이라 4의 배수 px arbitrary는 전부 named 대체 후보다.

`h-[130px]`는 `h-32.5`와 동치다.

그래서 양쪽 클래스를 실제로 컴파일해서 CSS가 같은지 증명하는 검증 스캐너를 만들었다.

64종을 검사해서 52종 동치, 0종 불일치, 12종 후보 없음으로 확정했다.

치환 적용은 다른 세션이 파일을 수정 중이라 대기 중이다.

하네스를 만들면서 함정도 5개 밟았다.

bun 고립 설치의 스텁 node_modules, v4 소스 탐지가 gitignore를 따르는 것, Biome 진단 span이 대괄호만 커버하는 것, CSS 셀렉터 이스케이프에서 대시를 포함하면 매칭이 전멸하는 것까지.

도구를 만드는 일은 도구가 검사할 대상만큼 함정이 많다.

## 검증 루프의 자기 진단 반박

에이전트 루프 쪽에서도 사건이 하나 있었다.

검증 루프가 40이터레이션을 소진하고 정지했는데, 수행 에이전트의 자기 진단은 "oracle 모델 라우팅 불일치로 인프라 문제라 해결 불가"였다.

로그를 전수 대조해보니 틀린 진단이었다.

진짜 원인은 워커가 검증자에게 루프 검증자 프롬프트를 전달하지 않아서 submit_verdict가 26번 중 0번 호출된 것이다.

판정이 없으니 피드백이 갱신되지 않았고 예산만 소진됐다.

무한 루프가 아니라 예산 소진이었다.

프롬프트 주입 코드가 이미 제거된 구형 API 경로에만 걸려 있던 게 근본 원인이었다.

부모가 프롬프트 파일을 작성하고 자식이 시작 시점에 읽는 구조로 전환하는 설계를 세웠다.

교훈은 명확하다.

에이전트의 자기 진단은 상세하고 자신감 있어도 검증 대상이다.

그리고 검증 루프 실패는 작업 품질 문제가 아니다.

인프라 한계를 작업 재시도로 풀지 말아야 한다.

## 남는 생각

하루 종일 UI 버그와 씨름했는데 결국 남은 건 검증 방법론이다.

캐러셀은 렌더 좌표 실측, Tailwind는 컴파일 동치 증명, 에이전트 루프는 로그 포렌식.

전부 "그럴 것이다"가 아니라 "측정했더니 그랬다"로 끝났다.

다음에는 Tailwind 치환 301곳 적용이 남아 있다.

다른 세션 수정이 끝나면 진단을 재추출해서 위치를 다시 계산해야 한다.
