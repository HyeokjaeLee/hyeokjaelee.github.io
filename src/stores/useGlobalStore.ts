import { LOCAL_STORAGE_KEY } from '@constants';
import { createWithEqualityFn } from 'zustand/traditional';

export enum SCREEN {
  PHONE = 'phone',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

type LikePostMap = Map<string, boolean>;

interface GlobalStore {
  isGlobalMenuOpen: boolean;
  setIsGlobalMenuOpen: (isGlobalMenuOpen: boolean) => void;

  isNavVisible: boolean;
  setIsNavVisible: (isNavVisible: boolean) => void;

  screen?: SCREEN;
  setScreen: (screen: SCREEN) => void;

  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;

  likePostMap: LikePostMap;
  setLikePostMap: (callback: (likePostMap: LikePostMap) => LikePostMap) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>((set, get) => ({
  isGlobalMenuOpen: false,
  setIsGlobalMenuOpen: (isGlobalMenuOpen) => set({ isGlobalMenuOpen }),

  isNavVisible: true,
  setIsNavVisible: (isNavVisible) => set({ isNavVisible }),

  setScreen: (screen) => set({ screen }),

  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => {
    document.documentElement.classList.toggle('dark', isDarkMode);

    return set({ isDarkMode });
  },

  likePostMap: new Map(),
  setLikePostMap: (callback) => {
    const likePostMap = callback(get().likePostMap);

    localStorage.setItem(
      LOCAL_STORAGE_KEY.LIKE_POST_LIST,
      JSON.stringify(Array.from(likePostMap.entries())),
    );

    return set({ likePostMap: new Map(likePostMap) });
  },
}));
