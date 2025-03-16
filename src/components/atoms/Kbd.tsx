import { cn } from '@utils/cn';

export const Kbd = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <kbd
      {...restProps}
      className={cn(
        'font-pretendard relative inline-flex h-fit shrink-0 items-center justify-center',
        'rounded-xs shadow-sm',
        'min-w-[1.75em] px-1.5',
        'text-[0.7rem] font-medium leading-[1.7em]',
        'select-none whitespace-nowrap align-text-top',
        'tracking-tight transition-shadow duration-100',
        'border border-slate-200 bg-slate-50 text-slate-500',
        'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400',
        className,
      )}
    >
      {children}
    </kbd>
  );
};
