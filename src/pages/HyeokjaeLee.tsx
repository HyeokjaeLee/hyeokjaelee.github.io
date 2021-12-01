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
    <section className="content" style={{ marginTop: "5em", minHeight: "300vh" }}>
      <article className="portfolio">
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
          <h2>🤝 Contact & Channel</h2>
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
              <b>Blog.</b>
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
            <div style={{ width: "12em" }}>
              <p>EDP Operations</p>
              <p>2019.08 ~ 2020.02</p>
            </div>
            <div>
              주로 데이터 클렌징과 시각화 업무를 담당했습니다.
              <br />
              비록 처음에 개발자로 입사한 것은 아니었지만 팀 리더분의 배려와 서비스 초기에 합류할 수
              있었던 덕분에 관련 업무를 할 수 있었습니다.
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default About;
