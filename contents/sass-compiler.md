---
emoji: "📢"
title: "Live Sass Compiler 사용하기"
description: "non-Node.js 환경에서 Sass를 사용해 봅시다."
date: "2021-09-01"
tag: [Frontend]
---

## <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill:#CC6699"><title>Sass</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/></svg> Sass(SCSS)

Sass는 CSS로 컴파일 가능한 스크립트 언어입니다.
<br>CSS의 확장판 정도라고 생각하시면 될것 같습니다.

저는 CSS와 호환성을 갖춘 SCSS를 선호하며 어느정도 스타일링할 코드가 많아지면 CSS 대신 SCSS를 이용합니다.
<br>Sass는 편리한 점이 정말 많은데 대표적으로 함수나 변수를 선언해서 사용할수 있어서 수정이 편하고 코드의 가독성이 좋다는게 가장 큰 이유같습니다.

보통 node.js 환경에서 프로젝트를 진행한다면 Sass를 지원해주는 모듈들이 많아 Sass파일 자체를 import해서 사용이 가능하지만 그게 아니라면 컴파일한 CSS를 이용합니다.

오늘은 이런 non-Node.js환경에서 Sass의 더욱 편리한 사용을 도와주는 2가지 VSCODE 익스텐션과 기본 설정을 공유해보려합니다.

## VSCODE 익스텐션 설치

- ### [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass): Sass를 CSS로 실시간 컴파일

- ### [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented): Sass의 highlighting, autocomplete & Formatter 지원

## Live Sass Compiler 설정

Sass 익스텐션의 경우엔 별다른 설정이 필요없지만 Live Sass Compiler는 나에게 맞는 형태로 설정이 필요합니다.
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

- min.css는 css의 공백과 줄바꿈을 삭제해 용량을 줄인 파일로 전송량을 줄일 수 있습니다.

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

<br><img src="https://user-images.githubusercontent.com/71566740/131642265-7958e08c-8d28-4165-a894-a2f18c8d5aa7.png">
<br>설정후 우측 하단에 Watch Sass를 클릭하시면 Sass파일의 수정을 감지해 실시간으로 CSS파일을 만들어줍니다.

<br><img src="https://user-images.githubusercontent.com/71566740/131639685-8b2e6642-87e7-4f51-8dec-d8507f81d8d1.png">
<br>저는 위와같은 구조를 주로 사용하기 때문에 이렇게 설정했지만 다른 설정을 원하시면 `savePath`부분에 원하는 컴파일 위치를 작성해서 사용하시면 됩니다.
