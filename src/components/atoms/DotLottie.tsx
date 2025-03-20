'use client';

import {
  type DotLottie as DotLottieType,
  DotLottieReact,
  type DotLottieReactProps,
} from '@lottiefiles/dotlottie-react';
import { memo } from 'react';

export interface DotLottieProps
  extends Omit<DotLottieReactProps, 'role' | 'aria-hidden' | 'ref'> {
  onCompleted?: () => void;
  ariaLabel?: string;
}

const MemorizedDotLottie = memo(DotLottieReact);

export const DotLottie = ({
  autoplay = true,
  loop = true,
  ariaLabel,
  ...props
}: DotLottieProps) => {
  return (
    <MemorizedDotLottie
      {...props}
      autoplay={autoplay}
      loop={loop}
      role="presentation"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
};

export type { DotLottieType };
