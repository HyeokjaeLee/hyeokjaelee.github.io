import { LOCAL_STORAGE } from '@constants/storage';
import { createWithEqualityFn } from 'zustand/traditional';

type LikePostMap = Map<string, boolean>;

interface GlobalStore {
  likePostMap: LikePostMap;
  setLikePostMap: (callback: (likePostMap: LikePostMap) => LikePostMap) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>((set, get) => ({
  likePostMap: new Map(),
  setLikePostMap: (callback) => {
    const likePostMap = callback(get().likePostMap);

    localStorage.setItem(
      LOCAL_STORAGE.LIKE_POST_LIST,
      JSON.stringify(Array.from(likePostMap.entries())),
    );

    return set({ likePostMap: new Map(likePostMap) });
  },
}));
