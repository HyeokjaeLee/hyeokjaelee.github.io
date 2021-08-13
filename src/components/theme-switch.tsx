import React from "react";
interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeSwitch = (props: Props) => {
  const { theme, setTheme } = props;
  return (
    <button
      className={`theme-switch`}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <div className={`ball ${theme}`}></div>
    </button>
  );
};
