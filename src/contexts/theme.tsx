import React, { createContext } from "react";

const defaultTheme: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
} = {
  theme: "",
  setTheme: () => {},
};

const portfolio: {
  portfolio: Display;
  setPortfolio: SetDisplay;
} = {
  portfolio: "hide",
  setPortfolio: () => {},
};

export const ThemeContext = createContext(defaultTheme);
export const PortfolioContext = createContext(portfolio);
