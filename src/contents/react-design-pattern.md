---
title: 'React 기반 제품을 개발할 때 고려해 볼 만한 디자인 패턴'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b'
description: 'React 제품 개발, 유용한 몇 가지 디자인 패턴'
date: '2022-10-29'
tags: [frontend]
---

Frontend 제품 개발 초창기에 디자인 패턴 적용과 관련해서 사내 엔지니어링 데이에 발표하려고 정리해놓은 내용들에 대해 작성한 글이다.

## 디자인 패턴이 뭔데?

> 디자인 패턴(Design pattern)은 건축학 및 컴퓨터 과학에서 사용되는 용어로, 설계 문제에 대한 해답을 문서화하기 위해 고안된 형식 방법이다.
>
> 이 방식은 건축가 크리스토퍼 알렉산더가 건축학 영역에서 고안한 것을 그 시초로 하며, 이후 컴퓨터 과학 등 여러 다른 분야에도 도입되었다.

- 많은 개발자들이 그동안 소프트웨어를 개발하면서 축적한 개발 노하우에 이름을 붙이고 재사용하기 좋은 형태로 특정 규약을 만들어 정리한 것
- 소프트웨어를 설계하면서 경험하는 공통적인 문제들에 대한 표준적인 설루션과 작명법을 제안
- 프로그램 코드에 바로 적용할 수 있는 형태는 아니지만 구조적인 문제를 해결하는 방법

한마디로 요약하자면 **선배 개발자들의 족보**로 이해했다.

## React를 이용한 개발에서 유용한 몇 가지 디자인 패턴

### MVC

Frontend 개발자라면 패턴에 대해 고민하거나 의식하고 사용하지 않아도 친숙한 패턴일 것이다.

의식하지 않고 개발한 웹도 Model은 특정 DB 혹은 서버에서 책임을 가지고 있을 테고 앱 제어를 위한 Controller는 HTML/JS, View는 HTML/CSS로 분리해서 작성했을 것이기 때문이다.

MVC 패턴은 이러한 구분을 더 엄격하게 따르도록 한다.

또한 가장 기본적인 패턴이기도 해서 다른 패턴의 베이스가 되는 경우가 많다.

> ![mvc](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/852b8e8d-4c28-4455-b80a-7ccaf9a4ee18)
> 소프트웨어를 Model - View - Controller 요소로 구분함

**역할**

- Model: 데이터 관리
- View: 인터페이스
- Controller: Model과 View를 연결, 이벤트 처리

### MVVM

View, ViewModel, Model이 각각 독립적이기 때문에 병력적으로 작업할 수 있고 ViewModel이 View와 Model의 어댑터로써 변경 사항을 쉽게 반영할 수 있다.

> ![mvvm](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/3ed6ea82-eae0-4595-9292-db24fbefc7ec)
> MVC 패턴에서 Controller를 제외하고 VIewModel을 추가됨

**역할**

- Model: 데이터 관리
- View: 인터페이스
- ViewModel: View를 표현하기 위한 데이터 핸들링

### Flux

기존 MVC 패턴으로 개발한 앱의 덩치가 커지면서 Model과 View가 늘어남에 따라 데이터 흐름의 복잡도가 늘어났을 때 개발자가 예상하지 못하는 버그를 방지하기 위해 2014년에 Facebook에서 고안한 패턴이다.

> ![flux](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/dd2ed5bc-5395-4b8a-a59b-1bd95dc40a7f)
> MVC 패턴의 양방향 데이터 바인딩을 단방향으로 대체함

**역할**

- Action: 이벤트 발생 시 이벤트 정보를 Dispatcher로 전달
- Dispatcher: Action을 파악 후 미리 작성해 둔 명령들을 수행
- Store: 데이터 핸들링
- View: 인터페이스, 기존 View의 성격을 가지고 있는 동시에 Controller-View로써 최상위 View에서 Store의 데이터를 가져와 인터페이스에 내려주는 역할을 하기도 함

### Presentational and Container Component

과거 Hook 개념이 없던 환경에서 리액트의 로직과 View를 분리하기 위한 패턴이다.

> 이미 Hook이라는 개념이 있는 현재, 로직과 인터페이스를 위한 코드를 분리하기 위한 구조를 위해 참고했다.

> ![pcc](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/6901ba00-9c57-462e-a74d-b396de46f605)
> 앱을 Container Component와 Presentational Component로 나누어 개발한다.

**역할**

- Container Component: 로직
- Presentational Component: 인터페이스

### Atomic

앱의 가장 작은 컴포넌트 단위를 Atom으로 설정하고, Atom을 기반으로 상위 컴포넌트를 만들어 재사용을 최대화하는 패턴이다.

개발에만 적용되는 개념이 아니기 때문에 해당 패턴을 적용하기 위해서는 **디자이너와의 충분한 소통**이 중요하다.

대충 설명을 봐도 위에서 언급한 다른 패턴과는 살짝 성격이 다르다.

위에서 언급한 패턴들은 대부분 로직과 컴포넌트를 어떤 기준으로 분리하고 운용하는지에 대한 패턴이라면 Atomic 디자인 패턴은 그것보단 인터페이스와 재사용성에 중점을 둔 패턴이라는 생각이다.

개발을 진행할 때 백엔드 로직에 의존하지 않고 개발이 가능하지만 컴포넌트가 분리되어 있기 때문에 컨테이너 컴포넌트의 사이즈를 경정할 수 없을 경우, 미디어 쿼리를 사용하기 까다롭다.

> ![atomic](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b82b158f-c4b1-4147-83ff-0f79b50645cb)
> 여러가지 컴포넌트 단위를 조합해서 앱을 완성한다.

**역할**

- Atoms: 디자인과 기능의 최소 단위
  > Label, Text, Container, Button, Icon
- Molecules: Atom을 묶어 관리하는 컴포넌트
  > Input Form, Navigation, Card
- Organisms: Molecules을 묶어 관리하는 컴포넌트
  > CardGird, LabeledInputForm, NavigationSidebar
- Templates: Atoms, Molecules, Organisms을 배치하는데 중점을 둔 컴포넌트
- Pages: Templates을 배치하여 웹 애플리케이션 페이지 하나에 대응하는 컴포넌트

## 디자인 패턴, 중요한 건 알겠는데...

![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/93a45880-52dd-4aff-ad4e-9f1e47f5fe4b)

### 디자인 패턴 중요한 건 알겠는데 왜 써야 하지?

실제로 내가 학교에서 '고급 소프트웨어 설계' 과목을 수강하면서 했던 생각이다.

- 사실 디자인 패턴을 적용해야 한다는 내용의 글과 이론들은 너무 많지만 실제로 경험해 보는 것만큼 크게 실감할 수 있는 방법은 없는 것 같다.
- 여러 가지 프로젝트를 진행하다 보면 구성원이 늘고 소프트웨어의 덩치가 조금씩 커질 때마다 덩달아 늘어나는 커뮤니케이션 비용과 반비례해서 낮아지는 유지보수 용이성에 대해 고민하게 된다.
- 특히 1회성으로 끝나는 프로젝트가 아니라 기대 수명을 길게 잡은 소프트웨어를 개발하게 되면 더욱 유지보수 용이성을 신경 쓰지 않을 수 없다.
- 디자인 패턴은 이런 고민들에 대한 가이드라인이 되어줄 수 있다.

### 우린 그런 거 없어도 잘 개발해 왔다!

이런 생각이 드는 데는 여러 가지 이유가 있을 수 있겠지만 아래 내용 중 해당사항이 있는지 생각해 볼 필요가 있다.

- 이미 이전의 누군가의 고민이 녹아있는 프로젝트에 참여하고 있는 것이 아닌지
  > 이 경우라면 제품 관점에서는 큰 문제가 없을 수 있지만 내가 참여하고 있는 프로젝트가 어떤 패턴을 가지고 개발되고 있는지를 안다는 것은 구성원들의 프로젝트 이해도를 높이는데 도움이 된다.
- 협업에 대한 고민이 필요 없을 만큼 구성원의 수가 적은 것은 아닌지
  > 지금은 그럴지 모르지만 나중에 이미 많은 코드가 쌓인 후 구성원이 늘어나게 된다면 구조개선이 필요한 시점이 온다.
- 미리 기반공사가 잘된 프로젝트는 이후 구성원이 늘어났을 때 혼란을 줄일 수 있다.
  > 물론 지금의 이런 고민이 정답 일리도 없고 이후에 능력 있는 개발자분들이 합류했을 때 더 좋은 구조를 제시할 수 도 있지만 설계도 없는 건물을 리모델링하는 건 힘들지 않을까..
- 소프트웨어 덩치가 이런 고민이 필요 없을 만큼 작은 것은 아닌지
  > 성장하는 회사의 소프트웨어 크기는 결국 커지기 마련이다.
  > 위 내용과 마찬가지로 미리미리 준비해 놓자.

### 모든 상황에서 디자인 패턴을 그대로 따르는 것은 정답이 아닐 수 있다.

물론 디자인 패턴이 훌륭한 참고서는 될 수 있다.

개발이 필요한 수천수만 가지 제품에서 이러한 디자인 패턴이 몇십 가지가 된다고 해서 이 모든 제품에 대응할 수 있을 거라 생각하지 않는가 때문에 나는 이것이 답안지라고 생각하지는 않는다.

#### 디자인 패턴을 엄격하게 따르기 위해서 비효율을 감수해야 하는가?

디자인 패턴을 엄격하게 따르는 것이 효율 적인 경우도 있겠지만 각자 상황에 맞게 디자인 패턴이라는 레퍼런스를 가지고 변형한 제품에 맞는 구조를 고민해 볼 필요가 있다고 생각한다.

> **참고 자료**
>
> - [wiki - Design pattern](https://ko.wikipedia.org/wiki/%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)
> - [tecoble - presentational and container 패턴이란 무엇인가](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)
> - [wiki - 어댑터 패턴](https://ko.wikipedia.org/wiki/%EC%96%B4%EB%8C%91%ED%84%B0_%ED%8C%A8%ED%84%B4)
> - [medium - Web: React Flux 패턴](https://medium.com/hcleedev/web-react-flux-%ED%8C%A8%ED%84%B4-88d6caa13b5b)
> - [Junhyunny's Devlogs - MVC(Model, View, Controller) Pattern](https://junhyunny.github.io/information/design-pattern/mvc-pattern/)
> - [branch - 아토믹(Atomic) 컴포넌트 디자인 개발 패턴](https://brunch.co.kr/@skykamja24/580)
> - [toast ui - 리액트 애플리케이션 구조 - 아토믹 디자인](https://ui.toast.com/weekly-pick/ko_20200213)
> - [kakao entertainment fe 기술 블로그 - 아토믹 디자인을 활용한 디자인 시스템 도입기](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
> - [버미노트 - [디자인패턴] MVC, MVP, MVVM 비교](https://beomy.tistory.com/43)
