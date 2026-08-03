import { Button } from '@components/atoms/Button';
import { DotLottie } from '@components/atoms/DotLottie';
import { Input } from '@components/atoms/Input';
import { Kbd } from '@components/atoms/Kbd';
import { Modal } from '@components/molecules/Modal';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import type { PostData } from '@shared/types';
import { debounce } from 'es-toolkit';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { VirtuosoHandle } from 'react-virtuoso';
import { Virtuoso } from 'react-virtuoso';

interface SearchResultItem {
  url: string;
  title?: string;
  description?: string;
  titleImage?: string;
}

interface PagefindResultData {
  url: string;
  excerpt?: string;
  meta?: Record<string, string>;
}

interface PagefindInstance {
  search: (query: string) => Promise<{
    results: {
      id: string;
      data: () => Promise<PagefindResultData>;
    }[];
  }>;
}

interface ManifestResponse {
  posts?: PostData[];
}

const RECENT_POST_ENDPOINTS = ['/posts/page/1.json'];
const RECENT_POST_COUNT = 8;
const SEARCH_RESULT_LIMIT = 20;

const normalizeManifest = (data: unknown): PostData[] => {
  if (Array.isArray(data)) {
    return data as PostData[];
  }
  if (data !== null && typeof data === 'object' && 'posts' in data) {
    const { posts } = data as ManifestResponse;
    if (Array.isArray(posts)) {
      return posts;
    }
  }
  return [];
};

/**
 * Loads the Pagefind index generated at build time into /pagefind/pagefind.js.
 * Returns null in dev (the artifact does not exist) or if the dynamic import
 * fails, so callers can degrade to an empty result instead of crashing.
 */
const PAGEFIND_SCRIPT_URL = '/pagefind/pagefind.js';

const loadPagefind = async (): Promise<PagefindInstance | null> => {
  try {
    // Non-literal specifier (+ @vite-ignore) keeps this a runtime-only import.
    // pagefind.js is a build artifact (only in dist/ after `pagefind --site dist`),
    // so a static literal makes Vite fail to resolve it at transform time in dev.
    const imported = await import(/* @vite-ignore */ PAGEFIND_SCRIPT_URL);
    return imported as PagefindInstance;
  } catch {
    return null;
  }
};

export const Search = () => {
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSetSearchKeyword = useMemo(
    () => debounce(setSearchKeyword, 300),
    [],
  );

  const [isOpen, setIsOpen] = useState(false);
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run on keyword change to reset the result scroll (parity with original)
  useEffect(() => {
    if (virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex(0);
    }
  }, [searchKeyword]);

  useEffect(() => {
    let active = true;

    const runSearch = async () => {
      if (!searchKeyword.trim()) {
        setLoading(true);
        try {
          let recentPosts: PostData[] = [];
          for (const endpoint of RECENT_POST_ENDPOINTS) {
            try {
              const res = await fetch(endpoint);
              if (res.ok) {
                recentPosts = normalizeManifest(await res.json());
                break;
              }
            } catch {
              // endpoint unavailable, try the next fallback
            }
          }
          if (active) {
            setResults(
              recentPosts.slice(0, RECENT_POST_COUNT).map((post) => ({
                url: post.slug,
                title: post.title,
                description: post.description,
                titleImage: post.titleImage,
              })),
            );
          }
        } finally {
          if (active) setLoading(false);
        }
        return;
      }

      setLoading(true);
      try {
        const pf = await loadPagefind();
        if (!pf) {
          if (active) setResults([]);
          return;
        }
        const search = await pf.search(searchKeyword);
        const data = await Promise.all(
          search.results
            .slice(0, SEARCH_RESULT_LIMIT)
            .map((result) => result.data()),
        );
        if (active) {
          setResults(
            data.map((item) => ({
              url: item.url,
              title: item.meta?.title,
              description: item.meta?.description ?? item.excerpt,
              titleImage: item.meta?.titleImage,
            })),
          );
        }
      } catch {
        if (active) setResults([]);
      } finally {
        if (active) setLoading(false);
      }
    };

    runSearch();

    return () => {
      active = false;
    };
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
        {results.length > 0 ? (
          <Virtuoso
            className="hide-scrollbar"
            itemContent={(index) => {
              const post = results[index];

              if (!post?.url) {
                return null;
              }

              return (
                <div className="py-2">
                  <PostSmallCard
                    description={post.description}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    slug={post.url}
                    title={post.title}
                    titleImage={post.titleImage}
                  />
                </div>
              );
            }}
            ref={virtuosoRef}
            style={{ height: 364, width: '100%' }}
            totalCount={results.length}
          />
        ) : loading ? null : (
          <div className="flex size-full flex-col items-center justify-center">
            <DotLottie className="size-30" src="/lotties/empty.lottie" />
            <p className="text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
