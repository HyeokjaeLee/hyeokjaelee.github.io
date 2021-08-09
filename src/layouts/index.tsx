import { useState, useEffect } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Transition from "../components/transition";
import logo from "../assets/img/logo.png";

import "./layout.scss";

const Header = ({ title }: any) => {
  return (
    <header id="header">
      <img src={logo} className="logo"></img>
      <h1>Hyeok - Jae</h1>
      <p>Nagle의 개발 블로그</p>
      <p>Nagle's programming & tech blog</p>
    </header>
  );
};

const Footer = () => (
  <footer id="footer">
    <p>© HyeokjaeLee. All rights reserved. Powered by GitHub Pages.</p>
  </footer>
);

const TemplateWrapper = ({ children, location }: any) => (
  <>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: `description`, content: `Sample` },
        { name: `keywords`, content: `sample, something` },
      ]}
    />
    <Header />
    <div>
      <Transition location={location}>{children}</Transition>
    </div>
    <Footer />
  </>
);

export default TemplateWrapper;
