import { PostLargeCard } from '@components/molecules/PostLargeCard';
import { useCommentDrawerStore } from '@stores/useCommentDrawerStore';
import type { PostData } from '@shared/types';
import { useMemo } from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface RandomPostSuggestionProps {
  posts: PostData[];
  slug: string;
}

const RANDOM_POST_COUNT = 8;

export const RandomPostSuggestion = ({
  posts,
  slug,
}: RandomPostSuggestionProps) => {
  const postCount = posts.length;
  const randomPostCount = Math.min(postCount, RANDOM_POST_COUNT);

  const randomPostList = useMemo(() => {
    if (postCount === 0) {
      return [];
    }

    const indices: number[] = [];
    let guard = 0;

    while (indices.length < randomPostCount && guard++ < 500) {
      const randomIndex = Math.floor(Math.random() * postCount);

      if (!indices.includes(randomIndex) && posts[randomIndex].slug !== slug) {
        indices.push(randomIndex);
      }
    }

    return indices.map((index) => posts[index]);
  }, [posts, postCount, randomPostCount, slug]);

  const openCommentDrawer = useCommentDrawerStore(
    (state) => state.openCommentDrawer,
  );

  return (
    <dl className="mx-auto my-6">
      <dt className="mx-4 mb-4 text-lg font-bold">이런 글은 어때요?</dt>
      <dd className="mx-0 lg:mx-4">
        <Swiper
          autoplay={{
            delay: 3_000,
            disableOnInteraction: true,
          }}
          loop
          modules={[Mousewheel, Autoplay]}
          mousewheel
          slidesPerView="auto"
          spaceBetween={10}
        >
          {randomPostList.map((post) => {
            return post.slug ? (
              <SwiperSlide className="w-fit py-2" key={post.slug}>
                <div>
                <PostLargeCard
                  className="w-72"
                  date={post.dateLabel}
                  description={post.description}
                  href={post.slug}
                  onOpenComments={() =>
                    openCommentDrawer({
                      pathname: post.slug,
                      title: post.title || '무제',
                    })
                  }
                  tags={post.tags}
                  title={post.title || '무제'}
                  titleImage={post.titleImage}
                />
                </div>
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </dd>
    </dl>
  );
};
