/* eslint-disable react/prop-types */
import React from "react";
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
import { ThemeContext } from "contexts/theme";
import * as style from "styles/pages/about.module.scss";
import { Helmet } from "react-helmet";

interface StackProps {
  logo: any;
  title: string;
}
function Stack({ logo, title }: StackProps) {
  const Logo = logo;
  return (
    <li className={style.stack}>
      <Logo />
      {title}
    </li>
  );
}

interface ProjectProps {
  title: string;
  stackList: any[];
  sideInfoList: string[];
  description: string;
  linkList: { title: string; url: string }[];
  infoList: string[];
}

function Project({
  title,
  stackList,
  sideInfoList,
  description,
  linkList,
  infoList,
}: ProjectProps) {
  const StackElements = stackList.map((Stack) => <Stack />);
  const SideInfoElements = sideInfoList.map((info) => <li>{info}</li>);
  const LinkElements = linkList.map(({ title, url }) => (
    <li>
      <a href={url} target="_blank">
        {title}
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
        <ul className={style.projectLinkList}>{LinkElements}</ul>
      </div>
      <div className={style.sectionDescription}>
        <h4>{description}</h4>
        <ul>{InfoElements}</ul>
      </div>
    </section>
  );
}

interface ContactLinkProps extends StackProps {
  url: string;
  txt?: string;
}

function ContactLink({ logo, title, url, txt }: ContactLinkProps) {
  const Logo = logo;
  txt = txt || url;
  return (
    <li>
      <Logo />
      <b>{title}</b>
      <a href={url} target="_blank">
        {txt}
      </a>
    </li>
  );
}

export default function About({ location }: any) {
  const { search }: { search: string } = location;
  const { theme } = useContext(ThemeContext);
  const isPortfolio = search.includes("portfolio");
  const OnlyPortfolioSection = isPortfolio
    ? ({ children }: { children: JSX.Element | JSX.Element[] }) => <section>{children}</section>
    : () => <></>;

  return (
    <article className={theme === "dark" ? style.aboutDark : style.about}>
      <Helmet title={isPortfolio ? "Hyeokjae's Portfolio" : "About"} />
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
          <ContactLink
            logo={Gmail}
            title="Email."
            url="mailto:leehyeokjae97@gmail.com"
            txt="leehyeokjae97@gmail.com"
          />
          <ContactLink logo={Github} title="Github." url="https://github.com/HyeokjaeLee" />
          <ContactLink logo={Chrome} title="Blog." url="https://hyeokjaelee.github.io" />
          <ContactLink
            logo={Naver}
            title="Blog(2011~2015)."
            url="https://blog.naver.com/leehyeokjae7"
          />
        </ul>
      </section>
      <OnlyPortfolioSection>
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
      </OnlyPortfolioSection>
      <OnlyPortfolioSection>
        <h2>🔨 Tech Stack Experience</h2>
        <ul className={`${style.toolList} ${style.sectionMargin}`}>
          <Stack logo={Javascript} title="Javascript" />
          <Stack logo={Typescript} title="Typescript" />
          <Stack logo={HTML5} title="HTML5" />
          <Stack logo={CSS3} title="CSS3" />
          <Stack logo={Sass} title="Sass" />
          <Stack logo={React_svg} title="React" />
          <Stack logo={NextJS} title="NextJS" />
          <Stack logo={Gatsby} title="Gatsby" />
          <Stack logo={VueJS} title="VueJS" />
          <Stack logo={Express} title="Express" />
          <Stack logo={NestJS} title="NestJS" />
          <Stack logo={GraphQL} title="GraphQL" />
          <Stack logo={MongoDB} title="MongoDB" />
          <Stack logo={SQLite} title="SQLite" />
          <Stack logo={Electron} title="Electron" />
          <Stack logo={Puppeteer} title="Puppeteer" />
          <Stack logo={Jest} title="Jest" />
          <Stack logo={Git} title="Git" />
        </ul>
      </OnlyPortfolioSection>
      <OnlyPortfolioSection>
        <h2>🔖 Projects</h2>
        <Project
          title="Gititle"
          stackList={[VueJS, Sass, Javascript]}
          sideInfoList={["팀구성 - 개인"]}
          description="직관적이고 정형화된 Git Commit message 작성 도우미"
          linkList={[
            { title: "Repository (Github)", url: "https://github.com/HyeokjaeLee/gititle" },
            {
              title: "프로젝트 후기 (Blog)",
              url: "https://hyeokjaelee.github.io/gititle-project",
            },
            {
              title: "커밋 컨벤션 정리 (Blog)",
              url: "https://hyeokjaelee.github.io/good-commit-message",
            },
          ]}
          infoList={[
            "커밋에 사용할 키워드, 데이터 구조 정의",
            "편의 기능 개발",
            "프론트엔드 디자인/개발 (Vue.js)",
            "Github Pages 배포",
          ]}
        />
        <Project
          title="KNU LMS Scheduler"
          stackList={[React_svg, Puppeteer, Electron, Javascript]}
          sideInfoList={["팀구성 - 개인"]}
          description="공주대학교 비대면 강의 시스템 편의성 개선 프로그램"
          linkList={[
            {
              title: "Repository (Github)",
              url: "https://github.com/HyeokjaeLee/knu-lms-scheduler",
            },
            {
              title: "프로젝트 후기 (Blog)",
              url: "https://hyeokjaelee.github.io/knu-lms-scheduler",
            },
          ]}
          infoList={[
            "원본 비대면 강의 시스템 로그인 정보 크롤러 개발",
            "프론트엔드 디자인/개발 (React)",
            "프로그램 홍보 및 배포",
            "에브리타임 21년 하반기 Best 게시물 선정",
            "사용자 피드백 반영 업데이트",
          ]}
        />
        <Project
          title="WEBTOON HUB"
          stackList={[NestJS, MongoDB, React_svg, Sass, Typescript]}
          sideInfoList={["팀구성 - 개인", "저작권 등록 (C-2021-020527)"]}
          description="여러 플랫폼의 웹툰을 한번에 볼 수 있는 웹 애플리케이션"
          linkList={[
            {
              title: "API Repository (Github)",
              url: "https://github.com/HyeokjaeLee/korea-webtoon-api",
            },
            {
              title: "FE Repository (Github)",
              url: "https://github.com/HyeokjaeLee/webtoon-hub",
            },
            {
              title: "API 업데이트 후기 (Blog)",
              url: "https://hyeokjaelee.github.io/korea-webtoon-api-update",
            },
          ]}
          infoList={[
            "NestJS 서버 구축",
            "MongoDB 구조 설계 / 적용",
            "웹툰 플랫폼별 크롤러 개발",
            "Toyproject용 API 개발/공개 (RESTful)",
            "프론트엔드 디자인/개발 (React)",
          ]}
        />
        <Project
          title="COVID-19 Dashboard"
          stackList={[Express, GraphQL, Typescript, HTML5, Sass, Javascript]}
          sideInfoList={["팀구성 - 개인"]}
          description="한국의 COVID-19 현황을 확인할 수 있는 웹 애플리케이션"
          linkList={[
            {
              title: "API Repository (Github)",
              url: "https://github.com/HyeokjaeLee/korea-covid19-api",
            },
            {
              title: "FE Repository (Github)",
              url: "https://github.com/HyeokjaeLee/covid19-dashboard",
            },
            {
              title: "API 업데이트 후기 (Blog)",
              url: "https://hyeokjaelee.github.io/covid-19-api-update",
            },
          ]}
          infoList={[
            "Express 서버 구축",
            "COVID-19 데이터 정형화 & 계산을 통한 확장 값 추가",
            "공공데이터 포털의 COVID-19 데이터 이상치 제거",
            "Toyproject용 API 개발/공개 (GraphQL)",
            "프론트엔드 디자인/개발 (Vanilla Javascript)",
          ]}
        />
        <Project
          title="Nagle`s Blog"
          stackList={[Gatsby, GraphQL, Sass, Typescript]}
          sideInfoList={["팀구성 - 개인"]}
          description="포트폴리오 & 개인 블로그"
          linkList={[
            {
              title: "Repository (Github)",
              url: "https://github.com/HyeokjaeLee/hyeokjaelee.github.io",
            },
            {
              title: "Gatsby 블로그 이전 중간 리뷰 (Blog)",
              url: "https://hyeokjaelee.github.io/blog-remake-review1",
            },
            {
              title: "Gatsby 블로그 이전 리뷰 (Blog)",
              url: "https://hyeokjaelee.github.io/blog-remake-review2",
            },
          ]}
          infoList={["프론트엔드 디자인/개발 (Gatsby)", "블로그 기능 구현", "포트폴리오 기능 구현"]}
        />
      </OnlyPortfolioSection>
      <OnlyPortfolioSection>
        <h2>🎓 Education</h2>
        <div className={`${style.sectionFlex} ${style.sectionMargin}`}>
          <h3>공주대학교</h3>
          <div className={style.devidedSection}>
            <div className={style.sectionTitle}>
              <p>컴퓨터 공학과</p>
              <p>2016.03 ~ 졸업예정</p>
            </div>
            <ul>
              <li>
                <a
                  style={{ marginLeft: "0" }}
                  href="https://namu.wiki/w/%EA%B3%B5%EC%A3%BC%EB%8C%80%ED%95%99%EA%B5%90/%ED%95%99%EB%B6%80/%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99?rev=316#s-2.3.4"
                >
                  PRIMITVE
                </a>
                &nbsp;개발 & 창업 동아리 활동
              </li>
              <li>정보처리기사 취득</li>
            </ul>
          </div>
        </div>
      </OnlyPortfolioSection>
    </article>
  );
}
