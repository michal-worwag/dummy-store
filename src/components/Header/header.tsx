import { ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import HeaderNav from './header-nav';
import HeaderMobileNav from './header-mobile-nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { amount } = useSelector((store: RootState) => store.cart);
  const { username } = useSelector((store: RootState) => store.auth);

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <NavLink to='/' className='text-2xl font-bold text-blue-600'>
          Dummy Store
        </NavLink>
        <HeaderNav />
        <div className='flex items-center space-x-4'>
          <NavLink
            to='/cart'
            className='text-gray-600 hover:text-blue-600 transition-colors relative'
          >
            <ShoppingCart className='h-6 w-6' />
            <span className='text-xs absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center'>
              {amount > 9 ? '9+' : amount}
            </span>
          </NavLink>
          {username ? (
            <NavLink
              to='/dashboard'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              <User className='h-6 w-6' />
            </NavLink>
          ) : (
            <NavLink
              to='/login'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              <User className='h-6 w-6' />
            </NavLink>
          )}
          <HeaderMobileNav toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
