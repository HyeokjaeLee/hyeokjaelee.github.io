import type { PostListToSearchQuery } from 'types/graphql-types';

import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import { debounce } from 'lodash-es';

import { useEffect, useRef, useState } from 'react';
import { GitHub, Menu, Search, X } from 'react-feather';

import { Logo } from '@components/Logo';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Kbd,
  Text,
  TextField,
} from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

interface GlobalHeaderProps {
  search: string;
}

const debouncedUpdateSearchQuery = debounce((value: string) => {
  const searchParams = new URLSearchParams(location.search);

  value ? searchParams.set('q', value) : searchParams.delete('q');

  navigate(`${location.pathname}?${searchParams.toString()}`, {
    replace: true,
  });
}, 1_000 / 30);

export const GlobalHeader = ({ search }: GlobalHeaderProps) => {
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
            title
          }
        }
      }
    }
  `);

  return (
    <nav
      className={cn(
        'flex items-center gap-3 p-3 justify-center',
        'bg-zinc-50 dark:bg-zinc-900',
      )}
    >
      <div className="flex max-w-7xl flex-1 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <IconButton
            color="gray"
            type="button"
            variant="ghost"
            onClick={() => setIsGlobalMenuOpen(true)}
          >
            <Menu className="size-6" />
          </IconButton>
          <Link className="flex items-center gap-4" to="/">
            <Logo className="size-8" />
            <div className="h-8 w-px rotate-[30deg] dark:bg-zinc-700" />
            <GitHub />
          </Link>
        </div>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button className="text-zinc-400" color="gray" variant="soft">
              <Search className="size-4" />
              <div className="ml-1 mr-14">Search post...</div>
            </Button>
          </Dialog.Trigger>
          <Dialog.Content className="flex max-h-[calc(100dvh-5rem)] flex-col">
            <TextField.Root
              color="gray"
              placeholder="Search post..."
              size="3"
              type="search"
              variant="soft"
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              <TextField.Slot>
                <Search className="size-4" />
              </TextField.Slot>
              <TextField.Slot>
                <Kbd>Esc</Kbd>
              </TextField.Slot>
            </TextField.Root>
            <ul className="mt-4 flex-1 overflow-auto">
              {nodes.map(({ fields, frontmatter }, index) => {
                const slug = fields?.slug;

                if (!slug) throw new Error('slug is required');

                return (
                  <li key={index}>
                    <Link to={slug}>{frontmatter?.title}</Link>
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
