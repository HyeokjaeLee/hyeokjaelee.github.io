import { IS_CLIENT } from '@constants/etc';
import { LOCAL_STORAGE } from '@constants/storage';
import { createWithEqualityFn } from 'zustand/traditional';

type LikePostMap = Map<string, boolean>;

interface GlobalStore {
  likePostMap: LikePostMap;
  setLikePostMap: (callback: (likePostMap: LikePostMap) => LikePostMap) => void;
}

export const useGlobalStore = createWithEqualityFn<GlobalStore>((set, get) => ({
  likePostMap: (() => {
    if (!IS_CLIENT) {
      return new Map();
    }

    try {
      return new Map(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE.LIKE_POST_LIST) ?? '[]'),
      );
    } catch {
      // Corrupt localStorage must not crash hydration.
      return new Map();
    }
  })(),
  setLikePostMap: (callback) => {
    const likePostMap = callback(get().likePostMap);

    localStorage.setItem(
      LOCAL_STORAGE.LIKE_POST_LIST,
      JSON.stringify(Array.from(likePostMap.entries())),
    );

    return set({ likePostMap: new Map(likePostMap) });
  },
}));
