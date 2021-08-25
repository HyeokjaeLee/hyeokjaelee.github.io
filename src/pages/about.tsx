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
    <img
      className="label"
      src={`https://img.shields.io/badge/${displayName}-${backgroundColor}?style=flat-square&logo=${name}&logoColor=${logoColor}`}
    />
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
              <li>풀스택 개발자를 꿈꾸는 이혁재입니다.</li>
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
            <ul className="listNone">
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
        </dl>
      </section>
    </>
  );
};

export default About;
