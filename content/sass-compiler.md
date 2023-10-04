---
title: 'Live Sass Compiler 사용하기'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f3841a12-33f5-4994-b147-b38b5a3f5e23'
description: '편리한 Sass 사용을 위한 visual studio code 익스텐션'
date: '2021-09-01'
tags: [frontend]
---

나는 프론트엔드 작업을 할때 CSS보다 Sass(SCSS)를 선호한다.

그중에서도 CSS와 호환성을 갖춘 SCSS를 선호하며 어느 정도 스타일링할 코드가 많아지면 CSS를 사용하다가도 SCSS로 코드를 옮겨서 작업한다.

Sass는 편리한 점이 정말 많은데 대표적으로 함수나 변수를 선언해서 사용할 수 있어서 수정이 편하고 코드의 가독성이 좋다는 게 가장 큰 이유 같다.

보통 node.js 환경에서 프로젝트를 진행한다면 Sass를 지원해주는 모듈들이 많아 Sass파일 자체를 import해서 사용이 가능하지만 그게 아닌경우에는 작성한 Sass를 컴파일한 CSS를 import해서 이용한다.

오늘은 이런 non-node.js환경에서 Sass의 더욱 편리한 사용을 도와주는 2가지 VSCODE 익스텐션과 기본 설정을 소개해보려 한다.

## Sass(SCSS)

Sass는 CSS로 컴파일 가능한 스크립트 언어이다.

CSS의 확장판 정도라고 생각하면 될 것 같다.

### VSCODE 익스텐션 설치

- **[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass):** Sass를 CSS로 실시간 컴파일해주는 익스텐션

- **[Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented):** Sass의 highlighting, autocomplete & Formatter 지원해주는 익스텐션

### Live Sass Compiler 설정

Sass 익스텐션의 경우엔 별다른 설정이 필요 없지만 Live Sass Compiler는 나에게 맞는 형태로 설정이 필요하다.

설정을 위해 VSCODE의 `settings.json` 파일에 다음 내용을 추가해주자

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

> min.css는 css의 공백과 줄 바꿈을 삭제해 용량을 줄인 파일로 전송량을 줄일 수 있다.

나는 어차피 작성은 Sass로 하고 컴파일된 CSS를 직접 수정할 필요가 없다.

min.css파일만 필요하기 때문에 다음과 같은 설정으로 사용한다.

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

설정후 우측 하단에 Watch Sass를 클릭하시면 Sass파일의 수정을 감지해 실시간으로 CSS파일을 만들어준다.
![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/a9616878-13e1-4d9a-a56c-52820b54d377)
나는 다음과 같은 구조를 주로 사용하기 때문에 이렇게 설정했지만 다른 설정을 원하시면 `savePath`부분에 원하는 컴파일 위치를 작성해서 사용하면 된다.
![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f6ae0829-8fff-4537-9c5f-dff53fc22559)
