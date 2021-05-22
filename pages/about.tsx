// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
const since = new Date("2008-2-9");
const today = new Date();
const test =
  Math.ceil((today.getTime() - since.getTime()) / (1000 * 3600 * 24)) % 365;
export default function About() {
  return (
    <>
      <Title />
      <Introduce />
    </>
  );
}

const Title = () => (
  <section className={styles.title}>
    <div className={styles.text}>
      HYEOKJAE LEE
      <h1>
        I'm Lazy
        <br />
        Coder;
      </h1>
    </div>
    <img src="img/deno.png" className={styles.img} />
  </section>
);

const Introduce = () => (
  <section>
    <div className={styles.intro}>
      <div className={styles.title2}>
        <img src="img/profile.png" className={styles.profile} />
        <h2>Javascript Fullstack 개발자를 꿈꾸는 이혁재입니다.</h2>
      </div>
      <div className={styles.contents}>
        <ul>
          <li>
            <h3>Introduction</h3>
            <ul>
              <li>안녕하세요! Fullstack 개발자를 꿈꾸는 이혁재입니다.</li>
              <li>게으른 성격을 코딩으로 극복합니다.</li>
              <li>
                Javascript 생태계를 사랑하고 개발 트랜드에 관심이 많습니다.
              </li>
              <li>Know-How보단 Know-Where이나 Know-What을 중요시합니다.</li>
              <li>Refactoring을 생활화합니다.</li>
            </ul>
          </li>
          <li>
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/HyeokjaeLee"
                  style={{ backgroundColor: "#EA4335" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-EA4335?style=flat-square&logo=Gmail&logoColor=white" />
                  Gmail
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="https://github.com/HyeokjaeLee"
                  style={{ backgroundColor: "#181717" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-181717?style=flat-square&logo=GitHub&logoColor=white" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HyeokjaeLee"
                  style={{ backgroundColor: "#E4405F" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-E4405F?style=flat-square&logo=Instagram&logoColor=white" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/HyeokjaeLee"
                  style={{ backgroundColor: "#03C75A" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-03C75A?style=flat-square&logo=Naver&logoColor=white" />
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3>Skills</h3>
            <ul>
              <li>
                Language :
                <a
                  style={{ backgroundColor: "#F7DF1E", color: "black" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-F7DF1E?style=flat-square&logo=Javascript&logoColor=black" />
                  Javascript
                </a>
                <a
                  style={{ backgroundColor: "#3178c6" }}
                  className={styles.sticker}
                >
                  <img src="https://img.shields.io/badge/-3178c6?style=flat-square&logo=Typescript&logoColor=white" />
                  Typescript
                </a>
              </li>
              <li></li>
              <li></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

/*<ButtonGroup className={styles.buttonGroup}>
        <Button className={styles.button}>
          &#x1F4E3;
          <br /> About Me
        </Button>
        <Button className={styles.button}>
          &#x1F528; <br />
          Skills
        </Button>
        <Button className={styles.button}>
          &#x1F4AD; <br />
          Experience
        </Button>
        <Button className={styles.button}>
          &#x1F4CB;
          <br /> Project
        </Button>
        <Button className={styles.button}>
          &#x1F393; <br />
          Education
        </Button>
      </ButtonGroup>*/
