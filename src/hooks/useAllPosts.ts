import type { PostData } from '@shared/types';
import { useEffect, useState } from 'react';

let cache: PostData[] | null = null;

/**
 * Loads the full post manifest (/posts.json, generated at build time) once and
 * caches it for the lifetime of the page. Used by client-only islands (Search,
 * Last post, Liked post) that previously relied on Gatsby's useStaticQuery.
 */
export const useAllPosts = () => {
  const [posts, setPosts] = useState<PostData[] | null>(cache);

  useEffect(() => {
    let active = true;

    if (cache) {
      setPosts(cache);

      return;
    }

    fetch('/posts.json')
      .then((response) => response.json())
      .then((data: PostData[]) => {
        cache = data;
        if (active) {
          setPosts(data);
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
