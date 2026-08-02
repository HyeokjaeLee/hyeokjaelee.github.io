import { createWithEqualityFn } from 'zustand/traditional';

export type CommentTarget = {
  /** Post pathname, e.g. "/briend/". Converted to the giscus `term` (canonical URL). */
  pathname: string;
  title?: string;
};

interface CommentDrawerStore {
  isOpen: boolean;
  target: CommentTarget | null;
  openCommentDrawer: (target: CommentTarget) => void;
  closeCommentDrawer: () => void;
}

/**
 * Drives the global comment/reaction bottom drawer. Any page (list card,
 * detail header) calls `openCommentDrawer` with the target post; the single
 * CommentDrawer instance mounted in Layout.astro reacts. `target` is kept on
 * close so the giscus iframe can be reused instead of recreated.
 */
export const useCommentDrawerStore = createWithEqualityFn<CommentDrawerStore>(
  (set) => ({
    isOpen: false,
    target: null,
    openCommentDrawer: (target) => set({ isOpen: true, target }),
    closeCommentDrawer: () => set({ isOpen: false }),
  }),
);
