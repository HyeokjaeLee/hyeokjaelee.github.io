import React from "react";
import { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import * as style from "styles/components/theme-switch.module.scss";
import Sun from "img/sun.svg";
import Moon from "img/moon.svg";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  let themeSwitch = style.themeSwitch;
  let SwitchIcon = Sun;
  if (theme === "dark") {
    themeSwitch += ` ${style.dark}`;
    SwitchIcon = Moon;
  }
  return (
    <button
      title="themeSwitch"
      className={themeSwitch}
      onClick={() => {
        setTheme(theme === "" ? "dark" : "");
      }}
    >
      <div className={style.ball}>
        <SwitchIcon className={style.switchIcon} />
      </div>
    </button>
  );
};
