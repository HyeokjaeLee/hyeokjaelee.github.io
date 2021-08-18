import React, { createContext, useState } from "react";

interface Theme {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const defaultTheme: Theme = {
  theme: "",
  setTheme: () => {},
};
export const ThemeContext = createContext(defaultTheme);
