---
title: 'QA Agent에 Langfuse 트레이싱 붙이기'
description: '모든 LLM 호출을 Langfuse로 추적하도록 langfuse-proxy를 프로젝트에 포함한 과정. provider별 프록시 분리와 ARM64 배포까지.'
titleImage: '@shared/assets/dev-diary.png'
date: '2026-04-10'
tags: [journal]
---

QA Agent를 돌리다 보면 가장 답답한 게 "이 LLM 호출이 왜 저런 결과를 냈는지" 모른다는 거다.

입력 프롬프트는 길고, 도구 호출은 여러 번 엮이고, 어느 단계에서 토큰을 많이 먹는지도 한눈에 안 보인다.

그래서 모든 LLM 호출을 Langfuse로 추적하기로 했다.

어떤 호출이 어떤 모델로 갔는지, 입력과 출력이 뭔지, 토큰을 얼마나 썼는지 한 화면에서 보고 싶었다.

## langfuse-proxy를 프로젝트 안으로

처음에는 SDK를 코드에 직접 박는 방식을 생각했다.

근데 QA Agent는 provider를 여러 개 쓴다.
Anthropic, OpenAI, ZAI 각각 호출이 들어가는데, SDK 붙이려면 호출 지점마다 래핑 코드가 들어가야 한다.

그러다 보니 코드가 더러워지고, 새 provider를 추가할 때마다 추적 코드도 다시 손봐야 한다.

그래서 proxy를 하나 더 앞단에 두기로 했다.

LLM 호출이 전부 proxy를 거치게 만들고, proxy가 Langfuse로 trace를 쏘는 구조다.

이러면 QA Agent 코드는 깨끗하고, 추적은 proxy가 알아서 한다.

## provider별로 프록시 분리

처음엔 proxy 하나에 다 때려넣으려 했다.

근데 provider마다 요청 형식도 다르고, 어디서 병목이 걸리는지 provider별로 보고 싶었다.

그래서 provider별로 proxy 인스턴스를 따로 뒀다.

Anthropic용, OpenAI용, ZAI용 프록시가 각각 뜬다.

세션 추적은 `x-session-id` 헤더로 묶는다.
한 번의 QA 실행이 여러 provider 호출로 이어져도, 같은 session-id면 Langfuse에서 하나의 trace로 이어져 보인다.

이게 생각보다 편했다.
어떤 실행이 Anthropic을 몇 번 부르고 ZAI를 몇 번 부르는지 한눈에 들어온다.

## ARM64로 배포하기

QA Agent는 ARM 기반 EC2에서 돌아간다.

그런데 proxy Dockerfile을 그냥 짜니 `x86_64` 기본 빌드만 나와서 ARM 머신에서 에뮬레이션으로 돌아갔다.

느렸다.

그래서 멀티 아키텍처 Dockerfile을 다시 썼다.

빌드 단계에서 타겟 아키텍처를 잡고, 네이티브 바이너리가 나오도록 만들었다.

컨테이너 4개(프록시 3개 + Langfuse)가 EC2에서 네이티브로 돌아간다.
에뮬레이션 시절보다 체감이 확 낫다.

## 로컬에서 삐걱거린 부분

배포 전에 로컬 Docker로 한참 돌려봤다.

근데 로컬을 17시간쯤 켜둔 채로 두니, QA Agent가 로컬 환경 변수를 읽어서 외부 서비스 인증 정보를 건드리는 일이 생겼다.

운영 환경과 로컬 환경이 꼬인 거다.

결국 로컬을 멈추고 깔끔하게 EC2 쪽으로만 몰아넣었다.

> 환경 변수는 한 곳에서만 관리하는 게 정신건강에 좋다.
> 여기저기 켜두면 어디서 무슨 일이 일어나는지 추적이 안 된다.

## 남은 과제

지금은 호출 단위 추적은 잘 된다.

다음엔 이 trace 데이터를 가지고 실행 단계별로 성능을 비교하려 한다.
어떤 단계가 토큰을 많이 먹고, 어디서 지연이 생기는지 정리하고 싶다.

그리고 프롬프트 품질을 trace와 연결해서 보는 것도 해보려 한다.

trace가 있으니 이제 뭘 개선할지가 보인다.
