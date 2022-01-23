import React, { useEffect, useState, useContext, Dispatch } from "react";
import { ThemeContext } from "contexts/theme";
import * as style from "styles/components/header.module.scss";
import { Link } from "gatsby";
import Sun from "img/sun.svg";
import Moon from "img/moon.svg";
export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const headerClassList = [!theme ? style.header : style.headerDark];
  const ThemeSwitchIcon = !theme ? Sun : Moon;
  const [scrollLocation, setScrollLocation] = useState(window.scrollY);
  const [totalScroll, setTotalScroll] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isScrollTop = scrollLocation < 1;
  !isScrollTop && headerClassList.push(style.scrolling);
  if (isMenuOpened) {
    headerClassList.push(style.menuOpened);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const element = document.documentElement;
      const _scrollLocation = element.scrollTop;
      const totalScroll = element.scrollHeight - element.clientHeight;
      setScrollLocation(_scrollLocation);
      setTotalScroll(totalScroll);
    });
  }, []);
  return (
    <header className={headerClassList.join(" ")}>
      <h1 className={style.title}>
        <span>nagle's</span> blog
      </h1>
      <div className={style.scrollLocationWrap}>
        <progress value={scrollLocation} max={totalScroll}></progress>
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
          <button className={style.modeSwitch} onClick={() => setTheme(theme === "" ? "dark" : "")}>
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
