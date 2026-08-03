---
title: 'QA Agent inspector stop 시 executor 상태 보존'
description: 'QA 자동화에서 inspector가 중간에 멈춰도 executor가 판정한 passed/failed를 존중하는 상태 보존 로직을 넣은 회고'
date: '2026-04-18'
tags: [qa-agent, automation, journal]
titleImage: '@shared/assets/dev-diary.png'
---

## inspector가 멈추면 그동안의 판정은 어떻게 되나

QA 자동화 에이전트를 돌리다 보면 inspector가 중간에 멈추는 일이 자주 생긴다.
브라우저가 죽거나, 타임아웃이 터지거나, 단순히 내가 중단 버튼을 누르거나.
그동안은 여기서 executor가 이미 내린 `passed` / `failed` 판정까지 같이 날아갔다.

아까운 일이다.
수백 단계를 돌린 끝에 70개가 넘게 확정된 판정이었는데, 마지막 한두 개가 꼬였다고 전부 리셋되는 구조는 낭비가 심했다.

그래서 상태 보존 로직을 넣었다.

## 상태 보존이 필요한 이유

기존 동작을 한 줄로 요약하면 "inspector 죽으면 executor도 같이 초기화"였다.

이런 일이 벌어진다.

- 100스텝 중 80스텝째에 브라우저 크래시.
- executor는 이미 70개 정도 `passed`/`failed`를 확정.
- 그런데 inspector가 멈추면서 executor 컨텍스트도 리셋.
- 다시 실행하면 처음부터.

QA는 반복 작업이 잦은 영역이라 이 비용이 꽤 크다.

## 구현 방향

핵심은 두 가지였다.

하나, executor가 내린 판정은 inspector 생명주기와 분리한다.
둘, inspector가 재시작되면 직전까지의 executor 상태를 읽어서 이어서 진행한다.

이를 위해 executor의 확정 판정(`passed`, `failed`)을 별도 스토어로 뽑아냈다.
inspector가 들고 있던 임시 상태(`pending`, `blocked`)는 여전히 inspector와 운명을 같이하지만, 확정 상태는 살아남는다.

## 가치와 트레이드오프

이 구조가 빛을 발하는 순간은 이런 케이스다.

- 타임아웃으로 inspector가 강제 종료 → 확정 판정 보존.
- 내가 의도적으로 stop을 눌러서 점검 → 이후 resume.
- 브라우저 레벨 에러 → 판정은 그대로.

반대로 단점도 있다.

확정 판정 자체가 잘못됐을 때 그 잘못이 영구화된다.
예컨대 fixture가 부실해서 `failed`로 잘못 기록된 경우, 재실행해도 같은 판정이 남아 있다.
그래서 보존된 판정을 수동으로 무효화(rerun)하는 경로를 함께 뒀다.

## 같은 날 들어간 다른 변경

같은 주기에 fixture 자격 증명 치환도 손봤다.
URL 4단계 치환, 이메일/비밀번호를 환경변수 플레이스홀더로 바꾸는 작업이었다.
총 119개 fixture 중 71개를 이 형태로 마이그레이션했다.

남은 48개는 구조가 달라 일괄 치환이 안 되더라.
이건 다음 주에 잡는다.

## 마무리

QA 자동화는 "빠르게 돌리는 것"보다 "중간에 끊겨도 복구 가능한 것"이 훨씬 가치 있다는 생각이 다시 들었다.
inspector stop이 더 이상 판정을 먹지 않는다는 건, 내가 마음놓고 stop 버튼을 누를 수 있다는 뜻이기도 하다.
