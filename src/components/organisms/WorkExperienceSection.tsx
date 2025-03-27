import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import GroupingImage from '../../images/portfolio/grouping.webp';
import KbPayImage from '../../images/portfolio/kb-pay.webp';
import ScrollImage from '../../images/portfolio/scroll.webp';
import { Experience } from '../molecules/ExperienceItem';

export const WorkExperienceSection = () => {
  const imageClassName = 'border-border my-2 rounded-sm border';

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Work experience.</h2>
      <Experience
        borderBottom
        description="개인과 기업에게 맞춤 정책을 추천하는 GovTech 스타트업"
        jobTitle="Frontend engineer"
        period="2023.11 - 재직중"
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'JavaScript',
            backgroundColor: '#F0DB4F',
            blackLogo: true,
          },
          {
            name: 'Next.js',
            backgroundColor: '#000000',
          },
          {
            name: 'Vue.js',
            backgroundColor: '#42B883',
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
            name: 'TanstackQuery',
            logo: 'ReactQuery',
            backgroundColor: '#FF4154',
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
            name: 'TailwindCSS',
            backgroundColor: '#38BDF8',
          },
          {
            name: 'Vercel',
            backgroundColor: '#000000',
          },
          {
            name: 'pnpm',
            backgroundColor: '#F69220',
          },
          {
            name: 'Jenkins',
            backgroundColor: '#D24939',
          },
          {
            name: 'AWS Lambda',
            logo: 'AWSLambda',
            backgroundColor: '#FF9900',
          },
          {
            name: 'AWS EC2',
            logo: 'AmazonEC2',
            backgroundColor: '#FF9900',
          },
          {
            name: 'Docker',
            backgroundColor: '#2496ED',
          },
          {
            name: 'ChakraUI',
            backgroundColor: '#319795',
          },
          { name: 'Motion', backgroundColor: '#0055FF', logo: 'Framer' },
          {
            name: 'Figma',
            backgroundColor: '#F24E1E',
          },
        ]}
        title="주식회사 웰로"
      >
        <Experience.Content
          description={[
            '프론트엔드 개발자가 없는 상태에서 합류하여 ***B2C, B2B, 백오피스 등 다양한 프로젝트 설계 및 개발***',
            '프론트엔드 조직 ***확장 및 채용*** 기여',
            '***빠른 제품 개발***을 통해 시리즈 ***A 투자 유치***에 기여',
          ]}
          project={[
            {
              title: 'Wello Web & App 개발 (Flutter → Next.js 전환)',
              content: [
                'iOS/Android WebView, 웹 브라우저 환경 차이를 고려한 크로스 플랫폼 호환성 최적화',
                'WebView 기반 앱 제품 설계 및 Tanstack Query를 모방한 네이티브와 웹 간의 브릿지 구현',
                'Next 14 app directory 기반의 프론트엔드 아키텍쳐 설계',
                {
                  what: '앱과 웹 환경을 고려한 사용자 인증 플로우 개발',
                  result:
                    'OAuth 2.0 (Google, Apple, Naver, Kakao), 본인 인증 API 연동',
                },
                'route groups을 활용한 접근 제어 로직 개발',
                'browser history를 앱과 웹 환경에서 일괄되게 관리하기 위한 history stack 및 router, link 컴포넌트 개발',
                {
                  what: '개인화 맞춤 정책 추천 및 기존 앱 기능 개발',
                  link: 'https://www.welfarehello.com',
                },
              ],
            },
            {
              title: 'KB Pay 앱내에 Wello 웹 임베디드',
              content: [
                '서로 다른 환경과 서브도메인(자사 앱, 웹, KB Pay) 간 클라이언트 데이터 공유 방식 설계',
                {
                  what: '동작 환경에 따라 기존 앱의 동작을 변경하는 모듈식 컨트롤러 설계',
                  result:
                    '여러 환경에서 동작하는 제품을 하나의 코드베이스로 관리함으로써 개발 효율성 유지',
                },

                {
                  what: 'KB Pay 앱을 통한 인증 로직 개발',
                  result:
                    '타사 앱 스펙에 맞춰 최소 백엔드 리소스로 인증 로직 개발',
                  render: (
                    <img
                      src={KbPayImage}
                      className={imageClassName}
                      alt="kp-pay"
                      width={300}
                      height={615}
                    />
                  ),
                },
                '폐쇄망 환경에서의 문제 해결',
              ],
            },
            {
              title: 'DX 개선',
              content: [
                '백엔드 응답 에러, 프론트엔드 에러 통합 커스텀 코드 체계 설계',
                '커스텀 코드와 제출한 Source Map을 활용해 Sentry 라벨링 및 사용자 리포트 기반 이슈 추적 환경 구축',
                {
                  what: '디자인팀 figma assets → react components 변환 도구 개발',
                  result: '중복 assets 생성 방지',
                },
                'Error boundary 세분화',
                {
                  what: 'Docker 컨테이너 환경 구축',
                  result:
                    '일반 기업용 제품(EC2), 공공 기관용 제품(Naver Cloud) 배포 환경 통일',
                },
                'Prettier, ESLint rule 협의 및 추가, ESLint 9 버전 적용',
                'Secret Manager 기반 환경변수 관리 도입',
                'API 명세를 기반 endpoint로 접근 가능한 react query options 및 요청 메소드 생성 스크립트 개발',
                '모든 제품의 스타일링 방식을 tailwind로 통일',
                {
                  what: 'Lambda 기반 동적 Image 최적화 컴포넌트 개발',
                  result: '이미지 로드 시간 30% 이상 단축',
                },
              ],
            },
            {
              title: 'Wello Voucher, 응급실 찾기 서비스 개발',
              content: [
                {
                  what: '지도 Pin Grouping 로직 개발',
                  link: 'https://www.welfarehello.com/recommend-policy/situation/emergency/map?selectedRegion=%7B%22mainRegionCode%22%3A%22C01-01%22%2C%22subRegionCode%22%3A%22C01-01-23%22%7D&emergencyRoomParams=%7B%22latitude%22%3A37.517305%2C%22longitude%22%3A127.047502%2C%22emergencyRoomYn%22%3Atrue%2C%22emergencyRoomCodeList%22%3A%5B%5D%2C%22isRealDistance%22%3Afalse%7D&firstHospitalLatitude=37.506800025850865&firstHospitalLongitude=127.03466865188074&latitude=37.5069596&longitude=127.0489702&zoom=12',
                  render: (
                    <img
                      src={GroupingImage}
                      alt="grouping"
                      className={imageClassName}
                    />
                  ),
                },
                'Naver Map API 연동',
                {
                  what: '디바이스 Viewport 사이즈와 지도의 축척을 통해 조회 리소스 최적화',
                  result: 'API 응답 시간 개선, 평균 11초 → 2초 (80% 이상)',
                },
                '범용 옵티미스틱 업데이트 로직 개발',
                {
                  what: '터치 가속도를 이용한 User 스크롤 인터렉션 및 Windowing 로직 개발',
                  result:
                    '브라우저 스크롤 활용이 불가능한 환경에서 스크롤 인터렉션 제공',
                  link: 'https://www.welfarehello.com/voucher/map?category=15&latitude=37.5250455&longitude=127.030106&zoom=17',
                  render: (
                    <img
                      src={ScrollImage}
                      alt="scroll"
                      className={imageClassName}
                      width={300}
                      loading="lazy"
                      height={615}
                    />
                  ),
                },
              ],
            },
            {
              title: 'Wello Biz 개발 (Nuxt → Next.js 전환)',
              content: [
                'PNPM, Turborepo 기반 모노레포 환경 구성',
                '공유 리소스(assets, components, hooks) 패키지 정의 및 개발',
                {
                  what: '사용자 인증, 결제 플로우 개발',
                  result:
                    'Email, OAuth 2.0 인증 방식 (Kakao, Google), PG사 연동',
                },
                '사용자 권한에 따른 pathname, middleware 기반의 접근 제어 및 문서 암호화/복호화 로직 개발',
              ],
            },
            {
              title: 'Wello, Wello Biz SEO 및 번들 사이즈 최적화',
              content: [
                {
                  what: 'fake sitemap과 주기적으로 경로가 변경되는 난독화된 sitemap 생성 로직 개발',
                  result: '경쟁사 크롤링 봇 차단',
                },
                '색인된 작동하지 않는 페이지 redirect 처리',
                {
                  what: 'Streaming Rendering 방식과 Server Component를 적극 활용하도록 리펙토링',
                  result: '웹사이트 방문 유입 1,000% 이상 증가',
                  render: (
                    <StaticImage
                      src="../../images/portfolio/SEO.png"
                      className="border-border mx-auto my-2 rounded-sm border"
                      alt="wello"
                      width={500}
                      height={308}
                    />
                  ),
                },
                '코드 스플리팅 및 레이지 로딩 적용',
                {
                  what: 'Webpack Bundle Analyzer, Next Unused를 활용해 번들 사이즈 최적화',
                  result: '미사용 코드 및 비정상적 번들사이즈 원인 식별 & 제거',
                },
                {
                  what: 'Next.js Tree shaking 버그 수정',
                  result: '번들링 사이즈 40% 이상 감소',
                },
              ],
            },
            {
              title: '보안 인증 (ISMS-P, ISO27701, ISO27001) 대응',
              content: [
                {
                  what: 'Github, Vercel 배포환경에서 On-Premise GitLab, Jenkins 환경으로 전환 & CI/CD 배포 파이프 라인 구축',
                  result:
                    'Backend, Frontend 인프라 통일 & 자산 관리 편의성 증가',
                },
                'B2B 서비스 2차 인증 로직 개발',
                {
                  what: '인스턴스 환경을 고려한 Turborepo 배포 최적화',
                  result: 'Vercel 환경과 유사한 배포 시간 확보',
                },
                '장애 대응 롤백 환경 구축',
                {
                  what: 'AWS Load Balancer와 PM2를 결합한 하이브리드 부하 분산 & 무중단 배포 시스템 구축',
                  result: 'Vercel 환경에서 겪은 트래픽으로 인한 장애 재발 방지',
                },
              ],
            },
            {
              title: 'Wello, Wello Biz AI 도입',
              content: [
                'Wello 정책 요약 서비스 개발',
                'Wello biz 문서, 사업 요약 서비스 개발',
                {
                  what: 'Next API Route 기반 Streaming API 정크 단위 캐싱 로직 개발',
                  result: '평균 응답 속도 개선 및 비용 절감',
                },
              ],
            },

            {
              title: '백오피스 기술 스택 제품과 통일',
              content: [
                {
                  what: 'Vue기반 백오피스를 Next.js 기반 환경에 임베디드',
                  result: '최소 리소스로 백오피스 개발 환경 개선',
                },
                '다중 node version 배포 파이프라인 구축',
                '서로 다른 프론트엔드 프레임워크 간 데이터 공유 로직 개발',
                '백오피스 인증 로직 Next.js로 이관',
              ],
            },
            {
              title: 'Wello Biz 실시간 나라장터 정보 제공 기능 개발',
              content: [
                {
                  what: 'AWS Lambda를 활용한 유저 요청에 따른 실시간 headless browser 핸들링 로직 구현',
                  result:
                    '최소 비용으로 공식 API, URL을 제공하지 않는 정보 제공',
                },
                '데이터 가공 및 인터페이스 개발',
              ],
            },
            {
              title: 'Wello 커뮤니티 개발',
              content: [
                'Wello Editor 개발 (tiptap 기반)',
                '포인트 적립 및 출금 기능 개발',
                '커뮤니티 기능 개발 및 SEO',
              ],
            },
          ]}
        />
      </Experience>
      <Experience
        borderBottom
        description="9,000명 이상이 수강한 국내 최초 코딩 부트캠프 스타트업"
        jobTitle="Frontend engineer"
        period="2022.02 - 2023.08 (1년 7개월)"
        stacks={[
          {
            name: 'TypeScript',
            backgroundColor: '#3178C6',
          },
          {
            name: 'Storybook',
            backgroundColor: '#FF4785',
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
            name: 'StyledComponents',
            logo: 'styled-components',
            backgroundColor: '#DB7093',
          },
          {
            name: 'Rollup.js',
            backgroundColor: '#EC4A3F',
          },
          {
            name: 'Vite',
            backgroundColor: '#646CFF',
          },
          {
            name: 'ChakraUI',
            backgroundColor: '#319795',
          },
          {
            name: 'Yarn Berry',
            logo: 'Yarn',
            backgroundColor: '#2C8EBB',
          },
          {
            name: 'pnpm',
            backgroundColor: '#F69220',
          },
          {
            name: 'Netlify',
            backgroundColor: '#00C7B7',
          },
          {
            name: 'Docker',
            backgroundColor: '#2496ED',
          },
          {
            name: 'Figma',
            backgroundColor: '#F24E1E',
          },
        ]}
        title="코드스테이츠"
      >
        <Experience.Content
          description={[
            '***개발 프로세스를 개선***하기 위해 동료들과 함께 여러 가지 에자일 프레임워크 시도\n(칸반 → 스크럼반 → 스크럼)',
            '***신규 개발 스택 제안***, 기술스택 다양성을 유지하며 팀의 기술 발전 유도',
          ]}
          project={[
            {
              title: 'WeWin 후불 결제 클라이언트 개발',
              content: [
                '후불결제 백오피스, B2B 제품 개발',
                '스토리북을 활용한 컴포넌트 기반 개발 도입',
                '전자 서명 API 연동',
                {
                  what: '랜더링 최적화를 위한 사용자 입력, 유효성 검사 로직 및 컴포넌트 개발 (state localize)',
                  result: '설문 관련 기능 페이지 단위 렌더링 5회 미만으로 감소',
                },
                '성공적인 스프린트 목표 달성을 위한 개발 시간 추정 방식 개선',
                '스토리포인트 기반 업무 추정, 프로세스 경험',
                'PR AI 코드 리뷰 도입 (GPT 3.5)',
              ],
            },
            {
              title: 'Codeship 채용 플랫폼 개발',
              content: [
                '3개의 제품(B2C, B2B, 백오피스) 클라이언트를 효율적으로 관리하기 위해 PNPM 기반 모노레포 개발환경 구축 & 기능 개발',
                '다양한 Form을 다루기 위한 react-hook-form 기반 커스텀 라이브러리 개발',
                '기존 MVP 유저 이탈을 방지하기 위한 마이그레이션 프로세스 개발',
                {
                  what: 'Lighthouse를 활용한 제품 최적화',
                  result: 'FCP 개선, 3.3초 → 2.6초 (약 20%)',
                },
                {
                  what: 'vite + polyfill 기반 번들링 설정',
                  result: 'IE 11 환경 지원',
                },
                {
                  what: 'OpenAPI-generator 도입',
                  result: 'API 스펙 변경으로 인한 버그 발생 감소',
                },
                {
                  what: '스토리북을 활용한 디자인 시스템 구축',
                  result: '디자이너와의 협업 비용 대폭 개선',
                  link: 'https://codestates-engineering.github.io/codeship-platform-app-library/',
                },
                '전사 라이브러리 private npm package 배포 파이프라인 구축',
              ],
            },
          ]}
        />
      </Experience>
    </section>
  );
};
