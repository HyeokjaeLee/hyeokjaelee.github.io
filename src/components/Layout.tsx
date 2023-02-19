import { Link } from "gatsby";
import React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "./Logo";
import { Searchbox } from "./Searchbox";
import { useDarkModeStore } from "../stores";
import { Sun, Moon } from "react-feather";
import { useState, useEffect } from "react";
interface LayoutProps {
  location: PageProps["location"];
  children: React.ReactNode;
  footerHidden?: boolean;
}

export const Layout = ({ location, children, footerHidden }: LayoutProps) => {
  const DEFAULT_WIDTH = "w-full max-w-5xl px-10";
  const rootPath = "/";
  const isRootPath = location.pathname === rootPath;
  const {
    darkMode,
    setDarkMode,
    backgroundColor,
    subBackgroundColor,
    fontColor,
    borderColor,
  } = useDarkModeStore();
  /**
   *   const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

   * 
   */

  return (
    <div
      data-is-root-path={isRootPath}
      className={`flex flex-col min-h-[100vh] items-center ${backgroundColor} duration-300 ${fontColor}`}
    >
      <header
        className={`w-full h-[50px] bg-nav px-6 flex items-center text-nav font-bold z-10`}
      >
        <Link to="/" className="w-fit">
          <Logo height="30px" width="30px" />
        </Link>
        <nav className={`flex items-center justify-between flex-1 pl-4`}>
          <div className="flex gap-5 items-center flex-1">
            <Searchbox />
            <ul className="flex gap-3 items-center justify-center">
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className={`flex justify-center items-center rounded-[100%] p-2 duration-300 ${
                darkMode ? "hover:bg-zinc-600" : "hover:bg-yellow-500"
              }`}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? <Moon size="1.2rem" /> : <Sun size="1.2rem" />}
            </button>
          </div>
        </nav>
      </header>
      <main className={`${DEFAULT_WIDTH} py-10 flex-1 z-0`}>{children}</main>
      <footer
        className={`${DEFAULT_WIDTH} py-10 border-t-[1px] ${borderColor} ${
          footerHidden ? "hidden" : "fade-in"
        }`}
      >
        <p className="font-bold">Designed by Leehyeokjae</p>
        <p className="text-sm">
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com"> Gatsby</a> | 모든 나눔스퀘어
          서체의 지식재산권은 (주)네이버에 있습니다.
        </p>
      </footer>
    </div>
  );
};
