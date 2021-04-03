// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import {TobBar,BottomBar} from "../component/layout/PageForm"
import {List_Group} from "../component/common/ListGroup"

export default function Home() {

const test = "안녕하세요"
  return (
    <div className={styles.container}>
       <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TobBar/>
      <main className={styles.main}>
      <List_Group/>
      </main>
      <footer className={styles.footer}>
        <BottomBar/>
      </footer>
    </div>

  );
}
