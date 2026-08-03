---
title: 'Gemini CLI를 서브에이전트로 통합'
description: '격리된 Gemini CLI를 opencode 서브에이전트처럼 호출하는 통합 시스템. 샌드박스 격리, npm 캐시 오염 해결, Figma MCP 연동.'
date: '2026-04-21'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

Gemini CLI를 QA 에이전트의 서브에이전트처럼 통합한 날이었다.

## Gemini CLI 통합

Gemini CLI는 Google의 Gemini 모델을 터미널에서 쓸 수 있게 해주는 도구다.

이걸 opencode의 서브에이전트처럼 호출할 수 있게 만들었다.

왜 이런 짓을 하냐면, Gemini는 멀티모달 성능이 좋으면서도 가격이 저렴하다.

이미지가 포함된 분석 작업은 Gemini에게 맡기면 비용 효율적이다.

하지만 Gemini CLI를 그냥 실행하면 독립적인 프로세스라서 QA 에이전트와 상태를 공유할 수 없다.

샌드박스로 격리하면서도 QA 에이전트의 task 시스템을 통해 호출할 수 있게 통합했다.

## npm 캐시 오염

샌드박스 격리 과정에서 npm 캐시 오염 문제가 발견됐다.

격리된 환경에서 npm install을 하면, 메인 환경의 캐시가 오염되는 거다.

캐시를 분리해서 각 샌드박스가 독립적인 npm 캐시를 가지도록 수정했다.

## Notion 문서 분석 스킬

Notion 기획 문서를 분석하는 스킬을 만들었다.

Notion 페이지에 있는 텍스트와 이미지를 통합해서 분석한다.

이미지 위치 메타데이터도 분석해서, 어떤 이미지가 어떤 섹션에 있는지 파악한다.

QA 에이전트가 Notion 기획서를 읽고 테스트케이스를 자동 생성할 때 이 스킬을 쓴다.

## Figma 통합

Figma MCP를 연동해서 디자인 분석 기능을 확장했다.

Figma 파일의 컴포넌트 구조, 스타일, 레이아웃을 분석한다.

디자인과 실제 구현을 비교해서 차이점을 찾는 용도로 쓴다.

## oh-my-openagent 무한루프 대응

oh-my-openagent에서 VERIFIED 무한루프 이슈가 보고됐다.

비동기 게이트 예약 누수가 원인이었다.

임시 대응을 해두고 근본 수정은 별도로 진행하기로 했다.

## 마무리

Gemini CLI 통합으로 비용 효율적인 멀티모달 분석이 가능해졌다.

Figma 연동으로 디자인-구현 비교 자동화의 기반도 마련됐다.
