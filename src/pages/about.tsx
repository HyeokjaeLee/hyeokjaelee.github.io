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
import React_svg from "img/reactIcon.svg";
import { useContext } from "react";
import { PortfolioContext, ThemeContext } from "contexts/theme";
import * as style from "styles/pages/about.module.scss";

const EMPTY_ELEMENT = (props: any) => <></>;
interface ProjectInfo {
  stackList: any[];
  titleUnderInfoList: string[];
  description: string;
  linkInfoMap: Map<string, string>;
  additionalInfoList: string[];
}

function Stack({ logo, title }: { logo: any; title: string }) {
  const Logo = logo;
  return (
    <li className={style.stack}>
      <Logo />
      {title}
    </li>
  );
}

function Project({
  title,
  stackList,
  sideInfoList,
  description,
  linkList,
  infoList,
}: {
  title: string;
  stackList: any[];
  sideInfoList: string[];
  description: string;
  linkList: { title: string; url: string }[];
  infoList: string[];
}) {
  const StackElements = stackList.map((Stack) => <Stack />);
  const SideInfoElements = sideInfoList.map((info) => <li>{info}</li>);
  const LinkElements = linkList.map(({ title, url }) => (
    <li>
      <span>{title}</span>
      <a href={url} target="_blank">
        {url}
      </a>
    </li>
  ));
  const InfoElements = infoList.map((info) => <li>{info}</li>);
  return (
    <section className={`${style.devidedSection} ${style.sectionMargin}`}>
      <div className={style.sectionTitle}>
        <h3>{title}</h3>
        <div className={style.stackWrap}>{StackElements}</div>
        <ul className={style.titleUnderInfoList}>{SideInfoElements}</ul>
      </div>
      <div className={style.sectionDescription}>
        <h4>{description}</h4>
        <ul className={style.projectLinkList}>{LinkElements}</ul>
        <ul>{InfoElements}</ul>
      </div>
    </section>
  );
}

export default function About({ location }: any) {
  const { search }: { search: string } = location;
  const { setPortfolioOptions } = useContext(PortfolioContext);
  const { theme } = useContext(ThemeContext);
  const isPortfolio = search.includes("portfolio");
  const showOnlyPortfolio = (element: JSX.Element) => (isPortfolio ? element : <></>);
  useEffect(() => {
    isPortfolio && setPortfolioOptions({ isPortfolio: true, portfolioButtonShow: false });
  }, []);
  let ProjectListElement = EMPTY_ELEMENT;
  let WorkExperienceElement = EMPTY_ELEMENT;
  const OnlyPortfolioElement = isPortfolio
    ? ({ children }: { children: JSX.Element }) => children
    : () => <></>;
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
        const TitleUnderInfoElements = titleUnderInfoList.map((titleUnderInfo) => (
          <li>{titleUnderInfo}</li>
        ));
        const StackElements = stackList.map((Stack) => <Stack />);
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
        <div className={`${style.devidedSection} ${style.sectionMargin}`}>
          <div className={style.sectionTitle}>
            <h3>Coupang Eats</h3>
            <ul className={style.titleUnderInfoList}>
              <li>EDP Operations</li>
              <li>
                2019.08 ~ 2020.02 <span className={style.miniTxt}>6개월</span>
              </li>
            </ul>
          </div>
          <div className={style.sectionDescription}>
            <h4>2019년 5월부터 서비스 중인 30분 로켓 음식 배달 서비스</h4>
            <ul>
              <li>
                배달파트너 배정취소 기능의 개발 지표가 되는 데이터 수집 솔루션 제시/개발
                <span className={style.miniTxt}>담당 인원 75% 절감</span>
              </li>
              <li>지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징/시각화</li>
              <li>고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발</li>
              <li>
                업무에 필요한 자동화 스크립트 & 매크로 개발
                <span className={style.miniTxt}>담당 인원 한 명 수준으로 절감</span>
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
      <OnlyPortfolioElement>
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
      </OnlyPortfolioElement>
    </article>
  );
}
