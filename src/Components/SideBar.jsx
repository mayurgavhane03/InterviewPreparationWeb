import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();

  // If the current path is '/', return null (don't render the sidebar)
  if (location.pathname === '/') return null;

  // Define the menu items for different routes
  const menuItems = {
    home: [
      { path: '/react1', label: 'Traffic Light' },
      { path: '/react2', label: 'Counter' },
      { path: '/react3', label: 'Build File Explorer' },
      // Add more home menu items
    ],
    javascript: [
      { path: '/javaScript1', label: 'mayur Item 1' },
      { path: '/javaScript2', label: 'About Item 2' },
      // Add more about menu items
    ],
    contact: [
      { path: '/contact-item1', label: 'Contact Item 1' },
      { path: '/contact-item2', label: 'Contact Item 2' },
    ],
    contact1: [
      { path: '/contact-item11', label: 'Contact Item 11' },
      { path: '/contact-item22', label: 'Contact Item 22' },
    ],
  };

  // Determine which menu items to display based on the current path
  const currentPath = location.pathname.split('/')[1];
  const currentMenuItems = menuItems[currentPath] || menuItems.home;

  return (
    <nav className="bg-black mt-[60px] w-[150px] h-screen fixed top-0 left-0 p-4">
      <div>
        <ul className="text-white mt-10">
          {currentMenuItems.map((item, index) => (
            <li key={index}>
              <Link to={`/${currentPath}${item.path}`} className="block py-2 px-4 hover:bg-gray-800">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
