// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../component/layout/Footer";
import styles from "../styles/Home.module.css";
import { TobBar, BottomBar } from "../component/layout/PageForm";
import { Button } from "reactstrap";
import {MainCard} from "../component/layout/MainCard"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nalge</title>
        <link rel="icon" href="/char.png" />
      </Head>
      <TobBar />
      <main className={styles.main}>
        <span className={styles.test}>
          <h1 className={styles.texttest}><span style={{color:"#A892DD"}}>const </span>lazy_developer<span style={{color:"#89DDFF"}}>=</span><br/><span style={{color:"#B9E876"}}>"이혁재입니다."</span></h1>
         {/*<div className={styles.test3}><MainCard/></div>*/}
          <Button outline color="primary" className={styles.test2}><h2>▶</h2></Button>
        </span>
      </main>
      <footer className={styles.footer}>
        <BottomBar />
      </footer>
    </div>
  );
}
