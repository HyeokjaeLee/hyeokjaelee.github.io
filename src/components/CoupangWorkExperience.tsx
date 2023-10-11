import React from 'react';

import { Accordion } from '@hyeokjaelee/pastime-ui';

import { AboutItem } from './AboutItem';
import { ABOUT_TITLE_ID } from './AboutNavigation';
import { ProjectContainer } from './ProjectContainer';

export const CoupangWorkExperience = () => (
  <ProjectContainer
    title="Coupang"
    period="2019.08 - 2020.03"
    jobTitle="Eats Operator"
    id={ABOUT_TITLE_ID.COUPANG}
  >
    <ul>
      <AboutItem
        id={ABOUT_TITLE_ID.EDP_CHAT_BOT}
        title="배달파트너 센터 챗봇 개발"
        summaries={['배달파트너 센터 챗봇 개발']}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
        ]}
        experiences={[
          '사용자 입장에서 액션을 예측하고 최적화 할 수 있어요.',
          '조직에서 제안한 환경내에서 최선의 결과를 도출할 방법을 고민하고 적용했어요.',
        ]}
      />
      <AboutItem
        title="데이터 수집 / 클렌징 / 시각화"
        id={ABOUT_TITLE_ID.DATA_COLLECT}
        summaries={[
          '배달파트너 배정취소 기능 개발 지표 데이터 수집 솔루션 제시 / 개발',
          '지역별 배달 엣지 케이스 딥다이브 과정에 필요한 데이터 클렌징 / 시각화',
        ]}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'Python',
            backgroundColor: '#3776AB',
          },
          {
            name: 'Kibana',
            backgroundColor: '#005571',
          },
          {
            name: 'Google Sheets',
            backgroundColor: '#0F9D58',
          },
        ]}
        experiences={[
          '요구사항을 충족하는 기능이 개발되기 위해 필요한 데이터들을 미리 예측 하고  수집, 정제 할 수 있어요.',
          '데이터를 수집하고 정제하는 과정을 자동화 해 담당 인원을 75% 절감 했어요.',
          '수집한 데이터들을 비개발자도 이용할 수 있게 배포하고 대쉬보드를 만들었어요.',
        ]}
      />
      <AboutItem
        title="업무 자동화"
        id={ABOUT_TITLE_ID.WORK_AUTOMATION}
        summaries={[
          '고객 경험 Worst case 배달파트너 계정 정지 자동화 프로세스 개발',
          '업무에 필요한 자동화 스크립트 & 매크로 개발',
          '식사시간과 서비스 피크타임이 겹쳐 식사 중 발생하는 트래킹 이슈를 해결하기 위한 봇 개발',
        ]}
        stacks={[
          {
            name: 'Javascript',
            backgroundColor: '#F7DF1E',
            blackLogo: true,
          },
          {
            name: 'Python',
            backgroundColor: '#3776AB',
          },
          {
            name: 'Google Sheets',
            backgroundColor: '#0F9D58',
          },
        ]}
        experiences={[
          '반복적으로 수행했거나 해야 할 작업에 대해 고민하고 휴먼 에러 및 리소스를 줄일 수 있었어요.',
          '정해진 업무 외에 내가 할 수 있는 일을 찾아내 조직에 기여할 수 있어요.',
          '각 파트별 담당 업무를 자동화해 담당 인원을 한명 수준으로 줄일 수 있었어요.',
        ]}
      />
    </ul>
    <h4 className="text-xl mb-3" id={ABOUT_TITLE_ID.REVIEW}>
      이런 평가를 받았어요
    </h4>
    <section>
      <a
        href="https://www.specter.co.kr/"
        target="_blank"
        rel="noreferrer"
        className="text-xs text-zinc-400 hover:underline"
      >
        평판 조회 플랫폼 - Specter
      </a>
      <div className="flex gap-4 flex-wrap">
        <div>
          <Accordion className="w-80">
            <Accordion.Title className="font-bold">
              💁‍♀️ Moon (Operator Manager)
            </Accordion.Title>
            <Accordion.Contents className="text-sm">
              <dl>
                <dt className="text-base mt-4 mb-1 text-zinc-400">강점</dt>
                <dd className="flex flex-col gap-2">
                  <p>
                    비즈니스 전반에 대한 관심을 가지고 업무에 참여하며,
                    주도적으로 문제를 해결하기 위한 여러가지 방법을 제시합니다.
                  </p>
                  <p>
                    넓은 기술적 지식을 가지고 있어 문제 해결을 위한 여러가지
                    솔루션을 제시할 수 있습니다.
                  </p>
                  <p>데이터 가치를 파악하고 수집하는 역량이 뛰어납니다.</p>
                </dd>
                <dt className="text-base mt-4 mb-1 text-zinc-400">
                  개선해야할 점
                </dt>
                <dd className="flex flex-col gap-2">
                  <p>
                    넓은 기술적 지식이 있지만, 깊이가 부족한 경우도 있습니다.
                  </p>
                  <p>
                    집중력이 높아 업무에 몰입할 때 주변 동료들에게 담당하고 있던
                    업무의 진행도 공유가 늦어지는 경우가 있습니다.
                  </p>
                </dd>
              </dl>
            </Accordion.Contents>
          </Accordion>
        </div>
        <div>
          <Accordion className="w-80">
            <Accordion.Title className="font-bold">
              💁‍♂️ Owen (Operator Manager)
            </Accordion.Title>
            <Accordion.Contents className="text-sm">
              <dl>
                <dt className="text-base mt-4 mb-1 text-zinc-400">강점</dt>
                <dd className="flex flex-col gap-2">
                  <p>주어진 업무 롤 이상의 성과를 내던 동료였습니다.</p>
                  <p>
                    사업 초기 맴버로 합류하여 메뉴얼적인 업무가 주를 이루었을때
                    업무를 간소화 하여 리드타임을 감소 시키고 스스로 문제를 찾아
                    팀원들에게 공유하는 등, 문제를 해결하기 위해 프로세스를
                    구축하고 자동화하여 조직에 기여하였습니다.
                  </p>
                  <p>
                    AB 테스트를 통해 임팩트를 증명하여 기술적인 관점에서 빠른
                    조직의 변화가 있었습니다.
                  </p>
                  <p>
                    일회성 솔루션이 아닌 재사용 가능한 프로세스를 제시하고
                    구현해 큰 규모의 트래픽을 감당할 수 있게 했습니다.
                  </p>
                  <p>
                    이러한 근본적인 개선으로 조직에 유의미한 결과들을
                    내주었습니다.
                  </p>
                  <p>
                    팀 전반적인 업무와 나아가서 비즈니스 퀄리티를 개선하려는
                    능동적인 자세를 갖추고 즉각적으로 퍼포먼스를 보일 수 있는
                    동료였습니다.
                  </p>
                </dd>
                <dt className="text-base mt-4 mb-1 text-zinc-400">
                  개선해야할 점
                </dt>
                <dd className="flex flex-col gap-2">
                  <p>
                    이혁재님의 첫직장에서 함께 한 짧은 시간이였지만 더 많이 소통
                    하지 못한 부분이 아쉽습니다.
                  </p>
                  <p>
                    당시 업무분담이 잘못되어 있어 혁재님이 문제부터 지표관리
                    까지 전부 책임 지고 있었습니다.
                  </p>
                  <p>
                    과도한 업무량이 본인에게 몰려 있다면 잡 레벨에 관계 없이
                    건설적인 대립도 필요하다고 생각합니다.
                  </p>
                </dd>
              </dl>
            </Accordion.Contents>
          </Accordion>
        </div>
      </div>
    </section>
  </ProjectContainer>
);
