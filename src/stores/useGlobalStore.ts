import { createWithEqualityFn } from 'zustand/traditional';

interface GlobalStore {
  isGlobalMenuOpen: boolean;
  setIsGlobalMenuOpen: (isGlobalMenuOpen: boolean) => void;

  isFooterVisible: boolean;
  setIsFooterVisible: (isFooterVisible: boolean) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>(
  (set) => ({
    isGlobalMenuOpen: false,
    setIsGlobalMenuOpen: (isGlobalMenuOpen) => set({ isGlobalMenuOpen }),

    isFooterVisible: false,
    setIsFooterVisible: (isFooterVisible) => set({ isFooterVisible }),
  }),
  Object.is,
);
