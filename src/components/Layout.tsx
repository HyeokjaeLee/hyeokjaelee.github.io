import { Link } from "gatsby";
import React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "./Logo";
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
  const { darkMode, setDarkMode, backgroundColor, fontColor, borderColor } =
    useDarkModeStore();

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      data-is-root-path={isRootPath}
      className={`flex flex-col min-h-[100vh] items-center ${backgroundColor} duration-300 ${fontColor}`}
    >
      <header
        className={`w-full flex flex-col items-center ${
          position ? "shadow-xl rounded-b-3xl" : "border-b-[1px]"
        } ${borderColor} sticky top-0 ${backgroundColor} z-10 duration-300`}
      >
        <nav className={`${DEFAULT_WIDTH} flex items-center justify-between`}>
          <Link to="/">
            <Logo height="4rem" width="4rem" />
          </Link>
          <ul className="flex gap-3 items-center justify-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button
                className={`flex justify-center items-center rounded-[100%] p-2 duration-300 ${
                  darkMode ? "hover:bg-zinc-600" : "hover:bg-zinc-300"
                } active:bg-yellow-500`}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? <Moon size="1.2rem" /> : <Sun size="1.2rem" />}
              </button>
            </li>
          </ul>
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
