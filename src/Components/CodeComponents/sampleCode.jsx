
export const NavbarCode = `
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black w-[150px] h-screen fixed top-0 left-0 p-4">
      <div>
        <ul className="text-white">
          <li><Link to="/trafficlight" className="block py-2 px-4 hover:bg-gray-800">Traffic Light</Link></li>
          <li><Link to="/about" className="block py-2 px-4 hover:bg-gray-800">About</Link></li>
          <li><Link to="/services" className="block py-2 px-4 hover:bg-gray-800">Services</Link></li>
          <li><Link to="/contact" className="block py-2 px-4 hover:bg-gray-800">Contact</Link></li>
          <li><Link to="/item1" className="block py-2 px-4 hover:bg-gray-800">Item 1</Link></li>
          <li><Link to="/item2" className="block py-2 px-4 hover:bg-gray-800">Item 2</Link></li>
          <li><Link to="/item3" className="block py-2 px-4 hover:bg-gray-800">Item 3</Link></li>
          <li><Link to="/item4" className="block py-2 px-4 hover:bg-gray-800">Item 4</Link></li>
          <li><Link to="/item5" className="block py-2 px-4 hover:bg-gray-800">Item 5</Link></li>
          <li><Link to="/item6" className="block py-2 px-4 hover:bg-gray-800">Item 6</Link></li>
          <li><Link to="/item7" className="block py-2 px-4 hover:bg-gray-800">Item 7</Link></li>
          <li><Link to="/item8" className="block py-2 px-4 hover:bg-gray-800">Item 8</Link></li>
          <li><Link to="/item9" className="block py-2 px-4 hover:bg-gray-800">Item 9</Link></li>
          <li><Link to="/item10" className="block py-2 px-4 hover:bg-gray-800">Item 10</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
`;