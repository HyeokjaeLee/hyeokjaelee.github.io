import { DrawerClose } from '@components/molecules/Drawer';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import { useAllPosts } from '@hooks/useAllPosts';

export const LastPostList = () => {
  const posts = useAllPosts();
  const nodes = (posts ?? []).slice(0, 5);

  return (
    <dl className="mx-4">
      <dt className="mb-2 ml-3 flex w-full items-center gap-4 font-bold">
        Last post
        <hr className="flex-1" />
      </dt>
      <dd>
        <ul>
          {nodes.map((post) => (
            <li key={post.slug}>
              <DrawerClose asChild>
                <PostSmallCard
                  description={post.description}
                  slug={post.slug}
                  title={post.title}
                  titleImage={post.titleImage}
                />
              </DrawerClose>
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
};
