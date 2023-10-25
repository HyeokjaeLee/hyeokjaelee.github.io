import React from 'react';
import { GitHub, Linkedin, Mail, PenTool, Phone } from 'react-feather';

import { Link } from '@reach/router';

import { ABOUT_TITLE_ID } from './PortfolioNavigation';

export const AboutHeader = () => (
  <header className="flex flex-col gap-8" id={ABOUT_TITLE_ID.ABOUT_ME}>
    <section className="flex gap-5 md:gap-12 flex-wrap justify-center">
      <h1 className="text-lg text-center my-auto">
        👋 안녕하세요!
        <br />
        덕업일치 개발자, <span className="font-bold">이혁재</span>
        입니다.
      </h1>
      <div>
        <h4 className="font-bold text-lg mb-2">Contact.</h4>
        <dl className="text-sm">
          <dt className="flex items-center gap-2 font-bold">
            <Mail className="w-4 h-4" />
            email
          </dt>
          <dd className="mb-2">
            <a
              href="mailto:leehyeokjae97@gmail.com"
              className="hover:underline"
            >
              leehyeokjae97@gmail.com
            </a>
          </dd>
          <dt className="flex items-center gap-2 font-bold">
            <Phone className="w-4 h-4" />
            phone
          </dt>
          <dd>+821093906067</dd>
        </dl>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">Channel.</h4>
        <ul className="text-sm flex flex-col gap-3">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold hover:underline"
            >
              <PenTool className="w-4 h-4" />
              blog
            </Link>
          </li>
          <li>
            <a
              className="flex items-center gap-2 font-bold hover:underline"
              href="https://github.com/HyeokjaeLee"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="w-4 h-4" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hyeokjae-lee-844042225"
              target="_blank"
              className="flex items-center gap-2 font-bold hover:underline"
              rel="noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div className="whitespace-pre-wrap text-sm">
      <p>
        중학생 때 우연히 Android 앱 개발을 시작했고 현재는 빠르게 발전하는
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
        아키텍처 설계부터 개발, 배포까지 전 과정을 책임졌던 경험이 있습니다.
      </p>
      <br />
      <p>일상에서 반복과 비효율을 찾아내 적극적으로 개선합니다.</p>
      <p>
        제품 운영에서 발견한 반복 업무를 자동화해 담당인원을 50% 이상 감소시킨
        경험이 있습니다.
      </p>
    </div>
  </header>
);
