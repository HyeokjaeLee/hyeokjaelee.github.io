---
title: 'InstanceBootstrap 회귀 버그와 ESLint 강화'
description: '리팩토링 중 init 파라미터 제거로 레거시 라우트 초기화가 누락된 회귀 버그 파악. ESLint v9 flat config + 80개 이상 엄격 규칙 적용.'
date: '2026-05-03'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

회귀 버그를 추적하고 ESLint 설정을 대폭 강화한 날이었다.

## InstanceBootstrap 회귀 버그

InstanceBootstrap이 정상적으로 초기화되지 않는 회귀 버그가 보고됐다.

원인을 추적해보니 리팩토링 과정에서 `init` 파라미터가 제거된 게 문제였다.

리팩토링으로 함수 시그니처를 단순화하면서 `init` 파라미터를 없앴다.

그런데 레거시 라우트가 이 파라미터에 의존하고 있었다.

파라미터가 사라지니까 레거시 라우트 초기화가 안 됐고 결과적으로 인스턴스가 정상적으로 생성되지 않았다.

PR 설명을 작성하고 dev 브랜치에 반영했다.

> 리팩토링은 기능을 변경하지 않아야 한다. 하지만 의존성이 숨어있으면 의도치 않게 기능이 깨진다.

## ESLint v9 flat config

auto-fallback 플러그인에 ESLint v9 flat config를 적용했다.

80개 이상의 엄격한 TypeScript 규칙을 적용했다.

상대 경로 import를 금지하고 `@/` 별칭을 의무화했다.

정렬 규칙도 추가해서 import 순서를 일관되게 만들었다.

엄격한 규칙을 적용하니까 코드 품질이 올라가지만 동시에 기존 코드를 전부 수정해야 해서 시간이 많이 걸렸다.

Prettier 설정도 함께 적용해서 포맷팅을 통일했다.

## 마무리

회귀 버그는 리팩토링의 함정이다.

보이지 않는 의존성을 제거할 때는 전수 조사가 필요하다.
