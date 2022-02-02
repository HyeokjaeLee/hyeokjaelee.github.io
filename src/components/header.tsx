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
  const [scrollLocation, setScrollLocation] = useState(0);
  0 < scrollLocation && (headerClass += ` ${style.scrolling}`);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  isMenuOpened && (headerClass += ` ${style.menuOpened}`);
  const { search } = location;
  const isPortfolio = search.includes("portfolio");
  const [totalScroll, setTotalScroll] = useState(0);

  useEffect(() => {
    const bodyStyle = document.body.style;
    if (isMenuOpened) bodyStyle.overflow = "hidden";
    else bodyStyle.overflow = "visible";
  }, [isMenuOpened]);

  useEffect(() => {
    const element = document.documentElement;
    const scrollLocationHandler = throttle(() => {
      const scrollTop = element.scrollTop;
      const MOVE_RAGE = 100;
      if (
        Math.abs(scrollTop - scrollLocation) > MOVE_RAGE ||
        scrollTop === 0 ||
        totalScroll - MOVE_RAGE <= scrollTop
      )
        setScrollLocation(scrollTop);
    }, 10);
    window.addEventListener("scroll", scrollLocationHandler);

    {
      let prevTotalScroll = 0;
      const totalScrollHandler = throttle(() => {
        const _totalScroll = element.scrollHeight - element.clientHeight;
        if (_totalScroll !== prevTotalScroll) prevTotalScroll = _totalScroll;
        else {
          setTotalScroll(_totalScroll);
          window.removeEventListener("scroll", totalScrollHandler);
        }
      }, 10);
      window.addEventListener("scroll", totalScrollHandler);
    }
  }, [location.href]);
  return (
    <header className={headerClass}>
      <Link to="/">
        <h1 className={style.title}>
          <span>{isPortfolio ? "hyeokjae's" : "nagle's"}</span>
          {isPortfolio ? " portfolio" : " blog"}
        </h1>
      </Link>
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
