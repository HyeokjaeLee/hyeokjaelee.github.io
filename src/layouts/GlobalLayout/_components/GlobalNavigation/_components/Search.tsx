import { Button } from '@components/atoms/Button';
import { DotLottie } from '@components/atoms/DotLottie';
import { Input } from '@components/atoms/Input';
import { Kbd } from '@components/atoms/Kbd';
import { Modal } from '@components/molecules/Modal';
import { PostSmallCard } from '@components/PostSmallCard';
import { graphql, useStaticQuery } from 'gatsby';
import { debounce } from 'lodash-es';
import { SearchIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { VariableSizeList } from 'react-window';
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
  const listRef = useRef<VariableSizeList>(null);

  // 아이템 높이 계산 함수
  const getItemSize = useCallback(
    (index: number) => {
      // 설명 길이에 따라 높이 다르게 계산
      const description = searchedPosts[index]?.frontmatter?.description || '';

      // 기본 높이 + 설명 길이에 따른 추가 높이
      return description.length > 100 ? 100 : 70;
    },
    [searchedPosts],
  );

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

  // 검색어 변경시 리스트 캐시 초기화
  useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0);
    }
  }, [searchKeyword]);

  const callbackRef = useCallback((node: HTMLInputElement) => {
    if (node) node.focus();
    setSearchKeyword('');
  }, []);

  const Row = useCallback(
    ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const { fields, frontmatter } = searchedPosts[index];
      const slug = fields?.slug;

      if (!slug) return null;

      return (
        <div style={style} className="py-2">
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
    },
    [searchedPosts],
  );

  return (
    <Modal
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button
          variant="outline"
          size="8"
          onClick={() => {
            setIsOpen(true);
          }}
          className="text-muted-foreground max-w-60 flex-1 justify-between gap-2 rounded-sm font-medium opacity-50"
        >
          <div className="flex items-center gap-2">
            <SearchIcon /> 포스트 검색...
          </div>
          <Kbd className="xs:block hidden">Ctrl + K</Kbd>
        </Button>
      }
      header="포스트 검색"
    >
      <Input
        ref={callbackRef}
        placeholder="검색어를 입력해주세요."
        leftContent={<SearchIcon />}
        type="search"
        onChange={(e) => {
          debouncedSetSearchKeyword(e.target.value);
        }}
      />
      <div className="h-91 flex-1">
        {searchedPosts.length > 0 ? (
          <VariableSizeList
            ref={listRef}
            className="hide-scrollbar"
            height={364}
            width="100%"
            itemCount={searchedPosts.length}
            itemSize={getItemSize}
          >
            {Row}
          </VariableSizeList>
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
