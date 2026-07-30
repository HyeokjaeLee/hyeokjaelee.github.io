import { Button } from '@components/atoms/Button';
import { Link } from '@shared/Link';
import { Calendar, Heart, Share2, Tag } from 'react-feather';

interface PostArticleHeaderProps {
  title?: string;
  date?: string;
  tags?: string[];
}

const ICON_SIZE = 'w-4 h-4';

export const PostArticleHeader = ({
  title,
  date,
  tags,
}: PostArticleHeaderProps) => {
  const handleScrollToComments = () => {
    const comments = document.getElementById('comments');

    if (!comments) return;

    comments.scrollIntoView({ behavior: 'smooth', block: 'start' });

    comments.classList.add(
      'ring-2',
      'ring-red-400/60',
      'ring-offset-4',
      'rounded-lg',
      'transition-shadow',
    );

    setTimeout(() => {
      comments.classList.remove(
        'ring-2',
        'ring-red-400/60',
        'ring-offset-4',
        'rounded-lg',
        'transition-shadow',
      );
    }, 2500);
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
                  className="rounded-md bg-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
                  key={tag}
                >
                  <Link to={`/?tag=${tag}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <section className="ml-auto">
          <Button
            onClick={handleScrollToComments}
            onlyIcon
            size="8"
            type="button"
            variant="ghost"
          >
            <Heart className={ICON_SIZE} />
          </Button>
          <Button
            onClick={async () => {
              const url = window.location.href;

              try {
                await navigator.share({
                  title: title,
                  url: url,
                });
              } catch {
                await navigator.clipboard.writeText(url);
              }
            }}
            onlyIcon
            size="8"
            type="button"
            variant="ghost"
          >
            <Share2 />
          </Button>
        </section>
      </div>
    </header>
  ) : null;
};
