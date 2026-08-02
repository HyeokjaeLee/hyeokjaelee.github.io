import type { PostData } from '@shared/types';
import { useEffect, useState } from 'react';

let cache: PostData[] | null = null;

/**
 * Loads the first chunk of posts (/posts/page/1.json, generated at build time)
 * once and caches it for the lifetime of the page. Used by client-only islands
 * (Search, Last post) that need the newest posts without loading the full
 * manifest.
 */
export const useRecentPosts = () => {
  const [posts, setPosts] = useState<PostData[] | null>(cache);

  useEffect(() => {
    let active = true;

    if (cache) {
      setPosts(cache);

      return;
    }

    fetch('/posts/page/1.json')
      .then((response) => response.json())
      .then((data: unknown) => {
        const list =
          data !== null &&
          typeof data === 'object' &&
          'posts' in data &&
          Array.isArray((data as { posts: unknown }).posts)
            ? (data as { posts: PostData[] }).posts
            : [];
        cache = list;
        if (active) {
          setPosts(list);
        }
      })
      .catch(() => {
        if (active) {
          setPosts([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return posts;
};
