import { PostSmallCard } from '@components/PostSmallCard';
import { graphql, useStaticQuery } from 'gatsby';
import type { LastPostListQuery } from 'types/graphql-types';

export const LastPostList = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<LastPostListQuery>(graphql`
    query LastPostList {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

  return (
    <dl>
      <dt className="mb-2 px-2 font-bold text-gray-800 dark:text-zinc-100">
        🗃️ Last post
      </dt>
      <dd>
        <ul>
          {nodes.map(({ fields, frontmatter }, index) => (
            <li key={index}>
              <PostSmallCard
                description={frontmatter?.description}
                slug={fields?.slug}
                title={frontmatter?.title}
              />
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
};
