module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    /**
     * @description 셀렉터 클래스 패턴
     * @link https://stylelint.io/user-guide/rules/selector-class-pattern/
     */
    'selector-class-pattern': null,

    /**
     * @description 폰트 키워드 제네릭 허용 여부
     * @link https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * @description 키워드 대소문자 처리
     * @link https://stylelint.io/user-guide/rules/value-keyword-case/
     */
    'value-keyword-case': 'lower',

    /**
     * @description 알 수 없는 함수 허용 여부
     * @link https://stylelint.io/user-guide/rules/function-no-unknown/
     */
    'function-no-unknown': null,

    /**
     * @description nesting 선택자 허용 여부
     * @link https://stylelint.io/user-guide/rules/no-descending-specificity/
     */
    'no-descending-specificity': true,

    /**
     * @description 컬러 네임 허용 여부
     * @link https://stylelint.io/user-guide/rules/color-named/
     */
    'color-named': 'always-where-possible',
    /**
     * @link https://stylelint.io/user-guide/rules/rule-empty-line-before/
     */
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],

    /**
     * @link https://stylelint.io/user-guide/rules/declaration-empty-line-before/
     */
    'declaration-empty-line-before': null,

    /**
     * @link https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
     */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'first-nested'],
      },
    ],
    /**
     * @description CSS 속성별 정렬
     * @link https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
     */
    'order/properties-order': [
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: ['all'],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'content',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'display',
          'vertical-align',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-wrap',
          'grid',
          'grid-area',
          'grid-template',
          'grid-template-areas',
          'grid-template-rows',
          'grid-template-columns',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'grid-auto-rows',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-gap',
          'grid-row-gap',
          'grid-column-gap',
          'gap',
          'row-gap',
          'column-gap',
          'align-content',
          'align-items',
          'align-self',
          'justify-content',
          'justify-items',
          'justify-self',
          'order',
          'float',
          'clear',
          'object-fit',
          'overflow',
          'overflow-x',
          'overflow-y',
          'overflow-scrolling',
          'clip',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'box-sizing',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border',
          'border-spacing',
          'border-collapse',
          'border-width',
          'border-style',
          'border-color',
          'border-top',
          'border-top-width',
          'border-top-style',
          'border-top-color',
          'border-right',
          'border-right-width',
          'border-right-style',
          'border-right-color',
          'border-bottom',
          'border-bottom-width',
          'border-bottom-style',
          'border-bottom-color',
          'border-left',
          'border-left-width',
          'border-left-style',
          'border-left-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'border-top-image',
          'border-right-image',
          'border-bottom-image',
          'border-left-image',
          'border-corner-image',
          'border-top-left-image',
          'border-top-right-image',
          'border-bottom-right-image',
          'border-bottom-left-image',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-attachment',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-clip',
          'background-origin',
          'background-size',
          'background-repeat',
          'box-decoration-break',
          'box-shadow',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',
          'table-layout',
          'caption-side',
          'empty-cells',
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'color',
          'font',
          'font-weight',
          'font-style',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'font-size',
          'font-family',
          'src',
          'line-height',
          'letter-spacing',
          'quotes',
          'counter-increment',
          'counter-reset',
          '-ms-writing-mode',
          'text-align',
          'text-align-last',
          'text-decoration',
          'text-emphasis',
          'text-emphasis-position',
          'text-emphasis-style',
          'text-emphasis-color',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-transform',
          'text-wrap',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-shadow',
          'white-space',
          'word-spacing',
          'word-wrap',
          'word-break',
          'overflow-wrap',
          'tab-size',
          'hyphens',
          'interpolation-mode',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'opacity',
          'visibility',
          'filter',
          'resize',
          'cursor',
          'pointer-events',
          'user-select',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'unicode-bidi',
          'direction',
          'columns',
          'column-span',
          'column-width',
          'column-count',
          'column-fill',
          'column-gap',
          'column-rule',
          'column-rule-width',
          'column-rule-style',
          'column-rule-color',
          'break-before',
          'break-inside',
          'break-after',
          'page-break-before',
          'page-break-inside',
          'page-break-after',
          'orphans',
          'widows',
          'zoom',
          'max-zoom',
          'min-zoom',
          'user-zoom',
          'orientation',
          'fill',
          'stroke',
        ],
      },
      {
        emptyLineBefore: 'always',
        noEmptyLineBetween: true,
        properties: [
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',
          'transform',
          'transform-origin',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'animation-fill-mode',
        ],
      },
    ],
    /**
     * @description 알 수 없는 @규칙 허용 여부
     * @link https://stylelint.io/user-guide/rules/at-rule-no-unknown/
     */
    'at-rule-no-unknown': null,
    /**
     * @description SCSS 알 수 없는 @규칙 허용 여부
     * @link https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
     */
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  plugins: ['stylelint-scss', 'stylelint-order'],
};
