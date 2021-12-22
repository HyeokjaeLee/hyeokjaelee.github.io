/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
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
import Puppeteer from "img/puppeteer.svg";
import { useContext } from "react";
import { PortfolioContext } from "contexts/theme";

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
    <section className="content" style={{ marginTop: "5em" }}>
      <article className="about">
        <section>
          <h2>💡 About Me</h2>
          <div className="content-wrap">
            <div>
              <img src={postProfile} className="profile" />
            </div>
            <div>
              <h3>"개발자를 꿈꾸는 코더, 이혁재입니다."</h3>
              <ul>
                <li>풀스택 개발자를 꿈꾸고 있습니다.</li>
                <li>Know-What, Know-Where을 중요하게 생각합니다.</li>
                <li>일상에서 항상 더 편리한 방법을 고민하고 찾아냅니다.</li>
                <li>여러 언어들에 발만 담궈보던중 2020년에 Javascript를 만나 푹 빠져있습니다.</li>
                <li>
                  빠르게 발전하는 Javascript 생태계를 사랑하고 새로운 기술을 배우는걸 좋아합니다.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2>✉️ Contact & Channel</h2>
          <ul className="contact-channel-list">
            <li>
              <Gmail />
              <b>Email.</b>
              <a href="mailto:leehyeokjae97@gmail.com">leehyeokjae97@gmail.com</a>
            </li>
            <li>
              <Github />
              <b>Github.</b>
              <a href="https://github.com/HyeokjaeLee" target="_blank">
                https://github.com/HyeokjaeLee
              </a>
            </li>
            <li>
              <Chrome />
              <b>Blog.</b>
              <Link
                to="/"
                onClick={() => {
                  setPortfolio("");
                }}
              >
                https://hyeokjaelee.github.io
              </Link>
            </li>
            <li>
              <Naver />
              <b>Blog(2011~2015).</b>
              <a href="https://blog.naver.com/leehyeokjae7" target="_blank">
                https://blog.naver.com/leehyeokjae7
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>👨🏻‍💻 Work Experience</h2>
          <h3>Coupang Eats</h3>
          <p className="description">2019년 5월부터 서비스 중인 30분 로켓 음식 배달 서비스</p>
          <div className="content-wrap">
            <div className="content-title">
              <p>EDP Operations</p>
              <p>2019.08 ~ 2020.02</p>
            </div>
            <ul className="content-list">
              <li>
                배달파트너 배정취소 기능의 개발 지표가 되는 데이터 수집 솔루션 제시/개발 - 인력 75%
                절감
              </li>
              <li>지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징/시각화</li>
              <li>고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발</li>
              <li>업무에 필요한 자동화 스크립트 & 매크로 개발</li>
              <li>배달파트너 센터 챗봇 개발</li>
              <li>
                식사시간과 서비스 피크타임이 겹쳐 식사 중 발생하는 이슈 트래킹을 위해 노트북을
                소지해야 하는 불편함 해소를 위한 봇 개발
              </li>
            </ul>
          </div>
        </section>
        <section className="about-article languages-tools-wrap">
          <h2>🔨 Languages & Tools</h2>
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
              <Puppeteer />
              Puppeteer
            </li>
            <li>
              <Git />
              Git
            </li>
          </ul>
        </section>
        <section>
          <h2>🔖 Projects</h2>
          <div className="content-wrap">
            <div className="content-title">
              <h3>Gititle</h3>
              <section className="stack-wrap">
                <VueJS />
                <Sass />
                <Javascript />
              </section>
              <p className="project-info">팀 구성 - 개인</p>
            </div>
            <div>
              <div className="description">
                직관적이고 정형화된 Git Commit message 작성 도우미
                <p className="project-link">
                  <Github />
                  <span>Github/gititle</span>
                  <a href="https://github.com/HyeokjaeLee/gititle">
                    https://github.com/HyeokjaeLee/gititle
                  </a>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/gititle-project"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/gititle-project
                  </Link>
                </p>
              </div>
              <ul className="content-list">
                <li>
                  커밋 규칙 정리
                  <Link
                    to="/good-commit-message"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/good-commit-message
                  </Link>
                </li>
                <li>커밋에 사용할 키워드 데이터 구조 정의</li>
                <li>PWA를 지원하는 프론트엔드, Vue.js 디자인/개발</li>
                <li>편의 기능 개발</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="content-wrap">
            <div className="content-title">
              <h3>KNU LMS Scheduler</h3>
              <section className="stack-wrap">
                <Electron />
                <Puppeteer />
                <React_svg />
                <Javascript />
              </section>
              <p className="project-info">팀 구성 - 개인</p>
            </div>
            <div>
              <div className="description">
                공주대학교 비대면 강의 시스템 편의성 개선 프로그램
                <p className="project-link">
                  <Github />
                  <span>Github/knu-lms-scheduler</span>
                  <a href="https://github.com/HyeokjaeLee/knu-lms-scheduler">
                    https://github.com/HyeokjaeLee/knu-lms-scheduler
                  </a>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/knu-lms-scheduler"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/knu-lms-scheduler
                  </Link>
                </p>
              </div>
              <ul className="content-list">
                <li>Electron 백엔드, 비대면 강의 시스템 로그인 크롤러 개발</li>
                <li>Electron 프론트엔드, React 디자인/개발</li>
                <li>프로그램 홍보, 배포, 피드백 반영 업데이트</li>
                <li>에브리타임 21년 하반기 Best 게시물 선정</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="content-wrap">
            <div className="content-title">
              <h3>WEBTOON HUB</h3>
              <section className="stack-wrap">
                <NestJS />
                <React_svg />
                <Sass />
                <Typescript />
              </section>
              <p className="project-info">팀 구성 - 개인</p>
              <p className="project-info margin-top">저작권 등록</p>
              <p className="project-info">(C-2021-020527)</p>
            </div>
            <div>
              <div className="description">
                여러 플랫폼의 웹툰을 한번에 볼 수 있는 웹 애플리케이션
                <p className="project-link">
                  <Github />
                  <span>Github/korea-webtoon-api</span>
                  <a href="https://github.com/HyeokjaeLee/korea-webtoon-api">
                    https://github.com/HyeokjaeLee/korea-webtoon-api
                  </a>
                </p>
                <p className="project-link">
                  <Github />
                  <span>Github/webtoon-hub</span>
                  <a href="https://github.com/HyeokjaeLee/webtoon-hub">
                    https://github.com/HyeokjaeLee/webtoon-hub
                  </a>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/korea-webtoon-api-update"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/korea-webtoon-api-update
                  </Link>
                </p>
              </div>
              <ul className="content-list">
                <li>NestJS 서버 구축</li>
                <li>각 플랫폼별 크롤러 개발</li>
                <li>플랫폼별 통합 웹툰 데이터 구조 정의</li>
                <li>Toyproject용 API(RESTful) 개발/공개</li>
                <li>프론트엔드 React 디자인/개발</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="content-wrap">
            <div className="content-title">
              <h3>COVID-19 Dashboard</h3>
              <section className="stack-wrap">
                <Express />
                <GraphQL />
                <Typescript />
                <HTML5 />
                <Sass />
                <Javascript />
              </section>
              <p className="project-info">팀 구성 - 개인</p>
            </div>
            <div>
              <div className="description">
                한국의 COVID-19 현황을 확인할 수 있는 웹 애플리케이션
                <p className="project-link">
                  <Github />
                  <span>Github/korea-covid19-api</span>
                  <a href="https://github.com/HyeokjaeLee/korea-covid19-api">
                    https://github.com/HyeokjaeLee/korea-covid19-api
                  </a>
                </p>
                <p className="project-link">
                  <Github />
                  <span>Github/covid19-dashboard</span>
                  <a href="https://github.com/HyeokjaeLee/covid19-dashboard">
                    https://github.com/HyeokjaeLee/covid19-dashboard
                  </a>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/covid-19-api-update"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/covid-19-api-update
                  </Link>
                </p>
              </div>
              <ul className="content-list">
                <li>Express 서버 구축</li>
                <li>COVID-19 데이터 정형화 & 계산을 통한 확장 값 추가</li>
                <li>공공데이터 포털의 COVID-19 데이터 이상치 제거</li>
                <li>Toyproject용 API(GraphQL) 개발/공개</li>
                <li>프론트엔드 HTML 디자인/개발</li>
              </ul>
            </div>
            <hr />
          </div>
          <hr />
          <div className="content-wrap">
            <div className="content-title">
              <h3>Nagle`s Blog</h3>
              <section className="stack-wrap">
                <Gatsby />
                <GraphQL />
                <Sass />
                <Typescript />
              </section>
              <p className="project-info">팀 구성 - 개인</p>
            </div>
            <div>
              <div className="description">
                개인 블로그
                <p className="project-link">
                  <Github />
                  <span>Github/blog</span>
                  <a href="https://github.com/HyeokjaeLee/hyeokjaelee.github.io">
                    https://github.com/HyeokjaeLee/hyeokjaelee.github.io
                  </a>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/blog-remake-review1"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/blog-remake-review1
                  </Link>
                </p>
                <p className="project-link">
                  <Chrome />
                  <span>Blog Post</span>
                  <Link
                    to="/blog-remake-review2"
                    onClick={() => {
                      setPortfolio("");
                    }}
                  >
                    https://hyeokjaelee.github.io/blog-remake-review2
                  </Link>
                </p>
              </div>
              <ul className="content-list">
                <li>프론트엔드 Gatsby(React) 디자인/개발</li>
                <li>템플릿 공개</li>
              </ul>
            </div>
            <hr />
          </div>
        </section>
        <section>
          <h2>🎓 Education</h2>
          <h3>공주대학교</h3>
          <div className="content-wrap">
            <div className="content-title">
              <p>컴퓨터 공학과</p>
              <p>2016.03 ~ 졸업예정</p>
            </div>
            <div>
              <ul className="content-list">
                <li>
                  <a
                    style={{ marginLeft: "0" }}
                    href="https://namu.wiki/w/%EA%B3%B5%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90/%ED%95%99%EB%B6%80/%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99?rev=316#s-2.3.4"
                  >
                    PRIMITVE
                  </a>
                  개발 & 창업 동아리 활동
                </li>
                <li>정보처리기사 취득</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default About;
