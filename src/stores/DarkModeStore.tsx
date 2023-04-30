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
  backgroundColor: "bg-light-1",
  subBackgroundColor: "bg-light-2",
  fontColor: "text-light-1",
  subFontColor: "text-light-2",
  thrirdFontColor: "text-light-3",
};

const darkModeColors: ChangingColors = {
  borderColor: "border-dark-mode",
  backgroundColor: "bg-dark-1",
  subBackgroundColor: "bg-dark-2",
  fontColor: "text-dark-1",
  subFontColor: "text-dark-2",
  thrirdFontColor: "text-dark-3",
};

interface DarkModeStore extends ChangingColors {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  ...whiteModeColors,
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {
    const colors = darkMode ? darkModeColors : whiteModeColors;
    set({ ...colors, darkMode });
  },
}));
