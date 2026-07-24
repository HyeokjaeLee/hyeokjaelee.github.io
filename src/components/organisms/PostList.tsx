import { PostLargeCard } from '@components/molecules/PostLargeCard';
import { SELECTOR } from '@constants/layout';
import type { PostData } from '@shared/types';
import { useLayoutEffect, useRef, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

interface PostListProps {
  postList: PostData[];
  className?: string;
}

export const PostList = ({ postList, className = '' }: PostListProps) => {
  const [gridHeight, setGridHeight] = useState(600);
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const rootElement = document.getElementById(SELECTOR.ROOT);

    if (rootElement) {
      rootRef.current = rootElement;
    }

    const calculateHeight = () => {
      setGridHeight(Math.max(window.innerHeight - 200, 400));
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  if (postList.length === 0) {
    return (
      <div
        className={`mx-auto flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center px-4 ${className}`}
      >
        <p className="text-lg text-zinc-500">포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div
      className={`mx-auto w-full max-w-6xl flex-1 ${className}`}
      style={{ minHeight: gridHeight }}
    >
      <VirtuosoGrid
        customScrollParent={rootRef.current || undefined}
        itemContent={(index) => {
          const post = postList[index];

          if (!post?.slug) {
            return null;
          }

          return (
            <PostLargeCard
              className="h-fit w-full"
              date={post.dateLabel}
              description={post.description}
              href={post.slug}
              key={post.slug}
              tags={post.tags}
              title={post.title || '무제'}
              titleImage={post.titleImage}
            />
          );
        }}
        listClassName="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3"
        overscan={20}
        style={{ height: gridHeight }}
        totalCount={postList.length}
      />
    </div>
  );
};
