import { IS_CLIENT } from '@constants/etc';
import { LOCAL_STORAGE } from '@constants/storage';
import { createWithEqualityFn } from 'zustand/traditional';

interface AuthStore {
  token: string | null;
  login: string | null;
  loginModalOpen: boolean;
  pendingSlug: string | null;
  setAuth: (token: string, login: string) => void;
  clearAuth: () => void;
  openLoginModal: (slug?: string) => void;
  closeLoginModal: () => void;
  clearPendingSlug: () => void;
}

export const useAuthStore = createWithEqualityFn<AuthStore>((set) => ({
  token: IS_CLIENT
    ? localStorage.getItem(LOCAL_STORAGE.GITHUB_LIKE_TOKEN)
    : null,
  login: null,
  loginModalOpen: false,
  pendingSlug: null,
  setAuth: (token, login) => {
    localStorage.setItem(LOCAL_STORAGE.GITHUB_LIKE_TOKEN, token);

    return set({ token, login });
  },
  clearAuth: () => {
    localStorage.removeItem(LOCAL_STORAGE.GITHUB_LIKE_TOKEN);

    return set({ token: null, login: null });
  },
  openLoginModal: (slug) =>
    set({ loginModalOpen: true, pendingSlug: slug ?? null }),
  closeLoginModal: () => set({ loginModalOpen: false }),
  clearPendingSlug: () => set({ pendingSlug: null }),
}));
