import { createWithEqualityFn } from 'zustand/traditional';

interface GlobalStore {
  isGlobalMenuOpen: boolean;
  setIsGlobalMenuOpen: (isGlobalMenuOpen: boolean) => void;

  isFooterVisible: boolean;
  setIsFooterVisible: (isFooterVisible: boolean) => void;

  helloTarget?: string;
  setHelloTarget: (helloTarget: string) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>(
  (set) => ({
    isGlobalMenuOpen: false,
    setIsGlobalMenuOpen: (isGlobalMenuOpen) => set({ isGlobalMenuOpen }),

    isFooterVisible: false,
    setIsFooterVisible: (isFooterVisible) => set({ isFooterVisible }),

    setHelloTarget: (helloTarget) => set({ helloTarget }),
  }),
  Object.is,
);
