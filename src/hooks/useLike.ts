import { buildIssueTerm, GITHUB_LIKE_CONFIG } from '@constants/github';
import {
  createHeartReaction,
  deleteHeartReaction,
  ensureIssue,
  findIssueNumber,
  GithubApiError,
  listHeartReactions,
} from '@lib/github-reactions';
import { useAuthStore } from '@stores/useAuthStore';
import { useGlobalStore } from '@stores/useGlobalStore';
import { useEffect, useRef, useState } from 'react';

interface UseLikeOptions {
  fetchRemote?: boolean;
}

interface UseLikeResult {
  liked: boolean;
  count: number;
  toggleLike: () => void;
}

export function useLike(slug: string, options?: UseLikeOptions): UseLikeResult {
  const fetchRemote = options?.fetchRemote ?? false;

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const issueNumberRef = useRef<number | null>(null);

  const likePostMap = useGlobalStore((state) => state.likePostMap);
  const setLikePostMap = useGlobalStore((state) => state.setLikePostMap);
  const token = useAuthStore((state) => state.token);
  const login = useAuthStore((state) => state.login);
  const pendingSlug = useAuthStore((state) => state.pendingSlug);
  const openLoginModal = useAuthStore((state) => state.openLoginModal);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const clearPendingSlug = useAuthStore((state) => state.clearPendingSlug);

  // Local hydration: derive liked from the persisted likePostMap.
  useEffect(() => {
    setLiked(Boolean(likePostMap.get(slug)));
  }, [slug, likePostMap]);

  // Remote fetch: count + liked from GitHub reactions.
  useEffect(() => {
    if (!fetchRemote || !GITHUB_LIKE_CONFIG.isEnabled || !token) return;

    let active = true;

    void (async () => {
      try {
        if (!issueNumberRef.current) {
          issueNumberRef.current = await findIssueNumber(
            buildIssueTerm(slug),
            token,
          );
        }
        const number = issueNumberRef.current;

        if (!number || !active) return;

        const reactions = await listHeartReactions(number, token);

        if (!active) return;

        setCount(reactions.length);

        if (login) {
          setLiked(reactions.some((r) => r.user.login === login));
        }
      } catch {
        // Network errors must not crash the page — leave local state.
      }
    })();

    return () => {
      active = false;
    };
  }, [fetchRemote, slug, token, login]);

  // Pending-like: apply the like once authentication completes.
  useEffect(() => {
    if (!GITHUB_LIKE_CONFIG.isEnabled) return;
    if (!token || !pendingSlug || pendingSlug !== slug) return;

    void (async () => {
      try {
        const term = buildIssueTerm(slug);

        if (!issueNumberRef.current) {
          issueNumberRef.current = await ensureIssue(
            { term, title: term, description: '', url: term },
            token,
          );
        }

        const number = issueNumberRef.current;

        if (number) {
          const result = await createHeartReaction(number, token);

          if (result.status === 201) {
            setCount((c) => c + 1);
          }
        }

        setLikePostMap((prev) => {
          const next = new Map(prev);

          next.set(slug, true);

          return next;
        });
      } catch (error) {
        if (error instanceof GithubApiError && error.status === 401) {
          clearAuth();
          openLoginModal(slug);
        }
      } finally {
        clearPendingSlug();
      }
    })();
  }, [
    token,
    pendingSlug,
    slug,
    setLikePostMap,
    clearAuth,
    openLoginModal,
    clearPendingSlug,
  ]);

  const toggleLike = () => {
    const currentlyLiked = Boolean(likePostMap.get(slug));

    const flip = (value: boolean) =>
      setLikePostMap((prev) => {
        const next = new Map(prev);

        next.set(slug, value);

        return next;
      });

    // Fallback mode (localStorage only): just flip and persist.
    if (!GITHUB_LIKE_CONFIG.isEnabled) {
      flip(!currentlyLiked);

      return;
    }

    // Enabled but not authenticated: prompt login without flipping.
    if (!token) {
      openLoginModal(slug);

      return;
    }

    const authToken = token;

    // Optimistic flip (instant heart + LikePostList update).
    flip(!currentlyLiked);

    // Authenticated remote toggle.
    void (async () => {
      try {
        const term = buildIssueTerm(slug);

        if (!issueNumberRef.current) {
          issueNumberRef.current = await ensureIssue(
            { term, title: term, description: '', url: term },
            authToken,
          );
        }

        const number = issueNumberRef.current;

        if (!number) return;

        if (currentlyLiked) {
          const reactions = await listHeartReactions(number, authToken);
          const mine = reactions.find((r) => r.user.login === login);

          if (mine) {
            await deleteHeartReaction(number, mine.id, authToken);
            setCount((c) => Math.max(0, c - 1));
          }
        } else {
          const result = await createHeartReaction(number, authToken);

          if (result.status === 201) {
            setCount((c) => c + 1);
          }
        }
      } catch (error) {
        flip(currentlyLiked); // Revert the optimistic flip.

        if (error instanceof GithubApiError && error.status === 401) {
          clearAuth();
          openLoginModal(slug);
        }
      }
    })();
  };

  return { liked, count, toggleLike };
}
