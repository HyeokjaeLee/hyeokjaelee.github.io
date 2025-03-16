import { IS_CLIENT, IS_DEV } from '@constants/etc';
import { MEDIA_QUERY_BREAKPOINT, type MediaQuery } from '@constants/layout';
import { create } from 'zustand';

interface LayoutStore {
  mediaQuery: MediaQuery;
  mediaQueryBreakpoint: MEDIA_QUERY_BREAKPOINT;
  resetMediaQuery: () => void;
  isTouchDevice: boolean;
  resetIsTouchDevice: () => void;
}

export const useLayoutStore = create<LayoutStore>((set, get) => {
  const getMediaQuery = () => {
    let mediaQuery: MediaQuery = 'XS';

    if (IS_CLIENT) {
      for (const [value, key] of Object.entries(MEDIA_QUERY_BREAKPOINT)) {
        const mediaQueryList = window.matchMedia(`(min-width: ${value}px)`);

        if (mediaQueryList.matches) {
          mediaQuery = key as MediaQuery;
        } else break;
      }
    }

    const mediaQueryBreakpoint = MEDIA_QUERY_BREAKPOINT[mediaQuery];

    return { mediaQuery, mediaQueryBreakpoint };
  };

  const getIsTouchDevice = () => {
    if (IS_CLIENT) {
      const breakpoint =
        get()?.mediaQueryBreakpoint ?? MEDIA_QUERY_BREAKPOINT.XS;

      return (
        breakpoint < MEDIA_QUERY_BREAKPOINT.LG &&
        ('ontouchstart' in window || 0 < navigator.maxTouchPoints)
      );
    }

    return true;
  };

  return {
    ...getMediaQuery(),
    resetMediaQuery: () => {
      const newMediaQuery = getMediaQuery();

      const prevState = get();

      if (IS_DEV && prevState.mediaQuery !== newMediaQuery.mediaQuery) {
        console.info(
          `mediaQuery: ${newMediaQuery.mediaQuery} / ${newMediaQuery.mediaQueryBreakpoint}px`,
        );
      }

      return set(newMediaQuery);
    },

    isTouchDevice: getIsTouchDevice(),
    resetIsTouchDevice: () => {
      const newIsTouchDevice = getIsTouchDevice();

      const prevState = get();

      if (IS_DEV && prevState.isTouchDevice !== newIsTouchDevice) {
        console.info(`isTouchDevice: ${newIsTouchDevice}`);
      }

      return set({ isTouchDevice: newIsTouchDevice });
    },
  };
});
