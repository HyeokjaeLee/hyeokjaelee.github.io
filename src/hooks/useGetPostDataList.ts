import { useMemo } from 'react';

import type { PageProps } from 'gatsby';
import type { PostPageQuery } from 'types';

type UseGetPostLIstParams = PageProps<PostPageQuery>;

export interface PostData {
  title: string;
  titleImage: string;
  tags: string[];
  slug: string;
  description: string;
  date: string;
}

export const PAGE_SIZE = 8;

export const useGetPostDataList = ({
  data: {
    allMarkdownRemark: { nodes },
  },
  location: { search },
}: UseGetPostLIstParams) => {
  const searchParams = new URLSearchParams(search);
  const page = Number(searchParams.get('page')) || 1;
  const tag = searchParams.get('tag') || 'all';

  const { postList, tagCountMap } = useMemo(() => {
    const postList: PostData[] = [];
    const tagCountMap = new Map<string, number>();

    nodes.forEach((node) => {
      const { frontmatter, fields } = node;
      const { title, titleImage, date, description } = frontmatter ?? {};
      const { slug } = fields ?? {};

      const tags: string[] = [];
      frontmatter?.tags?.forEach((tag) => {
        if (tag) tags.push(tag);
      });

      if (title && titleImage && date && slug && description) {
        tags.forEach((tag) => {
          const count = tagCountMap.get(tag) ?? 0;
          tagCountMap.set(tag, count + 1);
        });

        postList.push({ title, titleImage, tags, date, slug, description });
      }
    });

    return { postList, tagCountMap };
  }, [nodes]);

  const filteredPostListByTag = postList.filter(({ tags }) => {
    if (tag === 'all') return true;

    return tags.includes(tag);
  });

  return {
    total: filteredPostListByTag.length,
    page,
    postList: filteredPostListByTag.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE,
    ),
    tagCountMap,
  };
};

export type UseGetPostDataListReturn = ReturnType<typeof useGetPostDataList>;
