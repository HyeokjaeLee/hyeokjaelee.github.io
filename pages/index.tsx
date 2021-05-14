// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/about.module.css";
import { TobBar } from "../components/common/Topbar";
export default function About() {
  return (
    <div>
      <TobBar />
      <div className={styles.color}>
        <span className={styles.text}>
          HYEOKJAE LEE
          <h1>
            I'm Lazy
            <br />
            Developer;
          </h1>
        </span>
        <div className={styles.dev_img} />
      </div>
    </div>
  );
}
