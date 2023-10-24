import React from 'react';

import { Accordion } from '@hyeokjaelee/pastime-ui';

import { ABOUT_TITLE_ID } from './AboutNavigation';
import { Experience } from './Experience';

export const WorkExperienceSection = () => (
  <section>
    <h2 className="font-bold text-3xl mb-6" id={ABOUT_TITLE_ID.WORK_EXPERIENCE}>
      👨‍💻 Work experience
    </h2>
    <Experience
      title="Codestates"
      period="2022.02 - 2023.08"
      jobTitle="Frontend engineer"
      borderBottom
    >
      <Experience.Item
        title="Codeship"
        id="codeship"
        borderBottom
        whatDidIDo={[
          'PNPM 모노레포 구조 개발환경 구축',
          'Swagger API 문서를 기반으로 자동화된 CI/CD 파이프라인을 구축',
          '스토리북 기반 디자인 시스템 구축',
          '유효성 검사 라이브러리 개발',
          'B2B, B2C, 백오피스 클라이언트 개발',
          'MVP 유저 마이그레이션 프로세스 개발',
        ]}
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
            name: 'Swagger',
            backgroundColor: '#85EA2D',
            blackLogo: true,
          },
          {
            name: 'Zustand',
            logo: 'React',
            backgroundColor: '#423E39',
          },
          {
            name: 'ReactQuery',
            backgroundColor: '#FF4154',
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
        description={`내부 부트캠프 수료생, 외부 엔트리 개발자들과 기업을 연결하는 채용 플랫폼입니다.\n이전 팀에서의 경험을 바탕으로 첫 번째 프론트엔드 개발자로 합류해 비즈니스 설계, 기획, 개발자 채용 등 전반적인 업무에 참여했습니다.`}
        links={[
          {
            name: 'codeship-platform-app-library',
            href: 'https://github.com/HyeokjaeLee/codeship-platform-app-library',
            type: 'github',
          },
          {
            name: 'Codeship platform app library',
            href: 'https://codestates-engineering.github.io/codeship-platform-app-library',
            type: 'storybook',
          },
        ]}
      />
      <Experience.Item
        title="WeWin"
        id="wewin"
        whatDidIDo={[
          '레거시 개발환경 최신 개발 스택으로 마이그레이션 및 리펙토링',
          'B2B, B2C, 백오피스 클라이언트 개발',
          '스토리북을 이용한 컴포넌트 기반 개발 도입',
        ]}
        description={`내부 부트캠프와 외부 기업들에 후불 결제 시스템을 제공하는 서비스입니다.\n개발 편의성 향상을 위해 여러 도구들을 도입하고 개발 프로세스를 개선했습니다.`}
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
            name: 'GraphQL',
            backgroundColor: '#E10098',
          },
          {
            name: 'Apollo',
            logo: 'ApolloGraphQL',
            backgroundColor: '#311C87',
          },
          {
            name: 'MobX',
            backgroundColor: '#FF9955',
          },
          {
            name: 'Storybook',
            backgroundColor: '#FF4785',
          },
          {
            name: 'StyledComponents',
            logo: 'styled-components',
            backgroundColor: '#DB7093',
          },
          {
            name: 'Rollup.js',
            backgroundColor: '#EC4A3F',
          },
        ]}
        links={[
          {
            name: '리액트 컴포넌트, 어떤 컨셉으로 개발할까?',
            href: '/react-component-concept',
          },
          {
            name: 'Atomic Design Pattern 적용기',
            href: '/react-atomic',
          },
          {
            name: 'React 기반 제품을 개발할 때 고려해 볼 만한 디자인 패턴',
            href: '/react-design-pattern',
          },
          {
            name: '리액트 컴포넌트 스타일링 정리',
            href: '/components-styling',
          },
        ]}
      />
    </Experience>
    <Experience
      title="Coupang"
      period="2019.08 - 2020.03"
      jobTitle="Eats Operator"
    >
      <Experience.Item
        title="EDP Operations"
        borderBottom
        description="음식이 고객에게 전달되기까지 발생하는 이슈들을 트래킹 하고 고객 경험을 개선하는 팀에서 직접적인 제품 개발이 아닌 업무 자동화, 데이터 수집, 가공 등 다양한 업무를 수행했습니다."
        whatDidIDo={[
          '고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발',
          '관제 업무 자동화',
          '배정취소 기능 개발 지표 데이터 수집 / 시각화',
          '배달파트너 센터 챗봇 개발',
        ]}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'Python',
            backgroundColor: '#3776AB',
          },
          {
            name: 'Kibana',
            backgroundColor: '#005571',
          },
          {
            name: 'Google Sheets',
            backgroundColor: '#0F9D58',
          },
        ]}
      />
      <li>
        <h4 className="text-xl font-bold">Reputation</h4>
        <a
          href="https://www.specter.co.kr/"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-400 hover:underline"
        >
          평판 조회 플랫폼 - Specter
        </a>
        <Accordion className="w-full mb-2">
          <Accordion.Title className="font-bold">
            💁‍♀️ Moon (Operator Manager)
          </Accordion.Title>
          <Accordion.Contents className="text-sm">
            <dl>
              <dt className="text-base mb-1 text-zinc-400">강점</dt>
              <dd className="whitespace-pre-wrap">
                {`비즈니스 전반에 대한 관심을 가지고 업무에 참여하며, 주도적으로 문제를 해결하기 위한 여러가지 방법을 제시합니다.\n넓은 기술적 지식을 가지고 있어 문제 해결을 위한 여러가지 솔루션을 제시할 수 있습니다.\n데이터 가치를 파악하고 수집하는 역량이 뛰어납니다.`}
              </dd>
              <dt className="text-base mt-4 mb-1 text-zinc-400">
                개선해야할 점
              </dt>
              <dd className="whitespace-pre-wrap">
                {`넓은 기술적 지식이 있지만, 깊이가 부족한 경우도 있습니다.\n집중력이 높아 업무에 몰입할 때 주변 동료들에게 담당하고 있던 업무의 진행도 공유가 늦어지는 경우가 있습니다.`}
              </dd>
            </dl>
          </Accordion.Contents>
        </Accordion>
        <Accordion className="w-full">
          <Accordion.Title className="font-bold">
            💁‍♂️ Owen (Operator Manager)
          </Accordion.Title>
          <Accordion.Contents className="text-sm">
            <dl>
              <dt className="text-base mb-1 text-zinc-400">강점</dt>
              <dd className="whitespace-pre-wrap">
                {`주어진 업무 롤 이상의 성과를 내던 동료였습니다.\n사업 초기 맴버로 합류하여 메뉴얼적인 업무가 주를 이루었을때 업무를 간소화 하여 리드타임을 감소 시키고 스스로 문제를 찾아 팀원들에게 공유하는 등, 문제를 해결하기 위해 프로세스를 구축하고 자동화하여 조직에 기여하였습니다.\nAB 테스트를 통해 임팩트를 증명하여 기술적인 관점에서 빠른 조직의 변화가 있었습니다.\n일회성 솔루션이 아닌 재사용 가능한 프로세스를 제시하고 구현해 큰 규모의 트래픽을 감당할 수 있게 했습니다.\n이러한 근본적인 개선으로 조직에 유의미한 결과들을 내주었습니다.\n팀 전반적인 업무와 나아가서 비즈니스 퀄리티를 개선하려는 능동적인 자세를 갖추고 즉각적으로 퍼포먼스를 보일 수 있는 동료였습니다.`}
              </dd>
              <dt className="text-base mt-4 mb-1 text-zinc-400">
                개선해야할 점
              </dt>
              <dd className="whitespace-pre-wrap">
                {`이혁재님의 첫직장에서 함께 한 짧은 시간이였지만 더 많이 소통 하지 못한 부분이 아쉽습니다.\n당시 업무분담이 잘못되어 있어 혁재님이 문제부터 지표관리 까지 전부 책임 지고 있었습니다.\n과도한 업무량이 본인에게 몰려 있다면 잡 레벨에 관계 없이 건설적인 대립도 필요하다고 생각합니다.`}
              </dd>
            </dl>
          </Accordion.Contents>
        </Accordion>
      </li>
    </Experience>
  </section>
);
