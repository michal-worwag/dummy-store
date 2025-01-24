import { Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <a href='/' className='text-2xl font-bold text-blue-600'>
          My Store
        </a>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
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
          </ul>
        </nav>
        <div className='flex items-center space-x-4'>
          <a
            href='/cart'
            className='text-gray-600 hover:text-blue-600 transition-colors'
          >
            <ShoppingCart className='h-6 w-6' />
          </a>
          <a
            href='/account'
            className='text-gray-600 hover:text-blue-600 transition-colors'
          >
            <User className='h-6 w-6' />
          </a>
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
