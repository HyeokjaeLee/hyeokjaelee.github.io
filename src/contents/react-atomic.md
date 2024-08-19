---
title: 'Atomic Design Pattern 적용기'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3'
description: 'React 제품 개발, Atomic Design Pattern 녹여내기'
date: '2022-10-30'
tags: [frontend]
---

React 기반 제품을 개발하면서 컴포넌트 수가 많아지게 되면서 효율적인 관리를 위한 구조를 고민하게 되었다.

그 과정에서 디자인 패턴에 대해 고민해보고 그중 Atomic Design Pattern을 활용하기로 한 이유와 설정한 구조에 대해 글로 남겨보려 한다.

## Atomic Design Pattern을 선택한 이유

### Figma

현재 Figma를 통해 디자이너와 협업하고 있는데 Figma라는 툴을 정확하게 이해하진 못했지만 개발에서의 Atomic 패턴의 컴포넌트 단위와 크게 다르지 않다고 이해하고 있다.

컴포넌트 단위와 명칭을 디자이너와 맞춘다면 같은 용어로 소통이 가능하고 디자이너가 개발 과정을 이해하는데 도움이 된다고 생각한다.

추가적으로 Atomic 패턴을 도입하기 위해서는 개발자 못지않게 디자이너의 역할이 중요하고 많은 시간을 쓰게 된다.

> 운 좋게 팀 내 디자이너가 열정적인 분이셔서 큰 문제가 되진 않았다.

### Design System

현재 여러 가지 개발 프로세스를 정립하기 위한 시도 중에 Design System 도입을 고려하고 있는데 Atomic 패턴은 다른 패턴들과 달리 애플리케이션의 구성 요소를 UI 적인 부분을 기반으로 분리하고 있기 때문에 디자인 시스템을 도입했을 때 유용할 거라 생각한다.

### Apollo Client

제품의 대부분의 비즈니스 로직들이 백엔드에서 처리되고 있는데 데이터 요청과 캐싱 등을 Apollo Client를 이용해 쉽게 관리할 수 있기 때문에 컴포넌트에 재활용이 불가능한 로직이 들어갈 일이 많지 않다.

덕분에 컴포넌트 자체 UI와 기능에 집중할 수 있다.

### 클라이언트 개발에서 겪은 문제점

제품의 클라이언트 코드를 보았을 때 각 페이지에서 사용하고 있는 컴포넌트들을 찾아다니기 힘들었고 컴포넌트의 재활용이 적극적으로 이루어지고 있지 않다는 생각이었다.

이런 부분들을 개선하는데 Atomic 패턴이 효과적이다.

## 제품에 맞는 Atomic 설계

대부분의 디자인 패턴과 관련된 글들이 그렇듯 제시하고 있는 방향이나 설계가 조금씩 다르다.

내가 생각했던 우리 제품에 맞는 Atomic 한 구조는 다음과 같다.

### 컴포넌트 분류 기준

일단 일반적인 Atomic 패턴의 분류 기준을 보았을 때 HTML Tag 한 개와 Atom 컴포넌트가 1:n 관계가 되는 경우가 많았다.

하지만 해당 기준대로 분류하는 경우 Molecules, Organisms, Templates와 같은 이후 단위들에 대한 기준이 애매모호하다고 느꼈다.

다른 개발자들과 협업을 하는 과정에서 컴포넌트 단위에 대해 서로 다르게 이해할 여지가 있다.

그래서 몇 가지 단순한 기준을 잡았다.

- HTML로만 이루어진 컴포넌트는 Atom으로 지정한다.
- 컴포넌트를 재활용해 만든 컴포넌트는 다음 단위의 컴포넌트로 지정한다.
  > Atom 컴포넌트와 HTML 태그들로 구성된 컴포넌트는 Molecule 컴포넌트
- 재활용한 컴포넌트 중 가장 큰 컴포넌트 단위를 기준으로 한다.
  > Atom 컴포넌트 2개와 Molecule 컴포넌트 1개를 재활용한 컴포넌트는 Organism 컴포넌트
- 서버와 통신 로직이 포함된 컴포넌트는 Organisms 보다 작은 단위로 지정할 수 없다.
  > Selectbox(Atom 컴포넌트)에 User 정보를 받아와 Onchange Args로 제공하는 컴포넌트는 Organism
- Organism 컴포넌트는 Organism 컴포넌트를 포함한 작은 단위의 컴포넌트들을 모두 재활용할 수 있다.
  > Organism 컴포넌트 2개와 Atom 컴포넌트 1개로 이루어진 컴포넌트는 Organism 컴포넌트
- 페이지에 종속적인 컴포넌트는 Template 컴포넌트로 지정한다.
  > 계약서 조회 페이지에서 사용할 계약서 조회 테이블, 필터 섹션

### 제품 디렉토리 구조

> ![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/f9ecca03-a654-4bf4-9976-0cf669f9c130)![image](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/846dea6f-cb4f-45db-8f38-634e5e5703b3)
> components, pages 디렉토리 구조

components 디렉터리에서는 organisms까지만 관리하는 것으로 했다.

template 컴포넌트는 page 컴포넌트에 종속적이므로 page 컴포넌트 하위 디렉터리에서 관리하고 있다.

pages 하위 디렉토리에서의 index.tsx는 일반적인 index의 용도와 다르게 설정했는데 해당 페이지의 로직은 index.tsx 파일에 작성하도록 했다.

> 추가적으로 현재 개발 중인 제품은 SCSS와 CSS Modules, GraphQL generator를 사용하는 환경에서 개발하고 있으므로 `.gql`, `.generated`, `.tsx`, `.scss` 파일을 페이지에 종속시켜 함께 관리하고 있다.

디렉터리 구조와 텍스트만으로 이해하긴 어려울 것 같아 Applications라는 이름의 페이지를 개발한다고 했을 때 실제로 작성했던 코드 중 일부를 예로 들어 보겠다.

#### index.tsx

비즈니스 로직들끼리 값을 주고받아야 하거나 재활용할 수 있는 경우들이 많은데 한 파일에 분리해서 관리하면 값을 주고받는 과정이 편리해진다.

```typescript
// index.tsx
function ApplicationsPage() {

  usePropsStoreInitializer((set, get) => ({...
    },
    applicationsForBulkNotify: new Map(),
    handleApplicationForBulkNotifyCheck: (application, checked) => {...
    },

    requestBulkApplicationsNotify: async ({...
    }

    loading: true,
    tableLoading: true,

    deleteApplication: async (deleteApplicationId: number) => {...
    },

    notifyApplication: async (screeningStatus, isNotified, applicationId) => {...
    },

    handleProductIdFilterValueChange: (productIdFilterValue) =>
      set({ productIdFilterValue, currentPage: 1 }),

    handleApplyingStatusFilterValueChange: (applyingStatusFilterValue) =>
      set({ applyingStatusFilterValue, currentPage: 1 }),

    handleScreeningStatusFilterValueChange: (screeningStatusFilterValue) =>
      set({ screeningStatusFilterValue, currentPage: 1 }),

    queryFilterKey: 'name',
    handleQueryFilterKeyChange: (queryFilterKey: QueryKey) =>
      set({ queryFilterKey, queryFilterValue: '', currentPage: 1 }),

    queryFilterValue: '',
    handleQueryFilterValueChange: (queryFilterValue: string) =>
      set({ queryFilterValue, currentPage: 1 }),

    handleOpenedApplicationStatusChange: (openedApplicationStatus) =>
      set({ openedApplicationStatus }),

    updateApplicationStatus: async () => {...
    },

    handleOpenedApplicationEvaluationChange: (openedApplicationEvaluation) =>
      set({ openedApplicationEvaluation }),

    updateApplicationEvaluation: async () => {...
    },

    ...createPaginationState(set),
  }));

  return <Applications />;
}
```

#### Applications.tsx

Atomic 패턴에서 Page 컴포넌트에 해당한다.

대부분의 UI 구현을 위한 코드들은 template 컴포넌트에서 관리되고 template들의 배치 정도만 관리한다.

```tsx
// Applications.tsx
export function Applications() {
  const [applicationsCount, paginationProps] = usePropsStore((state) => {...
  });
  const PAGE_SECTION_MAXWIDTH = '1600px';
  return (
    <>
      <ApplicationEvaluationModal />
      <ApplicationStatusModal />
      <PageContents.Container>
        <PageContents.Header title="지원현황" itemCount={applicationsCount} />
        <PageContents.Section maxWidth={PAGE_SECTION_MAXWIDTH}>
          <QueryFilters />
        </PageContents.Section>
        <PageContents.Section maxWidth={PAGE_SECTION_MAXWIDTH}>
          <Filters />
        </PageContents.Section>
        <PageContents.Section maxWidth={PAGE_SECTION_MAXWIDTH}>
          <ApplicationTable />
        </PageContents.Section>
        <PageContents.Footer maxWidth={PAGE_SECTION_MAXWIDTH}>
          <PaginationWithPageSize {...paginationProps} />
        </PageContents.Footer>
      </PageContents.Container>
    </>
  );
}
```

#### templates/Filters.tsx

실질적인 UI를 구현하기 위한 코드들을 포함한다.

로직 관련된 코드들이 모두 index.tsx에 분리되어있어 코드의 가독성이 좋다.

```tsx
// templates/Filters.tsx
export function Filters() {
  const [
    productIdFilterValue,
    handleProductIdFilterValueChange,
    applyingStatusFilterValue,
    handleApplyingStatusFilterValueChange,
    screeningStatusFilterValue,
    handleScreeningStatusFilterValueChange,
  ] = usePropsStore((state) => [...
  ]);

  const APPLYING_STATUS_FILTER_OPTIONS = [...
  ];

  const SCREENING_STATUS_FILTER_OPTIONS = [...
  ];

  const COMMON_FILTER_PROPS = {...
  };

  return (
    <FormGroup backgroundColor="gray" border={false}>
      <div className={scss.filters_container}>
        <div className={scss.filaters}>
          <ProductSearchbox
            id="교육상품"
            placeholder="모든 교육상품"
            inputWidth="400px"
            productId={productIdFilterValue}
            onChange={(product) => handleProductIdFilterValueChange(product?.id)}
          />
          <ComplexSelectbox
            {...COMMON_FILTER_PROPS}
            id="지원상태"
            options={APPLYING_STATUS_FILTER_OPTIONS}
            placeholder="모든 지원상태"
            value={applyingStatusFilterValue}
            onChange={handleApplyingStatusFilterValueChange}
          />
          <ComplexSelectbox
            id="심사결과"
            {...COMMON_FILTER_PROPS}
            options={SCREENING_STATUS_FILTER_OPTIONS}
            placeholder="모든 심사상태"
            value={screeningStatusFilterValue}
            onChange={handleScreeningStatusFilterValueChange}
          />
        </div>
        <Button
          variant="ghost"
          onClick={() => {
            handleProductIdFilterValueChange();
            handleApplyingStatusFilterValueChange();
            handleScreeningStatusFilterValueChange();
          }}
        >
          모두 초기화
        </Button>
      </div>
    </FormGroup>
  );
}
```

## 추가적으로 고민하고 있는 부분

- ~~지금은 모든 컴포넌트들을 제품 코드에서 관리하고 있지만 이후에는 패키지로 분리할 수 있지 않을까~~ (완료)

  현재 개발하고 있는 세 가지 제품에서 해당 컴포넌트들을 사용하고 있는데 페이지 종속적인 컴포넌트들은 패키지에 포함될 필요가 없으므로 해당 패키지에는 서버 통신 로직이 없는 Organism 컴포넌트와 Atoms, Molecules만 포함시켜서 배포했다.

- ~~같은 쿼리를 사용하는 페이지들을 한 번 더 추상화해 디렉터리로 묶어서 관리할 수 있지 않을까~~ (완료)

  재활용 가능한 범위가 대부분 특정 컴포넌트 단위로 떨어지는 경우가 많아 서버 통신 로직을 Organism 컴포넌트에 포함시켜 분리했다.

> **참고 자료**
>
> - [tecoble - presentational and container 패턴이란 무엇인가](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)
> - [branch - 아토믹(Atomic) 컴포넌트 디자인 개발 패턴](https://brunch.co.kr/@skykamja24/580)
> - [toast ui - 리액트 애플리케이션 구조 - 아토믹 디자인](https://ui.toast.com/weekly-pick/ko_20200213)
> - [kakao entertainment fe 기술 블로그 - 아토믹 디자인을 활용한 디자인 시스템 도입기](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
