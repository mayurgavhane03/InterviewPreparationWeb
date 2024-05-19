import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar'; // Make sure to import SideBar

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('home'); // State for current menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuChange = (menu) => {
    setCurrentMenu(menu);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close mobile menu when changing menu
    }
  };

  return (
    <>
      <nav className="bg-black p-4 sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="text-white text-xl font-bold">Logo</Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4 text-white">
                <li>
                  <Link to="#" onClick={() => handleMenuChange('home')} className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link to="#" onClick={() => handleMenuChange('contact')} className="hover:text-gray-300">Contact</Link>
                </li>
                <li>
                  <Link to="#" onClick={() => handleMenuChange('contact')} className="hover:text-gray-300">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <ul className="mt-4 text-white">
                <li>
                  <Link to="#" onClick={() => handleMenuChange('home')} className="block py-2 px-4 hover:bg-gray-800">Home</Link>
                </li>
                <li>
                  <Link to="#" onClick={() => handleMenuChange('contact')} className="block py-2 px-4 hover:bg-gray-800">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <SideBar currentMenu={currentMenu} />
    </>
  );
}

export default Navbar;
