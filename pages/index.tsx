// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../component/layout/Footer";
import styles from "../styles/Home.module.css";
import { TobBar, BottomBar } from "../component/layout/PageForm";
import { Button, Progress, Jumbotron } from "reactstrap";
import { MainCard } from "../component/layout/MainCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nalge</title>
        <link rel="icon" href="/char.png" />
      </Head>
      <TobBar />
      <main className={styles.main}>
        <Jumbotron className={styles.title_container}>
          <span className={styles.title_container}>
            <h2 className={styles.title_text}>
              <span style={{ color: "#A892DD" }}>const </span>lazy_developer
              <span style={{ color: "#89DDFF" }}>=</span>
              <br/>
              <span style={{ color: "#B9E876" }}>"이혁재입니다."</span>
            </h2>
            <hr/>
            {/*<div className={styles.test3}><MainCard/></div>*/}
            <div className={styles.title_button}>
              Heroku 서버를 깨우는 중입니다.<br/>
              잠시만 기다려주세요.
            <Progress multi style={{ width: "60%", marginTop: "20px"}}>
              <Progress bar animated value="15">
                Stripes
              </Progress>
              <Progress bar animated color="success" value="30">
                Animated Stripes
              </Progress>
            </Progress>
              {/*<Button outline color="primary" className={"back face"}>
                <h2>▶</h2>
              </Button>*/}
            </div>
          </span>
        </Jumbotron>
      </main>
      <footer className={styles.footer}>
        <BottomBar />
      </footer>
    </div>
  );
}
