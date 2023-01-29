import { create } from "zustand";

interface ChangingColors {
  borderColor: string;
  backgroundColor: string;
  fontColor: string;
}

const whiteModeColors: ChangingColors = {
  borderColor: "border-zinc-300",
  backgroundColor: "bg-zinc-100",
  fontColor: "text-zinc-800",
};

const darkModeColors: ChangingColors = {
  borderColor: "border-zinc-600",
  backgroundColor: "bg-zinc-800",
  fontColor: "text-zinc-300",
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
