import React from "react";
import { useContext } from "react";
import { ThemeContext } from "contexts/theme";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      title="themeSwitch"
      className={`theme-switch`}
      onClick={() => {
        setTheme(theme === "" ? "dark" : "");
      }}
    >
      <div className={`ball ${theme}`}></div>
    </button>
  );
};
