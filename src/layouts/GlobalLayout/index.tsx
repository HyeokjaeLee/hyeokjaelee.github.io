import { shallow } from 'zustand/shallow';

import React, { useLayoutEffect } from 'react';

import { GlobalHeader } from '@components/GlobalHeader';
import { GlobalMenu } from '@components/GlobalMenu';
import { useBindDarkMode } from '@hooks/useBindDarkMode';

import { SCREEN, useGlobalStore } from '@stores/useGlobalStore';
import 'react-toastify/dist/ReactToastify.css';

import type { PageProps } from 'gatsby';
import { ToastContainer, Slide } from 'react-toastify';
import { cn } from '@utils/cn';
import { X } from 'react-feather';
import { throttle } from 'lodash-es';
import { SCREEN_BREAKPOINTS } from '@constants';

const GlobalLayout = ({ children }: PageProps) => {
  const [screen, setScreen] = useGlobalStore(
    (state) => [state.screen, state.setScreen],
    shallow,
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= SCREEN_BREAKPOINTS.PHONE_MAX)
        return setScreen(SCREEN.PHONE);

      if (innerWidth <= SCREEN_BREAKPOINTS.TABLET_MAX)
        return setScreen(SCREEN.TABLET);

      return setScreen(SCREEN.DESKTOP);
    };

    handleResize();

    const resizeEvent = throttle(handleResize, 1_000 / 30);

    window.addEventListener('resize', resizeEvent);

    return () => window.removeEventListener('resize', resizeEvent);
  }, []);

  const isPhone = screen === SCREEN.PHONE;

  useBindDarkMode();
  return (
    <>
      <GlobalHeader />
      <main
        className={cn(
          'h-page overflow-auto',
          'bg-zinc-100 text-zinc-800',
          'dark:bg-zinc-900 dark:text-zinc-50',
        )}
      >
        <ToastContainer
          stacked={isPhone}
          draggable={isPhone}
          closeButton={({ closeToast }) => (
            <button
              type="button"
              className={cn('w-5 h-5', 'phone:hidden')}
              onClick={closeToast}
            >
              <X className="w-full h-full" />
            </button>
          )}
          draggableDirection="x"
          draggablePercent={20}
          position="top-center"
          className={cn(
            'max-w-96 w-full relative h-0 p-0',
            'phone:max-w-[calc(100vw-2rem)] mr-4 left-[calc(50dvw-0.25rem)]',
          )}
          theme="colored"
          bodyClassName="p-0 whitespace-pre-line flex gap-1"
          toastClassName={cn(
            'p-4 rounded-lg backdrop-blur-sm flex justify-center',
            'dark:text-white dark:!bg-[rgba(0,0,0,0.8)]',
            'text-black !bg-[rgba(255,255,255,0.8)]',
          )}
          transition={Slide}
        />
        {children}
      </main>
      <GlobalMenu />
    </>
  );
};

export default GlobalLayout;
