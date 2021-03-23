// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import {MainCard} from "../component/layout/MainCard"
import {Menubar} from "../component/layout/MenuBar"

export default function Home() {
  const [text, setText] = useState<string>("자바스크립트");

  setTimeout(() => {
    // 이 부분 주석
    // setText(0);
    // 이 부분 주석 해제
    setText("타입스크립트");
  }, 1000);

  return (
    <div className="container">
        <Menubar/>
        <MainCard/>
      <div>
      
      </div>
    </div>
  );
}