import { create } from 'zustand';

interface PageInfoStore {
  path: string;
  query: Map<string, string>;
  setPath: (path: string) => void;
  setQuery: (search: string) => void;
}

export const usePageInfoStore = create<PageInfoStore>((set) => ({
  path: '/',
  query: new Map<string, string>(),
  setPath: (path: string) => set({ path }),
  setQuery: (search: string) => {
    const query = new Map<string, string>();
    const [, queryStr] = search.split('?');
    if (queryStr) {
      const queryList = queryStr.split('&');
      queryList.forEach((q) => {
        const [key, value] = q.split('=');
        query.set(key, value);
      });
    }
    set({ query });
  },
}));
