"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-cyan-950 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="hover:text-blue-400 transition duration-200">
              <span className="text-blue-500">AI</span> Insights
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="hover:text-blue-400 transition duration-200">
              Home
            </span>
          </Link>
          <Link href="/blog">
            <span className="hover:text-blue-400 transition duration-200">
              Blog
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-400 transition duration-200">
              Contact
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-400 focus:outline-none"
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

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800`}
      >
        <Link href="/">
          <span className="block text-white py-2 px-4 hover:text-blue-400">
            Home
          </span>
        </Link>
        <Link href="/about">
          <span className="block text-white py-2 px-4 hover:text-blue-400">
            About
          </span>
        </Link>
        <Link href="/blog">
          <span className="block text-white py-2 px-4 hover:text-blue-400">
            Blog
          </span>
        </Link>
        <Link href="/contact">
          <span className="block text-white py-2 px-4 hover:text-blue-400">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
