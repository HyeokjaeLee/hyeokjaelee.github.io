// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Footer } from "../component/layout/Footer";
import styles from "../styles/Home.module.css";
import { TobBar, BottomBar } from "../component/layout/PageForm";
import { Button } from "reactstrap";
import {MainCard} from "../component/layout/MainCard"

export default function Home() {
  const test = "안녕하세요";
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TobBar />
      <main className={styles.main}>
        <span className={styles.test}>
          <h1>Thank you for visiting my site.</h1>
          <div className={styles.test3}><MainCard/></div>
          <Button color="secondary" className={styles.test2}>
            View posts
          </Button>{" "}
        </span>
      </main>
      <footer className={styles.footer}>
        <BottomBar />
      </footer>
    </div>
  );
}
