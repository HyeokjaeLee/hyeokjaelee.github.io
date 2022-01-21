import "styles/index.scss";
import "styles/global.scss";
import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import { Main } from "components/main";
import { ThemeSwitch } from "components/theme-switch";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { PortfolioLink } from "components/portfolio-link";
import { ThemeContext, PortfolioContext } from "contexts/theme";
import MenuIcon from "img/menu.svg";
import * as style from "styles/header.module.scss";
import logo from "img/logo.png";
import favicon from "assets/img/favicon.ico";
import { Navbar } from "components/navbar";

const TemplateWrapper = ({ children, location }: any) => {
  const [theme, setTheme] = useState("");
  const [portfolio, setPortfolio]: [Display, SetDisplay] = useState("hide");
  const [menuShow, setMenuShow] = useState(false);
  const setMenuClass = (menuShow: boolean) => (menuShow ? "show" : "hide");
  const _Header = location.pathname.includes("HyeokjaeLee") ? <></> : <Header />;
  const helmet_meta_otions = [
    { name: `description`, content: `programming & tech blog` },
    { name: `generator`, content: `gatsby` },
    { name: `author`, content: `HyeokjaeLee` },
    {
      name: `google-site-verification`,
      content: "6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw",
    },
  ];
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
        <Helmet title="Nagle`s Blog" meta={helmet_meta_otions} bodyAttributes={{ class: theme }}>
          <link rel="icon" href={favicon} />
        </Helmet>
        <header id="header">
          <Navbar />
        </header>
        <Main location={location}>{children}</Main>
        <PortfolioLink />
      </PortfolioContext.Provider>
    </ThemeContext.Provider>
  );
};

export default TemplateWrapper;
/**
 *           <div className="flex1" />
          <ThemeSwitch />
          <button id="nav-menu-button">
            <MenuIcon className="menu-icon" />
          </button>
 */
