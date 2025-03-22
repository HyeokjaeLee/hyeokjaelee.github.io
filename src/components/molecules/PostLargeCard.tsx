import { TitleImage } from '@generated/TitleImage';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { Link } from 'gatsby';
import { Calendar, Heart, Tag } from 'react-feather';

import { Button } from '../atoms/Button';

interface PostLargeCardProps {
  href: string;
  title?: string | null;
  description?: string | null;
  tags?: (string | null)[];
  date?: string | null;
  onClickLikeButton?: () => void;
  isLiked?: boolean;
  className?: string;
}

export const PostLargeCard = ({
  href,
  title,
  description,
  tags,
  date,
  onClickLikeButton,
  isLiked,
  className,
}: PostLargeCardProps) => {
  const isTouchDevice = useLayoutStore((state) => state.isTouchDevice);

  return (
    <Link
      className={cn(
        'block rounded-md border transition-transform',
        'bg-white dark:bg-zinc-800',
        'shadow-sm dark:shadow-md',
        'w-70 h-75',
        {
          'hover:-translate-y-1 hover:shadow-md dark:hover:shadow-lg':
            !isTouchDevice,
        },
        className,
      )}
      to={href}
    >
      <TitleImage
        className="relative h-0 w-full overflow-hidden rounded-t-md pb-[50%]"
        imgClassName="absolute w-full object-cover rounded-b-none"
        size={600}
        slug={href}
      />
      <article>
        <strong className="mb-1 mt-4 block truncate px-4 text-base font-semibold">
          {title}
        </strong>
        <p className="line-clamp-2 min-h-10 px-4 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <section className="mx-4 mb-2 mt-4 flex gap-2">
          <ul className="flex flex-1 flex-wrap justify-end gap-2">
            {tags?.map((tag) => (
              <li key={tag} className="text-xs text-zinc-400">
                #{tag}
              </li>
            ))}
          </ul>
          <Tag className="mt-1 size-3 text-zinc-400" />
        </section>
        <section className="border-border flex items-center justify-between border-t px-3 py-2">
          <div className="flex items-center gap-2 text-zinc-400">
            <Calendar className="size-3" />
            <time className="text-xs">{date}</time>
          </div>
          <Button
            className="size-5"
            variant="ghost"
            onlyIcon
            size="8"
            onClick={(e) => {
              e.preventDefault();

              onClickLikeButton?.();
            }}
          >
            <Heart
              className={cn('size-3 text-zinc-400', {
                'fill-red-500 text-red-500': isLiked,
              })}
            />
          </Button>
        </section>
      </article>
    </Link>
  );
};
