import { Menu } from 'react-feather';

import { Logo } from '@components/Logo';
import { PostSearchbox } from '@components/PostSearchbox';
import { Button } from '@hyeokjaelee/pastime-ui';
import { Link } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';

export const GlobalHeader = () => {
  const setIsGlobalMenuOpen = useGlobalStore(
    (state) => state.setIsGlobalMenuOpen,
  );

  return (
    <header className="flex h-nav items-center gap-3 bg-black px-3">
      <div className="flex flex-1 items-center gap-3">
        <Button
          fixedDarkMode="dark"
          icon={<Menu className="size-4" />}
          size="small"
          theme="clear"
          onClick={() => setIsGlobalMenuOpen(true)}
        />
        <Link to="/">
          <Logo className="size-6" />
        </Link>
        <PostSearchbox />
      </div>
    </header>
  );
};
