import { Bio } from '@components/molecules/Bio';
import { PostList } from '@components/organisms/PostList';
import { TagList } from '@components/organisms/TagList';
import type { PostData } from '@shared/types';
import { useEffect, useState } from 'react';

interface HomePageProps {
  posts: PostData[];
}

const readTag = () => {
  if (typeof window === 'undefined') {
    return 'all';
  }

  return new URLSearchParams(window.location.search).get('tag') || 'all';
};

export const HomePage = ({ posts }: HomePageProps) => {
  // Local state keeps the tag reactive on click. Astro's ClientRouter does not
  // fire astro:after-swap for query-only navigations, so reading the URL via an
  // effect would not update on tag click — manage it here instead.
  const [tag, setTag] = useState(readTag);

  useEffect(() => {
    const onPop = () => setTag(readTag());

    window.addEventListener('popstate', onPop);

    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleTagChange = (value: string) => {
    setTag(value);

    const url =
      value === 'all'
        ? window.location.pathname
        : `${window.location.pathname}?tag=${value}`;

    window.history.pushState({}, '', url);
  };

  const postList = posts.filter(
    (post) => tag === 'all' || post.tags.includes(tag),
  );

  return (
    <article className="flex size-full flex-col items-center justify-start">
      <header className="py-7">
        <Bio />
      </header>
      <TagList currentTag={tag} onTagChange={handleTagChange} />
      <PostList postList={postList} />
    </article>
  );
};
