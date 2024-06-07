import React, { useState } from "react";
import { Link } from "react-router-dom";
import  Resume from './assets/Resume.pdf'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <nav className="bg-gray-800  sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold">
             Sandeep Kumar
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:underline"  >
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:underline">
                About
              </Link>
              <Link to="/education" className="text-gray-300 hover:underline">
                Education
              </Link>
              <Link to="/service" className="text-gray-300 hover:underline">
                Services
              </Link>
              <Link to={Resume}   target="_blank" className="bg-gray-600 rounded-full text-gray-300 hover:visited:bg-gray-500 p-2">
               Resume
              </Link>
            </div>
          </div>
          <div className="mr-2 flex md:hidden ">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-8 space-y-1 sm:px-4  ">
            <Link
              to="/"
              className="block text-gray-300 hover:underline px-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:underline px-2"
            >
              About
            </Link>
            <Link to="/education" className="text-gray-300 hover:underline px-2">
                Education
              </Link>
            <Link
              to="/service"
              className="block text-gray-300 hover:underline px-2 pb-3"
            >
              Services
            </Link>
          
            <a href={Resume} target='_blank' className="bg-gray-600 rounded-full text-gray-300 hover:visited:bg-gray-500 mt-4 p-2 mx-1">
               Resume
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
