import { Button } from '@components/atoms/Button';
import { TitleImage } from '@generated/TitleImage';
import { Link } from '@shared/Link';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { Calendar, Heart, MessageCircle, Tag } from 'react-feather';

interface PostLargeCardProps {
  href: string;
  title?: string | null;
  description?: string | null;
  tags?: (string | null)[];
  date?: string | null;
  titleImage?: string;
  /** Opens the comment/reaction drawer for this post. */
  onOpenComments?: () => void;
  likeCount?: number;
  className?: string;
}

export const PostLargeCard = ({
  href,
  title,
  description,
  tags,
  date,
  titleImage,
  onOpenComments,
  likeCount,
  className,
}: PostLargeCardProps) => {
  const isTouchDevice = useLayoutStore((state) => state.isTouchDevice);

  // Stop the click so the surrounding card link does not navigate.
  const handleOpenComments = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onOpenComments?.();
  };

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
        imgClassName="absolute h-full w-full object-cover rounded-b-none"
        size={600}
        src={titleImage}
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
              <li className="text-xs text-zinc-400" key={tag}>
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
          <div className="flex items-center">
            <Button
              aria-label="반응 및 댓글"
              className="h-auto gap-0.5 px-1"
              onClick={handleOpenComments}
              size="8"
              variant="ghost"
            >
              <Heart className="size-3 text-zinc-400" />
              {likeCount ? (
                <span className="text-xs tabular-nums text-zinc-400">
                  {likeCount}
                </span>
              ) : null}
            </Button>
            <Button
              aria-label="댓글 보기"
              className="h-auto px-1"
              onClick={handleOpenComments}
              size="8"
              variant="ghost"
            >
              <MessageCircle className="size-3 text-zinc-400" />
            </Button>
          </div>
        </section>
      </article>
    </Link>
  );
};
