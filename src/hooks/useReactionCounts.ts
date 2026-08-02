import { GISCUS_CONFIG } from '@constants/giscus';
import { LOCAL_STORAGE } from '@constants/storage';
import { useEffect, useState } from 'react';

// GitHub Discussions back each giscus comment thread. The REST API exposes the
// reaction total per discussion without auth (60 req/h/IP); one paginated call
// covers the whole blog, so this hook fires a single request per page load.
const API_URL = `https://api.github.com/repos/${GISCUS_CONFIG.repo}/discussions?per_page=100`;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

type ReactionCounts = Record<string, number>; // post pathname -> reaction total

type Discussion = {
  title: string;
  reactions?: { total_count: number };
};

let cache: ReactionCounts | null = null;

const readStorage = (): ReactionCounts | null => {
  if (cache) return cache;
  if (typeof localStorage === 'undefined') return null;

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE.REACTION_COUNTS);

    if (raw) {
      const { data, ts }: { data: ReactionCounts; ts: number } =
        JSON.parse(raw);

      if (Date.now() - ts < CACHE_TTL) {
        cache = data;

        return data;
      }
    }
  } catch {
    // ignore malformed cache
  }

  return null;
};

const writeStorage = (data: ReactionCounts) => {
  cache = data;

  try {
    localStorage.setItem(
      LOCAL_STORAGE.REACTION_COUNTS,
      JSON.stringify({ data, ts: Date.now() }),
    );
  } catch {
    // ignore quota errors
  }
};

const safePathname = (url: string): string | null => {
  try {
    return new URL(url).pathname;
  } catch {
    return null;
  }
};

/**
 * Fetches giscus reaction counts (GitHub Discussions) once, then serves them
 * from an in-memory + localStorage cache for one hour. Maps each discussion's
 * URL (giscus `mapping:'url'` stores the page URL as the discussion title) to
 * its reaction total. Counts are approximate — last fetch, not real-time.
 */
export const useReactionCounts = () => {
  const [counts, setCounts] = useState<ReactionCounts>(
    () => readStorage() ?? {},
  );

  useEffect(() => {
    let active = true;

    const cached = readStorage();

    if (cached) {
      setCounts(cached);

      return;
    }

    fetch(API_URL)
      .then((response) => (response.ok ? response.json() : []))
      .then((discussions: Discussion[]) => {
        const next: ReactionCounts = {};

        for (const discussion of discussions) {
          const pathname = safePathname(discussion.title);

          if (!pathname) continue;

          next[pathname] =
            (next[pathname] ?? 0) + (discussion.reactions?.total_count ?? 0);
        }

        if (!active) return;

        writeStorage(next);
        setCounts(next);
      })
      .catch(() => {
        if (active) setCounts({});
      });

    return () => {
      active = false;
    };
  }, []);

  return counts;
};
