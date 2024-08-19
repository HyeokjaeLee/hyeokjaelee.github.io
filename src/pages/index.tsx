import type { PageProps } from 'gatsby';
import type { PostPageQuery } from 'types/graphql-types';

import { graphql } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { PostCard } from '@components/PostCard';
import { PostListPagination } from '@components/PostListPagination';
import { useGetPostDataList } from '@hooks/useGetPostDataList';
const POST_TAG_EMOJI_LIST = [
  ['all', '📚'],
  ['issues', '🚧'],
  ['frontend', '🎨'],
  ['backend', '🔧'],
  ['devops', '📦'],
  ['etc', '🎁'],
  ['project', '📝'],
  ['data', '📊'],
  ['devOps', '📦'],
];

const PostPage = (pageProps: PageProps<PostPageQuery>) => {
  const { postList, tagCountMap, ...paginationProps } =
    useGetPostDataList(pageProps);

  return (
    <article className="flex h-full flex-col items-center justify-between">
      <header className="py-7">
        <Bio />
      </header>
      <div className="flex w-full flex-col items-center gap-1">
        <Swiper className="max-w-6xl">
          {POST_TAG_EMOJI_LIST.map(([title, emoji]) => (
            <SwiperSlide key={title} className="w-fit">
              {`${emoji} ${title}`}
            </SwiperSlide>
          ))}
        </Swiper>
        <ul className="mx-auto flex w-full max-w-6xl flex-wrap px-2">
          {postList.map((postData) => (
            <PostCard {...postData} key={postData.slug} />
          ))}
        </ul>
      </div>
      <PostListPagination {...paginationProps} />
    </article>
  );
};

export default PostPage;

export const Head = () => <Meta />;

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
