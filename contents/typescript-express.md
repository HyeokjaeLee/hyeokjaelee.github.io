---
emoji: "📢"
title: "Typescript + Express 설정하기"
description: "Typescript를 이용한 Express 설정을 공유합니다."
date: "2021-08-02"
tag: [Express, Typescript]
---

## Typescript를 사용하는 이유

저는 Node.js 사용할때 Javascript 보다는 Typescript를 선호합니다.
<br>여러가지 이유가 있겠지만 Javascript는 보통 실행되는 프로그램을 보면서 오류를 잡거나 따로 디버깅을 하는데 Typescript는 정적 타입을 지원해서 컴파일 단계에서 오류를 찾기 쉬운점이 가장 큰것같습니다.

데이터 타입이 중요한 서버를 구축할때는 특히 더 유용하다고 느끼는데 오늘은 Node.js의 대표격인 서버 프레임워크 Express를 Typescript로 작성하기 위한 기본 설정을 다뤄보려 합니다.

이전에는 Typescript로 Express를 이용할때는 코드는 Typescript로 작성하고 이후 해당 코드를 Javascript로 컴파일 후 실행하는 방법을 사용했는데 바로 이전 Toy Project를 진행하면서 `ts-node`와 `nodemon`을 이용해 훨씬 편한 개발환경을 구축할수 있게되어 해당 방법으로 진행하겠습니다.

## 설정

### 프로젝트 생성

```bash
$ mkdir <프로젝트 이름>
$ cd <프로젝트 이름>
$ npm init
```

### npm 모듈 설치

```bash
npm i express
npm i --save-dev ts-node nodemon @types/node @types/express
```

### Typescript 적용

```bash
$ tsc --init
```
