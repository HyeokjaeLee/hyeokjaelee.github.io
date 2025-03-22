import { Button } from '@components/atoms/Button';
import { DotLottie } from '@components/atoms/DotLottie';
import { Input } from '@components/atoms/Input';
import { Kbd } from '@components/atoms/Kbd';
import { Modal } from '@components/molecules/Modal';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import { debounce } from 'es-toolkit';
import { graphql, useStaticQuery } from 'gatsby';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { VirtuosoHandle } from 'react-virtuoso';
import { Virtuoso } from 'react-virtuoso';
import type { PostListToSearchQuery } from 'types/graphql-types';

export const Search = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<PostListToSearchQuery>(graphql`
    query PostListToSearch {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YY/MM/DD")
            title
            titleImage
            tags
            description
          }
        }
      }
    }
  `);

  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSetSearchKeyword = useMemo(
    () => debounce(setSearchKeyword, 300),
    [],
  );

  const searchedPosts = nodes.filter((node) => {
    const searchString =
      `${node.frontmatter?.title}${node.frontmatter?.description}`
        .toLowerCase()
        .replaceAll(' ', '');

    return searchString.includes(
      searchKeyword.toLowerCase().replaceAll(' ', ''),
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  // 검색어 변경시 리스트 스크롤 초기화
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
    if (node) node.focus();
    setSearchKeyword('');
  }, []);

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <>
          <Button
            variant="outline"
            size="8"
            onClick={() => {
              setIsOpen(true);
            }}
            className="text-muted-foreground xxs:flex hidden max-w-60 flex-1 justify-between gap-2 rounded-sm font-medium opacity-50"
          >
            <div className="flex items-center gap-2">
              <SearchIcon /> 포스트 검색...
            </div>
            <Kbd className="xs:block hidden">Ctrl + K</Kbd>
          </Button>
          <Button variant="ghost" size="8" className="xxs:hidden flex" onlyIcon>
            <SearchIcon />
          </Button>
        </>
      }
      header="포스트 검색"
    >
      <Input
        ref={callbackRef}
        placeholder="검색어를 입력해주세요."
        leftContent={<SearchIcon />}
        type="search"
        rightContent={<Kbd className="xs:block hidden">Esc</Kbd>}
        onChange={(e) => {
          debouncedSetSearchKeyword(e.target.value);
        }}
      />
      <div className="h-91 flex-1">
        {searchedPosts.length > 0 ? (
          <Virtuoso
            ref={virtuosoRef}
            className="hide-scrollbar"
            style={{ height: 364, width: '100%' }}
            totalCount={searchedPosts.length}
            itemContent={(index) => {
              const { fields, frontmatter } = searchedPosts[index];
              const slug = fields?.slug;

              if (!slug) return null;

              return (
                <div className="py-2">
                  <PostSmallCard
                    description={frontmatter?.description}
                    slug={slug}
                    title={frontmatter?.title}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </div>
              );
            }}
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center">
            <DotLottie src="/lotties/empty.lottie" className="size-30" />
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
