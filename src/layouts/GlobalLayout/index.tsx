import type { PageProps } from 'gatsby';

import { throttle } from 'lodash-es';
import { shallow } from 'zustand/shallow';

import { useEffect, useLayoutEffect } from 'react';
import { X } from 'react-feather';
import { ToastContainer, Slide } from 'react-toastify';

import { SCREEN_BREAKPOINTS, SELECTOR, SESSION_STORAGE_KEY } from '@constants';
import { IconButton } from '@radix-ui/themes';
import { SCREEN, useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';
import { toast } from '@utils/toast';

import { GlobalMenu } from './_components/GlobalMenu';
import { GlobalNavigation } from './_components/GlobalNavigation';
import { GlobalProvider } from './_components/GlobalProvider';

const GlobalLayout = ({ children, location }: PageProps) => {
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

  useEffect(() => {
    if (!screen) return;

    if (sessionStorage.getItem(SESSION_STORAGE_KEY.WELCOME_TOAST)) return;

    sessionStorage.setItem(SESSION_STORAGE_KEY.WELCOME_TOAST, 'true');
    toast({
      message: '👋 안녕하세요! 방문해주셔서 감사합니다.',
    });
  }, [screen]);

  useEffect(() => {
    document.getElementById(SELECTOR.MAIN)?.scrollTo({
      top: 0,
    });
  }, [location.pathname, screen]);

  return (
    <GlobalProvider>
      <ToastContainer
        bodyClassName="p-0 whitespace-pre-line flex gap-1 font-pretendard"
        className={cn(
          'max-w-96 w-full relative h-0 p-0',
          'phone:max-w-[calc(100vw-2rem)] mr-4 left-[calc(50dvw-0.25rem)]',
          'toast-break-point:left-0 toast-break-point:mx-auto toast-break-point:top-2',
        )}
        closeButton={({ closeToast }) => (
          <IconButton
            className={cn(
              'w-5 h-5',
              'text-zinc-900 dark:text-zinc-100',
              'phone:hidden',
            )}
            type="button"
            variant="ghost"
            onClick={closeToast}
          >
            <X className="size-full" />
          </IconButton>
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
      <GlobalNavigation search={location.search} />
      <main
        className={cn(
          'flex-1 overflow-auto',
          'bg-zinc-100 text-zinc-800',
          'dark:bg-zinc-900 dark:text-zinc-50',
        )}
        id={SELECTOR.MAIN}
      >
        {children}
      </main>
      <GlobalMenu pathname={location.pathname} />
    </GlobalProvider>
  );
};

export default GlobalLayout;
