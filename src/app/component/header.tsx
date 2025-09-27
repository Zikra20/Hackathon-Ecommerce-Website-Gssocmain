"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Plant Pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"];

  return (
    <header className="bg-white dark:bg-[#2e1f2f] shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-2 md:py-3">
        {/* Left: Search */}
        <div className="flex items-center">
          <CiSearch size={28} className="text-gray-900 dark:text-pink-100 cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#22202E] dark:text-pink-100 truncate text-center">
          Avion
        </h1>

        {/* Right: Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/shopping"
            className="text-gray-900 dark:text-pink-100 hover:text-black dark:hover:text-pink-200 transition-colors duration-200"
          >
            <IoCartOutline size={26} />
          </a>
          <span className="text-gray-900 dark:text-pink-100">
            <FaRegUserCircle size={26} />
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-900 dark:text-pink-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu size={28} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex border-t border-gray-200 dark:border-pink-400/30">
        <div className="container mx-auto px-6 py-2 flex justify-center space-x-6 text-gray-600 dark:text-pink-100 font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="/"
              className="hover:text-black dark:hover:text-pink-300 transition-colors duration-200 whitespace-nowrap text-sm md:text-base"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#3a243f] absolute top-full left-0 w-full shadow-lg transition-transform duration-300 z-40">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2 text-gray-600 dark:text-pink-100 font-medium">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="/"
                className="block hover:text-indigo-600 dark:hover:text-pink-300 transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

