import { Button } from '@components/atoms/Button';
import { Logo } from '@components/atoms/Logo';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@components/molecules/Drawer';
import { MEDIA_QUERY_BREAKPOINT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { MenuIcon, X } from 'lucide-react';

import { DarkModeSwitch } from './_components/DarkModeSwitch';
import { LastPostList } from './_components/LastPostList';
import { LikePostList } from './_components/LikePostList';
import { NavigationList } from './_components/NavigationList';

export const Menu = () => {
  const isXsmall = useLayoutStore(
    (state) => state.mediaQueryBreakpoint <= MEDIA_QUERY_BREAKPOINT.XS,
  );

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" onlyIcon>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className={cn('rounded-r-md', {
          '!w-full !max-w-none rounded-none': isXsmall,
        })}
      >
        <DrawerHeader className="relative flex flex-row items-center justify-between">
          <div
            className={cn(
              'size-fit rounded-full p-2',
              'bg-zinc-900 dark:bg-zinc-100',
              'text-zinc-100 dark:text-zinc-800',
            )}
          >
            <Logo className="size-8" />
          </div>
          <DrawerTitle className="invisible">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" onlyIcon className="absolute right-1 top-1">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <section className="mt-4 flex flex-col gap-2 overflow-auto">
          <NavigationList
            items={[
              { label: 'Post', href: ROUTES.HOME },
              { label: 'About Me', href: ROUTES.ABOUT },
            ]}
          />
          <LastPostList />
          <LikePostList />
        </section>
        <DrawerFooter className="flex flex-row items-center justify-between">
          <small className="text-zinc-500">
            © 2023. Hyeokjae all rights reserved.
          </small>
          <DarkModeSwitch />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
