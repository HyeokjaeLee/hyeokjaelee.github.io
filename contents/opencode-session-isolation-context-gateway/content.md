---
title: 'OpenCode 세션 격리와 Context-Gateway 플러그인 설계'
description: 'QA 런타임을 opencode server 기반 세션으로 전환하고 lane 간 세션 공유를 금지. Context-Gateway를 플러그인 사이드카로 통합 설계.'
date: '2026-03-21'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

어제 서버 기반 세션 구조로 전환했다.

오늘은 그 구조 위에서 lane 간 세션 격리 규칙을 확정하고, Context-Gateway를 OpenCode 플러그인으로 통합하는 설계를 잡았다.

## 세션 격리 규칙

서버 기반 세션으로 전환하면서 세션을 planning 전용 1개와 실행 lane별로 분리했다.

그런데 lane 간에 세션을 공유하면 어떻게 되는지 확인이 필요했다.

결론은 공유하면 안 된다는 거다.

서로 다른 lane이 같은 세션을 쓰면 브라우저 상태가 꼬인다.

예를 들어 lane A가 로그인 페이지에서 입력 필드를 채우고 있는데, lane B가 같은 세션으로 다른 페이지 이동을 시도하면 lane A의 상태가 날아간다.

lane마다 독립적인 세션을 할당해서 서로 간섭하지 않도록 격리했다.

## Context-Gateway를 플러그인으로

Context-Gateway는 LLM 컨텍스트를 압축해서 전달하는 도구다.

컨텍스트 윈도우가 큰 요청을 저렴한 모델로 한 번 압축한 뒤 비싼 모델에 전달하면, 토큰 사용량을 크게 줄일 수 있다.

그동안은 Context-Gateway를 별도 프로세스로 띄워서 썼다.

별도 설치, 별도 인증, 별도 설정이 필요하니까 번거로웠다.

OpenCode 플러그인으로 통합하기로 했다.

### 사이드카 구조

Context-Gateway 바이너리를 플러그인에 사이드카 형태로 내장한다.

플러그인을 설치하면 게이트웨이가 자동으로 시작된다.

별도 설치나 인증이 필요 없다.

TypeScript와 Bun 런타임 기반이라 npm이나 pnpm이나 bun 어디서든 동작한다.

GitHub Releases로 플랫폼별 바이너리를 배포하고, postinstall 스크립트로 자동 설치된다.

macOS arm64/x64, Linux x64/arm64, Windows x64를 지원한다.

### SDK 기반 설정 조회

설정 파일을 직접 파싱하는 대신 OpenCode SDK를 통해 provider 설정을 조회한다.

provider 목록에서 API 키를 재사용하고, 모델 메타데이터에서 컨텍스트 윈도우 크기를 가져온다.

이 방식으로 압축용 LLM 선택과 모델별 최적 압축 임계값 계산을 한 흐름에서 처리한다.

사용자는 플러그인 설치 한 번이면 별도 설정 없이 컨텍스트 압축을 쓸 수 있다.

> JSON Schema로 설정 자동완성도 지원한다. 기본값으로 대부분 처리되니까 세부 조정이 필요한 경우만 `context-gateway.json`을 편집하면 된다.

## 마무리

세션 격리 규칙을 확정하고 나니 실행 구조가 안정감이 생겼다.

Context-Gateway 통합 설계도 끝났으니 다음은 구현 단계다.

플러그인 사이드카 패턴은 다른 도구 통합에도 재사용할 수 있을 것 같다.
