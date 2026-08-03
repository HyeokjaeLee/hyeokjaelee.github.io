---
title: 'ClawMux 분류기를 LLM으로 전환하며'
description: '로컬 임베딩 기반 분류기의 한계를 느껴 openclaw 연결 저렴한 LLM으로 옮기고, reasoning 비활성화 모듈을 구현한 기록'
date: '2026-04-07'
tags: [journal, clawmux, llm, classifier, reasoning-disable]
titleImage: '@shared/assets/dev-diary.png'
---

## 왜 LLM 분류기로 옮겼나

ClawMux의 요청 분류기를 로컬 임베딩 모델에서 openclaw 연결 저렴한 LLM으로 바꿨다.

분류기는 사용자 메시지의 복잡도를 평가해 LIGHT/MEDIUM/HEAVY 세 티어로 라우팅하는 역할이다.

원래는 로컬 임베딩 모델(`Xenova/paraphrase-multilingual-MiniLM-L12-v2`, 118MB q8) 기반의 nearest-centroid 방식을 쓰고 있었다.

짧은 쿼리는 `isLikelyLight()` 휴리스틱으로 LIGHT를 강제 분류하는 꼼수도 붙여놨었다.

사전학습 경량 모델이다 보니 한계가 분명했다.

경량 모델들을 더 찾아보다가, 차라리 LLM 자체를 분류기로 쓰는 쪽이 낫겠다고 판단했다.

## 분류기 전환

openclaw에 연결된 프로바이더의 저렴한 LLM으로 분류기를 옮겼다.

비용을 최소화하려고 reasoning을 끄고 `max_tokens=1`로 고정했다.

한 글자(L/M/H) 응답만 내놓도록 강제하는 식이다.

전체 `messages`를 분류기에 넘기고, 컨텍스트 윈도우를 초과하면 `trimToContextWindow`로 오래된 것부터 잘라낸다.

## reasoning 비활성화

`reasoning-disable.ts`라는 모듈을 새로 만들었다.

지원하는 6개 API 포맷별로 reasoning 비활성화 파라미터를 주입한다.

분류기 LLM이 reasoning에 토큰을 쓰는 걸 막기 위해서다.

한 글자만 받으면 되는 작업에 사고 과정을 출력하는 건 비용 낭비다.

## Q 옵션 제거

전체 컨텍스트를 항상 포함하다 보니 Q(컨텍스트 부족) 분류는 의미가 없어졌다.

시스템 프롬프트에 마지막 메시지와 관련 주제로 판단하라는 지시를 추가했다.

형식 오류가 나면 에러 피드백과 함께 최대 2회 재시도한다.

그래도 실패하면 503을 던진다.

조용한 폴백은 없앴다.

## baseUrl 정규화

z.ai처럼 baseUrl에 이미 버전 경로(`/v1`)가 포함된 프로바이더에서 어댑터가 중복으로 `/v1`을 붙이는 버그가 있었다.

이걸 잡았다.

작은 수정이지만, 프로바이더 호환성에 직결되는 부분이라 놓칠 수 없었다.

## 검증

`bun run typecheck`는 0 에러로 통과했다.

라이브 테스트는 좀 짠내났다.

glm-4.7-flashx는 잔액 부족(429)이 떴고, glm-4.5-air는 `max_tokens=1`에서 빈 content를 돌려줬다.

프로바이더별로 `max_tokens=1`에 대한 반응이 제각각인 모양이다.

호환성을 좀 더 조사해봐야겠다.
