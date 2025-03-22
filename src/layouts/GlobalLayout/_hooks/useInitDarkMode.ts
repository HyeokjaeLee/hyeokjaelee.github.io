import { LOCAL_STORAGE } from '@constants/storage';
import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { useLayoutStore } from '@stores/useLayoutStore';
import { useLayoutEffect } from 'react';

export const useInitDarkMode = () => {
  const setIsDarkMode = useLayoutStore((state) => state.setIsDarkMode);

  const displayType = useDisplayType();

  useLayoutEffect(() => {
    if (displayType === DISPLAY_TYPE.PDF) {
      document.documentElement.classList.toggle('dark', false);

      return;
    }

    let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const darkModeString = localStorage.getItem(LOCAL_STORAGE.DARK_MODE);

    if (darkModeString) isDarkMode = darkModeString === 'true';

    setIsDarkMode(isDarkMode);
  }, [setIsDarkMode, displayType]);
};
