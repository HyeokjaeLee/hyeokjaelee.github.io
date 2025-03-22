import { PostLargeCard } from '@components/molecules/PostLargeCard';
import { SELECTOR } from '@constants/layout';
import { useGlobalStore } from '@stores/useGlobalStore';
import { useLayoutEffect, useRef, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
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

  // 기본 높이 값 설정 (기본값으로 화면 높이의 70% 정도로 설정)
  const [gridHeight, setGridHeight] = useState(600);
  const rootRef = useRef<HTMLElement | null>(null);

  // 외부 스크롤러(root 요소) 참조 가져오기 및 높이 계산
  useLayoutEffect(() => {
    // ROOT 요소 참조 가져오기
    const rootElement = document.getElementById(SELECTOR.ROOT);
    if (rootElement) {
      rootRef.current = rootElement;
    }

    // 높이 계산 함수
    const calculateHeight = () => {
      // 컨텐츠 영역 높이 계산 (헤더 및 네비게이션 영역 제외)
      const calculatedHeight = window.innerHeight - 200;
      setGridHeight(Math.max(calculatedHeight, 400)); // 최소 400px 보장
    };

    // 초기 계산 및 이벤트 리스너 등록
    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

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
    <div
      className={`mx-auto w-full max-w-6xl flex-1 ${className}`}
      style={{ minHeight: gridHeight }}
    >
      <VirtuosoGrid
        customScrollParent={rootRef.current || undefined}
        totalCount={postList.length}
        overscan={20}
        listClassName="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3"
        style={{ height: gridHeight }}
        itemContent={(index) => {
          const post = postList[index];
          if (!post) return null;

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
              onClickLikeButton={() => {
                setLikePostMap((prevMap) => {
                  prevMap.set(slug, !prevMap.get(slug));

                  return prevMap;
                });
              }}
            />
          );
        }}
      />
    </div>
  );
};
