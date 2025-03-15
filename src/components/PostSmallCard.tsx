import { TitleImage } from '@generated/TitleImage';
import { cn } from '@utils/cn';
import { Link } from 'gatsby';

interface PostLargeCardProps {
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  className?: string;
}

export const PostSmallCard = ({
  slug,
  title,
  description,
  className,
}: PostLargeCardProps) => {
  return slug ? (
    <Link
      className={cn(
        'flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800',
        className,
      )}
      to={slug}
    >
      <div>
        <TitleImage
          className="relative h-0 w-10 rounded-md border border-zinc-200 pb-10 dark:border-zinc-700"
          imgClassName="absolute w-full object-cover"
          size={100}
          slug={slug}
        />
      </div>
      <section className="flex-1 overflow-hidden">
        <strong className="block truncate text-base">{title}</strong>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </section>
    </Link>
  ) : null;
};
