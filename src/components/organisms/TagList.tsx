import { Button } from '@components/atoms/Button';
import { Link } from '@shared/Link';
import { useEffect, useRef } from 'react';
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
  onTagChange: (tag: string) => void;
}

export const TagList = ({ currentTag, onTagChange }: TagListProps) => {
  const slideRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiperIndex = POST_TAGS.indexOf(currentTag);

    if (slideRef.current) {
      slideRef.current.slideTo(swiperIndex);
    }
  }, [currentTag]);

  return (
    <nav className="mx-auto flex w-full justify-center py-4">
      <Swiper
        autoplay={{
          delay: 3_000,
          disableOnInteraction: true,
        }}
        className="mx-auto w-auto px-4"
        modules={[Mousewheel, Autoplay]}
        mousewheel
        slidesPerView="auto"
        spaceBetween={4}
        onSwiper={(swiper) => (slideRef.current = swiper)}
      >
        {POST_TAGS.map((value) => {
          const isCurrentTag = value === currentTag;

          return (
            <SwiperSlide className="my-2 w-auto" key={value}>
              <Button
                asChild
                size="8"
                variant={isCurrentTag ? 'primary' : 'ghost'}
              >
                <Link
                  onClick={(event) => {
                    // Prevent ClientRouter navigation; update locally so the
                    // active state stays reactive. The href stays for SEO and
                    // open-in-new-tab.
                    event.preventDefault();
                    onTagChange(value);
                  }}
                  to={`?tag=${value}`}
                >
                  {value}
                </Link>
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </nav>
  );
};
