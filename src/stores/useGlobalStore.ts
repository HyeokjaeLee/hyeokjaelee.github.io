import { createWithEqualityFn } from 'zustand/traditional';

export enum SCREEN {
  PHONE = 'phone',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}
interface GlobalStore {
  isGlobalMenuOpen: boolean;
  setIsGlobalMenuOpen: (isGlobalMenuOpen: boolean) => void;

  isNavVisible: boolean;
  setIsNavVisible: (isNavVisible: boolean) => void;

  screen?: SCREEN;
  setScreen: (screen: SCREEN) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>((set) => ({
  isGlobalMenuOpen: false,
  setIsGlobalMenuOpen: (isGlobalMenuOpen) => set({ isGlobalMenuOpen }),

  isNavVisible: true,
  setIsNavVisible: (isNavVisible) => set({ isNavVisible }),

  setScreen: (screen) => set({ screen }),
}));
