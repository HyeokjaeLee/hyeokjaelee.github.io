import { Bio } from '@components/molecules/Bio';
import { PostList } from '@components/organisms/PostList';
import { TagList } from '@components/organisms/TagList';
import type { PostData } from '@shared/types';
import { useCallback, useEffect, useRef, useState } from 'react';

interface HomePageProps {
  initialPosts: PostData[];
  perPage: number;
  total: number;
  totalPages: number;
  tags: string[];
}

interface PageResponse {
  posts: PostData[];
  totalPages: number;
}

const readTag = () => {
  if (typeof window === 'undefined') {
    return 'all';
  }

  return new URLSearchParams(window.location.search).get('tag') || 'all';
};

export const HomePage = ({
  initialPosts,
  totalPages: initialTotalPages,
  tags,
}: HomePageProps) => {
  // Initialize to 'all' so the first client render matches the server-rendered
  // HTML (the server cannot read the query string). The real tag from the URL is
  // applied in the effect below, which avoids a hydration mismatch that would
  // otherwise keep the stale 'all' DOM in place.
  const [tag, setTag] = useState('all');
  const [loadedPosts, setLoadedPosts] = useState<PostData[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);

  // Latest-tag ref so the once-subscribed sync closure can compare without going
  // stale.
  const tagRef = useRef(tag);
  tagRef.current = tag;

  const hasMore = currentPage < totalPages;

  const fetchTagPage = useCallback(
    async (targetTag: string, page: number): Promise<PageResponse | null> => {
      const url =
        targetTag === 'all'
          ? `/posts/page/${page}.json`
          : `/posts/tag/${targetTag}/${page}.json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          return null;
        }
        const data: unknown = await response.json();
        if (
          data !== null &&
          typeof data === 'object' &&
          'posts' in data &&
          Array.isArray((data as { posts: unknown }).posts) &&
          'totalPages' in data
        ) {
          return data as PageResponse;
        }
        return null;
      } catch {
        // Network or parse error — stop loading without crashing.
        return null;
      }
    },
    [],
  );

  // Reset to the first page of a freshly selected tag. Each tag has its own
  // paginated endpoint, so the list is always the tag's posts (no client-side
  // filter) and totalPages reflects that tag's real count.
  const loadTagFirstPage = useCallback(
    async (targetTag: string) => {
      setLoading(true);
      try {
        const data = await fetchTagPage(targetTag, 1);
        if (data) {
          setLoadedPosts(data.posts);
          setCurrentPage(1);
          setTotalPages(data.totalPages);
        }
      } finally {
        setLoading(false);
      }
    },
    [fetchTagPage],
  );

  useEffect(() => {
    // Only re-sync while actually on the home page — ClientRouter fires these
    // events on every navigation (including navigating AWAY to a post), and
    // syncing there would overwrite the tag with the wrong value.
    const sync = () => {
      if (window.location.pathname !== '/') {
        return;
      }

      const urlTag = readTag();

      if (tagRef.current !== urlTag) {
        setTag(urlTag);
        void loadTagFirstPage(urlTag);
      }
    };

    sync();
    const raf = requestAnimationFrame(sync);

    document.addEventListener('astro:page-load', sync);
    document.addEventListener('astro:after-swap', sync);
    window.addEventListener('popstate', sync);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('astro:page-load', sync);
      document.removeEventListener('astro:after-swap', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [loadTagFirstPage]);

  const handleTagChange = (value: string) => {
    if (value === tag) {
      return;
    }

    setTag(value);

    // replaceState (not pushState): switching tags must not stack history
    // entries, so the back button returns to the previous page instead of
    // walking through every visited tag.
    const url =
      value === 'all'
        ? window.location.pathname
        : `${window.location.pathname}?tag=${value}`;

    window.history.replaceState({}, '', url);

    void loadTagFirstPage(value);
  };

  const loadMore = async () => {
    if (loading || currentPage >= totalPages) {
      return;
    }

    setLoading(true);
    try {
      const data = await fetchTagPage(tag, currentPage + 1);
      if (data) {
        setLoadedPosts((prev) => [...prev, ...data.posts]);
        setCurrentPage((prev) => prev + 1);
      }
    } catch {
      // Network or parse error — stop loading without crashing.
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="flex min-h-full w-full flex-col items-center justify-start pb-16">
      <header className="py-7">
        <Bio />
      </header>
      <TagList currentTag={tag} tags={tags} onTagChange={handleTagChange} />
      <PostList
        hasMore={hasMore}
        loading={loading}
        onLoadMore={loadMore}
        postList={loadedPosts}
      />
    </article>
  );
};
