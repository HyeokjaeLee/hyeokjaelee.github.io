import { Slot } from '@radix-ui/react-slot';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Spinner } from './Spinner';

export const buttonVariants = cva(
  [
    // Focus and state related styles
    'focus-visible:border-ring focus-visible:ring-ring/50',
    'aria-invalid:border-destructive relative',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',

    // Layout and basic properties
    'inline-flex shrink-0',
    'cursor-pointer select-none',
    'items-center justify-center',
    'overflow-hidden whitespace-nowrap',

    // Typography
    'font-pretendard font-semibold',

    // Transition and outline
    'outline-none',
    'transition-[color,box-shadow,scale,background-color] duration-150',
    'focus-visible:ring-1',

    // Disabled state
    'disabled:pointer-events-none',

    // SVG related
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        // Main style variant
        primary:
          'bg-primary text-primary-foreground shadow-xs active:bg-primary/85 disabled:bg-primary/10',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs active:bg-secondary/60 disabled:bg-primary/10 disabled:text-primary-foreground',
        outline:
          'border-primary text-primary shadow-xs active:border-primary/30 disabled:border-primary/10 disabled:text-primary/10 border bg-transparent',
        ghost:
          'active:bg-primary/10 text-primary disabled:text-primary/10 bg-transparent',
      },
      size: {
        // Size variant
        '17': [
          'h-17 gap-2 px-4 text-lg',
          "[&_svg:not([class*='size-'])]:size-5",
        ],
        '14': [
          'h-14 gap-2 px-4 text-lg',
          "[&_svg:not([class*='size-'])]:size-5",
        ],
        '8': [
          'h-8 gap-1.5 px-3 text-sm',
          "[&_svg:not([class*='size-'])]:size-4",
        ],
      },
      activeScaleDown: {
        true: 'active:scale-96',
      },
      isTouchDevice: {
        false: '',
      },
      onlyIcon: {
        true: 'items-center justify-center p-0',
      },
      shape: {
        pill: 'rounded-full',
        square: 'rounded-none',
        rounded: '',
      },
    },
    compoundVariants: [
      // Shape related variants
      {
        shape: 'rounded',
        size: '17',
        className: 'rounded-xl',
      },
      {
        shape: 'rounded',
        size: '14',
        className: 'rounded-xl',
      },
      {
        shape: 'rounded',
        size: '8',
        className: 'rounded-lg',
      },

      // Hover effect related variants
      {
        variant: 'primary',
        isTouchDevice: false,
        className: 'hover:bg-primary/90',
      },
      {
        variant: 'secondary',
        isTouchDevice: false,
        className: 'hover:bg-secondary/70',
      },
      {
        variant: 'outline',
        isTouchDevice: false,
        className: 'hover:border-primary/50',
      },
      {
        variant: 'ghost',
        isTouchDevice: false,
        className: 'hover:bg-primary/5',
      },

      // Icon size related variants
      {
        onlyIcon: true,
        size: '8',
        className: 'size-8',
      },
      {
        onlyIcon: true,
        size: '14',
        className: 'size-14',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: '14',
      activeScaleDown: true,
      onlyIcon: false,
      shape: 'rounded',
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onlyIcon?: boolean;
  activeScaleDown?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild,
      onlyIcon,
      activeScaleDown,
      children,
      type = 'button',
      disabled,
      loading,
      shape,
      ...restProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const isTouchDevice = useLayoutStore((state) => state.isTouchDevice);

    return (
      <Comp
        {...restProps}
        ref={ref}
        disabled={disabled || loading}
        data-slot="button"
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size,
            activeScaleDown,
            isTouchDevice,
            onlyIcon,
            shape,
          }),
          className,
        )}
      >
        {loading && !asChild ? (
          <>
            <Spinner className="animate-fade absolute size-[1.2em] scale-150" />
            <span className="invisible contents">{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
