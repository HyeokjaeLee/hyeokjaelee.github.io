---
title: '순차수강 잠금 UI Figma 픽셀 단위 일치'
description: 'Notion·Figma·코드 3방향 교차 검증으로 순차수강 잠금 UI를 Figma 픽셀 단위로 일치. Playwright E2E 검증 완료.'
date: '2026-05-14'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

순차수강 잠금 UI를 Figma 디자인과 픽셀 단위로 맞춘 날이었다.

## 3방향 교차 검증

Notion 기획서, Figma 디자인, 코드베이스를 교차 검증했다.

설정 완료율 95%를 달성했다.

하지만 커리큘럼 학생 화면에서 Critical 이슈를 발견했다.

잠금 파트 UI와 모달, 프로그레스바가 기획 의도와 다르게 동작하고 있었다.

## 잠금 UI 2차 수정

순차수강 옵션의 잠금 UI를 Figma와 픽셀 단위로 일치시켰다.

잠금 파트 UI, 모달, 프로그레스바를 2차 수정했다.

Playwright E2E 검증을 통과했다.

## .gitignore 정리

TypeScript 컴파일 산출물이 git에 추적되고 있었다.

`.js`, `.js.map`, `.jsx`, `.jsx.map` 패턴을 `.gitignore`에 추가했다.

untracked 파일을 0개로 정리했다.

## 마무리

3방향 교차 검증은 시간이 오래 걸리지만 놓치는 디테일을 잡을 수 있다.
