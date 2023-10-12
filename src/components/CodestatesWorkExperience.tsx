import React from 'react';

import { AboutItem } from './AboutItem';
import { ABOUT_TITLE_ID } from './AboutNavigation';
import { ProjectContainer } from './ProjectContainer';

export const CodestatesWorkExperience = () => (
  <ProjectContainer
    title="Codestates"
    period="2022.02 - 2023.08"
    jobTitle="Frontend engineer"
    id={ABOUT_TITLE_ID.CODESTATES}
  >
    <ul>
      <AboutItem
        title="채용 플랫폼 개발"
        id={ABOUT_TITLE_ID.EMPLOY_PLATFORM}
        summaries={[
          '채용 플랫폼 디자인시스템 개발',
          '외부 렌더링을 발생시키지 않는 유효성 검사 라이브러리 개발',
          '채용 플랫폼 B2B, B2C, 어드민 클라이언트 개발',
          '채용 플랫폼 MVP 유저 마이그레이션 프로세스 개발',
          '리액트 쿼리 기반 커스텀 훅 라이브러리 개발',
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
        experiences={[
          '채용 플랫폼 개발팀에 첫 번째 프론트엔드 개발자로 합류해 비즈니스 설계, 기획, 개발자 채용 등 전반적인 업무에 참여했어요.',
          '개발 편의성 및 유지보수성을 고려해 Swagger API 문서를 기반으로 자동화된 CI/CD 파이프라인을 구축하고, PNPM 기반 모노레포 구조를 도입했어요.',
          '비즈니스 요구사항에 맞춰 제품 개발에 필요한 도구들을 선정하고 적용했어요.',
          'React Form의 코드 형식에 불편함을 느껴 유효성 검사 라이브러리를 개발했어요.',
          '이전 팀에서의 경험을 바탕으로 제품 개발 패턴을 설정하고 디자인 시스템을 구축했어요.',
          '사용자 환경에서 액션이나 오류를 트래킹 할 수 있는 도구들을 검토하고 적용했어요.',
        ]}
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
      <AboutItem
        title="후불 결제 시스템 개발"
        id={ABOUT_TITLE_ID.PAYMENT_SYSTEM}
        summaries={[
          '금융 사업부 디자인시스템 개발',
          '후불 결제 시스템 클라이언트 레거시 개발환경 최신 개발 스택으로 마이그레이션 및 리펙토링',
          '후불 결제 시스템 어드민, B2C, B2B 클라이언트 개발',
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
        experiences={[
          '기존 환경에서 불필요하거나 중단된 도구를 적극적으로 찾아내 제거하고 개선했어요.',
          'GraphQL을 장점을 이해하고 API 스키마 설계 과정에 참여해 개발단계에서의 소통비용을 줄였어요.',
          '팀 내 여러 직군들과 효율적으로 소통하는 방법을 고민하고 실천했어요.',
          '컴포넌트 개발 컨셉을 설정하고 개발 패턴과 디자인 시스템을 도입했어요.',
        ]}
      />
    </ul>
  </ProjectContainer>
);
