// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../component/layout/Footer";
import styles from "../styles/Home.module.css";
import { TobBar, BottomBar } from "../component/layout/PageForm";
import { Button, Progress, Jumbotron } from "reactstrap";
import { MainCard } from "../component/layout/MainCard";
const test = "";
console.log(`${test}test`);
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nalge</title>
        <link rel="icon" href="/char.png" />
      </Head>
      <TobBar />
      <main className={styles.main}>
        <div className={styles.title_container}>
          <div className={styles.title_text}>
            Lazy Developer
            <br />
            이혁재 입니다.
          </div>
          <hr />
          {/*<div className={styles.test3}><MainCard/></div>*/}
          <div className={styles.title_button}>
            Heroku 서버를 깨우는 중입니다.
            <br />
            잠시만 기다려주세요.
            {/*<Button outline color="primary" className={"back face"}>
                <h2>▶</h2>
              </Button>*/}
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              display: "flex",
              backgroundColor: "#D7C49E",
              justifyContent: "center",
              alignItems: "center",
              color: "#343148",
            }}
          >
            <Progress
              multi
              className={styles.test}
              style={{ width: "22vh", height: "1.5vh", margin: "1vh" }}
            >
              <Progress
                bar
                animated
                value="70"
                style={{ backgroundColor: "#343148" }}
              ></Progress>
            </Progress>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <BottomBar />
      </footer>
    </div>
  );
}
