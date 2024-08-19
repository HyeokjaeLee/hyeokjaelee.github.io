---
title: '리액트 컴포넌트 스타일링 정리'
titleImage: '../images/contents/components-styling/react.png'
description: '리액트 기반 제품을 개발하면서 고민했던 컴포넌트 스타일링 방법에 대한 고민'
date: '2022-03-12'
tags: [frontend]
---

이번에 사내 제품 코드의 스타일링 방식이 혼재되어있는 상황에서 한가지로 통일하려 하면서 찾아본 여러가지 스타일링 방식에 대한 생각과 내용을 정리해봤다.

## 발단

제품에 대한 온보딩을 진행하면서 기존에 작성된 코드들을 살펴보게 되었고 당장 큰 범위의 기능 개발이 없었기 때문에 시간적 여유가 있다고 생각해 제품 코드에 대한 이해도를 높일겸 리팩토링을 진행하려 했다.

내가 가장 처음 느꼈던 부분은 정해진 방식 없이 기존 코드가 여러 개발자 분들의 손을 거치다보니 여러 라이브러리와 스타일링 방식이 혼재되어있다는 부분이었다.

우선 [Chakra-ui](https://chakra-ui.com/)를 기반으로 주로 CSS-in-JS 방식의 emotion과 styled-components가 혼재되어있었고 중간중간 불필요한 inline-style 코드들이 보였다.

CSS-in-JS 방식 자체는 요즘 트렌드이기도 하고 제품이 성능 자체가 중요한것은 아니라고 판단되었기 때문에 그리 큰 문제는 아니었지만 이런식의 스타일링 컨벤션이 없는 상태로 제품 개발이 계속 진행되다 보면 결국 기술부채가 쌓이고 언젠가 이를 상환하기 위해 더 큰 리소스를 투입해야 된다고 생각했기 때문에 아직 제품 코드가 쌓이기 전에 이를 정리하고 가고싶다는 생각이었다.

## 컴포넌트 스타일링 스택 후보

다음은 내가 고민했던 기술 스택들에 대한 장단점과 나의 의견을 정리해본것이다.

우선 다음과 같은 이유에서 inline-style로 작성된 코드들은 적용범위가 적고 우선순위가 높아 편리하지만 렌더링 할때마다 객체 주소가 바뀌고 이를 리액트는 가상 DOM 변화라고 인식하기 때문에 불필요한 리렌더를 발생시켜 제외하고 꼭 필요한 경우가 아니라면 최대한 걷어내기로 했다.

물론 css 객체를 메모제이션 하면 이부분은 일정 부분 해소 가능하지만 굳이 CSS-in-JS 방식에 좋은 대안들이 많은데 이방법을 사용하는건 비효율 적이라는 생각이다.

### CSS-in-JS

#### 장점

- 필요한 컴포넌트 페이지의 스타일 요소만 로딩함
- 파일 관리가 편함 / 컴포넌트간 완전한 분리가 보장 / 모듈성
- 스타일링 우선순위에 대한 고민이 비교적 적음
- JS 환경을 최대한 활용함
- **자바스크립트와 CSS 사이의 상수와 함수를 공유함** (이부분이 가장 포기하기 힘든 부분)
- 요즘 많은 개발자들이 선호하는 방식

#### 단점

- CSS-in-CSS 방식에 비해 성능이 떨어짐

  [Tomas Pustelnik / Real-world CSS vs. CSS-in-JS performance comparison](https://pustelto.com/blog/css-vs-css-in-js-perf/)

  > 요약하자면 앱의 속도 개선을 위해서는 JS 절대량을 줄여라

- 스크립트 파일의 크기가 커지면 가독성을 해침 (특히 포메터를 사용할 경우)

#### 관련 스택

- Emotion
- Styled-Components

만약 위 두 기술스택중 선택한다면 Emotion을 선택할것 같다.

잘 정리된 포스트가 있는데 가서 읽어 보는것도 좋을것 같다.
[bepyan.log / styled-components 과 emotion, 도대체 차이가 뭔가?](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80)

### CSS-in-CSS

#### 장점

- 가장 일반적이고 기초적인 스타일링 방법이기 때문에 Front-end 추후 합류할 다른 개발자들도 별도의 학습이 필요없다.
  > 물론 CSS에서 제공하는 모든 기능을 잘 쓰냐는 다른 문제
- CSS-in-JS 방식보다 일반적인 상황에서 빠름
- 추가적인 의존성 없이 사용 가능
- CSS-in-JS 방식보다 재사용성이 조금더 낫다는 생각
- Stylesheet 파일 분리로 인해 준수한 가독성

#### 단점

- 변동적인 값에 대한 핸들링이 불편함
- 디테일한 컨벤션 없이는 규모가 커질수록 협업이 힘들 수 있음
  > 클래스 속성 중복등
- 파일 구조에 대한 고민이 필요함
- 우선순위에 대한 많은 고민이 필요함

#### 관련 스택

- CSS-Modules
- CSS
- SASS(SCSS)

## 최종 선택

**결론적으로 나는 SCSS 형식을 사용해 CSS-Modules 방식으로 리팩토링을 진행하기로 했다.**

여러가지 이유가 있겠지만 내가 가장 끌렸던 부분은 성능적인 부분이다.

> 참고로 나는 JS 내장함수들도 브라우저별 성능을 비교해보고 쓸정도로 최적화에 관심이 많다.

사실 개발하고 있는 제품들이 그렇게 성능이 중요한 제품도 아니라 큰 문제는 없지만 나중에는 어떤기능을 지원하게 될지 모르는 상황에서 이런 성능적 이점을 챙기지 않을 이유가 없었다.

기존 코드가 대부분 CSS-in-JS 방식으로 작성되었기 때문에 할일이 더 많아지긴 했지만 그리고 내 기준으로 CSS-in-CSS 방식이 가독성이 좀더 좋다고 느꼈다.

### SCSS를 사용한 이유

기본 CSS 대신 SCSS를 사용한 이유는 여러기지 편의성 함수들과 스타일시트간 import의 성능 차이 때문이다

> 기본적으로 CSS의 @import는 병렬적으로 처리되지 않는다.

관련된 내용들은 [해당 포스트](https://yceffort.kr/2021/03/improve-css-performance)에 잘 정리되어있다.

최근에 SASS에서 지원하는 여러 가지 기능들이 CSS에서도 지원되기 시작했지만 아직 실험적인 기능들이 많고 브라우저별 호환성도 천차만별이라 SASS를 선택했다.

### CSS-Modules을 사용한 이유

CSS-Modules을 사용한 이유는 CSS-in-JS처럼 컴포넌트 간 분리를 원했으며 클래스명 작명 컨벤션을 만드는 것보다 컴포넌트 단위로 스타일시트가 종속되는 게 구조 파악에 용이하고 생각했기 때문이다.

조금 덧붙이자면 Next.js는 [9.3 ver](https://nextjs.org/blog/next-9-3#built-in-sass-css-module-support-for-component-level-styles) 이후 CSS-Modules 방식을 권장했다.

B2C 페이지에 Next.js 도입을 고려하는 상황에서 CSS-Modules을 사용하는 방향으로 컨벤션을 확립한다면 추후 발생 가능한 혼란을 최소화할 수 있다고 생각했다.

내 개인적인 선호가 영향을 주지 않았다면 거짓말이겠지만 적어도 레퍼런스와 고민 없이 선택한 것이 아니라고 말하고 싶다.

추가적으로 이러한 방법을 적용하고 이후 개발 패턴을 적용했을 때 효율적인 파일 구조가 어떤 것 일지 고민해봐야 할 것 같다.