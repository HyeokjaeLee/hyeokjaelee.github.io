import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { useRootRef } from '@hooks/useRootRef';
import { motion, useScroll, useSpring } from 'motion/react';

import { HomeLogo } from './_components/HomeLogo';
import { Menu } from './_components/Menu';
import { Search } from './_components/Search';

export const GlobalNavigation = () => {
  const container = useRootRef();

  const { scrollYProgress } = useScroll({
    container,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const displayType = useDisplayType();

  if (displayType === DISPLAY_TYPE.PDF) return null;

  return (
    <nav className="bg-background sticky top-0 z-10 flex items-center justify-center">
      <div className="relative flex max-w-7xl flex-1 items-center justify-between gap-3 px-3 py-1">
        <div className="flex items-center gap-8">
          <Menu />
          <HomeLogo />
        </div>
        <Search />
        <motion.div
          className="bg-primary border-primary-foreground absolute bottom-0 box-border h-1 w-full rounded-full border"
          style={{ scaleX }}
        />
      </div>
    </nav>
  );
};
