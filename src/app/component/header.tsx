"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#2e1f2f] shadow-md sticky top-0 z-10 transition-all duration-300">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Search Icon */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-900 dark:text-pink-100">
            <CiSearch size={24} />
          </span>
        </div>

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold text-[#22202E] dark:text-pink-100">
          Avion
        </h1>

        {/* Cart and Profile Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/shopping" className="hover:text-black dark:hover:text-pink-200">
            <span className="text-gray-900 dark:text-pink-100">
              <IoCartOutline size={24} />
            </span>
          </a>
          <span className="text-gray-900 dark:text-pink-100">
            <FaRegUserCircle size={24} />
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-gray-900 dark:text-pink-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex border-t border-gray-200 dark:border-pink-400/30">
        <div className="container mx-auto px-6 py-3 flex justify-center space-x-6 text-gray-600 dark:text-pink-100">
          <a href="/" className="hover:text-black dark:hover:text-pink-300">Plant Pots</a>
          <a href="/homepage" className="hover:text-black dark:hover:text-pink-300">Ceramics</a>
          <a href="/productlist" className="hover:text-black dark:hover:text-pink-300">Tables</a>
          <a href="/about" className="hover:text-black dark:hover:text-pink-300">Chairs</a>
          <a href="/product" className="hover:text-black dark:hover:text-pink-300">Crockery</a>
          <a href="/shopping" className="hover:text-black dark:hover:text-pink-300">Tableware</a>
          <a href="/uiux" className="hover:text-black dark:hover:text-pink-300">Cutlery</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#3a243f] absolute top-0 left-0 w-full shadow-lg transition-all duration-300">
          <div className="container mx-auto px-6 py-4 space-y-4 text-gray-600 dark:text-pink-100">
            <a href="/" className="block hover:text-indigo-600 dark:hover:text-pink-300">Plant Pots</a>
            <a href="/homepage" className="block hover:text-indigo-600 dark:hover:text-pink-300">Ceramics</a>
            <a href="/productlist" className="block hover:text-indigo-600 dark:hover:text-pink-300">Tables</a>
            <a href="/about" className="block hover:text-indigo-600 dark:hover:text-pink-300">Chairs</a>
            <a href="/product" className="block hover:text-indigo-600 dark:hover:text-pink-300">Crockery</a>
            <a href="/shopping" className="block hover:text-indigo-600 dark:hover:text-pink-300">Tableware</a>
            <a href="/uiux" className="block hover:text-indigo-600 dark:hover:text-pink-300">Cutlery</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
