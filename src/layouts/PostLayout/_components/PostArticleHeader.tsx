import { Button } from '@components/atoms/Button';
import { Link } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';
import React from 'react';
import { Calendar, Heart, Share2, Tag } from 'react-feather';
import type { PostLayoutQuery } from 'types/graphql-types';

interface PostArticleHeaderProps
  extends Pick<
    Exclude<
      Exclude<
        PostLayoutQuery['markdownRemark'],
        undefined | null
      >['frontmatter'],
      undefined | null
    >,
    'date' | 'tags' | 'title'
  > {
  slug?: string | null;
}
const ICON_SIZE = 'w-4 h-4';

export const PostArticleHeader = ({
  title,
  date,
  tags,
  slug,
}: PostArticleHeaderProps) => {
  const [likePostMap, setLikePostMap] = useGlobalStore((state) => [
    state.likePostMap,
    state.setLikePostMap,
  ]);

  if (!slug) throw new Error('slug is required');

  const isLiked = likePostMap.get(slug);

  const handleClickLikeButton = () => {
    setLikePostMap((likePostMap) => {
      likePostMap.set(slug, !isLiked);

      return likePostMap;
    });
  };

  return title && date && tags ? (
    <header className="relative mx-auto mb-7 flex w-full max-w-4xl flex-col justify-between overflow-hidden px-4 pb-7">
      <h1 className="mb-7 text-4xl font-extrabold leading-normal tracking-tight">
        {title}
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-8">
        <dl className="flex flex-wrap items-center">
          <dt className="mr-2">
            <Calendar className={ICON_SIZE} />
          </dt>
          <dd>
            <small>{date}</small>
          </dd>
          <dt className="ml-6 mr-2 mt-[0.15rem]">
            <Tag className={ICON_SIZE} />
          </dt>
          <dd>
            <ul className="mt-[0.15rem] flex gap-1">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
                >
                  <Link to={`/?tag=${tag}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <section className="ml-auto">
          <Button
            type="button"
            variant="ghost"
            onlyIcon
            size="8"
            onClick={handleClickLikeButton}
          >
            <Heart
              className={cn({
                'fill-red-500 text-red-500': isLiked,
              })}
            />
          </Button>
          <Button
            type="button"
            variant="ghost"
            onlyIcon
            size="8"
            onClick={async () => {
              const url = location.href;

              try {
                await navigator.share({
                  title: title,
                  url: url,
                });
              } catch {
                await navigator.clipboard.writeText(url);
              }
            }}
          >
            <Share2 />
          </Button>
        </section>
      </div>
    </header>
  ) : null;
};
