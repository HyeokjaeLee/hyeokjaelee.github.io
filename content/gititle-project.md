---
title: 'Gititle 프로젝트'
titleImage: 'https://user-images.githubusercontent.com/71566740/135963287-e5c18f62-da16-4dda-98cb-1dd4a7c2b720.png'
description: '좋은 커밋 메시지를 작성하기 위한 프로젝트'
date: '2021-09-14'
tags: [project, frontend]
---

나는 작성한 코드를 커밋할 때 AngularJS commit conventions에 추가로 내가 정한 몇 가지 규칙을 더해 규칙성 있게 작성하려고 노력한다.

AngularJS commit conventions의 Type만으로 설명이 부족한 부분을 Emoji를 추가해 보완하는데 이렇게 매번 Emoji와 알맞은 Type을 매칭 하는 과정이 번거롭다고 느꼈다.

이런 양식은 분명 이전 커밋 내용을 참고해야 할 때는 편리하지만 작성하는데 시간이 조금 더 들 수밖에 없는데 좀 더 편하게 작성할 수 있고 양식을 정확히 지킬 수 있는 가이드 앱이 있었으면 좋겠다고 생각해서 만들게 되었다.

## 도구 선정

새로운 Front-end 프레임워크를 사용해 보고 싶었고 node.js 없이 cdn 만으로 개발 후 별도 컴파일 없이 배포가 가능하다는 점에서 Vue.js를 선택하게 되었다.

### 고려사항

- 접근성 향상을 위해 PWA를 지원한다.
- 오프라인 환경에서도 작동이 가능해야 한다.
- 대부분 Git을 사용하는 환경은 PC 이므로 모바일 환경에 대한 UI는 고려하지 않는다.

### 프로젝트를 진행하면서 느낀 Vue.js

React 코드를 작성하다 보면 HTML 보다는 javascript에 힘이 실어진 느낌이고 특정 결과물을 만들어 낼 때도 구현 방식 자유도가 매우 높은 편인데 vue는 그보다 HTML의 역할이 크면서 개발 방향이 어느 정도 정형화되어있다는 느낌을 받았다.
![react-vue](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/116b4b96-f807-456f-b08e-62151aba89ea)
예를 들면 같은 태그를 반복하는 경우에 React는 Javascript의 map, forEach, for문등 여러 가지 반복문들을 이용할 수 있는 반면 Vue에서는 HTML 태그에 v-for을 이용해 태그를 반복한다.

> 보통 React를 통해 개발을 진행해 왔는데 Vue.js는 HTML 코드 활용이 신선했다.

특히 Node.js 환경 세팅 없이 cdn만으로 개발이 가능했다는 점과 별도의 build 없이 static 페이지로 배포가 가능하다는 점이 매우 편리했다.

Vue.js의 개발자 도구가 매우 편리하다고 하는데 아쉽게도 이번 프로젝트에서는 거의 사용해볼 만한 게 없었다.

## 프로젝트 진행

일단 해당 프로젝트를 위해선 커밋 메시지 컨벤션을 제대로 잡을 필요가 있다.

아무래도 개인이다 보니 혼자 관련 규칙들을 모두 정의하고 진행하긴 어려울 것 같아 여러 레퍼런스들을 참고했다.

- [AngularJS commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)
- [Angular Github](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
- [Gitmoji](https://gitmoji.dev/)
- [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)

내가 정리한 커밋 메시지 컨벤션은 [해당 포스트](/good-commit-message)에 작성해 두었다.

### 개발 과정에서 겪은 문제점

- PWA Builder를 이용해 PWA를 지원할 생각이었는데 Github Page에 올리면 정상작동하지 않았다.
  > Github page로 배포되고 있는 다른 PWA 프로젝트들을 참고하며 해결했다.
- 새로운 배포가 있어도 이전에 오프라인 사용을 위해 저장해뒀던 캐시가 지워지지 않아 수동으로 사용자가 캐시를 지워야 정상적으로 업데이트 내용이 반영되는 문제가 있었는다.
  > 버전 태그를 만들고 버전이 바뀌면 자동으로 캐시를 날려주는 방식으로 해결하였다.

## 프로젝트 결과물

딱히 Backend에서 데이터를 받아올 만한 프로젝트가 아니기 때문에 앱 자체에 보이고 싶은 값들을 담아 클라이언트 쪽에서 검색 기능을 구현했다.

> Commit Message 구성요소 검색

![gititle](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/8116a194-4deb-4c4b-a05d-4f657fe195d4)

대략적인 커밋 예시를 제공하고 각 커밋 메시지 영억을 클릭하면 해당 영역에 들어갈 수 있는 선택지를 제공하고 있으며 각 선택지들을 어떤 상황에 쓰이게 되는지 혹은 예시 내용을 보여줄 수 있는 UI를 제공하고 있다.

> Commit Message 구성요소 아이템에 대한 선택지를 제공

![gititle2](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/cb16eb52-5376-475d-9221-fee51e3af1d9)

추가적으로 복사한 커밋 메시지들은 history를 남기고 추후에 필요할때 복사할 수 있게 하였고 PWA 설치 UI가 브라우저 자체에서 지원하긴 하지만 Gititle이 설치되어있지 않으면 앱 내에

실제 프로젝트는 [해당 링크](https://hyeokjaelee.github.io/gititle/)에서 확인해 볼 수 있다.
