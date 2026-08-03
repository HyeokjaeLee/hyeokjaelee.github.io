---
title: 'Inspector 상태 보존과 한국투자증권 CLI 제작'
description: 'Inspector가 executor 상태를 보존하도록 수정. GPT-5.4 Responses API 필드 누락 수정. 한국투자증권 CLI 제작 후 npm 게시.'
date: '2026-04-18'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

QA 에이전트 안정성 개선과 사이드 프로젝트를 병행한 날이었다.

## Inspector 상태 보존

Inspector가 실행 에이전트의 상태를 덮어쓰는 문제가 있었다.

Inspector는 blocked 케이스를 분석하는 서브에이전트다.

분석 과정에서 실행 에이전트의 passed/failed 상태를 덮어써서, 이미 통과한 케이스가 실패로 바뀌는 경우가 있었다.

Inspector가 executor의 상태를 보존하도록 수정했다.

Inspector는 분석 결과만 추가하고, 기존 실행 결과는 건드리지 않는다.

## GPT-5.4 Responses API

GPT-5.4 호출이 간헐적으로 실패했다.

에러 로그를 보니 Responses API의 필수 필드가 누락되었다.

4개 필드를 추가하니까 7.1초 만에 정상 응답이 돌아왔다.

필수 필드가 왜 누락되었는지 확인해보니, API 스펙이 업데이트되면서 새로운 필수 필드가 추가된 거였다.

> API 스펙 변경은 언제든 일어날 수 있으니까 에러 로그의 에러 메시지를 꼼꼼히 읽어야 한다.

## OpenClaw 정리

OpenClaw CLI를 업그레이드하고 orphan transcript를 아카이브했다.

AGENTS.md 공식 형식을 표준화해서 11개 에이전트에 적용했다.

크론잡 실패율이 29%였다.

원인은 ZAI rate limit.

fallback을 codex/gpt-5.4-mini로 교체해서 실패율을 낮췄다.

워크스페이스 구조도 규칙화했다.

managed, temp, memory 세 디렉토리로 나눠서 파일이 어디에 있어야 하는지 명확하게 했다.

## 한국투자증권 CLI

사이드 프로젝트로 한국투자증권 CLI를 만들었다.

한국투자증권 Open API를 터미널에서 쓸 수 있게 하는 도구다.

잔고 조회, 주문, 일봉 데이터 가져오기 등을 명령어 하나로 할 수 있다.

npm에 0.1.8 버전을 게시했다.

개인 투자 자동화를 위한 첫 걸음이다.

## 마무리

Inspector 상태 보존은 작은 수정이지만 효과가 컸다.

이미 통과한 케이스가 실패로 바뀌는 현상이 사라졌다.
