import { PostSmallCard } from '@components/PostSmallCard';
import { useRootRef } from '@hooks/useRootRef';
import { Button, Dialog, Kbd, TextField } from '@radix-ui/themes';
import { cn } from '@utils/cn';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { debounce } from 'lodash-es';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

import { HomeLogo } from './_components/HomeLogo';
import { Menu } from './_components/Menu';
import { Search } from './_components/Search';
interface GlobalHeaderProps {
  search: string;
}

const updateSearchQueryString = (value: string) => {
  const searchParams = new URLSearchParams(location.search);

  if (value) {
    searchParams.set('q', value);
  } else {
    searchParams.delete('q');
  }

  navigate(`${location.pathname}?${searchParams.toString()}`, {
    replace: true,
  });
};

const DEBOUNCE_TIME = 300;

const debounceUpdateSearchQueryString = debounce(
  updateSearchQueryString,
  DEBOUNCE_TIME,
);

interface PostNode {
  fields?: {
    slug?: string;
  };
  frontmatter?: {
    title?: string;
    description?: string;
    date?: string;
    titleImage?: string;
    tags?: string[];
  };
}

interface PostListToSearchQuery {
  allMarkdownRemark: {
    nodes: PostNode[];
  };
}

export const GlobalNavigation = ({ search }: GlobalHeaderProps) => {
  const container = useRootRef();

  const { scrollYProgress } = useScroll({
    container,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav
      className={cn(
        'bg-background sticky top-0 z-10 flex items-center justify-center',
        'transition-colors duration-200',
      )}
    >
      <div className="relative flex max-w-7xl flex-1 items-center justify-between gap-3 px-3 py-1">
        <div className="flex items-center gap-8">
          <Menu />
          <HomeLogo />
        </div>
        <Search />
        <motion.div
          className="bg-primary border-border absolute bottom-0 box-border h-1 w-full rounded-full border"
          style={{ scaleX }}
        />
      </div>
    </nav>
  );
};

/**
 *      <Dialog.Root
          open={isSearchModalOpened}
          onOpenChange={(value) => {
            setIsSearchModalOpened(value);

            if (!value) setTimeout(() => setSearchQuery(''), DEBOUNCE_TIME);
          }}
        >
          <Dialog.Trigger>
            <Button className="flex text-zinc-400" color="gray" variant="soft">
              <Search className="size-4" />
              <div className="phone:mr-8 ml-1 mr-14">Search post...</div>
              <Kbd className="phone:hidden">Ctrl + K</Kbd>
            </Button>
          </Dialog.Trigger>
          <Dialog.Content className="phone:max-w-[calc(100dvw-2rem)] flex max-h-[calc(100dvh-10rem)] flex-col">
            <div>
              <TextField.Root
                color="gray"
                placeholder="Search post..."
                size="3"
                type="search"
                value={searchQuery}
                variant="soft"
                onChange={(e) => {
                  e.preventDefault();

                  setSearchQuery(e.target.value);
                }}
              >
                <TextField.Slot>
                  <Search className="size-4" />
                </TextField.Slot>
                <TextField.Slot>
                  <Kbd>Esc</Kbd>
                </TextField.Slot>
              </TextField.Root>
            </div>
            <ul className="hide-scrollbar mt-4 flex flex-1 flex-col gap-4 overflow-y-auto px-1">
              {searchedPosts.map(({ fields, frontmatter }, index: number) => {
                const slug = fields?.slug;

                if (!slug) throw new Error('slug is required');

                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchModalOpened(false);
                    }}
                  >
                    <PostSmallCard
                      description={frontmatter?.description}
                      slug={slug}
                      title={frontmatter?.title}
                    />
                  </li>
                );
              })}
            </ul>
          </Dialog.Content>
        </Dialog.Root>
 */
