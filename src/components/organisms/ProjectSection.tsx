import { Button } from '@components/atoms/Button';
import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { useLocation } from '@reach/router';
import { cn } from '@utils/cn';
import React, { useState } from 'react';

import { SideProjectItem } from '../molecules/SideProjectItem';

export const ProjectSection = () => {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const displayType = useDisplayType();

  const isPdf = displayType === DISPLAY_TYPE.PDF;

  const isFull = useLocation().search.includes('full');

  return (
    <section>
      <h2 className="text-3xl font-bold">Side Projects.</h2>
      <p className="mb-6 ml-1 text-sm text-zinc-400">
        개인 성장과 불편함을 해소하기 위해 개발한 1인 오픈소스 프로젝트입니다.
      </p>
      <ul>
        <SideProjectItem
          description={`QR 스캔을 통해 양방향 번역을 지원하는 인스턴트 채팅앱입니다.  
처음엔 개인 컴포넌트 라이브러리와 Next 13 app directory 활용해 개발했고 현재는 Next 15와 shadcn 기반으로 전환했습니다.  
비용을 줄이기 위해 Indexed DB와 React-Query session cache를 적극 활용해 정보를 저장하고 서버 및 외부 API 호출을 최소화할 수 있도록 설계했습니다.`}
          id="briend"
          links={[
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
            {
              name: 'Briend 번역 채팅앱 개발',
              href: '/briend',
            },
          ]}
          list={[
            'Next.15, Tailwind v4, Bun 트러블 슈팅',
            'i18n (영어, 태국어, 일본어, 중국어, 한국어, 베트남어)',
            'API 호출 비용 최적화',
            'firebase 기반 실시간 채팅 로직 개발',
            '나라별 시간 formatting 로직 개발',
            'Anonymous 인증 및 SNS 로그인 & 계정 통합 로직 개발',
          ]}
          stacks={[
            {
              name: 'Bun',
              backgroundColor: '#000000',
            },

            {
              name: 'Next.js',
              logo: 'Next.js',
              backgroundColor: '#000000',
            },
            {
              name: 'ShadcnUI',
              backgroundColor: '#000000',
            },
            { name: 'tRPC', backgroundColor: '#2596BE' },
            {
              name: 'Tailwind',
              logo: 'TailwindCSS',
              backgroundColor: '#06B6D4',
            },
            {
              name: 'Firebase',
              backgroundColor: '#DD2C00',
            },

            {
              name: 'TypeScript',
              backgroundColor: '#3178C6',
            },
            {
              name: 'Zustand',
              logo: 'React',
              backgroundColor: '#423E39',
            },
            {
              name: 'PWA',
              backgroundColor: '#5A0FC8',
            },
          ]}
          title="Briend"
        />
        <SideProjectItem
          description={`개인 프로젝트에서 사용하기 위해 개발한 React 컴포넌트 라이브러리입니다.  
Storybook을 이용해 문서화하고 Github action을 통해 자동으로 배포할 수 있게 구성했습니다.  
사용자의 입력을 받는 컴포넌트들이 외부 상태를 업데이트시키지 않고 유효성 검사 기능을 자체적으로 제공합니다.  
최근에 해당 라이브러리 목적을 shadcn이 충족시켜줘 더이상 업데이트 하지 않고 있습니다.`}
          id="pastime-ui"
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
          list={[
            'Storybook을 이용해 문서화',
            'Github action을 통해 자동으로 배포',
            '사용자의 입력을 받는 컴포넌트들이 외부 상태를 업데이트시키지 않고 유효성 검사 기능을 자체적으로 제공',
          ]}
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
          title="Pastime UI"
        />
        <SideProjectItem
          description={`여러 가지 웹툰 플랫폼을 크롤링한 데이터를 정형화하고 제공하는 API입니다.\n지속적으로 트래픽이 발생하고 있어 유지보수 하고 있습니다.`}
          id="korea-webtoon-api"
          links={[
            {
              name: 'korea-webtoon-api',
              href: 'https://github.com/HyeokjaeLee/korea-webtoon-api',
              type: 'github',
            },
            {
              name: 'Webtoon API 개발',
              href: '/korea-webtoon-api-update',
            },
          ]}
          list={[
            'Nest.js 기반 웹 서버 구축',
            'OpenAPI 스펙 swagger 문서 제공',
            'Naver, Kakao Page, 다음 웹툰 페이지 및 API 응답 분석 및 크롤링 로직 개발',
            '각 웹툰 공급자 데이터 정형화',
          ]}
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
          title="Korea webtoon API"
        />
        {isMoreVisible || isFull ? (
          <>
            <SideProjectItem
              description={`Gatsby와 개인 컴포넌트 라이브러리를 활용해 개발한 블로그입니다.\nMarkdown을 활용해 글을 작성하고 Github action을 통해 자동으로 배포할 수 있게 구성했습니다.`}
              id="blog"
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
              title="블로그"
            />
            <SideProjectItem
              description={`실시간으로 개인 강의 페이지들을 크롤링하고 출석, 과제, 시험 등의 마감 기한을 알려주는 프로그램입니다.\nElectron 데스크탑 앱으로 만들어 대학생 커뮤니티에 공유하고 좋은 호응을 얻었습니다.`}
              id="knu-lms-scheduler"
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
              title="KNU LMS scheduler"
            />
            <SideProjectItem
              description={`커밋 메시지에 이모지를 활용하고 정해진 규칙에 맞춰 작성할 수 있게 도와주는 앱입니다.\nvue.js CDN 환경에서 개발했습니다.`}
              id="gititle"
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
              title="Gititle"
            />
            <SideProjectItem
              description={`프론트엔드 코드 컨벤션을 설정하는 패키지들입니다.\nPNPM 모노레포 형식으로 ESLint, Prettier, Stylelint 설정이 독립적으로 배포되고 설치할 수 있게 했습니다.`}
              id="code-convetion-packages"
              links={[
                {
                  name: 'code-convetion-packages',
                  href: 'https://github.com/HyeokjaeLee/code-convetion-packages',
                  type: 'github',
                },
              ]}
              stacks={[
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
              title="Code convetion packages"
            />
            <SideProjectItem
              description={`여러 API 또는 웹상에 존재하는 COVID-19 관련 데이터를 정형화해 제공하는 API입니다.\nGraphQL을 이용해 사용자가 원하는 데이터만을 요청할 수 있게 했습니다.`}
              id="korea-covid-19-api"
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
              title="Korea COVID-19 API"
            />
          </>
        ) : null}
      </ul>
      {isMoreVisible ? null : (
        <div
          className={cn('flex w-full justify-center', {
            hidden: isPdf,
          })}
        >
          <Button
            className="mx-auto mt-10 text-sm font-bold"
            variant="outline"
            onClick={() => setIsMoreVisible(true)}
          >
            더보기
          </Button>
        </div>
      )}
    </section>
  );
};
