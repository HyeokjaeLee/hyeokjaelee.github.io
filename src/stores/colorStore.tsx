import { create } from "zustand";

interface ChangingColors {
  borderColor: string;
  backgroundColor: string;
  fontColor: string;
}

const whiteModeColors: ChangingColors = {
  borderColor: "zinc-200",
  backgroundColor: "slate-50",
  fontColor: "zinc-900",
};

const darkModeColors: ChangingColors = {
  borderColor: "zinc-800",
  backgroundColor: "zinc-900",
  fontColor: "slate-50",
};

interface ColorStore extends ChangingColors {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useColorStore = create<ColorStore>(set => ({
  ...whiteModeColors,
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {
    const colors = darkMode ? darkModeColors : whiteModeColors;
    set({ ...colors, darkMode });
  },
}));
