import { navLinks } from '@/lib/nav';
import { NavLink } from 'react-router';

const HeaderNav = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-6'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              to={link.href}
              className='text-gray-600 hover:text-blue-600 transition-color'
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
