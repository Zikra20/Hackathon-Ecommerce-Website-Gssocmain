"use client"; // Mark this file as a Client Component

import { useState } from "react"; // Importing useState hook
import { CiSearch } from "react-icons/ci"; // Importing Search Icon
import { IoCartOutline } from "react-icons/io5"; // Importing Cart Icon
import { FaRegUserCircle } from "react-icons/fa"; // Importing User Icon
import { GiHamburgerMenu } from "react-icons/gi"; // Importing Hamburger Menu Icon






const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Search Icon */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-900">
            <CiSearch size={24} />
          </span>
        </div>

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-[#22202E]">
          Avion
        </h1>

        {/* Cart and Profile Icons */}
        <div className="hidden md:flex items-center space-x-4  ">
        <a href="/shopping" className="hover:text-black">
          <span className="text-gray-900 ">
            <IoCartOutline size={24} />
          </span></a>
          <span className="text-gray-900 ">
            <FaRegUserCircle size={24} />
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex border-t border-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-center space-x-6 text-gray-600">
          <a href="/" className="hover:text-black">
            Plant Pots
          </a>
          <a href="/homepage" className="hover:text-black">
            Ceramics
          </a>
          <a href="/productlist" className="hover:text-black">
            Tables
          </a>
          <a href="/about" className="hover:text-black">
            Chairs
          </a>
          <a href="/product" className="hover:text-black">
            Crockery
          </a>
          <a href="/shopping" className="hover:text-black">
            Tableware
          </a>
          <a href="/uiux" className="hover:text-black">
            Cutlery
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4 text-gray-600">
            <a href="/" className="block hover:text-indigo-600">
              Plant Pots
            </a>
            <a href="/homepage" className="block hover:text-indigo-600">
              Ceramics
            </a>
            <a href="/productlist" className="block hover:text-indigo-600">
              Tables
            </a>
            <a href="/about" className="block hover:text-indigo-600">
              Chairs
            </a>
            <a href="/product" className="block hover:text-indigo-600">
              Crockery
            </a>
            <a href="/shopping" className="block hover:text-indigo-600">
              Tableware
            </a>
            <a href="/uiux" className="block hover:text-indigo-600">
              Cutlery
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
