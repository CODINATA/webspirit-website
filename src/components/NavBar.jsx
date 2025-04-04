import React, { useState } from 'react';
import logo from '../assets/Vector2.svg'; 
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-gradient-to-l from-blue-500 to-purple-500  border-b   text-white top-0 fixed w-full z-10">
      <div className="container      border-b-amber-50  mx-auto flex items-center justify-between p-4 -full">
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className='w-1/2' />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">Mission</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Products</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  bg-gradient-to-t from-blue-500 to-purple-500">
          <ul className="flex flex-col justify-self-center space-y-4 p-4">
            <li className="hover:text-gray-300 cursor-pointer">Mission</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Products</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;