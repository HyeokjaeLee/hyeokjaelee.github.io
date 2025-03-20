import { IS_DEV } from '@constants/etc';
import { MEDIA_QUERY_BREAKPOINT, type MediaQuery } from '@constants/layout';
import { LOCAL_STORAGE } from '@constants/storage';
import { create } from 'zustand';

interface LayoutStore {
  mediaQuery: MediaQuery;
  mediaQueryBreakpoint: MEDIA_QUERY_BREAKPOINT;
  resetMediaQuery: () => void;
  isTouchDevice: boolean;
  resetIsTouchDevice: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>((set, get) => {
  return {
    mediaQuery: 'XS',
    mediaQueryBreakpoint: MEDIA_QUERY_BREAKPOINT.XS,
    resetMediaQuery: () => {
      let mediaQuery: MediaQuery = 'XS';

      for (const [value, key] of Object.entries(MEDIA_QUERY_BREAKPOINT)) {
        const mediaQueryList = window.matchMedia(`(min-width: ${value}px)`);

        if (mediaQueryList.matches) {
          mediaQuery = key as MediaQuery;
        } else break;
      }

      const mediaQueryBreakpoint = MEDIA_QUERY_BREAKPOINT[mediaQuery];

      const prevState = get();

      if (IS_DEV && prevState.mediaQuery !== mediaQuery) {
        console.info(`mediaQuery: ${mediaQuery} / ${mediaQueryBreakpoint}px`);
      }

      return set({
        mediaQuery,
        mediaQueryBreakpoint,
      });
    },

    isTouchDevice: false,
    resetIsTouchDevice: () => {
      const breakpoint =
        get()?.mediaQueryBreakpoint ?? MEDIA_QUERY_BREAKPOINT.XS;

      const newIsTouchDevice =
        breakpoint < MEDIA_QUERY_BREAKPOINT.LG &&
        ('ontouchstart' in window || 0 < navigator.maxTouchPoints);

      const prevState = get();

      if (IS_DEV && prevState.isTouchDevice !== newIsTouchDevice) {
        console.info(`isTouchDevice: ${newIsTouchDevice}`);
      }

      return set({ isTouchDevice: newIsTouchDevice });
    },

    isDarkMode: false,
    setIsDarkMode: (isDarkMode) => {
      localStorage.setItem(LOCAL_STORAGE.DARK_MODE, String(isDarkMode));

      document.documentElement.classList.toggle('dark', isDarkMode);

      return set({ isDarkMode });
    },
  };
});
