---
title: 'Spawn node-gyp ENOENT'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/b40ef5d8-6697-41ff-83e6-3e79aef7617a'
description: 'Spawn node-gyp ENOENT 에러 해결'
date: '2022-09-17'
tags: [issues]
---

## 증상

새로 개발한 react와 storybook기반 디자인 시스템 모듈을 실제 프로젝트에 적용한 이후 node.js 환경 모든 프로젝트에서 새로운 dependencies를 설치하면 다음과 같은 오류가 발생함

> 실제 dependencies는 정상적으로 설치됨

```
Error running install script for optional dependency: "/Users/hyeokjaelee/wwp-frontend-lib/node_modules/watchpack-chokidar2/node_modules/fsevents: Command failed.
Exit code: 1
Command: node install.js
Arguments:
Directory: /Users/hyeokjaelee/wwp-frontend-lib/node_modules/watchpack-chokidar2/node_modules/fsevents
Output:
node:events:504
throw er; // Unhandled 'error' event
^

Error: spawn node-gyp ENOENT
at Process.ChildProcess.\_handle.onexit (node:internal/child_process:283:19)
at onErrorNT (node:internal/child_process:478:16)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
Emitted 'error' event on ChildProcess instance at:
at Process.ChildProcess.\_handle.onexit (node:internal/child_process:289:12)
at onErrorNT (node:internal/child_process:478:16)
at processTicksAndRejections (node:internal/process/task_queues:83:21) {
errno: -2,
code: 'ENOENT',
syscall: 'spawn node-gyp',
path: 'node-gyp',
spawnargs: [ 'rebuild' ]
}"
info This module is OPTIONAL, you can safely ignore this error
✨ Done in 4.52s.
```

## 해결

- fsevents 모듈 전역 설치 (macOS 개발 환경에서만 사용되는 디렉터리 변경사항 감시 모듈)
- 프로젝트 package.json에 optionalDependencies 항목 추가

```
{
    "optionalDependencies": {
        "fsevents": "*"
    }
}
```

위 두가지 방법을 시도해 봤지만 변화가 없음

현재 nvm을 통해 모든 프로젝트의 node.js의 버전을 관리하고 있는데 오류가 발생하는 모든 프로젝트가 같은 버전의 node 버전을 사용하고 있는 것을 확인하고 해당 버전을 nvm에서 삭제 후 재설치했더니 오류가 해결됨
