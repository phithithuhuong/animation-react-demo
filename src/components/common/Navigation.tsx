import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../constants/routes';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-[70px]">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary-500 hover:text-secondary-500 transition-colors duration-300" 
          onClick={closeMenu}
        >
         AnimationDemo
        </Link>

        <button 
          className={`md:hidden flex flex-col bg-transparent border-none cursor-pointer p-1 relative w-8 h-6 ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute top-0 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 absolute bottom-0 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
        </button>

        <ul className={`md:flex list-none m-0 p-0 gap-4 ${isMenuOpen ? 'active' : ''} 
          fixed md:static top-[70px] md:top-auto left-0 md:left-auto right-0 md:right-auto 
          bg-white/98 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none
          flex-col md:flex-row p-5 md:p-0 shadow-lg md:shadow-none
          transform md:transform-none transition-all duration-300 ease-out
          ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100 invisible md:visible'}
        `}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path} className="relative w-full md:w-auto">
              <Link
                to={item.path}
                className={`flex items-center gap-2 px-4 py-3 md:py-3 text-gray-600 rounded-lg md:rounded-lg transition-all duration-300 font-medium relative
                  hover:text-primary-500 hover:bg-primary-50 hover:-translate-y-0.5 md:hover:-translate-y-0.5
                  ${location.pathname === item.path ? 'text-primary-500 bg-primary-100 md:bg-primary-100' : ''}
                  w-full md:w-auto justify-start md:justify-center mb-1 md:mb-0
                  ${location.pathname === item.path && isMenuOpen ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' : ''}
                `}
                onClick={closeMenu}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                {location.pathname === item.path && !isMenuOpen && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-sm"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 