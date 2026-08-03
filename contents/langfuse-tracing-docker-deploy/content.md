---
title: 'Langfuse 트레이싱 구현과 Docker 배포'
description: '모든 LLM 호출을 Langfuse로 추적. provider별 프록시 분리, ARM64 멀티 아키텍처 Dockerfile, EC2 네이티브 빌드 배포.'
date: '2026-04-10'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

어제 설계한 Langfuse 연동을 오늘 직접 구현하고 배포했다.

## Langfuse 트레이싱

모든 LLM 호출을 Langfuse로 추적한다.

provider별로 별도 프록시 인스턴스를 뒀다.

Anthropic용 프록시, OpenAI용 프록시, ZAI용 프록시 각각 분리했다.

`x-session-id` 헤더로 세션을 추적해서 같은 실행에 속한 LLM 호출을 하나의 트레이스로 묶는다.

이제 Langfuse 대시보드에서 각 케이스별로 얼마나 토큰을 썼는지, 어떤 모델을 호출했는지, 응답 시간은 얼마나 걸렸는지 확인할 수 있다.

## ARM64 멀티 아키텍처 Dockerfile

Alpha 환경이 Graviton(t4g.xlarge)이라서 ARM64 아키텍처다.

멀티 아키텍처 Dockerfile을 작성해서 x64와 ARM64 모두에서 빌드되도록 했다.

EC2에서 네이티브 빌드로 4개 컨테이너를 배포했다.

Langfuse 프록시 3개(provider별)와 QA 에이전트 메인 컨테이너.

## 로컬 Docker 문제

로컬에서 Docker로 17시간 동안 돌리는 중에 문제가 발견됐다.

qa-agent가 Slack 토큰을 가로채고 있었다.

개발 환경의 Slack 봇 토큰과 Alpha 환경의 토큰이 충돌한 거다.

로컬 Docker를 정지해서 해결했다.

환경 변수 관리를 더 엄격하게 해야겠다고 느꼈다.

## 마무리

Langfuse 트레이싱이 들어가니까 토큰 비용이 눈에 보이기 시작했다.

어떤 케이스가 비용을 많이 먹는지, 어떤 모델이 효율적인지 데이터 기반으로 판단할 수 있게 됐다.
