import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';
import { Mail, Phone } from 'react-feather';

import { ABOUT_TITLE_ID } from './AboutNavigation';

export const AboutHeader = () => (
  <header className="flex flex-col gap-8" id={ABOUT_TITLE_ID.ABOUT_ME}>
    <section className="flex gap-9 items-center flex-wrap">
      <StaticImage
        src="../images/profile.jpeg"
        alt="profile"
        className="w-32 h-32 rounded-full"
      />
      <dl>
        <dt className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4" />
          email
        </dt>
        <dd className="mb-2">
          <a href="mailto:leehyeokjae97@gmail.com" className="hover:underline">
            leehyeokjae97@gmail.com
          </a>
        </dd>
        <dt className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" />
          phone
        </dt>
        <dd>+821093906067</dd>
      </dl>
    </section>
    <h1 className="text-lg text-center">
      👋 안녕하세요!
      <br />
      덕업일치 개발자, <span className="font-bold">이혁재</span>
      입니다.
    </h1>
    <div className="whitespace-pre-wrap text-sm">
      {`일상에서 항상 더 편리한 방법을 고민하고 찾아내기 위해 노력합니다.\n중학생때 우연히 Android 앱 개발을 시작해 현재는 빠르게 발전하는 Javascript 생태계에 흥미를 느껴 2년차 웹 프론트엔드 개발자로 일하고 있습니다.\n개발하면서 특정 도구를 사용할줄 아는것(KNOW-HOW)보단 어떤 도구(KNOW-WHAT)가 있고 어디서(KNOW-WHERE) 찾을 수 있는가를 중요하게 생각합니다.\n단순히 주어진 요구사항을 구현하는 것이 아니라, 비즈니스 목표와 가치를 이해하고 그에 맞춰 솔루션을 제안할 수 있는 개발자를 목표로 하고 있습니다.\n`}
    </div>
  </header>
);
