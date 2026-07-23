import { Button } from '@components/atoms/Button';
import { DotLottie } from '@components/atoms/DotLottie';
import { Input } from '@components/atoms/Input';
import { Kbd } from '@components/atoms/Kbd';
import { Modal } from '@components/molecules/Modal';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import { useAllPosts } from '@hooks/useAllPosts';
import { debounce } from 'es-toolkit';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { VirtuosoHandle } from 'react-virtuoso';
import { Virtuoso } from 'react-virtuoso';

export const Search = () => {
  const posts = useAllPosts();

  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSetSearchKeyword = useMemo(
    () => debounce(setSearchKeyword, 300),
    [],
  );

  const searchedPosts = (posts ?? []).filter((node) => {
    const searchString = `${node.title}${node.description}`
      .toLowerCase()
      .replaceAll(' ', '');

    return searchString.includes(
      searchKeyword.toLowerCase().replaceAll(' ', ''),
    );
  });

  const [isOpen, setIsOpen] = useState(false);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run on keyword change to reset the result scroll (parity with original)
  useEffect(() => {
    if (virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex(0);
    }
  }, [searchKeyword]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const callbackRef = useCallback((node: HTMLInputElement) => {
    if (node) {
      node.focus();
    }

    setSearchKeyword('');
  }, []);

  return (
    <Modal
      header="포스트 검색"
      onOpenChange={setIsOpen}
      open={isOpen}
      trigger={
        <>
          <Button
            className="text-muted-foreground xxs:flex hidden max-w-60 flex-1 justify-between gap-2 rounded-sm font-medium opacity-50"
            onClick={() => {
              setIsOpen(true);
            }}
            size="8"
            variant="outline"
          >
            <div className="flex items-center gap-2">
              <SearchIcon /> 포스트 검색...
            </div>
            <Kbd className="xs:block hidden">Ctrl + K</Kbd>
          </Button>
          <Button className="xxs:hidden flex" onlyIcon size="8" variant="ghost">
            <SearchIcon />
          </Button>
        </>
      }
    >
      <Input
        leftContent={<SearchIcon />}
        onChange={(e) => {
          debouncedSetSearchKeyword(e.target.value);
        }}
        placeholder="검색어를 입력해주세요."
        ref={callbackRef}
        rightContent={<Kbd className="xs:block hidden">Esc</Kbd>}
        type="search"
      />
      <div className="h-91 flex-1">
        {searchedPosts.length > 0 ? (
          <Virtuoso
            className="hide-scrollbar"
            itemContent={(index) => {
              const post = searchedPosts[index];

              if (!post?.slug) {
                return null;
              }

              return (
                <div className="py-2">
                  <PostSmallCard
                    description={post.description}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    slug={post.slug}
                    title={post.title}
                    titleImage={post.titleImage}
                  />
                </div>
              );
            }}
            ref={virtuosoRef}
            style={{ height: 364, width: '100%' }}
            totalCount={searchedPosts.length}
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center">
            <DotLottie className="size-30" src="/lotties/empty.lottie" />
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
