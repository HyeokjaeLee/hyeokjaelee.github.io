---
title: 'Copilot 사용 후기'
titleImage: '../images/contents/copilot-review/copilot.png'
description: 'Github의 코딩 AI, Copilot 한 달 사용 리뷰'
date: '2021-08-26'
tags: [etc]
---

Copilot 프리뷰 초대장을 받고 한 달 정도 실사용해보면서 느낀 점들을 공유해보려 한다.

## Copilot

Copilot은 GPT-3를 기반으로 Github에 올라와 있는 수많은 코드들을 학습해 만든 코딩 AI이다.

Github에서 얼마 전 [Copilot Technical Preview](https://copilot.github.com/)를 공개했고 바로 다운로드해서 사용하지는 못하고 위 링크에서 신청한 후에 초대장을 받아야 사용 가능했다.

![Copilot 초대장](../images/contents/copilot-review/copilot-invite.png)

Github 활동량이 많을수록 빠르게 수락된다고 하던데 내 기준으로 7월 초쯤에 신청하고 일주일 정도 후에 초대장을 받은 것 같다.

## 한 달간 사용해본 느낌

일단 이전에 봤던 GPT-3를 이용해 작문하는 것을 매우 인상적으로 보았기 때문에 같은 기반인 Copilot 역시 기대가 컸다.

내가 주석이나 함수명을 잘 짓는 편은 아니라고 생각하는데 내 의도를 잘 파악해서 코드를 작성해주는 걸 보고 좀 놀랐고 가끔 내가 머릿속으로 생각해놨던 코드를 작성하다 보면 거의 완벽하게 완성해줄 때는 정말 감탄했다.

하지만 아직 AI가 개발자를 대체할 거다 이런 이야기를 할 정도는 아닌 것 같다.

Copilot이 개발자의 대체라기보다는 개발자의 개발을 좀 더 편하게 해주는 도구 정도로 느껴졌다.

주석과 이름만으로 완성되는 코드들도 어느 정도 있었지만 대부분의 경우에는 어느 정도 코드를 완성하면 뒷부분을 채워주는 정도 거나 큰 틀은 내 생각대로 작성되었지만 중간중간 의도를 벗어나거나 오류가 있는 코드들도 있어서 수정해가면서 코드를 작성해야 했다.

### 장점

- 오류가 있는 코드가 작성되더라도 큰 틀은 의도에서 크게 벗어나는 경우가 적어 실제로 내가 작성해야 하는 코드량은 줄어듦
- 먼저 작성했던 코드에서 사용하던 변수, 함수 등의 자동완성이 VSC의 그것보다 편리함
  > VSCode의 자동완성은 어느 정도 코드를 작성하면 선언된 변수 또는 함수 중에 선택해야 하지만 Copilot은 문맥상 알맞은 것을 추천해 줌
- 시간 계산이나 단위 변환 등 대중적인 함수는 대부분 완벽하게 작성해줌

### 단점

- 코드 작성 스타일이 내가 작성하고 있는 스타일과 안 맞을 때가 많음
- AI가 예상한 코드가 표시될 때 내가 작성 중인 코드의 가독성을 해침
- 오류가 있는 코드로 작성하는 경우가 많음
- 중괄호를 잘못 닫는 경우가 많아서 가끔 생각 없이 코딩할 때 Copilot이 잘못 닫은 괄호를 찾아야 하는 경우도 있음

## 내 생각

분명히 Copilot이 개발자의 생산성에 도움이 되는 도구임에는 분명하지만 생각보다 오류도 많고 너무 맹신하고 코드를 작성할 수는 없을 것 같다.

또한 Github에 있는 방대한 량의 코드를 학습한 AI가 작성해주는 코드가 저작권이 없는 코드라는 보장이 없으니 단순 Toy project가 아닌 수익성이 있는 프로그램을 작성할 때는 사용에 주의해야 할 것 같다.

이전에 사용하던 VSC 익스텐션 중에 Tabnine AI가 비슷한 기능을 했었지만 확실히 Copilot의 학습 데이터 크기와 방식이 달라 정확도는 Copilot이 월등해 보인다.

Tabnine AI는 매달 무료로 작성해주는 코드의 양이 정해저 있고 그 이후로는 유료 결제를 해야 사용할 수 있는데 아마 Copilot도 비슷한 수익 모델을 가질 걸로 예상한다.