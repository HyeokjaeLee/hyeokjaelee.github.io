import type { PostLayoutQuery } from 'types/graphql-types';

import React from 'react';
import { Calendar, Heart, Share2, Tag } from 'react-feather';

import { IconButton } from '@radix-ui/themes';
import { Link } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';
import { toast } from '@utils/toast';

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

  return title && date && tags ? (
    <header className="relative mx-auto mb-7 flex max-w-4xl justify-between overflow-hidden px-4 pb-7">
      <section className="font-pretendard">
        <h1 className="mb-7 text-4xl font-extrabold leading-normal tracking-tight">
          {title}
        </h1>
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
      </section>
      <section className="mt-auto flex flex-col gap-4">
        <IconButton
          color="gray"
          type="button"
          variant="ghost"
          onClick={() => {
            setLikePostMap((likePostMap) => {
              likePostMap.set(slug, !isLiked);

              return likePostMap;
            });
          }}
        >
          <Heart
            className={cn('size-7', {
              'fill-red-500 text-red-500': isLiked,
            })}
          />
        </IconButton>
        <IconButton
          color="gray"
          type="button"
          variant="ghost"
          onClick={async () => {
            const url = location.href;

            try {
              await navigator.share({
                title: title,
                url: url,
              });
            } catch {
              await navigator.clipboard.writeText(url);

              toast({
                message: '주소가 복사되었어요!',
              });
            }
          }}
        >
          <Share2 className="size-7" />
        </IconButton>
      </section>
    </header>
  ) : null;
};
