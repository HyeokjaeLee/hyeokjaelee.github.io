import React from 'react';

import { PostArticleNavigation } from './PostArticleNavigation';

export enum ABOUT_TITLE_ID {
  ABOUT_ME = 'about-me',
  WORK_EXPERIENCE = 'work-experience',
  CODESTATES = 'codestates',
  EMPLOY_PLATFORM = 'employ-platform',
  PAYMENT_SYSTEM = 'payment-system',
  COUPANG = 'coupang',
  EDP_CHAT_BOT = 'edp-chat-bot',
  DATA_COLLECT = 'data-collect',
  WORK_AUTOMATION = 'work-automation',
  REVIEW = 'review',
  SIDE_PROJECT = 'side-project',
  BRIEND = 'briend',
  PASTIME_UI = 'pastime-ui',
  KOREA_WEBTOON_API = 'korea-webtoon-api',
  WEBTOON_HUB = 'webtoon-hub',
  KNU = 'knu',
  GITITLE = 'gititle',
  BLOG = 'blog',
  CODE_CONVENTION = 'code-convention',
  KOREA_COVID_19_API = 'korea-covid-19-api',
  KOREA_COVID_19_DASHBOARD = 'korea-covid-19-dashboard',
  ETC = 'etc',
  EDU = 'edu',
}

export const AboutNavigation = () => (
  <PostArticleNavigation
    headings={[
      {
        value: 'About me',
        id: ABOUT_TITLE_ID.ABOUT_ME,
        depth: 1,
      },
      {
        value: 'Work experience',
        id: ABOUT_TITLE_ID.WORK_EXPERIENCE,
        depth: 1,
      },
      {
        value: 'CodeStates',
        id: ABOUT_TITLE_ID.CODESTATES,
        depth: 2,
      },
      {
        value: '채용 플랫폼 개발',
        id: ABOUT_TITLE_ID.EMPLOY_PLATFORM,
        depth: 3,
      },
      {
        value: '후불 결제 시스템 개발',
        id: ABOUT_TITLE_ID.PAYMENT_SYSTEM,
        depth: 3,
      },
      {
        value: 'Coupang',
        id: ABOUT_TITLE_ID.COUPANG,
        depth: 2,
      },
      {
        value: '배달파트너 센터 챗봇 개발',
        id: ABOUT_TITLE_ID.EDP_CHAT_BOT,
        depth: 3,
      },
      {
        value: '데이터 수집 / 클렌징 / 시각화',
        id: ABOUT_TITLE_ID.DATA_COLLECT,
        depth: 3,
      },
      {
        value: '업무 자동화',
        id: ABOUT_TITLE_ID.WORK_AUTOMATION,
        depth: 3,
      },
      {
        value: '이런 평가를 받았어요',
        id: ABOUT_TITLE_ID.REVIEW,
        depth: 3,
      },
      {
        value: 'Side project',
        id: ABOUT_TITLE_ID.SIDE_PROJECT,
        depth: 1,
      },
      {
        value: '실시간 번역 채팅앱 - Briend',
        id: ABOUT_TITLE_ID.BRIEND,
        depth: 2,
      },
      {
        value: '리액트 컴포넌트 라이브러리 - Pastime UI',
        id: ABOUT_TITLE_ID.PASTIME_UI,
        depth: 2,
      },
      {
        value: '비공식 한국 웹툰 API - Korea webtoon API',
        id: ABOUT_TITLE_ID.KOREA_WEBTOON_API,
        depth: 2,
      },
      {
        value: '웹툰 종합 플랫폼 - Webtoon hub',
        id: ABOUT_TITLE_ID.WEBTOON_HUB,
        depth: 2,
      },
      {
        value:
          '공주대학교 온라인 강의 시스템 편의성 향상 프로그램 - KNU LMS scheduler',
        id: ABOUT_TITLE_ID.KNU,
        depth: 2,
      },
      {
        value: 'Emoji를 활용하는 git 커밋메시지 에디터 - Gititle',
        id: ABOUT_TITLE_ID.GITITLE,
        depth: 2,
      },
      {
        value: '개인 블로그 - hyeokjaelee.github.io',
        id: ABOUT_TITLE_ID.BLOG,
        depth: 2,
      },
      {
        value: '코드 컨벤션 라이브러리 - Code convetion packages',
        id: ABOUT_TITLE_ID.CODE_CONVENTION,
        depth: 2,
      },
      {
        value: '비공식 한국 COVID-19 API - Korea COVID-19 API',
        id: ABOUT_TITLE_ID.KOREA_COVID_19_API,
        depth: 2,
      },
      {
        value: '한국 COVID-19 Dashboard - COVID-19 dashboard',
        id: ABOUT_TITLE_ID.KOREA_COVID_19_DASHBOARD,
        depth: 2,
      },
      {
        value: 'Etc',
        id: ABOUT_TITLE_ID.ETC,
        depth: 1,
      },
      {
        value: 'Education',
        id: ABOUT_TITLE_ID.EDU,
        depth: 1,
      },
    ]}
    title="Portfolio"
  />
);
