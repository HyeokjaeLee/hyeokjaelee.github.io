---
emoji: "📢"
title: "Live Sass Compiler 사용하기"
description: "편리한 Sass 사용을 위한 익스텐션"
date: "2021-09-01"
tag: [Frontend]
---

## Sass(SCSS)

<img src="https://user-images.githubusercontent.com/71566740/133248000-62950c37-88dd-491e-8d1f-f0e8c66241e0.png" class="img large"/>

Sass는 CSS로 컴파일 가능한 스크립트 언어입니다.

CSS의 확장판 정도라고 생각하시면 될 것 같습니다.

<br>저는 CSS와 호환성을 갖춘 SCSS를 선호하며 어느 정도 스타일링할 코드가 많아지면 CSS 대신 SCSS를 이용합니다.

Sass는 편리한 점이 정말 많은데 대표적으로 함수나 변수를 선언해서 사용할 수 있어서 수정이 편하고 코드의 가독성이 좋다는 게 가장 큰 이유 같습니다.

<br>보통 node.js 환경에서 프로젝트를 진행한다면 Sass를 지원해주는 모듈들이 많아 Sass파일 자체를 import 해서 사용이 가능하지만 그게 아니라면 컴파일한 CSS를 이용합니다.

오늘은 이런 non-node.js환경에서 Sass의 더욱 편리한 사용을 도와주는 2가지 VSCODE 익스텐션과 기본 설정을 소개해보려 합니다.

### VSCODE 익스텐션 설치

- #### [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

  Sass를 CSS로 실시간 컴파일해주는 익스텐션

- #### [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  Sass의 highlighting, autocomplete & Formatter 지원해주는 익스텐션

### Live Sass Compiler 설정

Sass 익스텐션의 경우엔 별다른 설정이 필요 없지만 Live Sass Compiler는 나에게 맞는 형태로 설정이 필요합니다.
설정을 위해 VSCODE의 `settings.json` 파일에 다음 내용을 추가해줍니다.

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css"
    },
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../css"
    }
  ]
}
```

- min.css는 css의 공백과 줄 바꿈을 삭제해 용량을 줄인 파일로 전송량을 줄일 수 있습니다.

저는 어차피 작성은 Sass로 하고 컴파일된 CSS를 직접 수정할 필요가 없으니 min.css파일만 있기 때문에 다음과 같은 설정으로 사용합니다.

```json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "~/../css"
    }
  ]
}
```

<br/>

<div class="img-txt-wrap">
    <div class="img-wrap">
      설정후 우측 하단에 Watch Sass를 클릭하시면 Sass파일의 수정을 감지해 실시간으로 CSS파일을 만들어줍니다.
      <img  width="600" src="https://user-images.githubusercontent.com/71566740/133251442-d957eeaf-b125-4419-87bf-0fd5aa3f0413.png"/>
      <br/>
      저는 다음과 같은 구조를 주로 사용하기 때문에 이렇게 설정했지만 다른 설정을 원하시면 `savePath`부분에 원하는 컴파일 위치를 작성해서 사용하시면 됩니다.
       <img  width="800" src="https://user-images.githubusercontent.com/71566740/133251746-ffd66e52-3d03-42cd-8bfd-0d90f861854b.png"/>
    </div>
</div>
