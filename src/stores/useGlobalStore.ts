import { createWithEqualityFn } from 'zustand/traditional';

interface GlobalStore {
  isGlobalMenuOpen: boolean;
  setIsGlobalMenuOpen: (isGlobalMenuOpen: boolean) => void;

  isNavVisible: boolean;
  setIsNavVisible: (isNavVisible: boolean) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>(
  (set) => ({
    isGlobalMenuOpen: false,
    setIsGlobalMenuOpen: (isGlobalMenuOpen) => set({ isGlobalMenuOpen }),

    isNavVisible: true,
    setIsNavVisible: (isNavVisible) => set({ isNavVisible }),
  }),
  Object.is,
);
