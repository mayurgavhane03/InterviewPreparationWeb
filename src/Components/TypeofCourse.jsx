import React from 'react';
import { Link } from 'react-router-dom';

function TypeofCourse() {
  return (
    <nav className="bg-black mt- p-4 sticky top-0 z-10">
      <div className="container mx-auto">
        <ul className="flex space-x-4 text-white">
          <li><Link to="/react" className="hover:text-gray-300">React  </Link></li>
          <li><Link to="/javascript" className="hover:text-gray-300">JavaScript </Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Express.js</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Node.js</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">MongoDb</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Java</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Python</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">SQL </Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 4</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 5</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 6</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 7</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 9</Link></li>
          <li><Link to="/ " className="hover:text-gray-300">Item 10</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default TypeofCourse;
