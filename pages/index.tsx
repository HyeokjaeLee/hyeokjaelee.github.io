// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Progress } from "reactstrap";
import { Page } from "../components/layout/Page";
import { TobBar } from "../components/common/Topbar";
export default function Home() {
  return (
    <div className={styles.body}>
      <div style={{ height: "150vh" }}>
        <TobBar />
      </div>
    </div>
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
         
        </div>
      </div>*/
}
