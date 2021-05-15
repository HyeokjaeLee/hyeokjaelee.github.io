// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
import { TobBar } from "../components/common/Topbar";
import { Button, ButtonGroup } from "reactstrap";
import base from "../styles/base.module.css";
export default function About() {
  return (
    <div className={base.body}>
      <TobBar />
      <div className={styles.color}>
        <div className={styles.text_container}>
          HYEOKJAE LEE
          <div className={styles.title}>
            I'm Lazy
            <br />
            Developer ;
          </div>
        </div>
        <img src="/img/dev.png" className={styles.img} />
      </div>
      <ButtonGroup className={styles.buttonGroup}>
        <Button className={styles.button}>&#x1F4E3; About Me</Button>
        <Button className={styles.button}>&#x1F528; Skills</Button>
        <Button className={styles.button}>&#x1F4AD; Experience</Button>
        <Button className={styles.button}>&#x1F4CB; Project</Button>
      </ButtonGroup>
    </div>
  );
}
