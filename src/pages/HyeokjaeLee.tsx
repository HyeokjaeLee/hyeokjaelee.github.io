/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Gmail from "img/gmail.svg";
import Github from "img/github.svg";
import postProfile from "img/about-profile.jpg";
import Javascript from "img/javascript.svg";
import Typescript from "img/typescript.svg";
import HTML5 from "img/html5.svg";
import CSS3 from "img/css3.svg";
import Sass from "img/sass.svg";
import Gatsby from "img/gatsby.svg";
import VueJS from "img/vue.js.svg";
import NestJS from "img/nestjs.svg";
import NextJS from "img/next.js.svg";
import Electron from "img/electron.svg";
import Git from "img/git.svg";
import Express from "img/express.svg";
import GraphQL from "img/graphql.svg";
import Naver from "img/naver.svg";
import Chrome from "img/chrome.svg";
import KNU from "img/knu.svg";
import Coupang from "img/coupang.svg";
import RightArrow from "img/right-arrow.svg";
import { useContext } from "react";
import { PortfolioContext } from "contexts/theme";
import { Helmet } from "react-helmet";

const React_svg = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>React</title>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);
const About = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  useEffect(() => {
    setPortfolio("hide");
  }, []);
  return (
    <>
      <Helmet
        title="Nagle`s Portfolio"
        meta={[{ name: `description`, content: `programming & tech blog` }]}
      />
      <section className="content first">
        <article className="about-article about-me">
          <h2 className="hello">👋 안녕하세요! 개발자를 꿈꾸는 코더, 이혁재입니다.</h2>
          <div>
            <img src={postProfile} className="profile" />
            <h2>About Me</h2>
          </div>
          <ul>
            <li>🙏 풀스택 개발자를 꿈꾸고 있습니다.</li>
            <li>🌱 Know-What, Know-Where을 중요하게 생각합니다.</li>
            <li>🤔 일상에서 항상 더 편리한 방법을 고민하고 찾아냅니다.</li>
            <li>🏊‍♀️ 여러 언어들에 발만 담궈보던중 2020년에 Javascript를 만나 푹 빠져있습니다.</li>
            <li>
              ❤️ 빠르게 발전하는 Javascript 생태계를 사랑하고 새로운 기술을 배우는걸 좋아합니다.
            </li>
          </ul>
        </article>
      </section>
      <section className="content">
        <article className="about-article">
          <h2>🤝 Contact & Channel</h2>
          <ul className="contact-channel-list">
            <li>
              <div className="contact-channel-wrap">
                <Gmail />
              </div>
              <label>Email |</label>
              <a href="mailto:leehyeokjae97@gmail.com" className="default-link">
                leehyeokjae97@gmail.com
              </a>
            </li>
            <li>
              <div className="contact-channel-wrap">
                <Github />
              </div>
              <label>Github |</label>
              <a href="https://github.com/HyeokjaeLee" target="_blank" className="default-link">
                https://github.com/HyeokjaeLee
              </a>
            </li>
            <li>
              <div className="contact-channel-wrap">
                <Chrome />
              </div>
              <label>Blog |</label>
              <Link
                to="/"
                onClick={() => {
                  setPortfolio("");
                }}
                className="default-link"
              >
                https://hyeokjaelee.github.io
              </Link>
            </li>
            <li>
              <div className="contact-channel-wrap">
                <Naver />
              </div>
              <label>Blog (2011~2015) |</label>
              <a
                href="https://blog.naver.com/leehyeokjae7"
                target="_blank"
                className="default-link"
              >
                https://blog.naver.com/leehyeokjae7
              </a>
            </li>
          </ul>
        </article>
      </section>
      <section className="content">
        <article className="about-article languages-tools-wrap">
          <h2>🔧 Languages & Tools</h2>
          <ul className="languages-tools-list">
            <li>
              <Javascript />
              Javascript
            </li>
            <li>
              <Typescript />
              Typescript
            </li>
            <li>
              <HTML5 />
              HTML5
            </li>
            <li>
              <CSS3 />
              CSS3
            </li>
            <li>
              <Sass />
              Sass
            </li>
            <li>
              <React_svg />
              React
            </li>
            <li>
              <NextJS />
              Next.js
            </li>
            <li>
              <Gatsby />
              Gatsby
            </li>
            <li>
              <VueJS />
              Vue.js
            </li>
            <li>
              <Express />
              Express
            </li>
            <li>
              <NestJS />
              NestJS
            </li>
            <li>
              <GraphQL />
              GraphQL
            </li>
            <li>
              <Electron />
              Electron
            </li>
            <li>
              <Git />
              Git
            </li>
          </ul>
        </article>
      </section>
      <section className="content">
        <article className="about-article">
          <h2>🎓 Education</h2>
          <h3 className="about-title">
            <KNU />
            공주대학교
          </h3>
          <p>컴퓨터공학과 (2016.03 ~ 졸업예정)</p>
          <ul>
            <li>
              개발 & 창업 동아리 (2016 ~)
              <a
                href="https://namu.wiki/w/%EA%B3%B5%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90/%ED%95%99%EB%B6%80/%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99?rev=316#s-2.3.4"
                className="default-link"
              >
                PRIMITVE
              </a>
            </li>
            <li>Webtoon Hub 저작권 등록 (C-2021-020527)</li>
            <li>정보처리기사 취득 (2021.6)</li>
          </ul>
        </article>
      </section>
      <section className="content">
        <article className="about-article">
          <h2>👨🏻‍💻 Work Experience</h2>
          <h3 className="about-title">
            <Coupang />
          </h3>
          <p>Eats EDP Operations (2019.08 ~ 2020.02)</p>
          <p className="work-experience-txt">
            주로 데이터 클렌징과 시각화 업무를 담당했습니다.
            <br />
            비록 처음에 개발자로 입사한 것은 아니었지만 팀 리더분의 배려와 서비스 초기에 합류할 수
            있었던 점 덕분에 관련 업무를 할 수 있었습니다.
          </p>
          <ul>
            <li>배달파트너 배정취소 기능의 개발 지표가 되는 데이터 수집 솔루션 제시 및 개발</li>
            <li>지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징 및 시각화</li>
            <li>고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스</li>
            <li>
              식사시간과 서비스 피크타임이 겹처 식사 중 발생하는 이슈 트래킹을 위한 노트북 소지의
              불편함 해소를 위해 슬랙봇 제작
            </li>
            <li>배달파트너 센터 챗봇 제작</li>
            <li>그외 업무에 필요한 자동화 스크립트 & 매크로 제작</li>
          </ul>
        </article>
      </section>
      <section className="content">
        <article className="about-article">
          <h2>🎮 Projects</h2>
          <p>아래 프로젝트들은 혼자 진행한 프로젝트들이며 꾸준히 리팩토링, 업데이트 중입니다.</p>
        </article>
        <section className="projects-wrap">
          <article className="project">
            <a
              className="project-info"
              href="https://github.com/HyeokjaeLee/korea-webtoon-api"
              target="_blank"
            >
              <div className="project-title">
                <h3>Korea Webtoon API</h3>
                <div>
                  <NestJS />
                  <Typescript />
                </div>
              </div>
              <p>여러가지 플랫폼의 웹툰 정보를 제공</p>
              <ul>
                <li>여러가지 플랫폼의 웹툰을 한 웹이나 앱에서 보고싶어서 만들게되었습니다.</li>
                <li>
                  최근 Daum 웹툰이 Kakao 웹툰으로 개편에 대응 겸 Express ▶ NestJS 프레임워크 변경
                </li>
                <li>다른 학생들의 Toy project용 API 제공</li>
              </ul>
            </a>
            <a
              className="additional-project-wrap"
              href="https://github.com/HyeokjaeLee/webtoon-hub"
              target="_blank"
            >
              <div className="additional-project">
                사용 예시 프로젝트
                <React_svg />
                <RightArrow />
              </div>
            </a>
            <Link
              to="/korea-webtoon-api-update"
              className="additional-project-wrap"
              onClick={() => {
                setPortfolio("");
              }}
            >
              <div className="additional-project">
                관련 블로그 포스팅
                <RightArrow />
              </div>
            </Link>
          </article>
          <article className="project">
            <a
              className="project-info"
              href="https://github.com/HyeokjaeLee/korea-covid19-api"
              target="_blank"
            >
              <div className="project-title">
                <h3>Korea COVID-19 API</h3>
                <div>
                  <Express />
                  <GraphQL />
                  <Typescript />
                </div>
              </div>
              <p>한국의 COVID-19 관련 통합 정보 제공</p>
              <ul>
                <li>
                  공공데이터 포털의 API에 이상치가 많고 관련 API마다 데이터 형식이 달라 만들게
                  되었습니다.
                </li>
                <li>대부분의 이상치를 제거 후 재계산해서 제공</li>
                <li>원본 API에서 제공하지 않는 데이터 추가</li>
              </ul>
            </a>
            <a
              className="additional-project-wrap"
              href="https://github.com/HyeokjaeLee/covid19-dashboard"
              target="_blank"
            >
              <div className="additional-project">
                사용 예시 프로젝트
                <HTML5 />
                <RightArrow />
              </div>
            </a>
          </article>
          <article className="project">
            <a
              className="project-info"
              href="https://github.com/HyeokjaeLee/gititle"
              target="_blank"
            >
              <div className="project-title">
                <h3>Gititle</h3>
                <div>
                  <VueJS />
                  <Sass />
                  <Javascript />
                </div>
              </div>
              <p>직관적이고 정형화된 Git Commit message 작성을 위한 프로젝트</p>
              <ul>
                <li>
                  저는 Commit message 작성 시 emoji와 여러가지 규칙을 정해 사용하는데, 이를 지키지
                  못하는 경우가 많아 만들게 되었습니다.
                </li>
                <li>정형화된 Commit message 형식의 구성요소에 대한 목록과 예시를 제공</li>
                <li>이전에 작성한 커밋 메시지 저장</li>
                <li>접근성 향상을 위한 PWA 지원</li>
                <li>현재 실사용 중</li>
              </ul>
            </a>
            <Link
              to="/gititle-project"
              className="additional-project-wrap"
              onClick={() => {
                setPortfolio("");
              }}
            >
              <div className="additional-project">
                관련 블로그 포스팅 1
                <RightArrow />
              </div>
            </Link>
            <Link
              to="/good-commit-message"
              className="additional-project-wrap"
              onClick={() => {
                setPortfolio("");
              }}
            >
              <div className="additional-project">
                관련 블로그 포스팅 2
                <RightArrow />
              </div>
            </Link>
          </article>
          <article className="project">
            <a
              className="project-info"
              href="https://github.com/HyeokjaeLee/knu-lms-scheduler"
              target="_blank"
            >
              <div className="project-title">
                <h3>KNU LMS Scheduler</h3>
                <div>
                  <Electron />
                  <React_svg />
                  <Javascript />
                </div>
              </div>
              <p>공주대학교 비대면 강의 시스템 편의성 개선 프로그램</p>
              <ul>
                <li>
                  COVID-19로 인해 사용하는 비대면 강의 시스템에 불편함을 느껴 제작하게 되었습니다.
                </li>
                <li>제공되는 API가 없어 클라이언트 실시간 크롤링 사용</li>
                <li>배포 후 학교 커뮤니티에서 좋은 반응을 얻음</li>
                <li>에브리타임 21년 하반기 Best 게시판에 등록됨</li>
                <li>지속적으로 피드백을 받으며 업데이트</li>
                <li>현재 실사용 중</li>
              </ul>
            </a>
            <Link
              to="/knu-lms-scheduler"
              className="additional-project-wrap"
              onClick={() => {
                setPortfolio("");
              }}
            >
              <div className="additional-project">
                관련 블로그 포스팅
                <RightArrow />
              </div>
            </Link>
          </article>
          <article className="project">
            <a
              className="project-info"
              href="https://github.com/HyeokjaeLee/hyeokjaelee.github.io"
              target="_blank"
            >
              <div className="project-title">
                <h3>Gatsby Blog</h3>
                <div>
                  <Gatsby />
                  <GraphQL />
                  <Typescript />
                </div>
              </div>
              <p>Gatsby를 이용한 개인 블로그</p>
              <ul>
                <li>기존 블로그의 문제점을 느끼고 저만의 블로그를 갖고 싶어 만들게 되었습니다.</li>
                <li>네이티브 앱과 같은 UX를 위한 웹 디자인을 고민</li>
                <li>Gatsby 템플릿 없이 제작</li>
              </ul>
            </a>
            <Link
              to="/blog-remake-review1"
              className="additional-project-wrap"
              onClick={() => {
                setPortfolio("");
              }}
            >
              <div className="additional-project">
                관련 블로그 포스팅
                <RightArrow />
              </div>
            </Link>
          </article>
        </section>
      </section>
    </>
  );
};

export default About;
