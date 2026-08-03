---
title: '강의잠금 툴팁과 Obsidian CLI 래퍼'
description: 'BaseTooltip 컴포넌트로 강의잠금 툴팁 구현. Figma 원본과 스타일 일치. Linux Obsidian CLI GPU 래퍼 보강.'
date: '2026-05-09'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

UI 컴포넌트 하나를 Figma와 픽셀 단위로 맞추고 CLI 도구를 보강한 날이었다.

## 강의잠금 툴팁

순차수강 모드에서 잠긴 강의에 마우스를 올리면 툴팁이 나온다.

"이전 강의를 완료하면 학습할 수 있습니다" 같은 안내 메시지를 보여준다.

BaseTooltip 컴포넌트를 만들어서 일관된 스타일의 툴팁을 제공했다.

Figma 원본과 스타일을 일치시켰다.

간격, 폰트 크기, 배경색, 화살표 위치를 전부 디자인 시안과 맞췄다.

> 툴팁 하나 맞추는 데 시간이 꽤 걸린다. 디자이너가 Figma에서 설정한 값들을 그대로 코드로 옮겨야 하기 때문이다.

## Obsidian CLI 래퍼 보강

Linux에서 Obsidian CLI가 GPU 관련 문제 없이 동작하도록 래퍼를 보강했다.

Obsidian CLI가 실행될 때 GPU 가속 관련 에러가 나는 경우가 있었다.

에러가 나도 동작은 하지만 로그가 지저분해진다.

래퍼에서 GPU 관련 플래그를 설정해서 에러 없이 실행되도록 했다.

## 마무리

툴팁은 작은 컴포넌트지만 사용자 경험에 큰 영향을 미친다.

잠긴 강의에 안내 없으면 학생은 왜 안 열리는지 모른다.
