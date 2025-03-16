import { PostLargeCard } from '@components/PostLargeCard';
import { useGlobalStore } from '@stores/useGlobalStore';
import { useEffect, useLayoutEffect, useState } from 'react';
import type { GridChildComponentProps } from 'react-window';
import { FixedSizeGrid } from 'react-window';
import type { PostPageQuery } from 'types/graphql-types';
import { useShallow } from 'zustand/shallow';

interface PostListProps {
  postList: PostPageQuery['allMarkdownRemark']['nodes'];
  className?: string;
}

// 카드의 비율 (가로:세로)
const CARD_ASPECT_RATIO = 0.75; // 4:3 비율 (너비의 0.75배가 높이)

export const PostList = ({ postList, className = '' }: PostListProps) => {
  // 디버깅을 위한 상태 추가
  const [debug, setDebug] = useState({
    width: 0,
    height: 0,
    columnWidth: 0,
    rowHeight: 0,
    rowCount: 0,
    columnCount: 0,
    postCount: 0,
  });

  // 윈도우 크기에 따라 그리드 열 수 조정
  const [columnCount, setColumnCount] = useState(3);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 디버깅용 - 포스트 리스트 로깅
  useEffect(() => {
    console.info('PostList length:', postList.length);
  }, [postList]);

  // 높이, 너비 계산

  const rowCount = Math.ceil(postList.length / columnCount);

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

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const index = rowIndex * columnCount + columnIndex;

    // 인덱스 범위 체크 추가
    if (index >= postList.length) return null;

    const post = postList[index];
    if (!post) return null;

    const { fields, frontmatter } = post;
    const { slug } = fields ?? {};

    if (!slug) return null;

    return (
      <li style={style} className="p-2">
        <PostLargeCard
          key={slug}
          date={frontmatter?.date}
          description={frontmatter?.description}
          href={slug}
          isLiked={likePostMap.get(slug)}
          tags={frontmatter?.tags ?? []}
          title={frontmatter?.title || '무제'}
          dynamicWidth={false}
          className="h-full w-full"
          onClickLikeButton={() => {
            setLikePostMap((prevMap) => {
              prevMap.set(slug, !prevMap.get(slug));

              return prevMap;
            });
          }}
        />
      </li>
    );
  };

  return (
    <div
      className={`mx-auto min-h-[600px] w-full max-w-6xl flex-1 px-4 ${className} overflow-auto`}
    >
      <FixedSizeGrid
        columnCount={3}
        columnWidth={370}
        height={370}
        rowCount={Math.max(1, rowCount)}
        rowHeight={370}
        width={370} // max-w-6xl과 일치하는 값 (1152px)
        className="scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700"
        style={{ overflow: 'auto' }}
      >
        {Cell}
      </FixedSizeGrid>
    </div>
  );
};
