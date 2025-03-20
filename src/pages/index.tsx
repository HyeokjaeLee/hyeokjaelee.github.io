import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import type { PostPageQuery } from 'types/graphql-types';

import { PostList } from './_components/PostList';
import { TagList } from './_components/TagList';

const PostPage = ({
  location,
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<PostPageQuery>) => {
  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get('tag') || 'all';

  const postList = nodes.filter(
    ({ frontmatter }) => tag === 'all' || frontmatter?.tags?.includes(tag),
  );

  return (
    <article className="flex size-full flex-col items-center justify-start">
      <header className="py-7">
        <Bio />
      </header>
      <TagList currentTag={tag} />
      <PostList postList={postList} />
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
