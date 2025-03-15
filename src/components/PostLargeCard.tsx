import { TitleImage } from '@generated/TitleImage';
import { IconButton } from '@radix-ui/themes';
import { cn } from '@utils/cn';
import { Link } from 'gatsby';
import { Calendar, Heart, Tag } from 'react-feather';

interface PostLargeCardProps {
  href: string;
  title?: string | null;
  description?: string | null;
  tags?: (string | null)[];
  date?: string | null;
  onClickLikeButton?: () => void;
  isLiked?: boolean;
  dynamicWidth?: boolean;
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
  dynamicWidth = true,
  className,
}: PostLargeCardProps) => {
  return (
    <Link
      className={cn(
        'block rounded-md hover:-translate-y-1 transition-transform',
        'bg-white dark:bg-zinc-800',
        'shadow-xs dark:shadow-md',
        'hover:shadow-md dark:hover:shadow-lg',
        {
          'w-[calc(33.333333%-1.5rem)] phone:w-full tablet:w-[calc(50%-1.125rem)]':
            dynamicWidth,
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
        <section className="flex items-center justify-between border-t border-zinc-200 px-3 py-2 dark:border-zinc-700">
          <div className="flex items-center gap-2 text-zinc-400">
            <Calendar className="size-3" />
            <time className="text-xs">{date}</time>
          </div>
          <IconButton
            className="size-5"
            variant="ghost"
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
          </IconButton>
        </section>
      </article>
    </Link>
  );
};
