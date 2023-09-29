import { graphql } from 'gatsby';

import React from 'react';

import { Logo } from '@components/Logo';
import { Meta } from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { PostListPagination } from '@components/PostListPagination';
import { PostTagTab } from '@components/PostTagTab';
import { useGetPostDataList } from '@hooks/useGetPostDataList';
import { useDarkMode } from '@hyeokjaelee/pastime-ui';

import type { PageProps } from 'gatsby';
import type { PostPageQuery } from 'types';

const PostPage = (pageProps: PageProps<PostPageQuery>) => {
  const { postList, total, page, tagCountMap } = useGetPostDataList(pageProps);
  const { isDarkMode } = useDarkMode();

  return (
    <article className="flex flex-col items-center justify-between h-full">
      <header className="py-7">
        <Logo className="w-24 h-24" fill={isDarkMode ? 'white' : 'black'} />
      </header>
      <div className="flex flex-col items-center gap-1 w-full">
        <PostTagTab tagCountMap={tagCountMap} />
        <ul className="flex flex-wrap w-full px-2 max-w-6xl mx-auto">
          {postList.map((postData) => (
            <PostCard {...postData} key={postData.slug} />
          ))}
        </ul>
      </div>
      <PostListPagination total={total} page={page} />
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
