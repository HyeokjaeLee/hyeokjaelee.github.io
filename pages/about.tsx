// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
import { TobBar } from "../components/common/Topbar";
import { Button, ButtonGroup } from "reactstrap";
import base from "../styles/base.module.css";
const since = new Date("2008-2-9");
const today = new Date();
const test =
  Math.ceil((today.getTime() - since.getTime()) / (1000 * 3600 * 24)) % 365;
export default function About() {
  const [dDay, setDday] = useState(0);
  if (dDay < test)
    setTimeout(() => {
      setDday(dDay + 1);
    }, 10);

  return (
    <>
      <section className={styles.color}>
        <div className={styles.text_container}>
          HYEOKJAE LEE
          <div className={styles.title}>
            I'm Lazy
            <br />
            Coder ;
          </div>
        </div>
        <div className={styles.clock}>
          개발자를 꿈꾼지
          <br />
          D+{dDay}
        </div>
        <img src="img/dev.png" className={styles.img} />
      </section>
      <section></section>
      <section />
    </>
  );
}
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
