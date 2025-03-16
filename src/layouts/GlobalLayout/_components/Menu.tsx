import { Button } from '@components/atoms/Button';
import { Logo } from '@components/atoms/Logo';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@components/molecules/Drawer';
import { MEDIA_QUERY_BREAKPOINT } from '@constants/layout';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { MenuIcon, X } from 'lucide-react';

export const Menu = () => {
  const isXsmall = useLayoutStore(
    (state) => state.mediaQueryBreakpoint <= MEDIA_QUERY_BREAKPOINT.XS,
  );

  return (
    <Drawer direction="left">
      <DrawerTrigger>
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
      </DrawerContent>
    </Drawer>
  );
};
