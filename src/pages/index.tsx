import type { PageProps } from 'gatsby';
import type { PostPageQuery } from 'types/graphql-types';

import { graphql, Link, navigate } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shallow } from 'zustand/shallow';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Heart, Tag } from 'react-feather';

import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { PostListPagination } from '@components/PostListPagination';
import { TitleImage } from '@generated/TitleImage';
import { useGetPostDataList } from '@hooks/useGetPostDataList';
import { Button, IconButton } from '@radix-ui/themes';
import { SCREEN, useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';
const POST_TAG_EMOJI_LIST = [
  ['all', '📚'],
  ['issues', '🚧'],
  ['frontend', '🎨'],
  ['backend', '🔧'],
  ['devops', '📦'],
  ['etc', '🎁'],
  ['project', '📝'],
  ['data', '📊'],
  ['devOps', '📦'],
];

const PAGINATION_BUTTON_COUNT = 7;

const PostPage = ({
  location: { search, pathname },
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<PostPageQuery>) => {
  const searchParams = new URLSearchParams(search);
  const page = Number(searchParams.get('page')) || 1;
  const tag = searchParams.get('tag') || 'all';
  const pageSize = 6;

  const [likePostMap, setLikePostMap] = useGlobalStore(
    (state) => [state.likePostMap, state.setLikePostMap],
    shallow,
  );

  const postList = nodes.filter(
    ({ frontmatter }) => tag === 'all' || frontmatter?.tags?.includes(tag),
  );

  const postCount = postList.length;

  const postListOfPage = postList.slice((page - 1) * pageSize, page * pageSize);

  const isPaginationExisted = !!(pageSize && postCount && page);

  const lastPage = isPaginationExisted ? Math.ceil(postCount / pageSize) : 0;

  const isFirstPage = !isPaginationExisted || page <= 1;
  const isLastPage = !isPaginationExisted || page >= lastPage;

  const displayedIndexList: number[] = isPaginationExisted
    ? [page]
    : Array.from({ length: PAGINATION_BUTTON_COUNT });

  if (isPaginationExisted) {
    for (let i = 1; i <= PAGINATION_BUTTON_COUNT; i += 1) {
      const rightSidePage = page + i;
      if (rightSidePage <= lastPage) displayedIndexList.push(rightSidePage);

      if (displayedIndexList.length >= PAGINATION_BUTTON_COUNT) break;

      const leftSidePage = page - i;
      if (leftSidePage > 0) displayedIndexList.unshift(leftSidePage);

      if (displayedIndexList.length >= PAGINATION_BUTTON_COUNT) break;
    }
  }

  const pagination = (page: number) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set('page', String(page));

    return `?${searchParams.toString()}`;
  };

  return (
    <article className="flex h-full flex-col items-center justify-between">
      <header className="py-7">
        <Bio />
      </header>
      <div className="flex w-full flex-col items-center gap-1">
        <Swiper className="max-w-6xl">
          {POST_TAG_EMOJI_LIST.map(([title, emoji]) => (
            <SwiperSlide key={title} className="w-fit">
              {`${emoji} ${title}`}
            </SwiperSlide>
          ))}
        </Swiper>
        <ul className="mx-auto flex w-full max-w-6xl flex-wrap gap-9 px-9">
          {postListOfPage.map((post) => {
            const { slug } = post.fields ?? {};

            return slug ? (
              <Link
                key={slug}
                className={cn(
                  'block rounded-md hover:-translate-y-1 transition-transform',
                  'bg-white dark:bg-zinc-800',
                  'shadow-sm dark:shadow-md',
                  'hover:shadow-md dark:hover:shadow-lg',
                  'w-[calc(33.333333%-1.5rem)] phone:w-full tablet:w-[calc(50%-1.125rem)]',
                )}
                to={slug}
              >
                <TitleImage
                  className="relative h-0 w-full overflow-hidden rounded-t-md pb-[50%]"
                  imgClassName="absolute w-full object-cover rounded-b-none"
                  size={600}
                  slug={slug}
                />
                <article>
                  <strong className="mb-1 mt-4 block truncate px-4 text-base font-semibold">
                    {post.frontmatter?.title}
                  </strong>
                  <p className="line-clamp-2 min-h-10 px-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {post.frontmatter?.description}
                  </p>
                  <section className="mx-4 mb-2 mt-4 flex gap-2">
                    <ul className="flex flex-1 flex-wrap justify-end gap-2">
                      {post.frontmatter?.tags?.map((tag) => (
                        <li
                          key={tag}
                          className="font-firacode text-xs text-zinc-400"
                        >
                          #{tag}
                        </li>
                      ))}
                    </ul>
                    <Tag className="mt-0.5 size-3 text-zinc-400" />
                  </section>
                  <section className="mb-2 flex items-center justify-between border-t border-zinc-200 px-4 pt-2 dark:border-zinc-700">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Clock className="size-3" />
                      <time className="text-xs">{post.frontmatter?.date}</time>
                    </div>
                    <IconButton
                      className="size-5"
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault();

                        setLikePostMap((likePostMap) => {
                          likePostMap.set(slug, !likePostMap.get(slug));

                          return likePostMap;
                        });
                      }}
                    >
                      <Heart
                        className={cn('size-3 text-zinc-400', {
                          'fill-red-500 text-red-500': likePostMap.get(slug),
                        })}
                      />
                    </IconButton>
                  </section>
                </article>
              </Link>
            ) : null;
          })}
        </ul>
      </div>
      <ul className="my-9 flex">
        <li>
          <Button
            className="min-w-12 shadow-none"
            color="gray"
            disabled={isFirstPage}
            type="button"
            variant="outline"
            onClick={() => {
              navigate(pagination(page - 1));
            }}
          >
            <ChevronLeft />
          </Button>
        </li>
        {displayedIndexList.map((pageNavigation) => {
          const isSelected = pageNavigation === page;

          return (
            <li key={pageNavigation}>
              <Button
                asChild
                className="min-w-12 shadow-none"
                color="gray"
                variant={isSelected ? 'solid' : 'outline'}
              >
                <Link to={pagination(pageNavigation)}>{pageNavigation}</Link>
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            className="min-w-12 shadow-none"
            color="gray"
            disabled={isLastPage}
            type="button"
            variant="outline"
            onClick={() => {
              navigate(pagination(page + 1));
            }}
          >
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </article>
  );
};

export default PostPage;

export const Head = () => <Meta />;

export const postPageQuery = graphql`
  query PostPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YY년 MM월 DD일")
          title
          titleImage
          tags
          description
        }
      }
    }
  }
`;
