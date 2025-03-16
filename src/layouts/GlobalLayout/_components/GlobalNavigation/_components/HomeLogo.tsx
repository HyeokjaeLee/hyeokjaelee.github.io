import { Button } from '@components/atoms/Button';
import { Logo } from '@components/atoms/Logo';
import { EXTERNAL_LINKS } from '@constants/etc';
import { ROUTES } from '@constants/routes';
import { Link } from 'gatsby';
import { GitHub } from 'react-feather';

export const HomeLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost" onlyIcon>
        <Link to={ROUTES.HOME} aria-label="Home">
          <Logo className="size-7 text-zinc-700 dark:text-zinc-50" />
        </Link>
      </Button>
      <div className="h-7 w-px rotate-[30deg] bg-zinc-300 dark:bg-zinc-700" />
      <Button asChild variant="ghost" onlyIcon>
        <Link
          to={EXTERNAL_LINKS.GITHUB}
          rel="noreferrer"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHub className="text-zinc-600 dark:text-zinc-300" />
        </Link>
      </Button>
    </div>
  );
};
