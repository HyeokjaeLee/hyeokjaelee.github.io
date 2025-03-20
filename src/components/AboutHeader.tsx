import { Link } from '@reach/router';
import React from 'react';
import { GitHub, Linkedin, Mail, PenTool, Phone } from 'react-feather';

export const AboutHeader = () => (
  <header className="flex flex-col gap-8">
    <section className="flex flex-wrap items-center justify-center gap-5 px-5 md:gap-12">
      <h1 className="flex-1 text-nowrap text-center text-lg">
        👋 안녕하세요!
        <br />
        덕업일치 개발자, <span className="font-bold">이혁재</span>
        입니다.
      </h1>
      <div className="flex flex-1 justify-center gap-4">
        <section>
          <h4 className="mb-2 text-lg font-bold">Contact.</h4>
          <dl className="text-sm">
            <dt className="flex items-center gap-2 font-bold">
              <Mail className="size-4" />
              email
            </dt>
            <dd className="mb-2">
              <a
                className="hover:underline"
                href="mailto:leehyeokjae97@gmail.com"
              >
                leehyeokjae97@gmail.com
              </a>
            </dd>
            <dt className="flex items-center gap-2 font-bold">
              <Phone className="size-4" />
              phone
            </dt>
            <dd>
              <a
                className="hover:underline"
                href="tel:+821039646067"
                rel="noreferrer"
                target="_blank"
              >
                +82 1039646067
              </a>
            </dd>
          </dl>
        </section>
        <section>
          <h4 className="mb-2 text-lg font-bold">Channel.</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                className="flex items-center gap-2 font-bold hover:underline"
                to="/"
              >
                <PenTool className="size-4" />
                blog
              </Link>
            </li>
            <li>
              <a
                className="flex items-center gap-2 font-bold hover:underline"
                href="https://github.com/HyeokjaeLee"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub className="size-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 font-bold hover:underline"
                href="https://www.linkedin.com/in/hyeokjae-lee-844042225"
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin className="size-4" />
                Linkedin
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
    <div className="whitespace-pre-wrap rounded-md border-l-8 border-zinc-300 bg-zinc-50 p-3 text-sm dark:border-gray-500 dark:bg-zinc-700">
      <p>
        중학생 때 우연히 Android 앱 개발을 시작했고, 현재는 프론트엔드 개발자로
        일하고 있습니다.
      </p>
      <p>
        인터렉티브한 인터페이스 부터 UX를 고려한 설계까지 비즈니스 목표를
        사용자에게 전달하기 위한 개발과정, 개발에 제한을 두지않고 적절한 도구를
        선택해 문제를 해결하는것에서 행복을 느낍니다.
      </p>
      <p>물론 도구의 그립감, DX를 개선하는것도 좋아합니다.</p>
    </div>
  </header>
);
