import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { PostLargeCard } from '@components/PostLargeCard';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import { useLayoutEffect, useRef, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import type { GridChildComponentProps } from 'react-window';
import { FixedSizeGrid } from 'react-window';
import type SwiperType from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PostPageQuery } from 'types/graphql-types';
import { shallow } from 'zustand/shallow';

import { PostList } from './_components/PostList';

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

// PostItem 타입 정의
interface PostItem {
  fields?: {
    slug?: string;
  };
  frontmatter?: {
    date?: string;
    title?: string;
    tags?: string[];
    description?: string;
  };
}

const PostPage = ({
  location,
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<PostPageQuery>) => {
  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get('tag') || 'all';

  const [likePostMap, setLikePostMap] = useGlobalStore(
    (state) => [state.likePostMap, state.setLikePostMap],
    shallow,
  );

  const postList = nodes.filter(
    ({ frontmatter }) => tag === 'all' || frontmatter?.tags?.includes(tag),
  );

  // 윈도우 크기에 따라 그리드 열 수 조정
  const [columnCount, setColumnCount] = useState(3);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideRef = useRef<SwiperType | null>(null);

  useLayoutEffect(() => {
    const swiperIndex = POST_TAG_EMOJI_LIST.findIndex(
      ([value]) => value === tag,
    );
    if (slideRef.current) {
      slideRef.current.slideTo(swiperIndex);
    }
  }, [tag]);

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
                    'shadow-xs flex items-center justify-center gap-1 rounded-full px-4 py-1 text-sm transition-colors',
                    'bg-white dark:bg-zinc-800',
                    {
                      'bg-zinc-800 text-white dark:bg-white dark:text-zinc-900':
                        isCurrentTag,
                    },
                  )}
                  to={`?tag=${value}`}
                >
                  {isCurrentTag ? (
                    <div className="animate-flip-up animate-duration-500 w-5 text-base">
                      {emoji}
                    </div>
                  ) : null}

                  {value}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <PostList postList={postList} />
      </div>
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
