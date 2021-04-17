// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Progress } from "reactstrap";
import { Page } from "../component/layout/Page";
export default function Home() {
  return (
    <Page title="Nagle">
      <div className={styles.title_container}>
        <div className={styles.main_title}>
          <div className={styles.test} />
          <h1>
            Lazy Developer
            <br />
            이혁재입니다.
          </h1>
        </div>
        <div className={styles.sub_title}></div>
      </div>
      <div id={styles.hexagon} />
    </Page>
  );
}

{
  /*      <div className={styles.title_container}>
        <div className={styles.main_title}>
          <h1>
            Lazy Developer
            <br />
            이혁재 입니다.
          </h1>
          heroku 서버를 켜는 중입니다.
        </div>
        <div className={styles.sub_title}>
          <Progress multi style={{ flex: 1, width: "18vh" }}>
            <Progress
              bar
              animated
              value="70"
              style={{ backgroundColor: "#343148" }}
            ></Progress>
          </Progress>
        </div>
      </div>*/
}
