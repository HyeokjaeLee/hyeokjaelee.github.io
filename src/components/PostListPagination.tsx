import { navigate } from 'gatsby';

import React from 'react';

import type { UseGetPostDataListReturn } from '@hooks/useGetPostDataList';
import { Pagination } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';

type PostListPaginationProps = Pick<
  UseGetPostDataListReturn,
  'page' | 'pageSize' | 'totalItems'
>;

export const PostListPagination = (props: PostListPaginationProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const selectedTag = searchParams.get('tag');

  return (
    <section className="mt-auto p-5">
      <Pagination
        {...props}
        className="text-sm font-normal"
        size="small"
        onChange={(page) =>
          navigate(`?tag=${selectedTag ?? 'all'}&page=${page}`)
        }
      />
    </section>
  );
};
