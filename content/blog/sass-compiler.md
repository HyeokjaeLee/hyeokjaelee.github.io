---
title: "Live Sass Compiler 사용하기"
titleImage: "https://user-images.githubusercontent.com/71566740/133248000-62950c37-88dd-491e-8d1f-f0e8c66241e0.png"
description: "편리한 Sass 사용을 위한 익스텐션"
date: "2021-09-01"
tags: [Frontend]
---

나는 프론트엔드 작업을 할때 CSS보다 Sass(SCSS)를 선호한다.

그중에서도 CSS와 호환성을 갖춘 SCSS를 선호하며 어느 정도 스타일링할 코드가 많아지면 CSS를 사용하다가도 SCSS로 코드를 옮겨서 작업한다.

Sass는 편리한 점이 정말 많은데 대표적으로 함수나 변수를 선언해서 사용할 수 있어서 수정이 편하고 코드의 가독성이 좋다는 게 가장 큰 이유 같다.

보통 node.js 환경에서 프로젝트를 진행한다면 Sass를 지원해주는 모듈들이 많아 Sass파일 자체를 import해서 사용이 가능하지만 그게 아닌경우에는 작성한 Sass를 컴파일한 CSS를 import해서 이용한다.

오늘은 이런 non-node.js환경에서 Sass의 더욱 편리한 사용을 도와주는 2가지 VSCODE 익스텐션과 기본 설정을 소개해보려 한다.

## Sass(SCSS)

Sass는 CSS로 컴파일 가능한 스크립트 언어이다.

CSS의 확장판 정도라고 생각하면 될 것 같다.

### <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg> VSCODE 익스텐션 설치

- **[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass):** Sass를 CSS로 실시간 컴파일해주는 익스텐션

- **[Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented):** Sass의 highlighting, autocomplete & Formatter 지원해주는 익스텐션

### <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sass</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg>Live Sass Compiler 설정

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

<br>나는 어차피 작성은 Sass로 하고 컴파일된 CSS를 직접 수정할 필요가 없다.

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

<br/>

<div class="img-txt-wrap">
    <div class="img-wrap">
      설정후 우측 하단에 Watch Sass를 클릭하시면 Sass파일의 수정을 감지해 실시간으로 CSS파일을 만들어준다.
      <img  width="600" src="https://user-images.githubusercontent.com/71566740/133251442-d957eeaf-b125-4419-87bf-0fd5aa3f0413.png"/>
      <br/>
      나는 다음과 같은 구조를 주로 사용하기 때문에 이렇게 설정했지만 다른 설정을 원하시면 `savePath`부분에 원하는 컴파일 위치를 작성해서 사용하면 된다.
       <img  width="800" src="https://user-images.githubusercontent.com/71566740/133251746-ffd66e52-3d03-42cd-8bfd-0d90f861854b.png"/>
    </div>
</div>
