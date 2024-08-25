---
title: 'Install private packages with yarn berry'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a'
description: 'Spawn node-gyp ENOENT 에러 해결'
date: '2023-01-20'
tags: [issues]
---

## 증상

기존에 사용하던 배포환경이 패키지 인스톨에 너무 많은 시간을 사용하는 것 같아 Yarn berry를 도입하게 되었다.

공개된 패키지를 설치하는것에는 큰 문제가 없었지만 Github personal access token을 사용하는 비공개 패키지를 설치할 때 다음과 같은 문제가 발생했다.

```
➤ YN0027: @USER_NAME/PACKAGE_NAME can't be resolved to a satisfying range
➤ YN0035: The remote server failed to provide the requested resource
➤ YN0035:   Response Code: 404 (Not Found)
➤ YN0035:   Request Method: GET
➤ YN0035:   Request URL: https://registry.yarnpkg.com/@USER_NAME/PACKAGE_NAME%2fPACKAGE_NAME

➤ Errors happened when preparing the environment required to run this command.
```

## 해결

yarn 1.x 버전을 사용하거나 npm을 사용해 패키지를 관리할때는 .npmrc 파일로 Package manager 설정들을 관리했었는데 yarn berry는. yarnrc 파일을 통해 설정을 관리한다.

현재 Github packages를 통해 패키지를 관리하고 있는데 공개 패키지라면 상관없지만 비공개 패키지는 yarn package에 등록되어 있지 않은데 위 오류를 보면 `https://registry.yarnpkg.com`에 요청을 보내고 있다.

.yarnrc 파일에서 해당 패키지에 대한 Github packages 요청 서버를 추가해 주고 비공개 패키지이므로 인증을 위한 Github personal access token을 추가해 주면 해결된다.

```
npmScopes:
  PACKAGE_NAME:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAlwaysAuth: true
    npmAuthToken: "${GITHUB_PERSONAL_ACCESS_TOKEN}"
```
