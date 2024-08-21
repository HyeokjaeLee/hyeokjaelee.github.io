import { Link } from 'gatsby';
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
import { X } from 'react-feather';
import type { SwipeCallback } from 'react-swipeable';
import { useSwipeable } from 'react-swipeable';
import { Transition } from 'react-transition-group';

import { Logo } from '@components/Logo';
import { IconButton } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

import { GlobalMenuFooter } from './GlobalMenuFooter';
import { LastPostList } from './LastPostList';
import { LikePostList } from './LikePostList';

const THROTTLE_TIME = 1_000 / 75;

interface GlobalMenuProps {
  pathname: string;
}

export const GlobalMenu = ({ pathname }: GlobalMenuProps) => {
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useGlobalStore(
    (state) => [state.isGlobalMenuOpen, state.setIsGlobalMenuOpen],
    shallow,
  );

  useEffect(() => setIsGlobalMenuOpen(false), [setIsGlobalMenuOpen, pathname]);

  const [deltaX, setDeltaX] = useState(0);

  const drawerRef = useRef<HTMLElement | null>(null);

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
              'bg-zinc-50 dark:bg-zinc-900',
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
            <header className="flex justify-between p-5">
              <div
                className={cn(
                  'p-2 size-fit rounded-full',
                  'bg-zinc-900 dark:bg-zinc-100',
                  'text-zinc-100 dark:text-zinc-800',
                )}
              >
                <Logo className="size-8" />
              </div>
              <IconButton
                className="cursor-pointer"
                color="gray"
                type="button"
                variant="ghost"
                onClick={() => setIsGlobalMenuOpen(false)}
              >
                <X className="size-5" />
              </IconButton>
            </header>
            <ul className="m-4 flex flex-col gap-4 font-bold text-zinc-700 dark:text-zinc-200">
              <li>
                <Link to="/">📔 Post</Link>
              </li>
              <li>
                <Link className="underline" to="/about">
                  🙌 About Me
                </Link>
              </li>
            </ul>
            <section className="m-2 flex flex-1 flex-col gap-8 overflow-auto hide-scrollbar">
              <LastPostList />
              <LikePostList />
            </section>
            <GlobalMenuFooter />
          </article>
        </>
      )}
    </Transition>
  );
};
