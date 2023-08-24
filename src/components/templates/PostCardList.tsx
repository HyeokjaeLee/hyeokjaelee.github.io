import React from 'react';

import { LimitedWidthContainer } from '@components/atoms';
import { PostCard } from '@components/organisms';
import { useFilteredPostCardDataList, useURLSearchParams } from '@hooks';

export const PostCardList = () => {
  const selectedTag = useURLSearchParams().get('tag');

  const filteredPosts = useFilteredPostCardDataList(selectedTag);

  return (
    <LimitedWidthContainer>
      <ol className="flex flex-wrap">
        {filteredPosts.map((post) => (
          <PostCard {...post} selectedTag={selectedTag} />
        ))}
      </ol>
    </LimitedWidthContainer>
  );
};
