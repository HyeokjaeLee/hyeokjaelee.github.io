import { Bio } from '@components/molecules/Bio';
import { PostList } from '@components/organisms/PostList';
import { TagList } from '@components/organisms/TagList';
import { useSearchParams } from '@hooks/useSearchParams';
import type { PostData } from '@shared/types';

interface HomePageProps {
  posts: PostData[];
}

export const HomePage = ({ posts }: HomePageProps) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || 'all';

  const postList = posts.filter(
    (post) => tag === 'all' || post.tags.includes(tag),
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
