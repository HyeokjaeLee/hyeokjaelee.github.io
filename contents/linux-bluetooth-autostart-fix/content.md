---
title: 'TLP가 블루투스를 죽였다'
description: 'Linux 노트북에서 블루투스가 부팅 시 자동으로 켜지지 않던 문제를 잡은 기록이다. 원인은 TLP 설치 시 함께 mask된 systemd-rfkill 서비스였다.'
date: '2026-04-24'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

## 블루투스가 켜지지 않았다

노트북을 켤 때마다 블루투스가 꺼져 있었다.
마우스를 연결하려고 설정을 열 때마다 토글을 직접 눌러야 했다.
한두 번이면 넘어갈 일이 매일 반복되니 결국 추적하기로 했다.

rfkill 상태를 먼저 봤다.
`rfkill list`를 입력하니 블루투스가 `Soft blocked: yes`로 잡혀 있었다.
즉 하드웨어가 막힌 게 아니라 소프트웨어 단에서 차단된 상태였다.
매 부팅마다 누군가가 토글을 꺼도록 만들고 있다는 뜻이었다.

## 원인은 TLP에 있었다

`systemctl status systemd-rfkill`을 확인해 보니 서비스가 비활성화돼 있었다.
그것도 단순히 `disabled`가 아니라 `mask` 처리까지 돼 있었다.
누가 이렇게 만들었는지 거슬러 올라가다 보니 TLP가 나왔다.

TLP는 노트북 전력 관리 도구다.
배터리 시간을 늘리려고 설치했는데 블루투스와 Wi-Fi의 rfkill 제어를 자기가 가져가면서 systemd 기본 서비스를 비활성화한다.
문서를 찾아보면 의도된 동작이라고 나온다.
TLP 입장에서는 자기가 전원 상태를 관리하겠다는 건데, 결과적으로는 블루투스가 매번 꺼진 채로 부팅됐다.

## 서비스를 다시 켰다

`systemctl unmask systemd-rfkill`로 마스크를 풀었다.
그 다음 `systemctl enable --now systemd-rfkill`로 활성화했다.
재부팅해서 확인해 보니 블루투스가 이전 상태 그대로 켜진 채로 올라왔다.
이제 매일 토글을 누르지 않아도 된다.

한 가지 단서는 남았다.
TLP 자체가 나쁜 건 아니다.
다만 rfkill 제어를 TLP에 맡길 건지, systemd에 맡길 건지 명확히 정해야 한다.
둘이 같이 두면 어느 쪽이 우선인지 매번 헷갈린다.
