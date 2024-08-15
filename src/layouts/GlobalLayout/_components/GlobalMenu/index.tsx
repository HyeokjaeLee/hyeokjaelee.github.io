import { throttle } from 'lodash-es';
import { shallow } from 'zustand/shallow';

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import type { SwipeCallback } from 'react-swipeable';
import { useSwipeable } from 'react-swipeable';
import { Transition } from 'react-transition-group';

import { Logo } from '@components/Logo';
import { useGetSocialDataList } from '@hooks/useGetSocialDataList';
import { Switch } from '@radix-ui/themes';
import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

import { GlobalMenuFooter } from './GlobalMenuFooter';

const THROTTLE_TIME = 1_000 / 75;

export const GlobalMenu = () => {
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useGlobalStore(
    (state) => [state.isGlobalMenuOpen, state.setIsGlobalMenuOpen],
    shallow,
  );
  const { pathname } = useLocation();

  useEffect(() => setIsGlobalMenuOpen(false), [setIsGlobalMenuOpen, pathname]);

  const [deltaX, setDeltaX] = useState(0);

  const drawerRef = useRef<HTMLElement | null>(null);

  const socialDataList = useGetSocialDataList();

  const [isSwiping, setIsSwiping] = useState(false);

  const [, setTransition] = useTransition();

  const handleSwiping = useMemo(
    () =>
      throttle<SwipeCallback>(({ deltaX }) => {
        setIsSwiping(true);
        setTransition(() => {
          const floorDeltaX = Math.floor(deltaX);

          if (0 <= floorDeltaX) return;

          setDeltaX(floorDeltaX);
        });
      }, THROTTLE_TIME),
    [],
  );

  const drawerWidth = drawerRef.current?.offsetWidth ?? 0;

  const drawerHandler = useSwipeable({
    trackMouse: true,
    onSwiping: handleSwiping,

    onSwiped: ({ deltaX, velocity }) => {
      setIsSwiping(false);

      if (deltaX < -drawerWidth / 2 || 1.5 < velocity) {
        return setIsGlobalMenuOpen(false);
      }

      setTransition(() => {
        setTimeout(() => setDeltaX(0), THROTTLE_TIME);
      });
    },
  });

  useLayoutEffect(() => {
    if (isGlobalMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isGlobalMenuOpen]);

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={isGlobalMenuOpen}
      nodeRef={drawerRef}
      timeout={{
        appear: 0,
        enter: 300,
        exit: 200,
      }}
      onExited={() => setDeltaX(0)}
      onExiting={() => setDeltaX(-drawerWidth)}
    >
      {(state) => (
        <>
          <div
            className={cn(
              'fixed left-0 top-0 z-20 size-full bg-gray-950/50 backdrop-blur-[1px]',
              {
                'animate-fade animate-duration-300': state === 'entering',
                'animate-fade animate-reverse animate-duration-200':
                  state === 'exiting',
              },
            )}
            onClick={() => setIsGlobalMenuOpen(false)}
          />
          <article
            {...drawerHandler}
            ref={(el) => {
              drawerRef.current = el;
              drawerHandler.ref(el);
            }}
            className={cn(
              'fixed top-0 left-0 h-dvh w-full z-30 shadow-sm flex flex-col',
              'bg-white dark:bg-zinc-800',
              'max-w-96 phone:max-w-full',
              'rounded-r-md phone:rounded-none ease-out',
              {
                'animate-fade-right animate-duration-300': state === 'entering',
                'duration-300': state === 'entered' && !isSwiping,
                'duration-200': state === 'exiting',
              },
            )}
            style={{
              transform: `translate3d(${deltaX}px, 0, 0)`,
            }}
          >
            <header>
              <Logo />
            </header>
            <section className="flex-1 overflow-auto">
              <div className="h-[9999px]">ss</div>
            </section>
            <GlobalMenuFooter />
          </article>
        </>
      )}
    </Transition>
  );
};
