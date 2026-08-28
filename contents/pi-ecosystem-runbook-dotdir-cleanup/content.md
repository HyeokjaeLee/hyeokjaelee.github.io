---
title: 'pi 생태계 업데이트 런북 완주와 도구 퇴적물 청소'
description: 'pnpm catalog 기반 업데이트 런북을 끝까지 돌면서 얻은 함정 두 가지와, 점 디렉터리 733MB 정리에서 배운 고아 검증 프로토콜'
date: '2026-08-27'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## pi 생태계 업데이트, 이번엔 런북대로

나는 코딩 에이전트 pi를 쓰고 있는데 이 놈의 의존성이 세 곳에 흩어져 있다.
실행 바이너리는 pnpm global, 타입 소스는 워크스페이스 root의 devDependencies, 확장은 별도 npm 디렉터리다.
이걸 한 번에 업데이트하는 런북을 전에 정리해뒀는데 이번에 처음으로 전 단계를 통과하며 완주했다.

결과는 core 0.84.3 유지에 확장 3종 범프, rtk 0.46.0.
검증 배터리도 다 통과해서 커밋하고 push했다.

그런데 순탄하지만은 않았다.
두 가지 장애가 나왔고 둘 다 우회책을 찾아 기록으로 남겼다.

첫 번째는 `pi update --extensions`가 minimumReleaseAge 정책에 걸린 것이다.
최신 확장 3종이 전부 publish 24시간 이내라 lockfile 정책 검증에서 튕겨나갔다.
폴백으로 `--ignore-workspace install`에 `--config.minimumReleaseAge=0`을 붙여 직접 설치했다.

두 번째는 `pnpm add -g`의 PATH 체크 실패다.
이 머신은 `~/.local/bin/pi` shim 구조라 pnpm 기본 bin 경로가 PATH에 없다.
인라인으로 PATH를 잡아주고 재실행하니 통과했다.

## 조용히 지나가는 버전 분리가 제일 무섭다

이번 실행에서 가장 값진 발견은 pnpm v11의 catalog 거동이다.

`pnpm-workspace.yaml`의 catalog 스펙을 갱신해도 이미 링크된 워크스페이스 멤버의 catalog 참조는 재해석되지 않는다.
lockfile이 이전 해석을 유지한 채 `pnpm install`은 "Already up to date"를 보고한다.

문제는 이 버전 분리가 빌드를 깨지 않는다는 점이다.
증상은 TypeScript TS2345 타입 불일치로 발현하는데 겉보기엔 API breaking change처럼 보여서 디버깅을 엉뚱한 방향으로 보내기도 한다.

그래서 런북에 검증 단계를 박아뒀다.
catalog bump 후에는 `pnpm install` 결과를 믿지 말고 `pnpm why -r`로 "Found 1 version"인지 직접 확인한다.
전 멤버가 동일 버전이어야 한다는 catalog의 설계 의도와 이 거동은 충돌한다고 본다.

덤으로 context-mode의 스크립트 러너도 최상위 POSIX for/while 루프를 파싱 단계에서 거부한다는 걸 재확인했다.
커맨드 단위로 분해해 실행하는 구조라 제어 흐름이 최상위에 오면 파서가 거부한다.
루프가 필요하면 `node -e`의 forEach 패턴을 쓴다.

## 점 디렉터리는 존재가 아니라 참조로 판단한다

같은 기간에 dot-dir 정리 3라운드를 돌아서 약 733MB를 회수했다.
Orca IDE 제거가 555MB, `~/.claude`가 176MB.

Orca 제거에서 핵심 교훈이 나왔다.
앱 본체를 지우는 걸로 끝이 아니었다.
다른 도구 설정에 심어둔 훅 27개까지 정리해야 완전한 제거다.
Claude 11개, Gemini 8개, Cursor 8개.
검증 기반으로 통짜 정리를 하고 atomic write와 JSON 검증을 거쳤다.

`~/.claude`는 3겹 고고학이었다.
5월 말부터 7월 초까지 쌓인 Claude Code 세션 로그 522개, context-mode 플러그인의 캐시 DB, 그리고 hermes가 계속 기록하는 통계 파일.
CLI는 이미 지운 상태인데도 폴더가 176MB였다.

재미있는 건 지워도 다시 생기는 파일이 있었다는 거다.
정체를 파일명에 박힌 PID 추적으로 밝혔다.
context-mode 서버가 hermes와 pi 양쪽에서 멀티 인스턴스로 떠 있었고 살아있는 프로세스가 곧바로 파일을 다시 쓰고 있었다.
살아있는 별개 시스템의 동작이라 건드리지 않고 종결했다.

정리하면 이렇다.
dot-dir 삭제는 존재가 아니라 누가 참조하는가로 판단한다.
그리고 참조 검색에는 오탐이 꼭 따라온다.
플러그인 정의, Obsidian 캐시, 라이브 부산물 오탐 3종을 구분하는 판별법도 같이 정리해뒀다.

## Tailscale 망에서 mDNS가 안 되는 건 정상이다

이 PC를 게임 스트리밍 호스트로 만들었다.
클라이언트는 Moonlight를 snap으로, 호스트인 Sunshine은 Flatpak으로 설치했다.
deb를 안 쓴 건 자동 업데이트가 없어서다.

iPad Moonlight에서 호스트가 자동 검색되지 않아서 잠깐 헤맸는데 원인은 단순했다.
Moonlight 자동 검색은 mDNS 브로드캐스트 기반이고 Tailscale 가상 네트워크는 브로드캐스트를 전송하지 않는다.
설치 실패가 아니라 네트워크 특성이었다.

해결책은 Tailscale IP를 수동으로 호스트에 추가하는 것.
PIN 발급 후 Sunshine 웹 UI에서 입력하면 페어링 끝난다.

덤으로 같은 기간에 exit node가 노드 키 만료로 NeedsLogin 상태가 되어 있었다.
재인증으로 복구하고 서버 노드는 관리 콘솔에서 Disable key expiry로 영구 방지했다.
무인 재인증이 불가능한 서버는 만료 시 접근 단절 위험이 더 크다.
모바일 기기는 분실 대비 만료를 유지한다.

## 마무리

하루 동안 업데이트 런북 검증, 패키지 매니저 함정 문서화, 도구 퇴적물 청소, 네트워크 특성 파악까지 돌았다.

공통 주제가 하나 있다면 "겉보기 동작을 믿지 말고 검증하라"다.
pnpm의 "Already up to date"도, 지워도 다시 생기는 파일도, mDNS 미검색도 전부 겉보기엔 다른 문제처럼 보였지만 실제 원인은 각각 달랐다.

다음엔 catalog stale lockfile을 만났을 때 TS2345로 헤매는 시간을 줄여보려 한다.
