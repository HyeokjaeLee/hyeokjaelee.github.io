import React from "react";
import logo from "img/logo.png";
import * as style from "styles/header.module.scss";
export const Header = () => {
  const theme = "";
  return (
    <header className={style.header}>
      <img src={logo} className={style.logo + theme} alt="title-logo"></img>
      <span className="title">
        <h1>Nagle's blog</h1>
        <p>Programming & Tech</p>
      </span>
    </header>
  );
};
