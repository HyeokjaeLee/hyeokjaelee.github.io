import { LOCAL_STARGE_KEY } from '@constants';
import { Theme } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';
import { type PropsWithChildren,useLayoutEffect } from 'react';
import { shallow } from 'zustand/shallow';

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [setIsDarkMode, setLikePostMap] = useGlobalStore(
    (state) => [state.setIsDarkMode, state.setLikePostMap],
    shallow,
  );
  useLayoutEffect(() => {
    const isDarkModeStorageValue = localStorage.getItem(
      LOCAL_STARGE_KEY.DARK_MODE,
    );

    const isDarkMode: boolean = isDarkModeStorageValue
      ? JSON.parse(isDarkModeStorageValue)
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(isDarkMode);

    const likePostList = localStorage.getItem(LOCAL_STARGE_KEY.LIKE_POST_LIST);

    if (likePostList) {
      setLikePostMap(() => new Map(JSON.parse(likePostList)));
    }
  }, [setIsDarkMode, setLikePostMap]);

  return <Theme className="flex max-h-dvh flex-col">{children}</Theme>;
};
