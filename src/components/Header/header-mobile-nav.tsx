import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { navLinks } from '@/lib/nav';

const HeaderMobileNav = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='md:hidden'
          onClick={toggleMenu}
        >
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetTitle>Dummy Store</SheetTitle>
        <ul className='flex flex-col space-y-4 mt-8'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <SheetDescription className='sr-only'>Mobile menu</SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMobileNav;
