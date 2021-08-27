---
emoji: "📝"
title: "좋은 커밋 메시지 작성하기"
description: "커밋 메시지 작성 규칙을 공유합니다."
date: "2021-07-03"
tag: [Git]
---

## 좋은 Commit Message의 필요성

코드를 작성하다 보면 간혹 이전 코드를 참고 또는 회귀해야 할 경우가 있습니다.
<br>커밋 수가 적다면 상관없지만 커밋 수가 많아지면 많아질수록 수많은 커밋 기록 중에 원하는 시점을 찾는 것이 어려울 수 있습니다.
<br>또한 다른 사람이 내 커밋기록을 참고해야 하는경우가 있을 수도 있습니다.
<br>이러한 경우에 커밋 메시지가 제대로 작성되어 있다면 보다 원활하게 원하는 정보를 찾을 수 있습니다.

## Commit Message

:warning: 커밋 메시지 작성법은 큰 틀은 있지만 개발자분들마다 스타일이 다르고 정확하게 이렇게 작성해야 한다는 규칙은 없으므로 해당 규칙은 다른 개발자분들의 여러 커밋메시지를 보고 제가 보기 편하다고 생각하는 구조로 작성한 것입니다.

### 구조

```
<type>(<scope>): <subject> //header

<body> //body

<footer> //footer
```

### 규칙

- #### Header(필수)

  - 본문과 빈 행으로 구분한다.
  - 50글자 내로 제한한다.
  - 첫 글자는 대문자로 작성한다.
  - 끝에 특수문자를 넣지 않는다.
    > 마침표, 느낌표, 물음표
  - 명령문으로 작성한다.
    > 한글로 작성 시: "고침", "추가", "삭제", "변경" 등<br>
    > 영어로 작성 시: "Fix", "Add", "Delete", "Change" 등
  - 과거형으로 작성하지 않는다.

- #### Body(생략 가능)

  - 각 행은 72글자 내로 제한한다.
  - 어떻게 보다는 무엇과 왜를 설명한다.

- #### Footer(생략 가능)

  - 이슈 트래커 ID 작성한다.
  - "유형: #이슈 번호" 형식으로 작성한다.
    > Resolves: #123, #1234<br>
    > Ref: #124
  - 여러 개의 이슈 번호를 적을 때는 쉼표로 구분한다.
  - 이슈 트래커 유형
    > Fixes: issue 수정중<br>
    > Resovles: issue 해결<br>
    > Ref: 참고할 issue가 있을 때 사용<br>
    > Related to: 해당 커밋에 관련된 issue 번호 (아직 해결되지 않은 경우)

## :bulb:Header

- ### Type

  |    태그 이름     | 설명                                                                          | 관련 Emoji               |
  | :--------------: | :---------------------------------------------------------------------------- | :----------------------- |
  |       Feat       | 새로운 기능을 추가할 경우                                                     | ✨:sparkles              |
  |       Fix        | 버그를 고친 경우                                                              | 🐛:bug                   |
  |      Design      | CSS 등 사용자 UI 디자인 변경                                                  | 💄:lipstick              |
  | !BREAKING CHANGE | 대규모 수정                                                                   | 💥:boom                  |
  |     !HOTFIX      | 급하게 치명적인 버그를 고쳐야하는 경우                                        | 🚑:ambulance             |
  |      Style       | 코드 포맷 변경, 세미 콜론 누락,<br> 코드 수정이 없는 경우                     | 🎨:art                   |
  |     Refactor     | 프로덕션 코드 리팩토링                                                        | ♻️:recycle               |
  |     Comment      | 주석 추가 및 변경                                                             | 💡:bulb                  |
  |       Docs       | 문서를 수정한 경우                                                            | 📝:memo                  |
  |       Test       | 테스트 추가, 테스트 리팩토링<br>(프로덕션 코드 변경 X)                        | 🧪:test_tube             |
  |      Chore       | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우<br>(프로덕션 코드 변경 X) | 🏗️:building_construction |
  |      Create      | 새파일을 생성한 경우                                                          | 📰:newspaper             |
  |      Rename      | 파일 혹은 폴더명을 수정하거나<br>옮기는 작업만인 경우                         | 🚚:truck                 |
  |      Remove      | 파일을 삭제하는 작업만 수행한 경우                                            | 🔥:fire                  |
  |      Build       | 컴파일 후 코드, 새로운 패키지 업데이트                                        | 📦:package               |

  - 그외 여러가지 Commit Message에 활용하는 Emoji들은 [Gitmoji](https://gitmoji.dev/)에서 확인 가능

- ### Scope
  - 추가적인 문맥 정보를 제공하기 위한 목적으로 괄호 안에 작성
    > Fix(database)

## :mag:Example

- ### 영어로 작성 시

  ```
  🐛 Fix(Filter): Fix data filtering method

  * Fix bug that filtering method access parent variables.
  * Delete unnecessary code.

  Resoloves: #123, #1234
  ```

- ### 한글로 작성 시

  ```
  🐛 Fix(필터): 데이터 필터링 메소드 수정

  * 필터링 메소드가 상위 변수에 접근하는 버그 수정
  * 불필요한 코드 삭제

  Resoloves: #123, #1234
  ```

<br>
해당 포스트는 추가적으로 생각나는 요소가 있다면 내용을 추가 해나갈 예정입니다.
