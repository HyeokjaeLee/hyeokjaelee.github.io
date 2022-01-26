import React from "react";
import * as style from "styles/components/navbar.module.scss";
import { Link } from "gatsby";

export const Navbar = (props: any) => {
  const [menuView, setMenuView] = React.useState(false);
  return (
    <nav className={`${style.navbar} ${menuView ? style.show : style.hide}`}>
      <button
        className={style.menuButton}
        onClick={() => {
          setMenuView(!menuView);
        }}
      >
        <div className={`${style.line} ${style.top}`} />
        <div className={`${style.line} ${style.middle}`} />
        <div className={`${style.line} ${style.bottom}`} />
      </button>
      <section className={`${style.menu}`}></section>
    </nav>
  );
};
//
