---
title: 'Langfuse 트레이싱 구현과 ARM64 Docker 배포'
description: '모든 LLM 호출을 Langfuse로 추적. provider별 프록시 분리, ARM64 멀티 아키텍처 Dockerfile, EC2 4컨테이너 배포. 로컬 Docker 토큰 충돌 해결.'
date: '2026-04-10'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

며칠 전 Langfuse 연동 설계를 잡았는데, 오늘 직접 구현하고 배포까지 끝낸 날이었다.

토큰 비용이 눈에 보이기 시작한 게 가장 큰 변화다.

## Langfuse 트레이싱

QA 에이전트가 LLM을 호출할 때마다 Langfuse로 추적 데이터를 보낸다.

어떤 모델을 호출했는지, 요청에 얼마나 많은 토큰이 들어갔는지, 응답은 얼마나 걸렸는지.

이 데이터가 Langfuse 대시보드에 트레이스로 쌓인다.

나중에 "이 케이스에서 왜 3만 토큰을 썼지?" 같은 질문에 답할 수 있게 됐다.

### provider별 프록시 분리

Langfuse 연동을 직접 에이전트 코드에 넣을 수도 있었지만, 프록시 방식을 선택했다.

provider별로 별도 프록시 인스턴스를 뒀다.

Anthropic용 프록시, OpenAI용 프록시, ZAI용 프록시 각각 분리했다.

왜 분리하냐면 각 provider의 API 포맷이 다르기 때문이다.

추적 데이터를 뽑는 방식이 provider마다 달라서, 하나의 프록시에서 전부 처리하면 코드가 복잡해진다.

`x-session-id` 헤더로 세션을 추적한다.

같은 실행에 속한 LLM 호출을 하나의 트레이스로 묶어서 볼 수 있다.

## ARM64 멀티 아키텍처 Dockerfile

Alpha 환경이 Graviton 인스턴스라서 ARM64다.

하지만 개발 환경은 x64다.

두 아키텍처 모두에서 빌드되는 멀티 아키텍처 Dockerfile을 작성했다.

Docker buildx를 쓰면 한 번에 두 플랫폼용 이미지를 만들 수 있다.

## EC2 네이티브 빌드

EC2(t4g.xlarge)에서 직접 빌드해서 4개 컨테이너를 배포했다.

Langfuse 프록시 3개와 QA 에이전트 메인 컨테이너다.

네이티브 빌드를 한 이유는 ARM용 이미지를 CI에서 만들면 느리기 때문이다.

EC2에서 직접 빌드하니까 빌드 시간이 훨씬 짧다.

## 로컬 Docker 토큰 충돌

로컬에서 Docker로 QA 에이전트를 17시간 동안 돌리는 중에 이상한 현상이 발견됐다.

qa-agent가 Slack 토큰을 가로채고 있었다.

개발 환경의 Slack 봇 토큰과 Alpha 환경의 토큰이 충돌한 거다.

로컬 Docker 컨테이너가 Alpha 환경과 같은 Slack 워크스페이스의 토큰을 쓰고 있어서, 메시지가 두 곳에서 동시에 처리되고 있었다.

로컬 Docker를 정지해서 해결했다.

> 환경 변수 관리는 항상 조심해야 한다. 개발과 운영 환경의 시크릿이 겹치면 예측 불가능한 일이 생긴다.

## 마무리

Langfuse가 들어가니까 토큰 비용이 데이터로 보이기 시작했다.

비싼 모델을 부르는 케이스가 눈에 들어오니까, 어디서 비용을 줄일 수 있는지 판단할 수 있게 됐다.
