import { DotLottie } from '@components/atoms/DotLottie';
import { DrawerClose } from '@components/molecules/Drawer';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import { useGlobalStore } from '@stores/useGlobalStore';
import { graphql, useStaticQuery } from 'gatsby';
import type { LikePostListQuery } from 'types/graphql-types';

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
    <dl className="mx-4">
      <dt className="mb-2 ml-3 flex w-full items-center gap-4 font-bold">
        Last post
        <hr className="flex-1" />
      </dt>
      <dd>
        {likePostList.length ? (
          <ul>
            {likePostList.map(({ fields, frontmatter }, index) => (
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
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center break-keep text-center">
            <DotLottie src="/lotties/empty.lottie" className="size-30" />
            <p className="text-muted-foreground">
              아직 마음에 드는 글이 없나요?
            </p>
          </div>
        )}
      </dd>
    </dl>
  );
};
