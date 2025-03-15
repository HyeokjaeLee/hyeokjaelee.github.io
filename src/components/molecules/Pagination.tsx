import { Link } from '@reach/router';
import { cn } from '@utils/cn';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import type { Button } from '../atoms/Button';
import { buttonVariants } from '../atoms/Button';

interface PaginationProps
  extends Omit<React.ComponentProps<'nav'>, 'children'> {
  pageSize?: number;
  totalCount?: number;
  currentPage?: number;
  buttonCount?: number;
  buttonCallback: (page: number) => string;
}

export const Pagination = ({
  className,
  pageSize = 10,
  buttonCount = 7,
  totalCount = 0,
  currentPage = 1,
  buttonCallback,
  ...props
}: PaginationProps) => {
  const isPaginationExisted = !!(pageSize && totalCount && currentPage);

  const lastPage = isPaginationExisted ? Math.ceil(totalCount / pageSize) : 0;
  const isFirstPage = !isPaginationExisted || currentPage <= 1;
  const isLastPage = !isPaginationExisted || currentPage >= lastPage;

  const buttonList = isPaginationExisted
    ? [currentPage]
    : Array.from({ length: buttonCount }, (_, index) => index + 1);

  if (isPaginationExisted) {
    for (let i = 1; i <= buttonCount; i += 1) {
      const rightSidePage = currentPage + i;
      if (rightSidePage <= lastPage) buttonList.push(rightSidePage);

      if (buttonList.length >= buttonCount) break;

      const leftSidePage = currentPage - i;
      if (leftSidePage > 0) buttonList.unshift(leftSidePage);

      if (buttonList.length >= buttonCount) break;
    }
  }

  return (
    <nav
      {...props}
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <ul
        data-slot="pagination-content"
        className={cn('flex flex-row items-center gap-1', className)}
      >
        <li data-slot="pagination-item">
          <Link
            aria-label="Go to previous page"
            to={buttonCallback(currentPage - 1)}
            className={cn(
              buttonVariants({
                variant: 'ghost',
                size: '8',
                onlyIcon: true,
              }),
            )}
            data-slot="pagination-link"
          >
            <ChevronLeftIcon />
          </Link>
        </li>
        {buttonList.map((page) => {
          const isActive = page === currentPage;

          return (
            <li data-slot="pagination-item" key={page}>
              <Link
                to={buttonCallback(page)}
                aria-current={isActive ? 'page' : undefined}
                data-slot="pagination-link"
                data-active={isActive}
                className={cn(
                  buttonVariants({
                    variant: isActive ? 'primary' : 'ghost',
                    size: '8',
                    onlyIcon: true,
                  }),
                  className,
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li data-slot="pagination-item">
          <Link
            aria-label="Go to next page"
            to={buttonCallback(currentPage + 1)}
            className={cn(
              buttonVariants({
                variant: 'ghost',
                size: '8',
                onlyIcon: true,
              }),
            )}
            data-slot="pagination-link"
          >
            <ChevronRightIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>;

function PaginationLink({
  className,
  isActive,
  size = '14',
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
          onlyIcon: true,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}
