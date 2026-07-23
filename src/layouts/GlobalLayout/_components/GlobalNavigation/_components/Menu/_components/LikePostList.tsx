import { DotLottie } from '@components/atoms/DotLottie';
import { DrawerClose } from '@components/molecules/Drawer';
import { PostSmallCard } from '@components/molecules/PostSmallCard';
import { useAllPosts } from '@hooks/useAllPosts';
import { useGlobalStore } from '@stores/useGlobalStore';

export const LikePostList = () => {
  const posts = useAllPosts();
  const likePostMap = useGlobalStore((state) => state.likePostMap);

  const likePostList = (posts ?? []).filter((post) =>
    post.slug ? likePostMap.get(post.slug) : false,
  );

  return (
    <dl className="mx-4">
      <dt className="mb-2 ml-3 flex w-full items-center gap-4 font-bold">
        Liked post
        <hr className="flex-1" />
      </dt>
      <dd>
        {likePostList.length ? (
          <ul>
            {likePostList.map((post) => (
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
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center break-keep text-center">
            <DotLottie className="size-30" src="/lotties/empty.lottie" />
            <p className="text-muted-foreground">
              아직 마음에 드는 글이 없나요?
            </p>
          </div>
        )}
      </dd>
    </dl>
  );
};
