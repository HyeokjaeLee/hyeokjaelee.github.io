import { Bio } from '@components/molecules/Bio';
import { Meta } from '@components/molecules/Meta';
import { PostList } from '@components/organisms/PostList';
import { TagList } from '@components/organisms/TagList';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import type { PostPageQuery } from 'types/graphql-types';

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
