import { create } from "zustand";

interface ChangingColors {
  borderColor: string;
  backgroundColor: string;
  subBackgroundColor: string;
  fontColor: string;
  subFontColor: string;
  thrirdFontColor: string;
}

const whiteModeColors: ChangingColors = {
  borderColor: "border-light-mode",
  backgroundColor: "bg-light-mode-main",
  subBackgroundColor: "bg-light-mode-sub",
  fontColor: "text-light-mode-main",
  subFontColor: "text-light-mode-sub",
  thrirdFontColor: "text-light-mode-third",
};

const darkModeColors: ChangingColors = {
  borderColor: "border-dark-mode",
  backgroundColor: "bg-dark-mode-main",
  subBackgroundColor: "bg-dark-mode-sub",
  fontColor: "text-dark-mode-main",
  subFontColor: "text-dark-mode-sub",
  thrirdFontColor: "text-dark-mode-third",
};

interface DarkModeStore extends ChangingColors {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useDarkModeStore = create<DarkModeStore>(set => ({
  ...whiteModeColors,
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {
    const colors = darkMode ? darkModeColors : whiteModeColors;
    set({ ...colors, darkMode });
  },
}));
