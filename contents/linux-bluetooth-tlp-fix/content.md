---
title: 'Linux 블루투스 자동 활성화 문제 해결'
description: 'Linux 부팅 시 블루투스가 자동 활성화되지 않는 문제 해결. 원인은 TLP 설치 시 systemd-rfkill 서비스 자동 비활성화. 서비스 재활성화로 해결.'
date: '2026-04-24'
tags: [journal]
titleImage: '@shared/assets/dev-diary.png'
---

개발 환경 문제를 해결한 날이었다.

QA 에이전트 작업은 쉬는 날이었는데, 노트북을 켤 때마다 블루투스가 안 켜져서 결국 추적했다.

## 문제 상황

Linux 노트북을 부팅할 때마다 블루투스가 자동으로 켜지지 않았다.

매번 설정 앱을 열어서 블루투스를 수동으로 켜야 했다.

무선 마우스와 키보드를 블루투스로 쓰고 있어서, 매번 수동으로 켜는 게 정말 귀찮았다.

귀찮지만 급한 문제는 아니라서 한동안 미뤄두고 있었다.

오늘은 다른 작업이 없어서 finally 파보기로 했다.

## 원인 추적

블루투스가 자동 활성화되려면 `systemd-rfkill` 서비스가 정상적으로 동작해야 한다.

이 서비스가 무선 장치의 전원 상태를 관리한다.

그런데 이 서비스가 비활성화되어 있었다.

`systemctl status systemd-rfkill`을 해보니 masked 상태였다.

masked는 서비스가 완전히 비활성화된 상태다. 단순히 stop된 게 아니라 아예 실행 자체가 차단된 것이다.

### TLP가 범인

왜 서비스가 masked되어 있을까?

원인을 추적해보니 TLP를 설치한 게 문제였다.

TLP는 Linux 전원 관리 도구다.

배터리 절약을 위해 TLP를 설치했는데, TLP 설치 과정에서 `systemd-rfkill` 서비스를 자동으로 비활성화한다.

TLP가 rfkill을 직접 관리하려고 기존 서비스를 끄는 거다.

TLP 입장에서는 중복 관리를 피하려는 합리적인 동작이지만, 블루투스 사용자 입장에서는 문제가 된다.

## 해결

`systemd-rfkill` 서비스를 다시 활성화했다.

```bash
sudo systemctl unmask systemd-rfkill.service
sudo systemctl enable --now systemd-rfkill.service
```

`unmask`로 서비스를 다시 사용 가능하게 만들고, `enable --now`로 부팅 시 자동 실행되도록 설정했다.

재부팅 후 블루투스가 자동으로 켜지는 걸 확인했다.

문제 해결에 걸린 시간은 원인 파악 포함 30분이었다.

> TLP와 systemd-rfkill은 rfkill 제어권을 두고 충돌한다. TLP를 쓰면서 블루투스 자동 활성화도 필요하면 systemd-rfkill을 수동으로 다시 켜야 한다.

## 마무리

단순한 문제지만 원인을 모르면 계속 수동으로 켜야 하니까 일상이 피곤해진다.

TLP가 rfkill을 납치한다는 걸 알고 나면 해결은 30초면 된다.

미뤄두고 있던 문제를 풀고 나니 마음이 편해졌다.
