---
title: '리액트 컴포넌트, 어떤 컨셉으로 개발할까?'
titleImage: 'https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3'
description: '리렌더링을 최소화한 React 기반 컴포넌트 라이브러리를 개발하면서 고민했던 내용'
date: '2022-11-16'
tags: [frontend]
---

최근 총 3개의 제품을 효과적으로 개발할 수 있도록 하기 위해 컴포넌트들을 제품 코드에서 분리해 스토리북과 npm 패키지로 관리하기 위한 작업을 마쳤다.

관리되어야 할 컴포넌트들의 컨셉에 대해 많은 고민을 했고 그렇게 설정한 내용들에 대해 글로 남겨보려 한다.

## 렌더링 최적화

일반적으로 값을 입력받는 컴포넌트들은 해당 컴포넌트 상위 컴포넌트에서 state를 전달받아 사용되는 경우가 많다.

하지만 state를 외부에서 전달받아 사용하게 되면 state를 지니고 있는 상위 컴포넌트 하위에 있는 모든 컴포넌트들에 재렌더링이 발생한다.

> ![bad-render](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/da87d333-6dae-4c2d-92f0-390aa57baf50)
> 불필요한 재렌더링 발생

이런 문제점을 해결하기 위해 react-hook-form과 같은 라이브러리가 있지만 해당 라이브러리가 제시한 구조가 번거롭고 Validation 자유도 역시 그렇게 좋지 못하다고 생각해서 입력을 받는 모든 컴포넌트들이 자체적으로 state를 가지게 함으로써 이 문제를 해결했다.

모든 입력을 받는 컴포넌트들이 내부적으로 state를 가지게 되면 굳이 컴포넌트 외부 state를 수정하지 않고도 다음과 같이 원하는 입력을 화면에 표시할 수 있다.

```tsx
<Textbox value={formData.text} onChange={(value) => (formData.text = value)} />
```

기본적으로 Textbox 내부 로직에서는 외부에서 전달받은 value의 state가 변경되면 해당 값을 반영하도록 설계했지만 외부 state를 사용하는 경우 내부 state가 불필요해지므로 외부에서 state를 전달받았을 때는 내부 state를 비활성화하는 valueSync 옵션을 제공했다.

```tsx
<Textbox
  value={formData.text}
  onChange={(value) => setFormData({ ...formData, text: value })}
  valueSync
/>
```

이렇게 설계된 컴포넌트들로 페이지를 구성하면 다음과 같이 실제로 값이 수정되는 컴포넌트에서만 재렌더링이 발생하도록 할 수 있다.

> ![good-render](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/df938800-02a9-407c-a4d9-814ba1356ae0)
> 실제 값이 수정되는 컴포넌트만 재렌더링이 발생

이렇게 컴포넌트 자체적으로 state를 관리하면서 Input 컴포넌트들에 공통적으로 적용되어야 할 Validation 등을 고차 컴포넌트(Higher-Order-Components)를 표방한 함수에 분리해 두었다.

해당 attachCommonProps 함수는 설계한 Input 컴포넌트들이 공통적으로 제공해야 하는 Validation 로직이나 Label 혹은 Tootip을 추가하는 등의 로직을 담고 있다.

```tsx
export type ComplexTextboxProps = TextboxProps & CommonProps<TextboxProps>;
export const ComplexTextbox = attachCommonProps(Textbox);
```

ComplexTextbox에서 제공하고 있는 대부분의 Props는 attachCommonProps를 통해 다른 컴포넌트들에도 동일하게 적용되며 이렇게 반환된 ComplexTextbox는 다음과 같이 사용할 수 있다.

```tsx
<ComplexTextbox
  description="후불 납부 총액을 입력해 주세요."
  essential
  labelText="후불 납부 총액"
  value={formData.payAmount}
  onChange={(value) => (formData.payAmount = value)}
  type="comma-separated-number"
  unit="원"
/>
```

![good-render2](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/215722ac-103e-4d90-a916-5f5e27d7f201)

## 타입 추론

개인적으로 프론트엔드 개발을 하면서 가장 실수가 잦은 부분이 데이터 바인딩 과정인데 최대한 개발자의 실수를 방지하기 위해 엄격한 타입 추론을 제공하려 했다.

예를 들면 Searchbox 컴포넌트의 경우엔 제공되는 options, value, onChange의 매개변수가 서로 의존성을 가지며 상호작용이 이루어져야 한다.

```tsx
export interface SearchboxProps<T extends OptionHint> {
  value?: T extends PairOption<infer U> ? PairOption<U>['value'] : T;
  onChange?: (
    value: T extends PairOption<infer U>
      ? PairOption<U>['value'] | undefined
      : T,
  ) => void;
  options?: T extends PairOption<infer U> ? PairOption<U>[] : T[];
  optionsFixed?: boolean;
  placeholder?: string;
  onlyPerfectMatch?: boolean;
  name?: string;
  openDirection?: ['up' | 'down', 'left' | 'right'];
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  theme?: 'linear' | 'box';
  modifier?: 'system' | 'readonly' | 'user';
  width?: React.CSSProperties['width'];
  valueSync?: boolean;
}
```

위 Searchbox의 Props와 같이 각 타입들이 엄격하게 관리되면 특정 값은 자유롭게 입력받을 수 있으면서 해당 값을 참고해야 하는 다른 값들은 엄격하게 관리할 수 있다.

options에 제공한 값에 따라 onChange 매개변수나 value의 타입을 엄격하게 관리하거나 반대로 value에 따라 options의 타입을 관리할 수 있다.

> ![type](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fe6c2b69-9e2e-4724-8204-858b30eef7a3)
> options을 자유로운 형식의 array로 입력받을 수 있음

> ![type2](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/fa5409b9-7431-437c-bef1-5e4e48d5d3c6)
> options에 제공한 값에 따라 onChnage 매개변수, value는 엄격하게 관리됨

또는 특정 prop에 따라 내부 로직을 재활용하는 새로운 컴포넌트를 표시하는 것도 가능하다.

물론 이것 역시 value, onChange 매개변수 등의 타입은 정확하게 추론할 수 있어야 한다.

> ![storybook](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/530c7918-0f6d-4301-be52-cffa9dee64d6)
> type에 따라 입력받을 수 있는 값이 달라짐

이런 타입 추론은 추후 validation 로직에서도 유용하다.

위에서 언급한 attachCommonProps는 validation Prop을 제공하는데 options에서 제공한 값에 따라 validation의 매개변수를 추론할 수기 때문에 다음과 같이 작성할 수 있다.

```tsx
<ComplexSearchbox
  {...restProps}
  options={customerOptions}
  value={customersObject.valueOf(customerId)}
  validation={(value) => {
    if (value?.id === 0) {
      return 'id가 0인 고객은 존재하지 않습니다.';
    }
  }}
/>
```

> ![good-render3](https://github.com/HyeokjaeLee/hyeokjaelee.github.io/assets/71566740/4087d06f-6607-4190-956e-e8d7363d4dd4)
> validation을 체크하는 로직 역시 컴포넌트 내부에서 관리되고 있으므로 컴포넌트 외부 렌더링에 영향을 주지 않는다.

이런 validation들을 모두 통과해야 요청을 보낼 수 있게 하는 로직은 useValidationStore라는 커스텀 hook을 만들어뒀다.

해당 validationStore는 수정이 잦기 때문에 Map객체를 이용해 구현했다.

## 재사용성

이렇게 컴포넌트들이 자체적으로 제공하는 기능들이 많으면 컴포넌트를 개발하는데 많은 시간을 쏟게 된지만 반대로 개발된 컴포넌트들을 조립해 많은 페이지들을 만들어낼수록 효율적인 방법이라고 생각한다.

다만 이런 컨셉의 컴포넌트 구성은 다른 컴포넌트 라이브러리들과 함께 사용하면 코드 통일성을 해치기 때문에 해당 프로젝트에서 사용할 대부분의 컴포넌트를 직접 구현하거나 최소한 한 번 더 감싸서 사용하겠다는 생각으로 적용해야 할 것 같다.

---

전체적인 재사용과 관련된 구조는 Atomic Design Pattern을 참고해 적합하다고 생각하는 구조로 설계했는데 관련 내용은 다른 포스트에 작성하겠다.
