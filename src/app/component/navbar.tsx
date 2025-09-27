"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { auth } from "../firebaseConfig"; // adjust path
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Theme setup
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");

    // Auth state listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/homepage", label: "Home v.2" },
    { href: "/product", label: "Product" },
    { href: "/about", label: "About" },
    { href: "/productlist", label: "Product List" },
    { href: "/shopping", label: "Shopping" },
    { href: "/uiux", label: "UI/UX" },
  ];

  return (
    <nav className="bg-[#2A254B] dark:bg-dark-bg text-[#FAFAFA] dark:text-dark-text shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-wide whitespace-nowrap">
          <Link href="/">My Ecommerce Website</Link>
        </div>

        {/* Desktop Navigation (centered) */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="hover:text-gray-300 dark:hover:text-dark-accent transition-colors duration-300"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link
                href="/profile"
                className="bg-green-400 hover:bg-green-500 text-[#2A254B] font-semibold py-2 px-4 rounded-lg transition"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#2A254B] font-semibold py-2 px-4 rounded-lg transition"
            >
              Login/Signup
            </Link>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#3A305C] dark:bg-dark-card hover:bg-[#4A3B6A] transition flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={18} />
            ) : (
              <Moon className="text-white" size={18} />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="mr-3 p-2 rounded-full bg-[#3A305C] dark:bg-dark-card hover:bg-[#4A3B6A] transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={18} />
            ) : (
              <Moon className="text-white" size={18} />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2A254B] dark:bg-dark-bg text-center space-y-4 py-4 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block hover:text-dark-accent transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                href="/profile"
                className="block bg-green-400 hover:bg-green-500 text-[#2A254B] font-semibold py-2 mx-6 rounded-lg transition"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="block bg-yellow-400 hover:bg-yellow-500 text-[#2A254B] font-semibold py-2 mx-6 rounded-lg transition"
            >
              Login/Signup
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

