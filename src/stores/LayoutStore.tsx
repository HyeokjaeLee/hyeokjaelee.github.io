import { create } from "zustand";

interface LayoutStore {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;

  footer: boolean;
  setFooter: (footer: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>(set => ({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => set({ darkMode }),

  footer: true,
  setFooter: (footer: boolean) => set({ footer }),
}));
