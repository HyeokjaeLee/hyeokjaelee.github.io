---
title: 'Typescript + Express 서버 구축하기'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/85477ff3-413d-4615-9976-ed0c0cbd9fdc'
description: 'Typescript를 이용한 Express 서버 구축'
date: '2021-08-12'
tags: [backend]
---

이전에는 typescript로 Express를 이용할 때는 코드는 typescript로 작성하고 이후 해당 코드를 javascript로 컴파일 후 실행하는 방법을 사용했는데 바로 이전 toy project를 진행하면서 ts-node와 nodemon을 이용해 보니 편리한 것 같아 정리해 보려 한다.

## 전역 패키지 설치

아래 패키지들은 다른 프로젝트에서도 자주 사용해서 전역으로 설치했다.

```
npm install -g typescript nodemon ts-node
```

- **typescript**: 정적 타입을 지원해서 javascript 보다 유지보수하기 좋다.
- **nodemon**: 개발환경에서 코드 변화를 감지해 필요할 경우 알아서 서버를 refresh 해 준다.
- **ts-node**: 원래 typescript로 작성한 코드는 javascript로 컴파일 후 실행이 가능하지만 ts-node를 사용하면 typescript로 작성한 코드를 독립적으로 실행 가능하게 해준다.

## 환경 설정

```
mkdir <프로젝트 이름>
cd <프로젝트 이름>
npm init
tsc --init
mkdir src
```

### typescript 설정

컴파일 설정 파일이 생성되면 여러 값들이 주석 처리된 상태로 생성되는데 각 설정들의 자세한 내용은 따로 설명하지 않겠다.

나는 다음과 같이 설정했다.

```json
{
  "exclude": ["node_modules"],
  "include": ["src"],
​
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

### express 설치

```
# npm 사용시
npm install express
npm install --save-dev @types/express

# yarn 사용시
yarn add express
yarn add @types/express -D
```

- **express**: node.js 웹 프레임워크
- **@types/express**: express 관련 타입들이 정의되어 있는 패키지

### 실행 스크립트 추가

package.json에 다음과 같은 스크립트를 추가한다.

```json
"scripts": {
    ...
    "start": "nodemon --exec ts-node src/app.ts"
  }
```

## 코드 작성

프로젝트의 src 디렉터리에 app.ts 파일을 생성 후 다음과 같은 코드를 작성해보자

```typescript
import express from 'express';
const exp = express();
const port = 3000;
exp.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

exp.get('/', (req, res) => {
  const name = !req.query.name ? 'World' : req.query.name;
  res.send(`Hello ${name}`);
});
```

아까 추가한 start 스크립트를 통해 실행할 수 있다.

```
npm start
```

로컬 호스트 3000에서 실행되므로 `http://localhost:3000`로 접속하면 `Hello World`가 출력된다.

위 코드는 name 쿼리에 따라 출력 결과를 수정할 수 있다.

만약 `http://localhost:3000/?name=홍길동` 이런 식으로 쿼리 값을 주게 된다면 `Hello 홍길동`이 출력된다.
