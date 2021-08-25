/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Nav } from "../components/nav";
import { Helmet } from "react-helmet";
import Gmail from "../assets/img/gmail.svg";
import Github from "../assets/img/github.svg";
import Naver from "../assets/img/naver.svg";

interface Props {
  name: string;
  backgroundColor: string;
  logoColor: string;
  displayName?: string;
}
const Label = (props: Props) => {
  let { name, backgroundColor, logoColor, displayName } = props;
  displayName = displayName || name;
  return (
    <li>
      <img
        className="label"
        src={`https://img.shields.io/badge/${displayName}-${backgroundColor}?style=flat-round&logo=${name}&logoColor=${logoColor}`}
      />
    </li>
  );
};

const About = () => {
  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `programming & tech blog` },
          { name: `generator`, content: `gatsby` },
          { name: `author`, content: `HyeokjaeLee` },
        ]}
        bodyAttributes={{ id: "about" }}
      />
      <Nav />
      <section className="content first">
        <h2>About Me</h2>
        <dl>
          <dt>
            <h3>Introduction</h3>
          </dt>
          <dd>
            <ul>
              <li>풀스택 개발자를 꿈꾸고 있습니다.</li>
              <li>항상 더 편리한 방법을 고민합니다.</li>
              <li>Javascript 생태계를 사랑하고 새로운 기술을 배우는걸 즐깁니다.</li>
              <li>웹 기술 트렌드에 관심이 많습니다.</li>
              <li>Know-What, Know-Where을 중요하게 생각합니다.</li>
            </ul>
          </dd>
          <dt>
            <h3>Contact & Channel</h3>
          </dt>
          <dd>
            <ul className="list contactChannel">
              <li>
                <Gmail className="icon small" />
                <a href="mailto:leehyeokjae97@gmail.com">leehyeokjae97@gmail.com</a>
              </li>
              <li>
                <Github className="icon small" />
                <a href="https://github.com/HyeokjaeLee">https://github.com/HyeokjaeLee</a>
              </li>
            </ul>
          </dd>
          <dt>
            <h3>Tech Stack</h3>
          </dt>
          <dd>
            <ul className="list techStack">
              <Label name="Node.js" backgroundColor="339933" logoColor="white" />
              <Label name="HTML5" backgroundColor="E34F26" logoColor="white" />
              <Label name="CSS3" backgroundColor="1572B6" logoColor="white" />
              <Label name="Sass" backgroundColor="CC6699" logoColor="white" />
              <Label name="TypeScript" backgroundColor="3178C6" logoColor="white" />
              <Label name="JavaScript" backgroundColor="F7DF1E" logoColor="black" />
              <Label name="React" backgroundColor="61DAFB" logoColor="black" />
              <Label name="Next.js" backgroundColor="000000" logoColor="white" />
              <Label name="Express" backgroundColor="000000" logoColor="white" />
              <Label name="GraphQL" backgroundColor="E434AA" logoColor="white" />
              <Label name="MariaDB" backgroundColor="003545" logoColor="white" />
              <Label name="MongoDB" backgroundColor="47A248" logoColor="white" />
              <Label name="Electron" backgroundColor="47848F" logoColor="white" />
            </ul>
          </dd>
        </dl>
      </section>
    </>
  );
};

export default About;
