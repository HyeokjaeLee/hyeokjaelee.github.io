---
title: 'Loop 프롬프트 개선과 Work Logger 재작성'
description: 'Loop 프롬프트 XML 태그 분리, 사용자 질문 차단 로직 수정. Work Logger 전면 재작성으로 옵시디언 Inbox 한국어 구조화 로그 생성.'
date: '2026-05-20'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

Pi 에이전트의 Loop 프롬프트를 개선하고 Work Logger를 재작성한 날이었다.

## Loop 프롬프트

Pi 에이전트의 Loop 프롬프트를 XML 태그로 규칙과 작업을 분리했다.

기존에는 프롬프트 안에서 규칙과 작업 지시가 섞여 있었다.

LLM이 어디까지가 규칙이고 어디부터가 작업인지 헷갈려 한다.

XML 태그로 분리하니까 LLM이 구조를 더 잘 이해한다.

사용자 질문 차단 로직의 버그도 수정했다.

Loop 실행 중에 사용자가 질문하면 Loop가 초기화되는 버그였다.

Loop 초기화 버그도 같이 잡았다.

## Work Logger 재작성

Work Logger를 전면 재작성했다.

OpenCode의 work-logger를 참고해서 만들었다.

옵시디언 Inbox에 한국어 구조화 로그를 생성한다.

작업 시작 시간, 종료 시간, 작업 내용을 구조화된 형식으로 기록한다.

나중에 일기나 회고를 쓸 때 이 로그를 참고하면 된다.

## Playwright 스킬 활성화

Playwright 브라우저 자동화 스킬을 활성화했다.

이제 Pi 에이전트도 브라우저 자동화를 할 수 있다.

## 임시 파일 경로 통일

OpenCode의 임시 파일 경로를 통일했다.

여기저기 흩어져 있던 임시 파일이 한 곳으로 모였다.

## 마무리

Loop 프롬프트의 XML 태그 분리는 생각보다 효과가 컸다.

구조가 명확해지니까 LLM의 실행 품질도 올라간다.
