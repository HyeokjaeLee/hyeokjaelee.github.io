import { Button } from '@components/atoms/Button';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type SwiperType from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const POST_TAGS = [
  'all',
  'issues',
  'frontend',
  'backend',
  'devOps',
  'etc',
  'project',
  'data',
];

interface TagListProps {
  currentTag: string;
}

export const TagList = ({ currentTag }: TagListProps) => {
  const slideRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiperIndex = POST_TAGS.findIndex((value) => value === currentTag);
    if (slideRef.current) {
      slideRef.current.slideTo(swiperIndex);
    }
  }, [currentTag]);

  return (
    <nav className="mx-auto flex w-full justify-center py-4">
      <Swiper
        mousewheel
        autoplay={{
          delay: 3_000,
          disableOnInteraction: true,
        }}
        className="mx-auto w-auto px-4"
        modules={[Mousewheel, Autoplay]}
        slidesPerView="auto"
        spaceBetween={4}
        onSwiper={(swiper) => (slideRef.current = swiper)}
      >
        {POST_TAGS.map((value) => {
          const isCurrentTag = value === currentTag;

          return (
            <SwiperSlide key={value} className="my-2 w-auto">
              <Button
                asChild
                size="8"
                variant={isCurrentTag ? 'primary' : 'ghost'}
              >
                <Link to={`?tag=${value}`}>{value}</Link>
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </nav>
  );
};
