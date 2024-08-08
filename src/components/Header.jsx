import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpeg';

function Header() {
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" }, 
    { link: "Contact", path: "contact" }
  ];

  return (
    <div className='w-full flex items-center justify-center p-2'>
      <div className='flex justify-between items-center max-w-7xl p-2 w-full'>
        <a href='#' className='flex items-center gap-3'>
          <img src={logo} alt="Logo" className='w-10' /> 
          <span className='font-bold text-2xl'>INTELLIOD</span>
        </a>
        <ul className='flex space-x-12'> 
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                smooth={true}
                duration={500}
                className='cursor-pointer text-gray-900 hover:text-green-400' 
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
