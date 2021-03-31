// pages/index.tsx

import React, { useState } from "react";
import Head from "next/head";
import { Example } from "../component/layout/MenuBar";
import {List_Group} from "../component/common/ListGroup"

export default function Home() {
  const [text, setText] = useState<string>("자바스크립트");

const test = "안녕하세요"
  return (
    <div className="main">
      <Example/>
      <div>
      <List_Group/>
      </div>
      <footer className="footer">test</footer>
    </div>
  );
}
