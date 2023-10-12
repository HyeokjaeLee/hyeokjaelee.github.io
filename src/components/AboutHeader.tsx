import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';
import { Mail, Phone } from 'react-feather';

import { ABOUT_TITLE_ID } from './AboutNavigation';

export const AboutHeader = () => (
  <header className="flex flex-col gap-12" id={ABOUT_TITLE_ID.ABOUT_ME}>
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
    <ul className="list-disc ml-2">
      <li>일상에서 항상 더 편리한 방법을 고민하고 찾아낼 수 있어요.</li>
      <li>
        개발하면서 특정 도구를 어떻게 사용하는가(KNOW-HOW)보다
        <br />
        어떤 도구(KNOW-WHAT)가 있고 어디서(KNOW-WHERE) 찾을 수 있는가를 중요하게
        생각해요.
      </li>
      <li>
        빠르게 발전하는 Javascript 생태계를 사랑하고 새로운 기술을 학습하는 것에
        즐거움을 느껴요.
      </li>
      <li>
        단순히 주어진 요구사항을 구현하는 것이 아닌, 제품의 비즈니스적인 설계 및
        기획에도 관심이 많아요.
      </li>
    </ul>
  </header>
);
