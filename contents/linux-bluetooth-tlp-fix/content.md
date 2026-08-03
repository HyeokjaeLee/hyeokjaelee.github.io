---
title: 'Linux 블루투스 자동 활성화 문제 해결'
description: 'Linux 부팅 시 블루투스가 자동 활성화되지 않는 문제 해결. 원인은 TLP 설치 시 systemd-rfkill 서비스 자동 비활성화.'
date: '2026-04-24'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

개발 환경 문제를 해결한 날이었다.

## 블루투스 문제

Linux 노트북을 부팅할 때마다 블루투스가 자동으로 켜지지 않았다.

매번 수동으로 설정에서 블루투스를 켜야 했다.

귀찮지만 급한 문제는 아니라서 미뤄두고 있었다.

## 원인 추적

블루투스가 자동 활성화되려면 `systemd-rfkill` 서비스가 정상적으로 동작해야 한다.

그런데 이 서비스가 비활성화되어 있었다.

왜?

TLP를 설치한 게 원인이었다.

TLP는 Linux 전원 관리 도구다.

배터리 절약을 위해 TLP를 설치했는데, TLP 설치 과정에서 `systemd-rfkill` 서비스를 자동으로 비활성화해버린다.

TLP가 rfkill을 직접 관리하려고 기존 서비스를 끄는 거다.

## 해결

`systemd-rfkill` 서비스를 다시 활성화했다.

```bash
sudo systemctl unmask systemd-rfkill.service
sudo systemctl enable --now systemd-rfkill.service
```

재부팅 후 블루투스가 자동으로 켜지는 걸 확인했다.

> TLP와 systemd-rfkill은 rfkill 제어권을 두고 충돌한다. TLP를 쓰면서 블루투스 자동 활성화도 필요하면 systemd-rfkill을 수동으로 다시 켜야 한다.

## 마무리

단순한 문제지만 원인을 모르면 계속 수동으로 켜야 하니까 귀찮다.

TLP가 rfkill을 납치한다는 걸 알고 나면 해결은 30초면 된다.
