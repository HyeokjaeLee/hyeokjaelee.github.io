import { TitleImage } from '@generated/TitleImage';
import { cn } from '@utils/cn';
import { Link } from 'gatsby';

interface PostSmallCardProps {
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PostSmallCard = ({
  slug,
  title,
  description,
  className,
  style,
  onClick,
}: PostSmallCardProps) => {
  return slug ? (
    <Link
      className={cn(
        'flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800',
        className,
      )}
      style={style}
      to={slug}
      onClick={onClick}
    >
      <div>
        <TitleImage
          className="relative h-0 w-10 rounded-md border border-zinc-200 pb-10 dark:border-zinc-700"
          imgClassName="absolute w-full object-cover"
          size={100}
          slug={slug}
        />
      </div>
      <section className="flex-1 overflow-hidden text-sm">
        <strong className="block truncate font-semibold">{title}</strong>
        <p className="truncate text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </section>
    </Link>
  ) : null;
};
