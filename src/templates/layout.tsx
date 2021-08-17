import { useState, useEffect } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "../components/main";
import "../assets/sass/index.scss";
import { ThemeSwitch } from "../components/theme-switch";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
const TemplateWrapper = ({ children, location }: any) => {
  const [mode, setMode] = useState("light");

  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `programming & tech blog` },
          { name: `generator`, content: `gatsby` },
          { name: `author`, content: `HyeokjaeLee` },
        ]}
        bodyAttributes={{ class: mode }}
      />
      <ThemeSwitch theme={mode} setTheme={setMode} />
      <Header />
      <Main location={location}>{children}</Main>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
