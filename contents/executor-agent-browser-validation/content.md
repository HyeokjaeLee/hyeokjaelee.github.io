---
title: 'QA Agent — executor 실행과 agent-browser 스킬 2차 재검증'
description: 'qa-executor가 실제로 agent-browser 스킬을 통해 브라우저를 띄우고 검증을 수행하는지 두 번째로 검증한 기록이다.'
date: '2026-03-24'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## executor가 브라우저를 직접 다루는지 재검증

QA Agent에서 executor가 `agent-browser` 스킬로 브라우저를 띄우고, 계획된 케이스를 실제로 수행하는지 두 번째 재검증을 돌렸다.

1차 때는 통과한 줄 알았는데, 플러그인 로딩 순서가 바뀌면 스킬이 executor 컨텍스트에 노출되지 않는 엣지 케이스가 있었다.

이번엔 fixture를 SQLite로 정상화하고 조회 흐름을 고쳐서, executor가 스킬을 안정적으로 인식하는 경로를 확정했다.

검증은 한 번으로 끝내고 싶지만, 환경 의존적인 부분이라 두 번째 런까지 돌려 확신을 가지는 편이 낫다고 생각한다.

## 브라우저 격리와 동시성 제약

병렬 executor가 동시에 같은 계정으로 로그인하면 세션이 꼬인다.

`MAX_BROWSERS_PER_EXECUTOR = 2`라 단일 executor가 브라우저 두 개까지는 띄울 수 있지만, executor 간 계정 충돌은 별개 문제다.

해결책은 순차 전환이었다. planner가 만든 그룹이 executor 4개를 초과하면, master가 최대 4개를 유지하면서 순차적으로 분배한다.

동시성을 올리면 빨라지지만, 세션 충돌 비용이 더 크기 때문에 4개 상한을 지키는 게 합리적이라는 판단이다.

## executionDraft로 planner가 초안을 쓰다

`executionDraft` 필드를 새로 도입했다.

planner가 완성된 계획을 한 번에 내놓는 게 아니라, 단계별 실행 초본을 작성할 수 있게 한 것이다.

초안 단계에서 빈 부분을 executor가 채우는 구조라, planner의 부담이 줄고 계획 누락을 런타임에서 보정할 수 있다.

## 로깅과 번역, delegation 루프

thinking 이벤트 로깅을 추가해서 executor가 어떤 추론 과정을 거쳤는지 추적할 수 있게 했다.

에이전트 프롬프트 5개를 한국어로 번역했는데, 영어 프롬프트에서 뉘앙스가 달라지는 부분이 있어 생각보다 시간이 걸렸다.

그리고 qa-master delegation 루프를 도입했다. 기존에는 단일 호출 기반이었는데, task 기반 실행으로 전환하면서 master가 여러 executor에 작업을 위임하고 회수하는 흐름이 자연스러워졌다.

delegation 루프는 아직 다듬을 게 많지만, 방향은 맞는 것 같다.
