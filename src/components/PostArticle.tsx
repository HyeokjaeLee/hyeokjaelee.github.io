import type { PostLayoutQuery } from 'types/graphql-types';

import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shallow } from 'zustand/shallow';

import React, { useMemo } from 'react';

import { useGlobalStore } from '@stores/useGlobalStore';

import { Bio } from './Bio';
import { PostArticleBody } from './PostArticleBody';
import { PostArticleFooter } from './PostArticleFooter';
import { PostArticleHeader } from './PostArticleHeader';
import { PostArticleNavigation } from './PostArticleNavigation';
import { PostLargeCard } from './PostLargeCard';
import { Utterances } from './Utterances';
export type NotNullableMarkdownRemark = Exclude<
  PostLayoutQuery['markdownRemark'],
  undefined | null
>;

const RANDOM_POST_COUNT = 8;

export const PostArticle = ({
  markdownRemark,
  allMarkdownRemark: { nodes },
  ...otherPostProps
}: PostLayoutQuery) => {
  const { frontmatter, html, headings } = markdownRemark ?? {};
  const { tags, title, date, description } = frontmatter ?? {};

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

  if (!description || !html) return null;

  return (
    <article className="mt-16 break-keep py-4 font-nanum-square leading-relaxed phone:mt-8 tablet:mt-14">
      <PostArticleHeader date={date} tags={tags} title={title} />
      <div className="flex">
        <div className="block flex-1 phone:hidden tablet:hidden" />
        <PostArticleBody html={html} />
        <PostArticleNavigation headings={headings} title={title} />
      </div>
      <footer className="mx-auto mt-40 max-w-4xl phone:mt-9">
        <section className="px-4">
          <Bio />
          <hr className="mt-9 border-zinc-300 dark:border-zinc-700" />
        </section>
        <dl className="mx-auto my-6">
          <dt className="mx-4 mb-4 text-lg font-bold">이런 글은 어때요?</dt>
          <dd className="mx-4 phone:mx-0 tablet:mx-0">
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

        <Utterances />
      </footer>
    </article>
  );
};
