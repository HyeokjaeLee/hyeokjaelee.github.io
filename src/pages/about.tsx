/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
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
import MongoDB from "img/mongodb.svg";
import SQLite from "img/sqlite.svg";
import Jest from "img/jest.svg";
import { useContext } from "react";
import { PortfolioContext, ThemeContext } from "contexts/theme";
import * as style from "styles/pages/about.module.scss";
const React_svg = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>React</title>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);

interface ProjectInfo {
  stackList: any[];
  titleUnderInfoList: string[];
  description: string;
  linkInfoMap: Map<string, string>;
  additionalInfoList: string[];
}

const About = ({ location }: any) => {
  const { search }: { search: string } = location;
  const { setPortfolioOptions } = useContext(PortfolioContext);
  const { theme } = useContext(ThemeContext);
  const isPortfolio = search.includes("portfolio");
  const showOnlyPortfolio = (element: JSX.Element) => (isPortfolio ? element : <></>);
  useEffect(() => {
    isPortfolio && setPortfolioOptions({ isPortfolio: true, portfolioButtonShow: false });
  }, []);
  const EMPTY_ELEMENT = () => <></>;
  let ProjectListElement = EMPTY_ELEMENT;
  let WorkExperienceElement = EMPTY_ELEMENT;
  if (isPortfolio) {
    ProjectListElement = () => {
      const ProjectElements: JSX.Element[] = [];
      const projectInfoMap: Map<string, ProjectInfo> = new Map([
        [
          "Gititle",
          {
            stackList: [VueJS, Sass, Javascript],
            titleUnderInfoList: ["팀구성 - 개인"],
            description: "직관적이고 정형화된 Git Commit message 작성 도우미",
            linkInfoMap: new Map([
              ["Github Repository", "https://github.com/HyeokjaeLee/gititle"],
              ["프로젝트 후기", "https://hyeokjaelee.github.io/gititle-project"],
              ["커밋 컨벤션 정리", "https://hyeokjaelee.github.io/good-commit-message"],
            ]),
            additionalInfoList: [
              "커밋에 사용할 키워드, 데이터 구조 정의",
              "PWA를 지원하는 프론트엔드 디자인/개발 (Vue.js)",
              "편의 기능 개발",
            ],
          },
        ],
        [
          "KNU LMS Scheduler",
          {
            stackList: [Javascript, Sass, VueJS],
            titleUnderInfoList: ["팀구성 - 개인"],
            description: "공주대학교 비대면 강의 시스템 편의성 개선 프로그램",
            linkInfoMap: new Map([
              ["Github Repository", "https://github.com/HyeokjaeLee/knu-lms-scheduler"],
              ["프로젝트 후기", "https://hyeokjaelee.github.io/knu-lms-scheduler"],
            ]),
            additionalInfoList: [
              "비대면 강의 시스템 로그인 크롤러 개발",
              "프론트엔드 디자인/개발 (React)",
              "프로그램 홍보, 배포, 피드백 반영 업데이트",
              "에브리타임 21년 하반기 Best 게시물 선정",
            ],
          },
        ],
        [
          "WEBTOON HUB",
          {
            stackList: [NestJS, MongoDB, React_svg, Sass, Typescript],
            titleUnderInfoList: ["팀구성 - 개인", "저작권 등록 (C-2021-020527)"],
            description: "여러 플랫폼의 웹툰을 한번에 볼 수 있는 웹 애플리케이션",
            linkInfoMap: new Map([
              ["API Github Repository", "https://github.com/HyeokjaeLee/korea-webtoon-api"],
              ["Frontend Github Repository", "https://github.com/HyeokjaeLee/webtoon-hub"],
              ["API 업데이트 후기", "https://hyeokjaelee.github.io/korea-webtoon-api-update"],
            ]),
            additionalInfoList: [
              "NestJS 서버 구축",
              "MongoDB 구조 설계 / 적용",
              "웹툰 플랫폼별 크롤러 개발",
              "Toyproject용 API 개발/공개 (RESTful)",
              "프론트엔드 디자인/개발 (React)",
            ],
          },
        ],
        [
          "COVID-19 Dashboard",
          {
            stackList: [Express, GraphQL, Typescript, HTML5, Sass, Javascript],
            titleUnderInfoList: ["팀구성 - 개인"],
            description: "한국의 COVID-19 현황을 확인할 수 있는 웹 애플리케이션",
            linkInfoMap: new Map([
              ["API Github Repository", "https://github.com/HyeokjaeLee/korea-covid19-api"],
              ["Frontend Github Repository", "https://github.com/HyeokjaeLee/covid19-dashboard"],
              ["API 업데이트 후기", "https://hyeokjaelee.github.io/covid-19-api-update"],
            ]),
            additionalInfoList: [
              "Express 서버 구축",
              "COVID-19 데이터 정형화 & 계산을 통한 확장 값 추가",
              "공공데이터 포털의 COVID-19 데이터 이상치 제거",
              "Toyproject용 API 개발/공개 (GraphQL)",
              "프론트엔드 디자인/개발(Vanilla Javascript)",
            ],
          },
        ],
        [
          "Nagle`s Blog",
          {
            stackList: [Gatsby, GraphQL, Sass, Typescript],
            titleUnderInfoList: ["팀구성 - 개인"],
            description: "포트폴리오 & 개인 블로그",
            linkInfoMap: new Map([
              ["Github Repository", "https://github.com/HyeokjaeLee/hyeokjaelee.github.io"],
              ["Gatsby 블로그 이전 중간리뷰", "https://hyeokjaelee.github.io/blog-remake-review1"],
              ["Gatsby 블로그 이전 리뷰", "https://hyeokjaelee.github.io/blog-remake-review2"],
            ]),
            additionalInfoList: [
              "프론트엔드 Gatsby 디자인/개발 (React)",
              "블로그 기능 구현",
              "포트폴리오 기능 구현",
            ],
          },
        ],
      ]);
      for (const [
        title,
        { stackList, titleUnderInfoList, description, linkInfoMap, additionalInfoList },
      ] of projectInfoMap) {
        let TitleUnderInfoElements: JSX.Element[] = [];
        for (const titleUnderInfo of titleUnderInfoList)
          TitleUnderInfoElements.push(<li>{titleUnderInfo}</li>);
        let StackElements: JSX.Element[] = [];
        for (const Stack of stackList) StackElements.push(<Stack />);
        let LinkInfoElements: JSX.Element[] = [];
        for (const [name, url] of linkInfoMap)
          LinkInfoElements.push(
            <li>
              <span>{name}</span>
              <a href={url} target="_blank">
                {url}
              </a>
            </li>
          );
        let AdditionalElements: JSX.Element[] = [];
        for (const additionalInfo of additionalInfoList)
          AdditionalElements.push(<li>{additionalInfo}</li>);
        ProjectElements.push(
          <section className={`${style.devidedSection} ${style.sectionMargin}`}>
            <div className={style.sectionTitle}>
              <h3>{title}</h3>
              <section className={style.stackWrap}>{StackElements}</section>
              <ul className={style.titleUnderInfoList}>{TitleUnderInfoElements}</ul>
            </div>
            <div className={style.sectionDescription}>
              <h4>{description}</h4>
              <ul className={style.projectLinkList}>{LinkInfoElements}</ul>
              <ul>{AdditionalElements}</ul>
            </div>
          </section>
        );
      }
      return (
        <section>
          <h2>🔖 Projects</h2>
          {ProjectElements}
        </section>
      );
    };
    WorkExperienceElement = () => (
      <section>
        <h2>👨🏻‍💻 Work Experience</h2>
        <div className={`${style.sectionFlex} ${style.sectionMargin}`}>
          <h3>Coupang Eats</h3>
          <p>2019년 5월부터 서비스 중인 30분 로켓 음식 배달 서비스</p>
          <div className={style.devidedSection}>
            <div className={style.sectionTitle}>
              <p>EDP Operations</p>
              <p>2019.08 ~ 2020.02</p>
              <span className={style.miniTxt}>6개월</span>
            </div>
            <ul className={style.sectionDescription}>
              <li>
                배달파트너 배정취소 기능의 개발 지표가 되는 데이터 수집 솔루션 제시/개발&nbsp;
                <span className={style.miniTxt}>담당 인원 75% 절감</span>
              </li>
              <li>지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징/시각화</li>
              <li>고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발</li>
              <li>
                업무에 필요한 자동화 스크립트 & 매크로 개발 &nbsp;
                <span className={style.miniTxt}>업무당 담당 인원 한 명 수준으로 절감</span>
              </li>
              <li>배달파트너 센터 챗봇 개발</li>
              <li>
                식사시간과 서비스 피크타임이 겹쳐 식사 중 발생하는 이슈 트래킹을 위해 노트북을
                소지해야 하는 불편함 해소를 위한 봇 개발
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  return (
    <article className={theme === "dark" ? style.aboutDark : style.about}>
      <section>
        <h2>💡 About Me</h2>
        <div className={`${style.aboutMeContent} ${style.sectionMargin}`}>
          <img src={postProfile} className={style.profile} />
          <div>
            <h3>"개발자를 꿈꾸는 코더, 이혁재입니다."</h3>
            <ul>
              <li>Full Stack 개발자를 지향하고 있습니다.</li>
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
        <ul className={`${style.contactChannelList} ${style.sectionMargin}`}>
          {((propsList) =>
            propsList.map((props) => {
              const { Icon, title, link, children } = props;
              return (
                <li>
                  <Icon />
                  <b>{title}</b>
                  <a href={link} target="_blank">
                    {children ? children : link}
                  </a>
                </li>
              );
            }))([
            {
              Icon: Gmail,
              title: "Email.",
              link: "mailto:leehyeokjae97@gmail.com",
              children: "leehyeokjae97@gmail.com",
            },
            {
              Icon: Github,
              title: "Github.",
              link: "https://github.com/HyeokjaeLee",
            },
            {
              Icon: Chrome,
              title: "Blog.",
              link: "https://hyeokjaelee.github.io",
            },
            {
              Icon: Naver,
              title: "Blog(2011~2015).",
              link: "https://blog.naver.com/leehyeokjae7",
            },
          ])}
        </ul>
      </section>
      <WorkExperienceElement />
      <section>
        <h2>🔨 Languages & Tools Experience</h2>
        <ul className={`${style.toolList} ${style.sectionMargin}`}>
          {((stackList) =>
            stackList.map((stack) => {
              const title = stack[0];
              const Icon = stack[1];
              return (
                <li>
                  <Icon />
                  {title}
                </li>
              );
            }))([
            ["Javascript", Javascript],
            ["Typescript", Typescript],
            ["HTML5", HTML5],
            ["CSS3", CSS3],
            ["Sass", Sass],
            ["React", React_svg],
            ["NextJS", NextJS],
            ["Gatsby", Gatsby],
            ["VueJS", VueJS],
            ["Express", Express],
            ["NestJS", NestJS],
            ["GraphQL", GraphQL],
            ["MongoDB", MongoDB],
            ["SQLite", SQLite],
            ["Electron", Electron],
            ["Puppeteer", Puppeteer],
            ["Jest", Jest],
            ["Git", Git],
          ])}
        </ul>
      </section>
      <ProjectListElement />
      {showOnlyPortfolio(
        <section>
          <h2>🎓 Education</h2>
          <div className={`${style.sectionFlex} ${style.sectionMargin}`}>
            <h3>공주대학교</h3>
            <div className={style.devidedSection}>
              <div className={style.sectionTitle}>
                <p>컴퓨터 공학과</p>
                <p>2016.03 ~ 졸업예정</p>
              </div>
              <ul className={style.setionDescription}>
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
      )}
    </article>
  );
};

export default About;
