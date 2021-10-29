---
emoji: "📢"
title: "NestJS 웹서버 구축하기"
description: "Typescript를 이용한 NestJS 코드 작성"
date: "2021-10-29"
tag: [Javascript, Data]
---

## NestJS를 사용하는 이유

<img src="https://user-images.githubusercontent.com/71566740/139354021-96e05704-52c7-466f-857a-4046a2a5f916.png" class="img large"/>

NestJS는 Express와 함께 Node.js의 유명한 웹 어플리케이션 프레임워크입니다.

Express와 같은 용도로 사용되지만 사용해보면 둘은 다른 점이 많습니다.

### 📏 코드의 통일성

Express에 비해 NestJS는 개발 구조에 대한 자유도 낮습니다.

자유도가 높을 수록 좋은것이 아닌가 하고 생각하실수 있습니다.

하지만 자유도가 높다는 말은 즉 통일성이 부족하다는 말도 됩니다.

<br>코드의 규모가 커지고 여러명의 사람들과 협업을 하다보면 이런 자유도가 오히려 독이 되는 경우가 많습니다.

저 역시 프로젝트를 위해 다른 사람들의 Express 코드들을 찾아볼때 개발자들마다 다른 코드 구조때문에 특정 역학을 하는 코드를 찾는데 애먹는 경우가 많습니다.

<br>NestJS는 자유도를 낮추는 대신 이런 문제점들을 개선했다고 볼수 있습니다.

정의된 각 클래스 마다 역할이 있고 제한된 NestJS의 구조안에서 개발을 진행하게 됩니다.

하지만 이런 제한된 구조가 코드의 통일성을 높여줍니다.

### ⚙️ Module class

NestJS는 관련있는 기능들 등을 한 module class에 담아 캡슐화합니다.

각 module들은 서로 import 가능하며 이는 코드간 의존성을 낮춰줍니다.

즉 확장성, 유지보수성, 테스트 가능성등이 향상됩니다.

### 🏷️ Typescript

NestJS는 기본적으로 Typescript를 지원하며 Typescript 사용을 권장합니다.

Express에서 타입스크립트를 사용하려면 직접 여러가지 설정을 해주어야하는 번거로움이 있지만 NestJS는 아무런 설정없이 바로 사용이 가능합니다.

<br>저는 평소 Express 코드를 작성할때도 Typescript를 사용하는데 이는 컴파일단계에서 오류를 잡아주어 어플리케이션의 예상치 못한 문제들을 미리 방지해줍니다.

NestJS는 이러한 Typescript의 장점을 기본적으로 가지고 있다고 볼 수 있습니다.

### 🧪 간편한 테스트

NestJS의 구조를 보면 spec.ts 파일들을 볼 수 있는데 이는 테스트를 위한 파일입니다.

기본적으로 NestJS가 간편한 Unit test를 지원합니다.

저도 테스트의 중요성은 알고는 있지만 실제로 잘 하지 않기때문에 더이상 뭐라 말할수는 없을것 같습니다...

<br>**그외에도 여러가지 NestJS의 장점들이 있지만 자세한 내용은 [NestJS 공식 문서](https://nestjs.com/)를 확인해보시는걸 추천드립니다.**

## 새 프로젝트 생성

NestJS 프로젝트 생성방법은 여러가지가 있지만 이 글에서는 CLI를 통한 방법을 기준으로 설명하겠습니다.

### 전역으로 NestJS CLI 설치

```bash
$ npm i -g @nestjs/cli
```

### CLI를 통해 새 프로젝트 생성

```bash
$ nest new <프로젝트명>
```

## 기본 구조

<div class="img-txt-wrap">
  <div class="img-wrap">
    <img width="400" src="https://user-images.githubusercontent.com/71566740/139356716-cf4718d2-30e0-428f-a47b-efc9f37ebf3f.png"/>
  </div>
</div>

생성된 프로젝트의 src 구조는 위와 같습니다.

- **app.controller.spc.ts:** 유닛 테스트를 위한 파일
- **app.controller.ts:** 기본 Controller
- **app.module.ts:** root 모듈을 정의
- **app.service.ts:** 관련있는 기능들을 클래스에 분리해서 작성하고 사용 시 controller에 import해서 사용
- **main.ts:** NestFactory instance를 생성하는 엔트리 파일

## 생성된 프로젝트 실행

main.ts를 확인해보면 알수 있듯 app.module.ts를 import해서 create()를 통해 AppModule을 생성하고 app이라는 변수에 담아 3000번 port에 bootstrap하는걸 확인 할 수 있습니다.

```bash
$ npm run start
```

위 명령으로 실행이 가능하며 `http://localhost:3000/`로 이동해 `Hello World!`가 표시됨을 알 수 있습니다.

## 예시 코드 작성

위 Hello World!를 return 하는 코드는 app.service.ts에 있으며 이를 app.controller.ts에서 import하고 app.module.ts에 이런 내용들이 정의되어 있는것을 확인할수 있습니다.
