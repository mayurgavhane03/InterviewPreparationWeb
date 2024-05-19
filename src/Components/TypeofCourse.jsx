import React from 'react';
import { Link } from 'react-router-dom';

function TypeofCourse() {
  return (
    <nav className="bg-black mt- p-4 sticky top-0 z-10">
      <div className="container mx-auto">
        <ul className="flex space-x-4 text-white">
          <li><Link to="/react" className="hover:text-gray-300">React  </Link></li>
          <li><Link to="/javascript" className="hover:text-gray-300">JavaScript </Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/item1" className="hover:text-gray-300">Item 1</Link></li>
          <li><Link to="/item2" className="hover:text-gray-300">Item 2</Link></li>
          <li><Link to="/item3" className="hover:text-gray-300">Item 3</Link></li>
          <li><Link to="/item4" className="hover:text-gray-300">Item 4</Link></li>
          <li><Link to="/item5" className="hover:text-gray-300">Item 5</Link></li>
          <li><Link to="/item6" className="hover:text-gray-300">Item 6</Link></li>
          <li><Link to="/item7" className="hover:text-gray-300">Item 7</Link></li>
          <li><Link to="/item8" className="hover:text-gray-300">Item 8</Link></li>
          <li><Link to="/item9" className="hover:text-gray-300">Item 9</Link></li>
          <li><Link to="/item10" className="hover:text-gray-300">Item 10</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default TypeofCourse;
