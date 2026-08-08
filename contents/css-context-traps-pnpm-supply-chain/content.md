---
title: 'CSS 암묵적 컨텍스트 함정과 공급망 게이트'
description: '위치 지정과 무관해 보이는 CSS 속성이 sticky와 드롭다운을 깨는 두 사례, 그리고 pnpm v11이 만든 공급망 게이트 함정'
date: '2026-08-07'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## CSS는 위치 지정과 무관해 보이는 속성으로 함정을 만든다

부동산 매물 상세 페이지를 재설계하면서 CSS 함정 두 개를 연달아 만났다.

둘 다 `position`이나 `z-index`와 아무 상관없어 보이는 속성이 원인이었다.

첫 번째는 `overflow-x: hidden`이 `position: sticky`를 깨뜨리는 문제다.

우측 사이드바를 `lg:sticky lg:top-20`으로 고정하려는데 스크롤을 따라오지 않았다.

원인은 가로 스크롤 방지용으로 넣었던 `overflow-x-hidden`이었다.

`overflow: hidden`이나 `auto`, `scroll`은 요소를 스크롤 컨테이너로 만든다.

`position: sticky`는 가장 가까운 스크롤 가능한 조상을 기준으로 동작하므로, 조상이 스크롤 컨테이너가 되면 sticky의 기준이 페이지가 아니라 그 조상으로 바뀐다.

해결은 `overflow-x: clip`이다.

`clip`은 가로 스크롤을 방지하되 스크롤 컨테이너를 생성하지 않아 sticky가 정상 작동한다.

두 번째는 `backdrop-filter`가 새 stacking context를 만들어 드롭다운을 가두는 문제다.

검색 필터의 콤보박스 드롭다운이 아래 카드 리스트에 가려졌다.

`z-50`에서 `z-[100]`로 올려도 해결되지 않았다.

원인은 글래스 모피즘 효과를 위해 쓴 `backdrop-filter: blur(...)`였다.

`backdrop-filter`는 새 stacking context를 생성한다.

자식의 z-index는 부모 컨텍스트 안에서만 의미를 가지므로, 드롭다운 z-index를 아무리 높여도 부모를 벗어나 형제 요소 위로 올라갈 수 없다.

해결은 드롭다운 z-index를 올리는 게 아니라 부모 컨테이너 자체의 stacking context 레벨을 올리는 것이다.

```tsx
<div className="relative z-10">
  <SearchFilter onChange={setFilters} initial={filters} />
</div>
```

stacking context를 만드는 속성은 `backdrop-filter` 외에도 `transform`, `filter`, `opacity`가 1 미만인 경우, `will-change`, `position: fixed/sticky`에 z-index가 있는 경우가 있다.

진단 순서를 하나 외워뒀다.

z-index를 올렸는데도 요소가 가려진다면 1순위 원인은 stacking context다.

조상 중 해당 속성이 있는지 확인하면 된다.

## pnpm v11 minimumReleaseAge가 만드는 공급망 게이트

같은 날 pi coding agent 생태계를 최신으로 업데이트하면서 pnpm v11의 공급망 보호 메커니즘이 만든 함정을 네 개나 만났다.

pnpm v11은 기본적으로 24시간 미만 릴리스된 패키지를 설치하지 않는다.

공급망 공격을 막는 좋은 기능이지만 생태계 업데이트에는 쥐약이 된다.

첫 번째 함정은 `@latest` 태그의 silent defer다.

`pnpm add -g @earendil-works/pi-coding-agent@latest`를 실행해도 24시간 미만 릴리스면 에러 없이 이전 버전을 설치한다.

```
+ @earendil-works/pi-coding-agent 0.84.0 (0.84.1 is available)
# Exit: 0
```

Exit 코드가 0이라 설치가 된 줄 알았는데 실제로는 구버전이 깔려 있었다.

우회는 명시적 버전 핀(`@0.84.1`)뿐이다.

두 번째 함정은 `pi update --extensions`가 workspace 설정을 무시하는 문제다.

`pi update --extensions`는 내부적으로 `pnpm install --ignore-workspace`를 호출한다.

이 플래그가 `pnpm-workspace.yaml`에 설정한 `minimumReleaseAge: 0`을 무시하고 pnpm v11 기본값인 1440분을 적용해서 신규 확장 패키지가 설치되지 않았다.

해결은 CLI 레벨에서 게이트를 비활성화하는 것이다.

```bash
pnpm --ignore-workspace install pi-subagents@0.42.1 pi-mcp-adapter@2.21.0 \
  --prefix ~/.pi/agent/npm \
  --config.minimumReleaseAge=0
```

`--config.minimumReleaseAge=0`이 CLI 레벨에서 게이트를 끄는 유일한 확실한 방법이다.

세 번째와 네 번째 함정은 catalog 블록 관련이다.

`pnpm update --latest -r`을 실행하면 catalog 블록에 있는 패키지의 package.json 리터럴 범위가 `catalog:` 참조로 변환될 수 있다.

그리고 catalog 블록 업데이트 후 `pnpm install`을 하면 workspace 멤버의 peerDependency가 lockfile에 이전 버전으로 고정되는 문제가 있었다.

`pnpm why`는 "Found 1 version"을 반환하지만 `.pnpm/` 디렉토리에는 이전 버전과 신규 버전이 공존한다.

결국 TS2345 타입 불일치 에러가 발생했다.

해결은 node_modules와 lockfile을 지우고 다시 설치하는 것이다.

```bash
rm -rf node_modules pnpm-lock.yaml && CI=true pnpm install
```

`pnpm why`의 "Found 1 version"이 반드시 단일 해결을 보장하지 않는다.

lockfile이 stale할 수 있다는 걸 이번에 처음 알았다.

## SPA 페이지는 콘텐츠 추출이 거의 불가능하다

Higgsfield AI의 "Hell Grind" 페이지에서 콘텐츠를 추출하려 했다.

90분짜리 AI 제작 영화의 프롬프트와 에셋이 공개된 페이지다.

jina reader, headless browser(Playwright), raw HTML fetch를 전부 시도했지만 다 실패했다.

SPA라서 JavaScript가 실행되기 전에는 콘텐츠가 비어 있다.

headless browser로도 React hydration 타이밍과 lazy load를 기다리기가 어려웠다.

안정적으로 가져올 수 있는 건 SSR 메타데이터(og: 태그)뿐이었다.

페이지 제목, 설명, 이미지 정도.

공식 API가 있으면 API를 쓰고, 없으면 브라우저에서 수동으로 복사하는 수밖에 없다는 결론이다.

## 마무리

하루에 CSS 컨테이너 함정, 공급망 게이트, SPA 추출 한계까지 세 영역에서 함정을 만났다.

공통점은 "동작할 것 같은데 동작하지 않는" 숨겨진 맥락이 원인이었다는 점이다.

CSS 속성은 스펙을 읽어야 컨테이너 생성 여부를 알 수 있고 패키지 매니저는 Exit 코드 0이 성공을 보장하지 않는다.

다음에는 overflow 속성을 쓸 때마다 스크롤 컨테이너 생성 여부를 먼저 떠올려야겠다.
