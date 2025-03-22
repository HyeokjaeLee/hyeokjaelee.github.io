import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import type { Icon } from 'react-feather';

export interface HeaderLink
  extends Pick<React.ComponentPropsWithoutRef<'a'>, 'rel' | 'target'> {
  icon: Icon;
  label: string;
  text?: string;
  to: string;
}

interface HeaderLinkListProps {
  title: string;
  links: HeaderLink[];
}

export const HeaderLinkList = ({ title, links }: HeaderLinkListProps) => {
  const isTouchDevice = useLayoutStore((state) => state.isTouchDevice);
  const isPdf = useDisplayType() === DISPLAY_TYPE.PDF;

  return (
    <section className="flex flex-1 flex-col gap-2">
      <h4 className="text-lg font-bold">{title}</h4>
      <dl className="text-sm">
        {links.map(({ icon: Icon, label, to, rel, target, text }) => {
          return (
            <Fragment key={label}>
              <dt
                className={cn('flex items-center gap-2 font-bold', {
                  'mb-2': !isPdf,
                })}
                aria-label={label}
              >
                <Icon className="size-4" />
                {isPdf ? (
                  label
                ) : (
                  <Link
                    to={to}
                    className={cn('underline', {
                      'hover:text-blue-500': !isTouchDevice,
                    })}
                    rel={rel}
                    target={target}
                  >
                    {label}
                  </Link>
                )}
              </dt>
              <dd
                className={cn('mb-3 mt-1', {
                  hidden: !isPdf,
                })}
              >
                <Link
                  className={cn('text-nowrap text-blue-500', {
                    'hover:underline': !isTouchDevice,
                  })}
                  to={to}
                  rel={rel}
                  target={target}
                >
                  {text ?? to}
                </Link>
              </dd>
            </Fragment>
          );
        })}
      </dl>
    </section>
  );
};
