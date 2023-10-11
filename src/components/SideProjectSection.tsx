import React from 'react';

import { AboutItem } from './AboutItem';
import { ABOUT_TITLE_ID } from './AboutNavigation';

export const SideProjectSection = () => (
  <section>
    <h2 className="font-bold text-3xl" id={ABOUT_TITLE_ID.SIDE_PROJECT}>
      🪀 Side Project
    </h2>
    <p className="text-sm mb-6 ml-1 font-bold text-zinc-400">1인 개발</p>
    <ul>
      <AboutItem
        title="실시간 번역 채팅앱 - Briend"
        id={ABOUT_TITLE_ID.BRIEND}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'Next.js',
            backgroundColor: '#000000',
          },
          {
            name: 'Zustand',
            logo: 'React',
            backgroundColor: '#423E39',
          },
          {
            name: 'Pusher',
            backgroundColor: '#300D4F',
          },
          {
            name: 'Tailwind',
            logo: 'TailwindCSS',
            backgroundColor: '#06B6D4',
          },
          {
            name: 'PWA',
            backgroundColor: '#5A0FC8',
          },
        ]}
        experiences={[
          '유지 코스트를 줄이기 위해 Indexed DB를 이용해 정보를 저장하고 서버 및 외부 API 호출을 최소화 할 수 있게 최대한 많은 로직을 클라이언트가 처리할 수 있도록 설계했어요.',
          'UX를 고려해 최소한의 입력으로 기능을 사용할 수 있도록 구현했어요.',
          'Next.js 13의 신기능들을 적극 활용해 Backend와 Frontend를 동시에 개발했어요.',
          '이전에 개발한 React 컴포넌트 라이브러리를 활용해 개발 속도를 높였어요.',
        ]}
        links={[
          {
            name: 'Briend 번역 채팅앱 개발',
            href: '/briend',
          },
          {
            name: 'briend',
            href: 'https://github.com/HyeokjaeLee/briend',
            type: 'github',
          },
          {
            name: '언어의 장벽없는 새로운 사람과의 대화 - Briend',
            href: 'https://briend.vercel.app',
            type: 'product',
          },
        ]}
      />
      <AboutItem
        title="리액트 컴포넌트 라이브러리 - Pastime UI"
        id={ABOUT_TITLE_ID.PASTIME_UI}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'React',
            backgroundColor: '#61DAFB',
            blackLogo: true,
          },
          {
            name: 'Storybook',
            backgroundColor: '#FF4785',
          },
          {
            name: 'SCSS',
            logo: 'Sass',
            backgroundColor: '#CD6799',
          },
          {
            name: 'CSS Modules',
            logo: 'CSSModules',
            backgroundColor: '#000000',
          },
          {
            name: 'Vite',
            backgroundColor: '#646CFF',
          },
        ]}
        experiences={[
          '사용자의 입력을 받는 컴포넌트들이 외부 상태를 업데이트 시키지 않고 유효성 검사 기능을 자체적으로 제공할 수 있게 개발했어요.',
          '대부분의 HTML Props를 지원하고 외부에서 커스텀할 수 있도록 설계했어요.',
          'Javascript Object의 특징을 활용해 사용자의 입력을 받는 컴포넌트들이 외부 렌더링을 발생시키지 않도록 설계했어요.',
          'Storybook을 이용해 영어와 한국어로 문서화 후 NPM에 배포했어요.',
          '해당 라이브러리를 사용해 개인 프로젝트들을 개발하면서 재사용성과 유지보수성을 높였어요.',
          'SCSS를 이용해 컴포넌트를 스타일링하고 공통 로직을 최대한 재활용 하면서 번들 사이즈를 최소화 했어요.',
          'Github action을 통해 자동으로 배포하고 문서할 수 있게 구성했어요.',
        ]}
        links={[
          {
            name: 'pastime-ui',
            href: 'https://github.com/HyeokjaeLee/pastime-ui',
            type: 'github',
          },
          {
            name: 'Pastime UI',
            href: 'https://hyeokjaelee.github.io/pastime-ui',
            type: 'storybook',
          },
        ]}
      />
      <AboutItem
        title="비공식 한국 웹툰 API - Korea webtoon API"
        id={ABOUT_TITLE_ID.KOREA_WEBTOON_API}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'NestJS',
            backgroundColor: '#E0234E',
          },
          {
            name: 'MongoDB',
            backgroundColor: '#47A248',
          },
        ]}
        experiences={[
          '여러가지 웹툰 플랫폼을 크롤링한 데이터를 정형화하고 API로 제공해요.',
          '배포 후 사용자들의 요구사항을 반영해 기능을 추가하고 유지보수 했어요.',
        ]}
        links={[
          {
            name: 'Webtoon API 개발',
            href: '/korea-webtoon-api-update',
          },
          {
            name: 'korea-webtoon-api',
            href: 'https://github.com/HyeokjaeLee/korea-webtoon-api',
            type: 'github',
          },
        ]}
      />
      <AboutItem
        title="웹툰 종합 플랫폼 - Webtoon hub"
        id={ABOUT_TITLE_ID.WEBTOON_HUB}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'React',
            backgroundColor: '#61DAFB',
            blackLogo: true,
          },
          {
            name: 'SCSS',
            logo: 'Sass',
            backgroundColor: '#CD6799',
          },
          {
            name: 'Bootstrap',
            backgroundColor: '#7952B3',
          },
          {
            name: 'PWA',
            backgroundColor: '#5A0FC8',
          },
        ]}
        experiences={[
          'Korea Webtoon API 활용 예시 프로젝트에요.',
          '교내에서 프로그램 저작권 등록을 제안 받고 등록했어요.',
          '여러가지 웹툰 정보에 대한 검색과 해당 웹툰 사이트로의 링크를 제공해요.',
        ]}
        links={[
          {
            name: 'webtoon-hub',
            href: 'https://github.com/HyeokjaeLee/webtoon-hub',
            type: 'github',
          },
        ]}
      />
      <AboutItem
        title="공주대학교 온라인 강의 시스템 편의성 향상 프로그램 - KNU LMS scheduler"
        id={ABOUT_TITLE_ID.KNU}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'React',
            backgroundColor: '#61DAFB',
            blackLogo: true,
          },
          {
            name: 'Electron',
            backgroundColor: '#47848F',
          },
        ]}
        experiences={[
          '팬데믹으로 인해 온라인 강의가 활성화 되면서 온라인 강의 시스템의 불편함을 느껴 개발했어요.',
          '실시간으로 개인 강의 페이지들을 크롤링하고 출석, 과제, 시험 등의 마감 기한을 알려줘요.',
          'Electron을 활용해 데스크탑 앱으로 만들어 대학생 커뮤니티에 공유하고 좋은 평가를 받았어요.',
          '내가 만든 프로그램이 많은 사람들에게 도움이 되었을때 뿌듯함을 느꼈어요.',
        ]}
        links={[
          {
            name: 'KNU LMS Scheduler 프로젝트',
            href: '/knu-lms-scheduler',
          },
          {
            name: 'knu-lms-scheduler',
            href: 'https://github.com/HyeokjaeLee/knu-lms-scheduler',
            type: 'github',
          },
        ]}
      />
      <AboutItem
        title="Emoji를 활용하는 git 커밋메시지 에디터 - Gititle"
        id={ABOUT_TITLE_ID.GITITLE}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'Vue.js',
            backgroundColor: '#4FC08D',
          },
          {
            name: 'SCSS',
            logo: 'Sass',
            backgroundColor: '#CD6799',
          },
          {
            name: 'PWA',
            backgroundColor: '#5A0FC8',
          },
        ]}
        experiences={[
          '커밋 메시지에 이모지를 활용하고 정해진 규칙에 맞춰 작성하려고 개발했어요.',
          'Node.js 환경을 사용하지 않고 개발했어요.',
        ]}
        links={[
          {
            name: 'Gititle 프로젝트',
            href: '/gititle-project',
          },
          {
            name: 'gititle',
            href: 'https://github.com/HyeokjaeLee/gititle',
            type: 'github',
          },
          {
            name: 'Gititle',
            href: 'https://hyeokjaelee.github.io/gititle',
            type: 'product',
          },
        ]}
      />
      <AboutItem
        title="개인 블로그 - hyeokjaelee.github.io"
        id={ABOUT_TITLE_ID.BLOG}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'Gatsby',
            backgroundColor: '#663399',
          },
          {
            name: 'GraphQL',
            backgroundColor: '#E10098',
          },
          {
            name: 'Tailwind',
            logo: 'TailwindCSS',
            backgroundColor: '#06B6D4',
          },
        ]}
        experiences={[
          '이전에 개발한 React 컴포넌트 라이브러리를 활용해 개발 속도를 높였어요.',
          'Markdown을 활용해 글을 작성하고 Github action을 통해 자동으로 배포할 수 있게 구성했어요.',
        ]}
        links={[
          {
            name: 'Gatsby 블로그를 개발하면서',
            href: '/blog-remake-review2',
          },
          {
            name: 'Next.js 블로그를 떠나는 이유',
            href: '/blog-remake-review1',
          },
          {
            name: 'hyeokjaelee.github.io',
            href: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io',
            type: 'github',
          },
          {
            name: '덕업일치 개발자',
            href: 'https://hyeokjaelee.github.io',
            type: 'product',
          },
        ]}
      />
      <AboutItem
        title="코드 컨벤션 라이브러리 - Code convetion packages"
        id={ABOUT_TITLE_ID.CODE_CONVENTION}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'React',
            backgroundColor: '#61DAFB',
            blackLogo: true,
          },
          {
            name: 'Prettier',
            backgroundColor: '#F7B93E',
            blackLogo: true,
          },
          {
            name: 'ESLint',
            backgroundColor: '#4B32C3',
          },
          {
            name: 'Stylelint',
            backgroundColor: '#263238',
          },
        ]}
        experiences={[
          'PNPM을 통해 모노레포 구조로 설계해 각 린트 설정들을 독립적으로 설치하고 사용할 수 있게 했어요.',
          '개인 프로젝드들에 적용해 유지보수성을 높였어요.',
          'Github action을 통해 자동으로 NPM에 배포할 수 있게 구성했어요.',
        ]}
        links={[
          {
            name: 'code-convetion-packages',
            href: 'https://github.com/HyeokjaeLee/code-convetion-packages',
            type: 'github',
          },
        ]}
      />
      <AboutItem
        title="비공식 한국 COVID-19 API - Korea COVID-19 API"
        id={ABOUT_TITLE_ID.KOREA_COVID_19_API}
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'Express',
            backgroundColor: '#000000',
          },
          {
            name: 'GraphQL',
            backgroundColor: '#E10098',
          },
        ]}
        experiences={[
          '여러 API에 존재하는 COVID-19 관련 데이터를 정형화하고 API로 제공해요.',
          'GraphQL의 편리함을 느껴 처음으로 GraphQL API를 개발했어요.',
          '외부 API의 변경에 따라 유지보수 했어요.',
        ]}
        links={[
          {
            name: 'COVID-19 API 업데이트',
            href: '/covid-19-api-update',
          },
          {
            name: 'code-convetion-packages',
            href: 'https://github.com/HyeokjaeLee/code-convetion-packages',
            type: 'github',
          },
        ]}
      />
      <AboutItem
        title="한국 COVID-19 Dashboard - COVID-19 dashboard"
        id={ABOUT_TITLE_ID.KOREA_COVID_19_DASHBOARD}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'SCSS',
            logo: 'Sass',
            backgroundColor: '#CD6799',
          },
        ]}
        experiences={[
          '프레임워크 없이 개발했어요.',
          'Javascript를 처음 학습하면서 개발했어요.',
        ]}
        links={[
          {
            name: 'covid19-dashboard',
            href: 'https://github.com/HyeokjaeLee/covid19-dashboard',
            type: 'github',
          },
        ]}
      />
    </ul>
  </section>
);
