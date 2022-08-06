import React, { useEffect, useState, useContext, Dispatch } from "react";
import { throttle } from "lodash";
import { ThemeContext } from "contexts/theme";
import * as style from "styles/components/header.module.scss";
import { Link } from "gatsby";
import Sun from "img/sun.svg";
import Moon from "img/moon.svg";

export const Header = ({ location }: any) => {
  const { theme, setTheme } = useContext(ThemeContext);
  let headerClass = !theme ? style.header : style.headerDark;
  const ThemeSwitchIcon = !theme ? Sun : Moon;
  const [scrollInfo, setScrollInfo] = useState({ now: 0, total: 0 });
  0 < scrollInfo.now && (headerClass += ` ${style.scrolling}`);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  isMenuOpened && (headerClass += ` ${style.menuOpened}`);
  const { search } = location;
  const isPortfolio = search.includes("portfolio");
  useEffect(() => {
    const bodyStyle = document.body.style;
    if (isMenuOpened) bodyStyle.overflow = "hidden";
    else bodyStyle.overflow = "visible";
  }, [isMenuOpened]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollNow = document.documentElement.scrollTop;
      const scrollTotal = document.body.scrollHeight - window.innerHeight;
      if (scrollInfo.now !== scrollNow || scrollInfo.total !== scrollTotal)
        setScrollInfo({ now: scrollNow, total: scrollTotal });
    });
  }, []);
  return (
    <header className={headerClass}>
      <Link to="/">
        <h1 className={style.title}>
          <span>{isPortfolio ? "hyeokjae's" : "nagle's"}</span>
          {isPortfolio ? " portfolio" : " blog"}
        </h1>
      </Link>
      <div className={style.scrollLocationWrap}>
        <progress value={scrollInfo.now} max={scrollInfo.total}></progress>
      </div>
      <button className={style.menuButton} onClick={() => setIsMenuOpened(!isMenuOpened)}>
        <div className={`${style.line} ${style.top}`} />
        <div className={`${style.line} ${style.middle}`} />
        <div className={`${style.line} ${style.bottom}`} />
      </button>
      <div className={`${style.layer}`}>
        <nav className={style.menu}>
          <ul className={style.links}>
            <li>
              <Link onClick={() => setIsMenuOpened(!isMenuOpened)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpened(!isMenuOpened)}>
                Posts
              </Link>
            </li>
          </ul>
          <button
            className={style.modeSwitch}
            onClick={() => {
              const _theme = theme === "" ? "dark" : "";
              localStorage.setItem("theme", _theme);
              setTheme(_theme);
            }}
          >
            <div className={style.ball}>
              <ThemeSwitchIcon />
            </div>
          </button>
          <p className={style.designBy}>DESIGN BY HYEOKJAELEE</p>
        </nav>
      </div>
    </header>
  );
};
