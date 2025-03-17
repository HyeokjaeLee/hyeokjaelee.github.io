import { PostLargeCard } from '@components/PostLargeCard';
import { useGlobalStore } from '@stores/useGlobalStore';
import { useEffect, useLayoutEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import type { GridChildComponentProps } from 'react-window';
import { VariableSizeGrid } from 'react-window';
import type { PostPageQuery } from 'types/graphql-types';
import { useShallow } from 'zustand/shallow';

interface PostListProps {
  postList: PostPageQuery['allMarkdownRemark']['nodes'];
  className?: string;
}

export const PostList = ({ postList, className = '' }: PostListProps) => {
  const [likePostMap, setLikePostMap] = useGlobalStore(
    useShallow((state) => [state.likePostMap, state.setLikePostMap]),
  );

  // 문제 해결: 만약 postList가 비어있으면 일부 더미 데이터 표시
  if (postList.length === 0) {
    return (
      <div
        className={`mx-auto min-h-0 w-full max-w-6xl flex-1 px-4 ${className} flex items-center justify-center`}
      >
        <p className="text-lg text-zinc-500">포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid max-w-screen-lg grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {postList.map((post) => {
        const { fields, frontmatter } = post;
        const { slug } = fields ?? {};

        if (!slug) return null;

        return (
          <PostLargeCard
            key={slug}
            date={frontmatter?.date}
            description={frontmatter?.description}
            href={slug}
            isLiked={likePostMap.get(slug)}
            tags={frontmatter?.tags ?? []}
            className="h-fit w-full"
            title={frontmatter?.title || '무제'}
            dynamicWidth={false}
            onClickLikeButton={() => {
              setLikePostMap((prevMap) => {
                prevMap.set(slug, !prevMap.get(slug));

                return prevMap;
              });
            }}
          />
        );
      })}
    </div>
  );
};
