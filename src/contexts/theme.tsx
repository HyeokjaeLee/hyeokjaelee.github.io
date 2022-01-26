import React, { createContext } from "react";

const defaultTheme: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
} = {
  theme: "",
  setTheme: () => {},
};

const portfolioOptions: {
  portfolioOptions: PortfolioOptions;
  setPortfolioOptions: SetPortfolioOptions;
} = {
  portfolioOptions: { isPortfolio: false, portfolioButtonShow: false },
  setPortfolioOptions: () => {},
};

export const ThemeContext = createContext(defaultTheme);
export const PortfolioContext = createContext(portfolioOptions);
