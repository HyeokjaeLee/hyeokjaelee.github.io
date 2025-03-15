import { PostLargeCard } from '@components/PostLargeCard';
import { useGlobalStore } from '@stores/useGlobalStore';
import { useMemo } from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PostLayoutQuery } from 'types/graphql-types';
import { shallow } from 'zustand/shallow';

type RandomPostSuggestionProps = Pick<
  PostLayoutQuery,
  'allMarkdownRemark' | 'markdownRemark'
>;

const RANDOM_POST_COUNT = 8;

export const RandomPostSuggestion = ({
  allMarkdownRemark: { nodes },
  markdownRemark,
}: RandomPostSuggestionProps) => {
  const postCount = nodes.length;
  const currentPostIndex = nodes.findIndex(
    (node) => node.fields?.slug === markdownRemark?.fields?.slug,
  );

  const randomPostCount =
    postCount < RANDOM_POST_COUNT ? postCount : RANDOM_POST_COUNT;

  const randomPostList = useMemo(() => {
    const randomIndexList: number[] = [];

    while (randomIndexList.length < randomPostCount) {
      const randomIndex = Math.floor(Math.random() * postCount);

      if (
        !randomIndexList.includes(randomIndex) &&
        randomIndex !== currentPostIndex
      )
        randomIndexList.push(randomIndex);
    }

    return randomIndexList.map((index) => nodes[index]);
  }, [currentPostIndex, nodes, postCount, randomPostCount]);

  const [likePostMap, setLikePostMap] = useGlobalStore(
    (state) => [state.likePostMap, state.setLikePostMap],
    shallow,
  );

  return (
    <dl className="mx-auto my-6">
      <dt className="mx-4 mb-4 text-lg font-bold">이런 글은 어때요?</dt>
      <dd className="phone:mx-0 tablet:mx-0 mx-4">
        <Swiper
          loop
          mousewheel
          autoplay={{
            delay: 3_000,
            disableOnInteraction: true,
          }}
          modules={[Mousewheel, Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
        >
          {randomPostList.map(({ fields, frontmatter }) => {
            const { slug } = fields ?? {};

            return slug ? (
              <SwiperSlide key={slug} className="w-fit py-2">
                <div>
                  <PostLargeCard
                    key={slug}
                    className="w-72"
                    date={frontmatter?.date}
                    description={frontmatter?.description}
                    dynamicWidth={false}
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
                </div>
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </dd>
    </dl>
  );
};
