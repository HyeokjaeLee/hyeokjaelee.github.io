---
title: 'QA Agent — 모노리식에서 멀티 에이전트 구조로 재설계'
description: '단일 구조를 역할별 에이전트로 쪼개고, src/shared/를 분리하고, Slack 라우팅 계층을 얹은 재설계 기록이다.'
date: '2026-03-26'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 디렉토리부터 다시 그렸다

QA Agent를 모노리식 구조에서 멀티 에이전트 구조로 재설계했다.

기존에는 하나의 큰 실행 흐름 안에서 planner, executor, reporter가 같은 맥락을 공유했다.

역할이 명확해 보였지만, 코드가 커지면서 각 역할이 어디까지 책임지는지 경계가 흐려졌다.

역할별로 디렉토리를 나누고, `src/shared/`를 분리해서 공통 로직을 한 곳에 모았다. 각 에이전트는 자기 디렉토리 안에서만 동작하고, 공통 타입과 유틸리티는 shared에서 가져간다.

## Slack 라우팅 계층

Slack 보고를 라우팅 계층으로 뺐다.

이전에는 executor가 직접 Slack 메시지를 보냈다. 그러다 보니, 같은 그룹에서 온 결과가 여러 executor에 의해 산발적으로 노출됐다.

라우팅 계층이 결과를 모아서, passed는 프로그레스로, blocked와 deferred는 별도 채널로 보낸다.

메시지 순서와 양을 제어할 수 있게 되니, Slack 채널이 테스트 로그로 도배되는 일이 줄었다.

## 2-Phase Retry

재시도를 두 단계로 분리했다.

Phase 1에서는 모든 케이스를 DAG 기반으로 병렬 실행한다. passed, blocked, failed를 수집하고, blocked 케이스 ID를 `deferredBlockedCaseIds`로 추적한다.

Phase 2에서는 blocked 케이스만 새 브라우저 세션으로 재시도한다. `buildRetryMasterInstructions`로 blocked 사유와 passed 형제 케이스의 컨텍스트를 주입한다.

동시 실행 수는 `min(blockedCases.length, MAX_CONCURRENT_EXECUTORS)`로 묶어서, blocked가 많아도 실행기를 무한정 늘리지 않는다.

모든 케이스를 동시에 재시도하는 것보다 효율적이고, API 사용량도 `maxGroupApiUsage`로 추적할 수 있다.

## Managed Skills 파이프라인

프로그래밍 방식으로 스킬을 생성하던 로직을 제거했다.

대신 서브에이전트가 초안을 만들고, 클리너가 검증하고, 통과하면 정식 스킬로 승격하는 파이프라인을 구성했다.

코드에서 스킬을 동적으로 찍어내는 건 빠르지만, 품질 관리가 어렵다. 검증 단계를 거치는 게 느리더라도 안정적이라는 판단이다.

## 지식 관리와 session-logger

OpenCode 세션 로거 플러그인도 같이 구현했다. 60초 디바운스로 서브에이전트 세션을 재사용하면서, 컨텍스트 압축까지 붙였다.

세션 로그를 Obsidian CLI로 넘겨서 위키에 자동 반영하는 파이프라인까지 정리했다.

에이전트가 만든 지식이 위키로 흘러가고, 다음 에이전트가 그 위키를 다시 읽는 루프가 이제 자연스럽게 돈다.
