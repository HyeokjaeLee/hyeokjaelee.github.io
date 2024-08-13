import { throttle } from 'lodash-es';
import { shallow } from 'zustand/shallow';

import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { SwipeCallback } from 'react-swipeable';
import { useSwipeable } from 'react-swipeable';
import { Transition } from 'react-transition-group';

import { Logo } from '@components/Logo';
import { Drawer, useDarkMode } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

import { GlobalMenuFooter } from './GlobalMenuFooter';
import { GlobalMenuLastPostList } from './GlobalMenuLastPostList';
import { GlobalMenuPageList } from './GlobalMenuPageList';

export const GlobalMenu = () => {
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useGlobalStore(
    (state) => [state.isGlobalMenuOpen, state.setIsGlobalMenuOpen],
    shallow,
  );
  const { pathname } = useLocation();

  useEffect(() => setIsGlobalMenuOpen(false), [setIsGlobalMenuOpen, pathname]);

  const { isDarkMode } = useDarkMode();

  const [deltaX, setDeltaX] = useState(0);

  const drawerRef = useRef<HTMLElement | null>(null);

  const handleSwiping = useMemo(
    () =>
      throttle<SwipeCallback>(({ deltaX }) => {
        const floorDeltaX = Math.floor(deltaX);

        if (0 <= floorDeltaX) return;

        setDeltaX(floorDeltaX);
      }, 1_000 / 120),
    [],
  );

  const drawerHandler = useSwipeable({
    trackMouse: true,
    onSwiping: handleSwiping,
    onSwipedLeft: ({ deltaX }) => {
      const drawerWidth = drawerRef.current?.offsetWidth;

      if (!drawerWidth) return;

      if (deltaX < -drawerWidth / 2) return setIsGlobalMenuOpen(false);

      setDeltaX(0);
    },
  });

  return (
    <Transition
      mountOnEnter
      in={isGlobalMenuOpen}
      timeout={{
        appear: 0,
        enter: 0,
        exit: 300,
      }}
    >
      {(state) => {
        const [backdropStyles, transitionStyles] = (() => {
          const transformStyles =
            0 <= deltaX
              ? undefined
              : ({
                  transform: `translate3d(${deltaX}px, 0, 0)`,
                  transition: 'none',
                } satisfies CSSProperties);

          const durationStyles: CSSProperties = {
            transitionDuration: '300ms',
          };

          switch (state) {
            case 'entering':
            case 'exiting':
              return [
                { opacity: '0', ...durationStyles },
                {
                  transform: 'translate3d(0, 0, 0)',
                  ...transformStyles,
                  ...durationStyles,
                },
              ];
            case 'entered':
              return [
                { opacity: '1', ...durationStyles },
                {
                  transition: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  ...transformStyles,
                  ...durationStyles,
                },
              ];
            case 'exited':
            case 'unmounted':
              return [
                { display: 'none', ...durationStyles },
                { display: 'none', ...transformStyles, ...durationStyles },
              ];

            default:
              return [];
          }
        })();

        return (
          <>
            <div className="fixed left-0 top-0 z-20 size-full bg-gray-950/50 backdrop-blur-[1px]" />
            <section
              {...drawerHandler}
              ref={(el) => {
                drawerRef.current = el;
                drawerHandler.ref(el);
              }}
              className={cn(
                'fixed top-0 left-0 h-dvh w-full max-w-96 bg-white z-30 shadow-sm rounded-r-md',
                'phone:max-w-full phone:rounded-none',
              )}
              style={transitionStyles}
            >
              sss
            </section>
          </>
        );
      }}
    </Transition>
  );
};
