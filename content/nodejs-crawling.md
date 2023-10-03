---
title: '크롤링을 통한 데이터 수집하기'
titleImage: 'https://user-images.githubusercontent.com/71566740/139003885-ded14d60-8ae6-4308-ba25-7bf6375d7e1a.png'
description: 'Node.js 크롤링을 통한 데이터 수집'
date: '2021-08-31'
tags: [data]
---

나는 보통 API를 만들거나 Tensorflow 학습에 사용하는 데이터를 수집하는데 크롤링을 이용한다.

크롤링에 활용 가능한 도구는 언어별로 Jsoup(Java), BeautifulSoup(Python) 등 여러 종류가 있지만 이번 포스트에서는 내가 자주 사용하는 Javascript, Node.js 도구들을 이용해 [OpenInsider](http://openinsider.com/insider-purchases-25k)(해외 내부자 거래 정보 사이트)를 크롤링하는 과정을 간단하게 설명해보려한다.
(언어마다 도구는 달라도 동작 방식은 대체로 비슷함)

## 크롤링(Crawling)

크롤링은 웹 페이지에서 원하는 데이터를 추출해 내는 행위이다.

크롤링을 위해 개발된 소프트웨어를 크롤러(Crawler)라 한다.

## 도구 선택

Node.js에서도 크롤링에 사용할 수 있는 도구는 많고 그중에 용도에 맞게 선택하면 된다.

해당 페이지는 로그인도 필요 없고 따로 크롤링이 차단되어 있지도 않기 때문에 단순 http 라이브러리와 parsing 라이브러리만 사용해도 크롤링이 가능하다.

만약 특정 이유로 사람이 직접 데이터를 수집하는 것처럼 브라우저를 핸들링하는 방법으로 크롤링 해야 한다면 속도는 느리지만 Chromium을 제어하는 도구들(Puppeteer 등)을 사용하면 된다. (시간이 된다면 Puppeteer 사용방법도 다뤄볼 예정)

### 📚 Node.js 라이브러리

#### HTTP 라이브러리: Axios

http 라이브러리에는 종류가 굉장히 많고 나는 평소 Request를 자주 사용해 왔는데 해당 라이브러리가 deprecated 되었다는 소식을 듣고 성능이 좋다는 Axios를 사용해 보기로함

#### Parsing 라이브러리: Cheerio

사실 parsing 라이브러리는 없어도 직접 파싱 해서 사용할 수 있지만 방대한 량의 html 코드를 파싱 하는 과정에서 코드가 복잡해지고 가독성도 떨어진다.

여기서는 jQuery 문법을 그대로 사용할 수 있는 Cheerio를 사용해서 파싱 하겠다.

## 개발환경 설정

### 새 프로젝트 생성

```bash
$ mkdir <프로젝트 이름>
$ cd <프로젝트 이름>
$ npm init
```

### 사용할 node.js 모듈 설치

```bash
npm install axios cheerio
```

## 크롤링 맛보기

이제 원하는 정보들의 위치를 찾아야 한다.

원하는 정보를 오른쪽 마우스로 클릭후 검사를 사용하면 쉽게 찾을 수 있다.

거래 날짜와 해당 주식의 ticker 값을 받아오기 위한 selector를 복사해보자

![test](https://user-images.githubusercontent.com/71566740/131478329-82d599e6-56fa-44df-b80a-e609896315f8.png)

첫번째 값을 기준으로 각 정보의 slector는 다음과 같은걸 확인 할 수 있다.

**거래날짜**: `#tablewrapper > table > tbody > tr:nth-child(1) > td:nth-child(3) > div`

**ticker**: `#tablewrapper > table > tbody > tr:nth-child(1) > td:nth-child(4) > b > a`

이 구조를 보면 한 가지 거래 정보는 같은 tr태그에 포함되어 있다는 걸 알 수 있다.

### index.js

생성한 프로젝트에 index.js 파일을 만들고 코드를 작성한다.

여러 가지 방법이 있겠지만 나는 map 메서드를 이용해 모든 tr태그들의 거래 날짜와 정보를 가진 Object Array를 출력하는 코드로 작성했다.

```javascript{numberLines: true}
const cheerio = require("cheerio");
const axios = require("axios");

(async () => {
  //크롤링 대상 URL, axios의 get은 비동기 함수이므로 async-await을 사용한다.
  const html = await axios.get("http://openinsider.com/insider-purchases-25k"),
    $ = cheerio.load(html.data);

  const trElements = $("#tablewrapper > table > tbody > tr");
  const insiderTradeData = trElements
    .map((index, tr) => ({
      date: $(tr).find("td:nth-child(3) > div").text(),
      ticker: $(tr).find("td:nth-child(4) > b > a").text(),
    }))
    .toArray();
  console.log(insiderTradeData);
})();
```

### 실행

`node index`로 실행해보면 결과는 다음과 같이 크롤링된 정보들을 확인할 수 있다.

![test](https://user-images.githubusercontent.com/71566740/133531609-93363fba-e51e-47aa-b03a-5cad03bc1795.png)

## 마지막으로

- 위에서 사용했던 http 라이브러리나 parsing 라이브러리 둘 다 크롤링에 활용 가능한 도구이지 '크롤링만을 위한 도구'가 아니다.

  해당 라이브러리가 어떤 역할을 하는지 직접 찾아보는게 좋다.

- 크롤링은 꼭 개발자가 아니더라도 원하는 데이터를 자급자족할 수 있다는 점에서 활용도가 높다.

  위에서 다뤘던 예제는 기초적인 크롤링 방법만을 다룬 것이므로 실제 크롤링을 이용해 무언가를 하려면 대상의 URL 규칙성, 페이지의 구조 등을 직접 분석해보면서 코드를 작성하는 방법을 고민해봐야 한다.

- 크롤링은 사람이 직접 데이터를 수집하는 것보다 훨씬 빠른 속도로 서버에 다수에 요청을 보내서 데이터를 응답받기 때문에 크롤링 대상 서버에 문제를 발생시킬 수 있다.

  위와 같은 이유로 크롤링이 차단되어 있는 사이트들도 있으니 크롤링이 허용되어 있는 사이트인지 확인하는 것도 중요하다.

- 크롤링으로 처벌을 받은 판례가 있으니 실제 서비스를 위한 코드를 작성할 때는 해당 정보가 크롤링이 허용되는 정보인지 잘 확인해 보시고 사용하는 게 좋을 것 같다.
