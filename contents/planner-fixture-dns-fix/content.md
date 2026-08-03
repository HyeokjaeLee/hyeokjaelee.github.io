---
title: 'QA Agent Planner 고치다가 GLM DNS까지 만난 하루'
description: 'planner의 fixture knowledge 참조를 손보다가 glm-5.1 DNS 해석 실패를 만나 proxy URL 오버라이드로 넘긴 기록.'
titleImage: '@shared/assets/dev-diary.png'
date: '2026-04-14'
tags: [journal]
---

하루 종일 qa-agent Planner 쪽을 만졌다.

끝에 자잘한 버그 하나가 남아서, fixture knowledge 참조 부분을 고치는 작업부터 시작했다.

## Fixture Knowledge 참조 수정

Planner는 테스트 케이스를 분석해서 실행 계획을 세우는 역할이다.

브라우저에는 직접 손대지 않고, 의존성 그래프와 병렬 그룹(Lane)만 결정한다.

그런데 Planner가 Executor 쪽 fixture knowledge를 참조하는 경로가 어긋나 있었다.

fixture knowledge는 동일 URL의 여러 케이스가 매번 페이지 구조를 새로 파악하는 비용을 줄이려고 만든 SQLite durable store다.

실행이 반복될수록 지식이 누적되고, Executor가 `qa_lookup_fixture_knowledge` 도구로 이전 실행 지식을 끌어다 쓴다.

문제는 Planner가 이 지식을 참조할 때 기준이 어긋나 있었다는 거다.

참조를 바로잡고, 선행 케이스 컨텍스트가 제대로 내려가도록 손을 봤다.

## glm-5.1 DNS 해석 실패

참조 수정은 금방 끝났는데, 이후 테스트를 돌리니 glm-5.1 호출에서 DNS 해석 실패가 터졌다.

에러 메시지는 단순했다.

호스트 이름을 못 찾겠다는, 네트워크 쪽 에러.

DNS 해석이 안 되면 모델 API에 닿을 수 없으니, Planner든 Executor든 전부 멈춘다.

## Proxy URL 오버라이드

원인을 추적해보니 기본 엔드포인트로 요청이 나가면서 DNS가 이 호스트를 못 풀고 있었다.

해결은 단순했다.

모델 설정에서 proxy URL을 직접 오버라이드해서, DNS 해석이 성공하는 엔드포인트로 요청이 나가도록 바꿨다.

설정 한 줄로 끝나는 문제지만, 에러 메시지만 보면 코드 버그인 줄 알기 십상이다.

> DNS 해석 실패가 나면 일단 어디로 요청이 나가는지부터 확인하는 게 낫다.

코드 전체를 뒤지는 것보다 설정 오버라이드 한 줄이 빠를 때가 있다.

## 마무리

하루에 두 가지를 잡았다.

하나는 설계 단계의 참조 문제, 하나는 인프라 쪽 DNS 문제.

둘 다 에러 메시지 자체는 단순했지만, 원인을 찾는 경로가 달랐다.

참조 문제는 코드를 읽으면서 흐름을 따라가면 됐고, DNS 문제는 요청이 실제로 어디로 나가는지부터 확인해야 했다.
