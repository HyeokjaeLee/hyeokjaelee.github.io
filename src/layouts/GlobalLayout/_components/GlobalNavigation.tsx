import type { PostListToSearchQuery } from 'types/graphql-types';

import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import { debounce } from 'lodash-es';

import { useEffect, useState } from 'react';
import { GitHub, Menu, Search } from 'react-feather';

import { Logo } from '@components/Logo';
import { PostSmallCard } from '@components/PostSmallCard';
import { Button, Dialog, IconButton, Kbd, TextField } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

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

export const GlobalNavigation = ({ search }: GlobalHeaderProps) => {
  const setIsGlobalMenuOpen = useGlobalStore(
    (state) => state.setIsGlobalMenuOpen,
  );

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<PostListToSearchQuery>(graphql`
    query PostListToSearch {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YY/MM/DD")
            title
            titleImage
            tags
            description
          }
        }
      }
    }
  `);

  const urlSearchQuery = new URLSearchParams(search).get('q') || '';

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);

  const [isSearchModalOpened, setIsSearchModalOpened] = useState(!!searchQuery);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault();
        setIsSearchModalOpened(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    debounceUpdateSearchQueryString(searchQuery);
  }, [searchQuery]);

  const searchedPosts = nodes.filter((node) => {
    const searchString =
      `${node.frontmatter?.title}${node.frontmatter?.description}`
        .toLowerCase()
        .replaceAll(' ', '');

    return searchString.includes(
      urlSearchQuery.toLowerCase().replaceAll(' ', ''),
    );
  });

  return (
    <nav
      className={cn(
        'flex items-center gap-3 p-3 justify-center',
        'bg-zinc-100 dark:bg-zinc-900',
      )}
    >
      <div className="flex max-w-7xl flex-1 items-center justify-between gap-3">
        <div className="flex items-center gap-8">
          <IconButton
            color="gray"
            type="button"
            variant="ghost"
            onClick={() => setIsGlobalMenuOpen(true)}
          >
            <Menu className="size-6" />
          </IconButton>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Logo className="size-8 text-zinc-700 dark:text-zinc-50" />
            </Link>
            <div className="h-7 w-px rotate-[30deg] bg-zinc-300 dark:bg-zinc-700" />
            <a
              href="https://github.com/HyeokjaeLee"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub className="size-6 text-zinc-600 dark:text-zinc-300" />
            </a>
          </div>
        </div>
        <Dialog.Root
          open={isSearchModalOpened}
          onOpenChange={(value) => {
            setIsSearchModalOpened(value);

            if (!value) setTimeout(() => setSearchQuery(''), DEBOUNCE_TIME);
          }}
        >
          <Dialog.Trigger>
            <Button className="flex text-zinc-400" color="gray" variant="soft">
              <Search className="size-4" />
              <div className="ml-1 mr-14 phone:mr-8">Search post...</div>
              <Kbd className="phone:hidden">Ctrl + K</Kbd>
            </Button>
          </Dialog.Trigger>
          <Dialog.Content className="flex max-h-[calc(100dvh-10rem)] flex-col phone:max-w-[calc(100dvw-2rem)]">
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
            <ul className="mt-4 flex flex-1 flex-col gap-4 overflow-y-auto px-1 hide-scrollbar">
              {searchedPosts.map(({ fields, frontmatter }, index) => {
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
      </div>
    </nav>
  );
};
