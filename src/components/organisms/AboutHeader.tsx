import type { HeaderLink } from '@components/molecules/HeaderLinkList';
import { HeaderLinkList } from '@components/molecules/HeaderLinkList';
import { BASE_URL } from '@constants/etc';
import { ROUTES } from '@constants/routes';
import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { cn } from '@utils/cn';
import React from 'react';
import { GitHub, Linkedin, Mail, PenTool, Phone } from 'react-feather';

export const AboutHeader = () => {
  const displayType = useDisplayType();

  const isPdf = displayType === DISPLAY_TYPE.PDF;

  const ContactLinks: HeaderLink[] = [
    {
      icon: Mail,
      label: 'email',
      to: 'mailto:leehyeokjae97@gmail.com',
      text: 'leehyeokjae97@gmail.com',
    },
  ];

  if (isPdf) {
    ContactLinks.push({
      icon: Phone,
      label: 'phone',
      to: 'tel:+821039646067',
      text: '+82 1039646067',
    });
  }

  const portfolioUrl = `${BASE_URL}${ROUTES.PORTFOLIO}`;

  return (
    <header className="flex flex-col gap-8">
      <section className="flex flex-wrap items-center justify-center gap-5 px-5 md:gap-12">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-nowrap text-center text-lg">
            안녕하세요!
            <br />
            덕업일치 개발자, <span className="font-bold">이혁재</span>
            입니다.
          </h1>
          <section
            className={cn(
              'mt-2 hidden rounded-sm bg-amber-100 p-4 text-center text-sm',
              {
                block: isPdf,
              },
            )}
          >
            <strong className="block">
              웹에서 더 많은 정보를 확인할 수 있습니다.
            </strong>
            <a href={portfolioUrl} className="text-blue-500 underline">
              {portfolioUrl}
            </a>
          </section>
        </div>
        <div className="flex flex-1 shrink flex-wrap justify-center gap-4">
          <HeaderLinkList title="Contact." links={ContactLinks} />
          <HeaderLinkList
            title="Channel."
            links={[
              {
                icon: PenTool,
                label: 'blog',
                to: isPdf ? BASE_URL : ROUTES.HOME,
                text: BASE_URL,
              },
              {
                icon: GitHub,
                label: 'github',
                to: 'https://github.com/HyeokjaeLee',
              },
              {
                icon: Linkedin,
                label: 'linkedin',
                to: 'https://www.linkedin.com/in/hyeokjae-lee-844042225',
              },
            ]}
          />
        </div>
      </section>
      <div className="whitespace-pre-wrap rounded-md border-l-8 border-zinc-300 bg-zinc-50 p-3 text-sm dark:border-gray-500 dark:bg-zinc-700">
        <p>
          중학생 때 우연히 Android 앱 개발을 시작했고, 현재는 프론트엔드
          개발자로 활동하고 있습니다.
        </p>
        <p>
          비즈니스 목표를 사용자에게 전달하기 위한 개발과정과 적절한 도구를
          선택해 문제를 해결하는것에서 행복을 느낍니다.
        </p>
        <p>물론 도구의 그립감, DX를 개선하는것도 좋아합니다.</p>
      </div>
    </header>
  );
};
