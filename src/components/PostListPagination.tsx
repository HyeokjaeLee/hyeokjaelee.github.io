import { navigate } from 'gatsby';

import React from 'react';

import { PAGE_SIZE } from '@hooks/useGetPostDataList';
import type { UseGetPostDataListReturn } from '@hooks/useGetPostDataList';
import { Pagination } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';

type PostListPaginationProps = Pick<UseGetPostDataListReturn, 'page' | 'total'>;

export const PostListPagination = ({
  page,
  total,
}: PostListPaginationProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const selectedTag = searchParams.get('tag');

  return (
    <section className="mt-auto p-5">
      <Pagination
        pageSize={PAGE_SIZE}
        page={page}
        size="small"
        className="text-sm font-normal"
        totalItems={total}
        onChange={(page) =>
          navigate(`?tag=${selectedTag ?? 'all'}&page=${page}`)
        }
      />
    </section>
  );
};
