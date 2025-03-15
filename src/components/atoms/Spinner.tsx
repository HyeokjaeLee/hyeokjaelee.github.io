import { cn } from '@utils/cn';
import { LoaderCircle } from 'lucide-react';

export interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <LoaderCircle
      aria-label="loading"
      className={cn('text-primary size-16 animate-spin cursor-wait', className)}
    />
  );
};
