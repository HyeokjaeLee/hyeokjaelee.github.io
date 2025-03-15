import type { PageProps } from 'gatsby';
import type SwiperType from 'swiper';
import type { PostPageQuery } from 'types/graphql-types';

import { graphql, Link, navigate } from 'gatsby';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shallow } from 'zustand/shallow';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { PostLargeCard } from '@components/PostLargeCard';
import { SELECTOR } from '@constants';
import { Button } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

const POST_TAG_EMOJI_LIST = [
  ['all', '📚'],
  ['issues', '🚧'],
  ['frontend', '🎨'],
  ['backend', '🔧'],
  ['devOps', '📦'],
  ['etc', '🎁'],
  ['project', '📝'],
  ['data', '📊'],
];

const PAGINATION_BUTTON_COUNT = 7;

const PostPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<PostPageQuery>) => {
  const searchParams = new URLSearchParams(search);
  const page = Number(searchParams.get('page')) || 1;
  const tag = searchParams.get('tag') || 'all';
  const pageSize = 12;

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

  const getPage = (page: number) => {
    const searchParams = new URLSearchParams(search);

    searchParams.set('page', String(page));

    return `?${searchParams.toString()}`;
  };

  const scrollToTop = () =>
    document.getElementById(SELECTOR.MAIN)?.scrollTo({
      top: 0,
    });

  const slideRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiperIndex = POST_TAG_EMOJI_LIST.findIndex(
      ([value]) => value === tag,
    );
    if (slideRef.current) {
      slideRef.current.slideTo(swiperIndex);
    }
  }, [page, tag]);

  return (
    <article className="flex h-full flex-col items-center justify-between">
      <header className="py-7">
        <Bio />
      </header>
      <div className="flex w-full flex-col items-center gap-1">
        <Swiper
          mousewheel
          autoplay={{
            delay: 3_000,
            disableOnInteraction: true,
          }}
          className="mx-auto w-fit max-w-full"
          modules={[Mousewheel, Autoplay]}
          slidesPerView="auto"
          spaceBetween={4}
          onSwiper={(swiper) => (slideRef.current = swiper)}
        >
          {POST_TAG_EMOJI_LIST.map(([value, emoji]) => {
            const isCurrentTag = value === tag;

            return (
              <SwiperSlide
                key={value}
                className={cn('my-4 w-fit', 'phone:first:ml-4')}
              >
                <Link
                  className={cn(
                    'flex justify-center items-center gap-1 transition-colors rounded-full px-4 py-1 shadow-xs text-sm',
                    'bg-white dark:bg-zinc-800',
                    {
                      'bg-zinc-800 text-white dark:bg-white dark:text-zinc-900':
                        isCurrentTag,
                    },
                  )}
                  to={`?tag=${value}`}
                >
                  {isCurrentTag ? (
                    <div className="w-5 animate-flip-up text-base animate-duration-500">
                      {emoji}
                    </div>
                  ) : null}

                  {value}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ul className="mx-auto flex w-full max-w-6xl flex-wrap gap-9 px-9">
          {postListOfPage.map(({ fields, frontmatter }) => {
            const { slug } = fields ?? {};

            return slug ? (
              <PostLargeCard
                key={slug}
                date={frontmatter?.date}
                description={frontmatter?.description}
                href={slug}
                isLiked={likePostMap.get(slug)}
                tags={frontmatter?.tags ?? []}
                title={frontmatter?.title || '무제'}
                onClickLikeButton={() => {
                  setLikePostMap((likePostMap) => {
                    likePostMap.set(slug, !likePostMap.get(slug));

                    return likePostMap;
                  });
                }}
              />
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
              navigate(getPage(page - 1));
              scrollToTop();
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
                <Link
                  to={getPage(pageNavigation)}
                  onClick={() => {
                    scrollToTop();
                  }}
                >
                  {pageNavigation}
                </Link>
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
              navigate(getPage(page + 1));
              scrollToTop();
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
