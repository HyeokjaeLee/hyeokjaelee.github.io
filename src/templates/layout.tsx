import { useState, useEffect } from "react";
import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "../components/main";
import "../assets/sass/global.scss";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
const TemplateWrapper = ({ children, location }: any) => {
  const [mode, setMode] = useState("light");
  const click = () => setMode(mode === "light" ? "dark" : "light");
  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `Sample` },
          { name: `keywords`, content: `sample, something` },
        ]}
        bodyAttributes={{ class: mode }}
      />
      <button
        className="switch"
        onClick={() => {
          click();
        }}
      >
        <div className={mode} />
      </button>

      <Header />
      <Main location={location}>{children}</Main>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
