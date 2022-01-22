import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import * as style from "styles/header.module.scss";
import { Link } from "gatsby";
export const Header = () => {
  const headerClassList = [style.header];
  const [scrollLocation, setScrollLocation] = useState(window.scrollY);
  const [totalScroll, setTotalScroll] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const isScrollTop = scrollLocation < 1;
  !isScrollTop && headerClassList.push(style.scrolling);
  if (isMenuOpened) {
    headerClassList.push(style.menuOpened);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  console.log("test");
  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        const element = document.documentElement;
        const _scrollLocation = element.scrollTop;
        const totalScroll = element.scrollHeight - element.clientHeight;
        setScrollLocation(_scrollLocation);
        setTotalScroll(totalScroll);
      }),
    []
  );
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
      <div className={style.layer}>
        <nav className={style.menu}>
          <ThemeSwitch />
          <ul className={style.links}>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
