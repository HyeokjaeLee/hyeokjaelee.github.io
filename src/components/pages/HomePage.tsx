import { Bio } from '@components/molecules/Bio';
import { PostList } from '@components/organisms/PostList';
import { TagList } from '@components/organisms/TagList';
import type { PostData } from '@shared/types';
import { useEffect, useState } from 'react';

interface HomePageProps {
  initialPosts: PostData[];
  perPage: number;
  total: number;
  totalPages: number;
}

const readTag = () => {
  if (typeof window === 'undefined') {
    return 'all';
  }

  return new URLSearchParams(window.location.search).get('tag') || 'all';
};

export const HomePage = ({ initialPosts, totalPages }: HomePageProps) => {
  // Initialize to 'all' so the first client render matches the server-rendered
  // HTML (the server cannot read the query string). The real tag from the URL is
  // applied in the effect below, which avoids a hydration mismatch that would
  // otherwise keep the stale 'all' DOM in place.
  const [tag, setTag] = useState('all');
  const [loadedPosts, setLoadedPosts] = useState<PostData[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const hasMore = currentPage < totalPages;

  useEffect(() => {
    // Only re-sync while actually on the home page — ClientRouter fires these
    // events on every navigation (including navigating AWAY to a post), and
    // syncing there would overwrite the tag with the wrong value.
    const sync = () => {
      if (window.location.pathname !== '/') {
        return;
      }

      setTag(readTag());
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
  }, []);

  const handleTagChange = (value: string) => {
    setTag(value);

    const url =
      value === 'all'
        ? window.location.pathname
        : `${window.location.pathname}?tag=${value}`;

    window.history.pushState({}, '', url);
  };

  const loadMore = async () => {
    if (loading || currentPage >= totalPages) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/posts/page/${currentPage + 1}.json`);
      if (!response.ok) {
        return;
      }
      const data: unknown = await response.json();
      if (
        data !== null &&
        typeof data === 'object' &&
        'posts' in data &&
        Array.isArray((data as { posts: unknown }).posts)
      ) {
        const nextPosts = (data as { posts: PostData[] }).posts;
        setLoadedPosts((prev) => [...prev, ...nextPosts]);
        setCurrentPage((prev) => prev + 1);
      }
    } catch {
      // Network or parse error — stop loading without crashing.
    } finally {
      setLoading(false);
    }
  };

  const postList = loadedPosts.filter(
    (post) => tag === 'all' || post.tags.includes(tag),
  );

  return (
    <article className="flex min-h-full w-full flex-col items-center justify-start pb-16">
      <header className="py-7">
        <Bio />
      </header>
      <TagList currentTag={tag} onTagChange={handleTagChange} />
      <PostList
        hasMore={hasMore}
        loading={loading}
        onLoadMore={loadMore}
        postList={postList}
      />
    </article>
  );
};
