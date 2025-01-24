import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { NavLink } from 'react-router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <NavLink to='/' className='text-2xl font-bold text-blue-600'>
          Dummy Store
        </NavLink>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <NavLink
                to='/'
                className='text-gray-600 hover:text-blue-600 transition-color'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/products'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          <NavLink
            to='/cart'
            className='text-gray-600 hover:text-blue-600 transition-colors'
          >
            <ShoppingCart className='h-6 w-6' />
          </NavLink>
          <NavLink
            to='/account'
            className='text-gray-600 hover:text-blue-600 transition-colors'
          >
            <User className='h-6 w-6' />
          </NavLink>
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
              <SheetTitle>Menu</SheetTitle>
              <nav className='flex flex-col space-y-4 mt-8'>
                <li>
                  <a
                    href='/'
                    className='text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/products'
                    className='text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href='/about'
                    className='text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='text-gray-600 hover:text-blue-600 transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
