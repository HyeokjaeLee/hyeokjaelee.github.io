import React from "react";
import logo from "../assets/img/logo.png";
export const Header = ({ title }: any) => {
  return (
    <header id="header">
      <img src={logo} className="logo"></img>
      <h1>Hyeok - Jae</h1>
      <p>Nagle의 개발 블로그</p>
      <p>Nagle's programming & tech blog</p>
    </header>
  );
};
