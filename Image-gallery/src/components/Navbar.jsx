// src/components/Navbar.jsx
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-indigo-600">GallerySite</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-indigo-600 font-semibold">Home</a>
          <a href="#gallery" className="text-gray-800 hover:text-indigo-600 font-semibold">Gallery</a>
          <a href="#contact" className="text-gray-800 hover:text-indigo-600 font-semibold">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">Home</a>
          <a href="#gallery" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">Gallery</a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
