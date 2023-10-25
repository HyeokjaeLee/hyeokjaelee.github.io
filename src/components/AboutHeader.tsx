import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';
import { Mail, Phone } from 'react-feather';

import { ABOUT_TITLE_ID } from './PortfolioNavigation';

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
      <p>
        중학생 때 우연히 Android 앱 개발을 시작해 현재는 빠르게 발전하는
        Javascript 생태계에 흥미를 느껴 2년 차 프론트엔드 개발자로 일하고
        있습니다.
      </p>
      <br />
      <p>
        단순히 주어진 요구사항을 구현하는 것이 아니라, 비즈니스 목표와 가치를
        이해하고 그에 맞춰 솔루션을 제안할 수 있는 개발자를 목표로 다양한 직무의
        구성원들과 자유롭게 의견을 나누며 협업하는 것을 좋아합니다.
      </p>
      <p>
        신규 프로젝트의 첫 번째 프론트엔드 개발자로 참여해 기술 스택 선정 및
        아키텍처 설계 부터 개발, 배포 까지 전과정을 책임졌던 경험이 있습니다.
      </p>
      <br />
      <p>일상에서 반복과 비효율을 찾아내 적극적으로 개선합니다.</p>
      <p>
        제품 운영에서 발견한 반복 업무들을 자동화해 담당인원을 50% 이상 감소시킨
        경험이 있습니다.
      </p>
    </div>
  </header>
);
