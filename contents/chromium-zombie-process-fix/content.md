---
title: 'Chromium 좀비 프로세스를 /proc/cmdline로 잡은 이야기'
description: 'QA 자동화에서 Chromium 프로세스가 좀비로 쌓이던 문제를 /proc/cmdline 직접 읽기로 근본 해결한 기록'
date: '2026-04-09'
tags: [devops, debugging, linux]
---

QA Agent를 알파 환경에 올리고 며칠 돌리니 이상한 징후가 보였다.
시트가 진행되다 말고 멈추고, 새 실행을 걸어도 브라우저가 뜨지 않는 현상이 반복됐다.

서버에 들어가 `ps aux | grep chromium`을 쳐보니 좀비 프로세스가 한가득이었다.
부모는 이미 죽었는데 자식 Chromium들이 포트와 메모리를 붙잡고 남아있는 상태.
당연히 다음 실행이 꼬일 수밖에 없었다.

## 1차 시도 — SIGTERM 핸들링

처음엔 단순하게 접근했다.
종료 시그널을 잡아서 Chromium을 깔끔하게 닫으면 되겠거니 했다.

SIGTERM 핸들러를 붙이고, 프로세스 그룹 단위로 `kill`을 보내도록 고쳤다.
며칠은 괜찮아 보였다.

하지만 문제가 다시 생겼다.
Chromium은 단일 프로세스가 아니라, 메인 프로세스가 renderer·GPU·utility 자식들을 계속 fork하는 멀티프로세스 구조다.
부모를 죽여도 자식들이 살아남거나, 반대로 자식만 죽고 부모가 떠돌거나 하는 식으로 꼬이는 경우가 있었다.

프로세스 이름으로 걸러서 잡으려니, Chromium 계열 프로세스가 전부 비슷한 이름이라 어느 게 지금 세션의 것인지 구분이 안 됐다.

## 근본 해결 — `/proc/cmdline` 직접 읽기

결국 프로세스의 '이름'이 아니라 '어떻게 띄웠는지'를 직접 보기로 했다.

```bash
# PID의 실행 인자 확인
cat /proc/<pid>/cmdline | tr '\0' ' '
```

`/proc/<pid>/cmdline`은 프로세스가 시작될 때 넘겨받은 명령행 인자 전체를 보여준다.
Chromium 자식 프로세스는 `--type=renderer`, `--type=gpu-process` 같은 인자로 역할이 구분된다.
게다가 내가 띄운 인스턴스인지 다른 세션 잔재인지도, 런타임에 넘긴 플래그를 보면 알 수 있었다.

이걸로 식별 로직을 바꿨다.
단순히 프로세스 이름이 `chromium`인 걸 쓸어담는 게 아니라, `cmdline`을 읽어서 이 세션이 띄운 프로세스인지 확인한 뒤에만 정리하도록.

```bash
# 현재 세션이 띄운 chromium 자식만 식별
for pid in $(pgrep -f chromium); do
  cmd=$(tr '\0' ' ' < /proc/$pid/cmdline)
  echo "$pid $cmd"
done | grep -E '<내 세션 마커>'
```

실제 코드에서는 마커 역할을 할 고유 인자를 Chromium 실행 시 함께 넘기도록 했다.
그러면 `cmdline`에서 그 마커가 보이는 프로세스만, 그리고 Chromium 트리에 속한 프로세스만 선택적으로 종료할 수 있다.

이렇게 바꾸고 나니 좀비가 더 이상 쌓이지 않았다.
이전엔 하루만 지나도 프로세스가 수십 개씩 남아있었는데, 지금은 실행 큐가 비면 서버도 깨끗하다.

## 남은 과제

`/proc/cmdline` 기반 식별로 실질적인 문제는 잡았다.
다만 프로세스가 왜 처음부터 좀비가 됐는지, Chromium 자체의 종료 시퀀스에서 어디가 꼬이는지는 아직 완전히 못 잡았다.

일단 증상은 해결됐으니 여기까지.

> 참고
> - [/proc/pid/cmdline — Linux man page](https://man7.org/linux/man-pages/man5/proc.5.html)
> - [Chromium 멀티프로세스 아키텍처 문서](https://www.chromium.org/developers/design-documents/multi-process-architecture/)
