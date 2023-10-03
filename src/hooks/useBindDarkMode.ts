import { useEffect } from 'react';

export const DARK_MODE_LOCAL_STORAGE_KEY = 'dark-mode';

export const useBindDarkMode = () => {
  useEffect(() => {
    const isDarkMode = (() => {
      const localStorageDarkModeString = localStorage.getItem(
        DARK_MODE_LOCAL_STORAGE_KEY,
      );

      if (localStorageDarkModeString)
        return JSON.parse(localStorageDarkModeString) satisfies boolean;

      const isDeviceDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      return isDeviceDarkMode;
    })();

    if (isDarkMode) document.documentElement.classList.add('dark');
  }, []);
};
