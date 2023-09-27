import { graphql, navigate } from 'gatsby';

import React from 'react';

import { Logo } from '@components/Logo';
import { Meta } from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { PostTagTab } from '@components/PostTagTab';
import { useGetPostDataList, PAGE_SIZE } from '@hooks/useGetPostDataList';
import { Pagination, useDarkMode } from '@hyeokjaelee/pastime-ui';

import type { PageProps } from 'gatsby';
import type { PostPageQuery } from 'types';

const PostPage = (pageProps: PageProps<PostPageQuery>) => {
  const { postList, total, page, tagCountMap } = useGetPostDataList(pageProps);
  const { isDarkMode } = useDarkMode();

  return (
    <article className="flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
      <header className="py-4 flex items-center gap-2">
        <Logo className="w-24 h-24" fill={isDarkMode ? 'white' : 'black'} />
      </header>
      <div className="flex flex-col items-center gap-1 w-full">
        <PostTagTab tagCountMap={tagCountMap} />
        <ul className="flex flex-wrap w-full">
          {postList.map((postData) => (
            <PostCard {...postData} key={postData.slug} />
          ))}
        </ul>
      </div>
      <section className="mt-auto p-5">
        <Pagination
          pageSize={PAGE_SIZE}
          page={page}
          size="small"
          className="text-sm font-normal"
          totalItems={total}
          onChange={(page) => navigate(`?page=${page}`)}
        />
      </section>
    </article>
  );
};

export default PostPage;

export const Head = () => <Meta title="posts" />;

export const postPageQuery = graphql`
  query PostPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YY년 MM월 DD일")
          title
          titleImage
          tags
          description
        }
      }
    }
  }
`;
