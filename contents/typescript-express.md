---
emoji: "📢"
title: "Typescript + Express 설정하기"
description: "Typescript를 이용한 Express 설정을 공유합니다."
date: "2021-08-12"
tag: [Backend, Typescript]
---

## Typescript를 사용하는 이유

저는 Node.js 사용할 때 Javascript보다는 Typescript를 선호합니다.
<br>여러 가지 이유가 있겠지만 Javascript는 보통 실행되는 프로그램을 보면서 오류를 잡거나 따로 디버깅을 하는데 Typescript는 정적 타입을 지원해서 컴파일 단계에서 오류를 찾기 쉬운 점이 가장 큰 것 같습니다.

데이터 타입이 중요한 서버를 구축할 때는 특히 더 유용하다고 느끼는데 오늘은 Node.js의 대표격인 서버 프레임워크 Express를 Typescript로 작성하기 위한 기본 설정을 다뤄보려 합니다.

이전에는 Typescript로 Express를 이용할 때는 코드는 Typescript로 작성하고 이후 해당 코드를 Javascript로 컴파일 후 실행하는 방법을 사용했는데 바로 이전 Toy Project를 진행하면서 `ts-node`와 `nodemon`을 이용해 훨씬 편한 개발 환경을 구축할 수 있게 되어 해당 방법으로 진행하겠습니다.

## 설정

### 전역 모듈 설치

```bash
$ npm install -g typescript nodemon ts-node
```

- 해당 모듈들은 다른 프로젝트에서 자주 사용해서 전역으로 설치했습니다.

### 프로젝트 생성 및 Typescript 적용

```bash
$ mkdir <프로젝트 이름>
$ cd <프로젝트 이름>
$ npm init
$ tsc --init
$ mkdir src
```

### 사용할 node.js 모듈 설치

```bash
$ npm i express
$ npm i --save-dev @types/express
```

### Typescript 컴파일 설정

이제 Typescript 컴파일 관련 설정들을 해주어야 합니다.
<br>처음 `tsc --init`으로 설정 파일이 생성되면 어려 값들이 주석 처리된 상태로 생성되는데 각 설정들의 자세한 내용은 구글링해보시면 자세하게 나옵니다.

저는 다음과 같이 설정했습니다.

```json
{
  "exclude": ["node_modules"],
  "include": ["src"],

  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### start 스크립트 추가

이전에 `tsc`를 사용할 때는 컴파일만 지원한다면 `ts-node`는 컴파일+실행까지 지원해 줍니다.
<br>추가로 `nodemon`은 파일의 변화를 감지하여 자동으로 결과물을 Refresh 해줍니다.

다음과 같이 해당 모듈들을 이용해 실행할 수 있는 스크립트를 추가해 줍니다.

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon --exec ts-node src/app.ts" //해당 스크립트 추가
  }
```

### app.ts 예시 코드

프로젝트 root 폴더 내 생성해둔 src 폴더 안에 app.ts 파일을 생성 후 다음과 같은 코드를 작성합니다.

```typescript
import express from "express";
const exp = express();
const port = 3000;
exp.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

exp.get("/", (req, res) => {
  const name = !req.query.name ? "World" : req.query.name;
  res.send(`Hello ${name}`);
});
```

`$ npm start`로 서버를 작동시키고 `http://localhost:3000/`로 접속하면 `Hello World`가 출력됩니다.
<br>만약 `http://localhost:3000/name=Nagle` 이런 식으로 쿼리 값을 주게 된다면 `Hello Nagle`이 출력됩니다.

## 마지막으로

저는 토이 프로젝트에 Typescript, Express, GraphQL을 이용하는 경우가 종종 있습니다.
<br> cli를 지원하지 않는 자주 사용하는 조합은 초기 설정을 마치고 Github에 올려놓고 필요할 때 clone 해서 일부 수정 후 사용하는 방법으로 이용하면 편리합니다.
