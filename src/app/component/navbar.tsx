"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="bg-[#2A254B] dark:bg-dark-bg text-[#FAFAFA] dark:text-dark-text shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/">My Ecommerce Website</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:p-5">
          <ul className="flex space-x-6">
            {[
              { href: "/", label: "Home Page" },
              { href: "/homepage", label: "Home Page v.2" },
              { href: "/product", label: "Product Listing" },
              { href: "/about", label: "About Page" },
              { href: "/productlist", label: "Product Listings" },
              { href: "/shopping", label: "Shopping Baskets" },
              { href: "/uiux", label: "UI/UX" },
            ].map(({ href, label }) => (
              <li key={href} className="hover:text-gray-400 dark:hover:text-dark-accent transition duration-300">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="/auth/login"
            className="ml-6 bg-yellow-400 hover:bg-yellow-500 text-[#2A254B] font-semibold py-2 px-4 rounded-xl transition"
          >
            Login/Signup
          </Link>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-[#3A305C] dark:bg-dark-card hover:bg-[#4A3B6A] transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="mr-3 p-2 rounded-full bg-[#3A305C] dark:bg-dark-card hover:bg-[#4A3B6A] transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-white" size={20} />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2A254B] dark:bg-dark-bg text-center space-y-4 py-4">
          {[
            { href: "/", label: "Home Page" },
            { href: "/homepage", label: "Home Page v.2" },
            { href: "/product", label: "Product Listing" },
            { href: "/about", label: "About Page" },
            { href: "/productlist", label: "Product Listings" },
            { href: "/shopping", label: "Shopping Baskets" },
            { href: "/uiux", label: "UI/UX" },
            { href: "/auth/login", label: "Login/Signup" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="block hover:text-dark-accent font-medium">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
