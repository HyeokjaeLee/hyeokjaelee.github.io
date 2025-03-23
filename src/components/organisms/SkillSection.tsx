import React from 'react';

import { SkillItem } from '../molecules/SkillItem';

export const SkillSection = () => (
  <section>
    <h2 className="mb-6 text-3xl font-bold">Skill.</h2>
    <dl>
      <SkillItem
        title="Overall"
        whatCanIDo={[
          '포지션에 관계없이 제품의 발전을 위해 고민하고 의견을 제시합니다.',
          '이슈 해결을 위해 개발 외적인 방법을 포함한 다양한 방식을 적극적으로 탐색하고 최선의 결과를 얻을 수 있게 노력합니다.',
          '익숙하지 않은 개발 환경에서도 빠르게 적응하여 업무를 수행할 수 있습니다.',
          'Jira, Notion, Figma와 같은 협업 도구를 활용해 효율적으로 업무를 수행할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="Frontend"
        whatCanIDo={[
          'Next.js, React, Vue 기반의 프로젝트를 구축하고 유지보수할 수 있습니다.',
          'CSS, Framer Motion을 활용해 유저와 상호작용하는 애니메이션을 구현할 수 있습니다.',
          'Next.js의 Api route나 Node Server를 활용해 서버 환경에서 동작해야할 로직을 분리 개발할 수 있습니다.',
          '웹뷰 기반의 하이브리드 앱과 브라우저 환경에서 작동하는 프론트엔드 프로젝트를 설계할 수 있습니다.',
          '제품 요구사항에 맞게 Vite, Webpack, Rollup 등의 번들링 도구를 설정해 사용할 수 있습니다.',
          'SEO와 접근성이 준수한 웹 페이지를 구축할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="Backend"
        whatCanIDo={[
          'BFF와 같은 Node 기반의 간단한 API 서버나 소켓 서버를 구축할 수 있습니다.',
          '프론트엔드 입장에서 효율적인 스키마 설계에 대해 고민하고 의견을 제시할 수 있습니다.',
        ]}
      />
      <SkillItem
        title="DevOps"
        whatCanIDo={[
          'Vercel, Netlify와 같은 서버리스 플랫폼과 EC2, Naver Cloud Platform과 같은 클라우드 서비스 위에서 배포 환경을 구축 할 수 있습니다.',
          'Github Actions이나 Jenkins와 같은 CI/CD 툴을 이용해 배포 자동화 파이프라인을 구축할 수 있습니다.',
          'Yarn berry, PNPM과 같은 패키지 매니저와 Turborepo를 이용해 모노레포 구조의 프로젝트를 구축하고 최적화할 수 있습니다.',
          'Docker를 이용해 컨테이너 기반의 배포 환경을 구축할 수 있습니다.',
          'Lambda, S3, CloudFront, Secret Manager와 같은 AWS 서비스를 상황에 맞게 활용할 수 있습니다.',
        ]}
      />
    </dl>
  </section>
);
