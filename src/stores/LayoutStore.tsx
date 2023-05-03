import { create } from 'zustand';

interface Colors {
  borderColor1: string;
  backgroundColor1: string;
  backgroundColor2: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
}

const whiteModeColors: Colors = {
  borderColor1: 'border-light-1',

  backgroundColor1: 'bg-light-1',
  backgroundColor2: 'bg-light-2',

  textColor1: 'text-light-1',
  textColor2: 'text-light-2',
  textColor3: 'text-light-3',
};

const darkModeColors: Colors = {
  borderColor1: 'border-dark-1',

  backgroundColor1: 'bg-dark-1',
  backgroundColor2: 'bg-dark-2',

  textColor1: 'text-dark-1',
  textColor2: 'text-dark-2',
  textColor3: 'text-dark-3',
};

interface LayoutStore {
  darkMode: boolean;
  colors: Colors;
  setDarkMode: (darkMode: boolean) => void;

  footer: boolean;
  setFooter: (footer: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  darkMode: false,
  colors: whiteModeColors,
  setDarkMode: (darkMode: boolean) =>
    set({ darkMode, colors: darkMode ? darkModeColors : whiteModeColors }),

  footer: true,
  setFooter: (footer: boolean) => set({ footer }),
}));
