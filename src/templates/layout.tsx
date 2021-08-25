import { useState, useEffect } from "react";

import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "../components/main";
import "../assets/sass/index.scss";
import { ThemeSwitch } from "../components/theme-switch";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ThemeContext } from "../components/global-data";
const TemplateWrapper = ({ children, location }: any) => {
  const [theme, setTheme] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: `description`, content: `programming & tech blog` },
          { name: `generator`, content: `gatsby` },
          { name: `author`, content: `HyeokjaeLee` },
        ]}
        bodyAttributes={{ class: theme }}
      />
      <ThemeSwitch />
      <Header />
      <Main location={location}>{children}</Main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default TemplateWrapper;
