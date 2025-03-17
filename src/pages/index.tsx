import { Button } from '@components/atoms/Button';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import { useLayoutEffect, useRef, useState } from 'react';
import type SwiperType from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PostPageQuery } from 'types/graphql-types';

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

const PostPage = ({
  location,
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<PostPageQuery>) => {
  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get('tag') || 'all';

  const postList = nodes.filter(
    ({ frontmatter }) => tag === 'all' || frontmatter?.tags?.includes(tag),
  );

  // 윈도우 크기에 따라 그리드 열 수 조정
  const [, setColumnCount] = useState(3);

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
    <article className="flex size-full flex-col items-center justify-start">
      <header className="py-7">
        <Bio />
      </header>
      <nav className="mx-auto flex w-full justify-center py-4">
        <Swiper
          mousewheel
          autoplay={{
            delay: 3_000,
            disableOnInteraction: true,
          }}
          className="mx-auto w-auto min-w-[280px]"
          modules={[Mousewheel, Autoplay]}
          slidesPerView="auto"
          spaceBetween={4}
          onSwiper={(swiper) => (slideRef.current = swiper)}
        >
          {POST_TAG_EMOJI_LIST.map(([value]) => {
            const isCurrentTag = value === tag;

            return (
              <SwiperSlide key={value} className={cn('my-2 w-auto')}>
                <Button
                  asChild
                  size="8"
                  variant={isCurrentTag ? 'primary' : 'ghost'}
                >
                  <Link to={`?tag=${value}`}>{value}</Link>
                </Button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </nav>
      <PostList postList={postList} />
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
