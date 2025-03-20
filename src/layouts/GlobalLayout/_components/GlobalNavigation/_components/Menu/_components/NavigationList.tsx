import { Button } from '@components/atoms/Button';
import { DrawerClose } from '@components/molecules/Drawer';
import { Link } from 'gatsby';

interface NavigationListProps {
  items: {
    label: string;
    href: string;
  }[];
}

export const NavigationList = ({ items }: NavigationListProps) => {
  return (
    <ul className="mx-4 flex flex-col font-bold">
      {items.map(({ href, label }) => (
        <li key={href}>
          <DrawerClose asChild>
            <Button
              asChild
              variant="ghost"
              size="8"
              className="font-pretendard w-full justify-start text-base"
            >
              <Link to={href}>{label}</Link>
            </Button>
          </DrawerClose>
        </li>
      ))}
    </ul>
  );
};
