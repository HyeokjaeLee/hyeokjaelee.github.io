declare module '*.svg' {
  import type * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '@microflash/rehype-figure' {
  import type { Root } from 'hast';
  import type { Plugin } from 'unified';

  const rehypeFigure: Plugin<[options?: { className?: string }], Root>;
  export default rehypeFigure;
}
