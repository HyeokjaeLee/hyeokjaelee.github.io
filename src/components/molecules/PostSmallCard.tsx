import { TitleImage } from '@generated/TitleImage';
import { Link } from '@shared/Link';
import { cn } from '@utils/cn';

interface PostSmallCardProps {
  title?: string | null;
  description?: string | null;
  slug?: string | null;
  titleImage?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PostSmallCard = ({
  slug,
  title,
  description,
  titleImage,
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
      onClick={onClick}
      style={style}
      to={slug}
    >
      <div>
        <TitleImage
          className="relative h-0 w-10 rounded-md border border-zinc-200 pb-10 dark:border-zinc-700"
          imgClassName="absolute h-full w-full object-cover"
          size={100}
          src={titleImage}
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
