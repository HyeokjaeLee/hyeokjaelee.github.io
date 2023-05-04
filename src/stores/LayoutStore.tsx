import { create } from 'zustand';

interface LayoutStore {
  darkMode: boolean;

  setDarkMode: (darkMode: boolean) => void;

  footer: boolean;
  setFooter: (footer: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  darkMode: (() => {
    if (typeof window === 'undefined') return false;

    const theme = localStorage.getItem('theme');

    if (theme !== null) return theme === 'dark';

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  })(),

  setDarkMode: (darkMode: boolean) => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    return set({ darkMode });
  },

  footer: true,
  setFooter: (footer: boolean) => set({ footer }),
}));
