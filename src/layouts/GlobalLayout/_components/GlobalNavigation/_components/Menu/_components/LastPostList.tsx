import { DrawerClose } from '@components/molecules/Drawer';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
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
    <dl className="mx-4">
      <dt className="mb-2 ml-3 flex w-full items-center gap-4 font-bold">
        Last post
        <hr className="flex-1" />
      </dt>
      <dd>
        <ul>
          {nodes.map(({ fields, frontmatter }, index) => (
            <li key={index}>
              <DrawerClose asChild>
                <PostSmallCard
                  description={frontmatter?.description}
                  slug={fields?.slug}
                  title={frontmatter?.title}
                />
              </DrawerClose>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
};
