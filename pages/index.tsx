// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../component/layout/Footer";
import styles from "../styles/Home.module.css";
import { TobBar, BottomBar } from "../component/layout/PageForm";
import { Button, Progress, Jumbotron } from "reactstrap";
import { MainCard } from "../component/layout/MainCard";
const test=""
console.log(`${test}test`)
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
          <div style={{width:"100%",height:"2vh", backgroundColor:"#C8C8CB", marginBottom:"3vh", textAlign:"right", color:"black"}}>
          </div>
            <div className={styles.title_text}>
              <span style={{ color: "#A892DD" }}>const </span>lazy_developer
              <span style={{ color: "#89DDFF" }}>=</span>
              <span style={{ color: "#B9E876" }}>"이혁재"</span><br/>
              console.<span style={{ color: "#3D94C3" }}>log</span>
              <span style={{ color: "#F1D714" }}>(</span>
              `
                <span style={{ color: "#70DDFF" }}>{"${"}</span>
                lazy_developer
                <span style={{ color: "#70DDFF" }}>{"}"}</span>
                <span style={{ color: "#B9E876" }}>입니다.</span>
                `
              <span style={{ color: "#F1D714" }}>)</span>
            </div>
            <hr/>
            {/*<div className={styles.test3}><MainCard/></div>*/}
            <div className={styles.title_button}>
              Heroku 서버를 깨우는 중입니다.<br/>
              잠시만 기다려주세요.
            <Progress multi style={{ width:"100%", marginTop: "1vh"}}>
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
        </div>
      </main>
      <footer className={styles.footer}>
        <BottomBar />
      </footer>
    </div>
  );
}
