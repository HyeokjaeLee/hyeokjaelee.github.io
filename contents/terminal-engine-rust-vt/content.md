---
title: '터미널 엔진 xterm.js에서 Rust VT로 교체'
description: 'xterm.js를 Rust VT 파서 + Canvas2D 렌더러로 완전 교체. Ghostty VT 파싱 라이브러리 활용. 한글 IME 입력 깨짐 수정.'
date: '2026-05-22'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

터미널 엔진을 xterm.js에서 Rust 기반으로 완전히 교체한 날이었다.

## xterm.js의 한계

xterm.js는 웹 기반 터미널 에뮬레이터다.

JavaScript로 구현되어 있어서 성능 한계가 있었다.

WKWebView에서 IME 문제가 있었고, 패치 의존성이 있었고, 번들 크기도 컸다.

## Rust VT 파서 + Canvas2D 렌더러

Ghostty 터미널의 VT 파싱 라이브러리를 활용해서 네이티브 방식으로 전환했다.

Rust로 VT 파서를 구현하고, Canvas2D로 렌더링한다.

xterm.js를 거치지 않으니까 성능이 크게 올라갔다.

IME 문제도 해결됐다.

## 한글 IME 입력

Canvas에 직접 키보드를 바인딩하니까 한글 조합 입력이 깨졌다.

WKWebView의 Canvas에서 IME 조합 이벤트가 발생하지 않는 게 원인이었다.

조합 상태 플래그와 이벤트 가드를 추가해서 해결했다.

한글처럼 조합이 필요한 입력은 이벤트 처리가 영어보다 훨씬 복잡하다.

## 마무리

xterm.js를 버리고 직접 구현하는 건 큰 결단이었지만 결과는 좋았다.

성능도 올라가고 의존성도 줄어들었다.
