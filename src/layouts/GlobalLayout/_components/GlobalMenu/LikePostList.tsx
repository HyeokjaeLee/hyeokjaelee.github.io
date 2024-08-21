import type { LikePostListQuery } from 'types/graphql-types';

import { graphql, useStaticQuery } from 'gatsby';

import { PostSmallCard } from '@components/PostSmallCard';
import { useGlobalStore } from '@stores/useGlobalStore';

export const LikePostList = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<LikePostListQuery>(graphql`
    query LikePostList {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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

  const likePostMap = useGlobalStore((state) => state.likePostMap);

  const likePostList = nodes.filter(({ fields }) =>
    fields?.slug ? likePostMap.get(fields.slug) : false,
  );

  return (
    <dl>
      <dt className="mb-2 px-2 font-bold text-gray-800 dark:text-zinc-100">
        💖 Like post
      </dt>
      <dd>
        <ul>
          {likePostList.map(({ fields, frontmatter }, index) => (
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
