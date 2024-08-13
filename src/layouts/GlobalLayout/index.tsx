import 'react-toastify/dist/ReactToastify.css';

import type { PageProps } from 'gatsby';

import { throttle } from 'lodash-es';
import { shallow } from 'zustand/shallow';

import { useLayoutEffect } from 'react';
import { X } from 'react-feather';
import { ToastContainer, Slide } from 'react-toastify';

import { SCREEN_BREAKPOINTS, SELECTOR } from '@constants';
import { useBindDarkMode } from '@hooks/useBindDarkMode';
import { SCREEN, useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

import { GlobalHeader } from './_components/GlobalHeader';
import { GlobalMenu } from './_components/GlobalMenu';
import { GlobalProvider } from './_components/GlobalProvider';

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

    const resizeEvent = throttle(handleResize, 1_000 / 120);

    window.addEventListener('resize', resizeEvent);

    return () => window.removeEventListener('resize', resizeEvent);
  }, [setScreen]);

  const isPhone = screen === SCREEN.PHONE;

  useBindDarkMode();

  return (
    <GlobalProvider>
      <GlobalHeader />
      <main
        className={cn(
          'h-page overflow-auto',
          'bg-zinc-100 text-zinc-800',
          'dark:bg-zinc-900 dark:text-zinc-50',
        )}
        id={SELECTOR.MAIN}
      >
        <ToastContainer
          bodyClassName="p-0 whitespace-pre-line flex gap-1"
          className={cn(
            'max-w-96 w-full relative h-0 p-0',
            'phone:max-w-[calc(100vw-2rem)] mr-4 left-[calc(50dvw-0.25rem)]',
          )}
          closeButton={({ closeToast }) => (
            <button
              className={cn('w-5 h-5', 'phone:hidden')}
              type="button"
              onClick={closeToast}
            >
              <X className="size-full" />
            </button>
          )}
          draggable={isPhone}
          draggableDirection="x"
          draggablePercent={20}
          position="top-center"
          stacked={isPhone}
          theme="colored"
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
    </GlobalProvider>
  );
};

export default GlobalLayout;
