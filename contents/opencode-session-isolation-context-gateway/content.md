---
title: 'OpenCode 세션 격리와 Context-Gateway 플러그인 설계'
description: 'QA 런타임을 opencode server 기반 세션으로 전환하고 lane 간 세션 공유를 금지. Context-Gateway를 OpenCode 플러그인 사이드카로 통합 설계.'
date: '2026-03-21'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

QA 에이전트를 만든 지 사흘째다.

이틀 동안 lane과 캐싱을 정리했으니, 오늘은 실행 환경 자체를 바꿨다.

그리고 사이드 프로젝트인 Context-Gateway를 OpenCode 플러그인으로 통합하는 설계를 잡았다.

## opencode server 기반 세션 전환

기존에는 QA 에이전트가 일회성 CLI로 실행됐다.

CLI로 실행하면 실행이 끝나면 상태가 사라진다.

캐싱을 해놔도 다음 실행 때 다시 로드해야 한다.

그래서 opencode server 기반 세션 구조로 전환했다.

서버가 계속 떠 있으니까 상태가 유지된다.

캐시도, planning 결과도, fixture knowledge도 서버 메모리에 남아 있다.

### lane 간 세션 공유 금지

서버 기반으로 바꾸면서 중요한 결정을 했다.

lane 간 세션 공유를 금지했다.

이전에는 lane들이 같은 세션을 공유했다.

공유하니까 문제가 생겼다.

한 lane이 페이지를 이동하면 다른 lane의 브라우저 상태도 바뀐다.

lane이 3개면 3개가 각각 독립적인 세션을 가져야 한다.

lane마다 별도의 세션 ID를 할당해서 완전히 격리했다.

한 lane에서 일어나는 일이 다른 lane에 영향을 주지 않는다.

## Context-Gateway 플러그인 설계

Context-Gateway는 컨텍스트를 압축해서 LLM 호출 비용을 줄이는 도구다.

독립 도구로 만들까 하다가 OpenCode 플러그인으로 통합하기로 했다.

### 왜 플러그인인가

독립 도구면 사용자가 Context-Gateway를 따로 설치하고 API 키를 따로 설정해야 한다.

설치 단계가 하나 더 있으면 그만큼 쓰기 어렵다.

플러그인으로 만들면 OpenCode에 설치 한 번으로 끝난다.

별도 API 키 없이 OpenCode에 등록된 provider 설정을 재사용한다.

### 사이드카 구조

Context-Gateway 바이너리를 플러그인에 사이드카 형태로 내장했다.

플러그인이 로드되면 게이트웨이가 자동으로 시작된다.

사용자는 게이트웨이가 있다는 것조차 의식하지 않아도 된다.

TypeScript와 Bun 런타임 기반이라서 npm, pnpm, bun 패키지 매니저를 전부 지원한다.

GitHub Releases와 postinstall 스크립트로 플랫폼별 바이너리를 자동 배포한다.

macOS arm64/x64, Linux x64/arm64, Windows x64를 지원한다.

### SDK 기반 설정 조회

설정 파일을 직접 파싱하지 않고 OpenCode SDK로 조회한다.

provider 목록, API 키, 컨텍스트 윈도우 크기를 SDK에서 가져온다.

이 방식으로 압축용 LLM 선택, 모델별 최적 압축 임계값 계산, 인증 처리를 한 흐름으로 통합했다.

> SDK를 쓰면 설정이 바뀌어도 플러그인 코드를 수정하지 않아도 된다. 설정 조회를 SDK에 위임하니까 자동으로 추적된다.

### JSON Schema 자동완성

기본값으로 대부분 처리되지만, 세부 조정이 필요하면 `context-gateway.json`으로 설정한다.

JSON Schema를 제공해서 IDE에서 자동완성을 지원한다.

설정 이름을 외우지 않아도 IDE가 추천해준다.

## 마무리

세션 격리로 lane 간 간섭이 사라졌다.

Context-Gateway를 플러그인으로 통합한 설계는 사용자 경험을 크게 개선할 거다.

설치 한 번이면 컨텍스트 압축이 자동으로 동작하니까.

내일은 이 설계를 실제로 구현하기 시작할 예정이다.
