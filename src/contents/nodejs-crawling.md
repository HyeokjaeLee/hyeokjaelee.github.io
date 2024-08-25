---
title: '크롤링을 통한 데이터 수집하기'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a'
description: 'Node.js 크롤링을 통한 데이터 수집'
date: '2021-08-31'
tags: [data]
---

이전에 Tensorflow 학습에 사용하는 데이터 수집을 위한 크롤링 코드를 파이썬으로 작성했던 적이 있었는데 이번에 Javascript를 이용한 프로젝트에서 크롤링할 일이 생겨서 관련 내용을 정리해 봤다.

## 도구 선택

크롤링에 활용 가능한 도구는 언어별로 Jsoup(Java), BeautifulSoup(Python) 등 여러 종류가 있지만 이번 포스트에서는 Node.js 도구들을 이용해 OpenInsider(해외 내부자 거래 정보 사이트)를 크롤링하는 과정을 간단하게 설명해보려 한다.

> 언어마다 도구는 달라도 동작 방식은 대체로 비슷함

Node.js에서도 크롤링에 사용할 수 있는 도구는 많고 그중에 용도에 맞게 선택하면 된다.

해당 페이지는 로그인도 필요 없고 따로 크롤링이 차단되어 있지도 않기 때문에 단순 http 라이브러리와 parsing 라이브러리만 사용해도 크롤링이 가능하다.

만약 크롤링할 페이지가 클라이언트 사이드에서 비동기적으로 렌더링 되거나 크롤러의 접근이 막혀있다면 이 방법으로는 수집 가능한 데이터가 한정적이다.

이런 경우 속도는 느리지만 직접 브라우저를 핸들링해서 크롤링하는 방법이 있다. (ex: Puppeteer)

## 패키지 설치

```
#npm 사용시
npm install axios cheerio

#yarn 사용시
yarn add axios cheerio
```

### axios

주로 사용했던 http 패키지 request가 deprecated 되어서 성능이 좋다는 axios를 사용함

### cheerio

parsing 라이브러리 없이도 axios를 통해 받아온 string 값을 직접 파싱 할 수 있지만 방대한 html 코드를 직접 파싱 하는 건 비효율적임

cheerio는 이러한 데이터를 jquery와 유사한 문법을 통해 파싱 가능하게 해 줌

## 수집할 대상의 selector 찾기

크롤러가 찾아갈 정보의 위치를 나타내는 여러 가지 형식이 있지만 우리는 그중 selector를 이용한다.

원하는 정보를 개발자 도구로 열어보면 해당 정보를 포함하는 html 태그를 확인할 수 있다.

우리는 이 태그의 selector를 복사해야 한다.

거래 날짜와 해당 주식의 ticker 값을 받아오기 위한 selector를 복사해보자
![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/c9cd8b87-f909-475c-80fe-4f63fb05ad2a)

### 첫 번째 값의 Selector

```
/*거래 날짜*/
#tablewrapper > table > tbody > tr:nth-child(1) > td:nth-child(3) > div

/*ticker*/
#tablewrapper > table > tbody > tr:nth-child(1) > td:nth-child(4) > b > a
```

이 구조를 보면 거래 하나에 대한 정보는 하나의 tr 태그에 포함되어 있음을 알 수 있다.

## 스크립트 작성

편의를 위해 파일명은 index.js로 하고 코드를 작성한다.

```javascript
const cheerio = require('cheerio');
const axios = require('axios');

(async () => {
  //크롤링 대상 URL, axios의 get은 비동기 함수이므로 async-await을 사용한다.
  const html = await axios.get('http://openinsider.com/insider-purchases-25k'),
    $ = cheerio.load(html.data);

  const trElements = $('#tablewrapper > table > tbody > tr');
  const insiderTradeData = trElements
    .map((index, tr) => ({
      date: $(tr).find('td:nth-child(3) > div').text(),
      ticker: $(tr).find('td:nth-child(4) > b > a').text(),
    }))
    .toArray();
  console.log(insiderTradeData);
})();
```

## 실행

```
node index
```

실행하면 다음과 같은 수집한 정보들이 출력됨을 확인할 수 있다.
![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/dc8fc27f-9dcc-4cfc-b0b2-14ff72dab37b)
