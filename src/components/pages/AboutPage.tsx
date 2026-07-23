import { Bio } from '@components/molecules/Bio';
import { AboutHeader } from '@components/organisms/AboutHeader';

export const AboutPage = () => {
  return (
    <article className="font-nanum-square mt-8 flex break-keep p-4 leading-relaxed md:mt-14">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <AboutHeader />
        <footer className="py-12">
          <Bio />
        </footer>
      </div>
    </article>
  );
};
