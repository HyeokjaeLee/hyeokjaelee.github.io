import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./global-data";
interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      title="themeSwitch"
      className={`theme-switch`}
      onClick={() => {
        setTheme(theme === "" ? "dark" : "");
        console.log(theme);
      }}
    >
      <div className={`ball ${theme}`}></div>
    </button>
  );
};
