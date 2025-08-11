import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-gray-200 shadow-md">
<div className="max-w-[1400px] mx-auto px-4 md:px-0 px-custom py-3 flex items-center justify-between relative">
        {/* Logo - Left */}
        <a href="/" className="flex-shrink-0 z-50">
          <img src="/logo.png" alt="Logo" className="h-16 w-24 object-contain" />
        </a>

        {/* Center Nav Links */}
        <ul className="hidden md:flex gap-10 text-md font-normal absolute left-1/2 transform -translate-x-1/2">
          <li><a href="/" className="hover:text-yellow-200 transition">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-200 transition">About </a></li>
          <li><a href="/courses" className="hover:text-yellow-200 transition">Courses</a></li>
          <li><a href="/resources" className="hover:text-yellow-200 transition">Resources</a></li>
          {/* <li><a href="/blog" className="hover:text-yellow-200 transition">Blog</a></li> */}
        </ul>

        {/* Contact Us - Right */}
        <div className="hidden md:flex">
        <a href="#contact">
    <button className="flex items-center bg-white text-black px-4 py-1 rounded-full font-medium shadow-md hover:scale-105 transition">
      <span className="">contact</span>
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7L7 17M17 7H9M17 7V15"
          />
        </svg>
      </span>
    </button>
  </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-lg font-medium transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a onClick={() => setMenuOpen(false)} href="/">Home</a>
        <a onClick={() => setMenuOpen(false)} href="/about">About Us</a>
        <a onClick={() => setMenuOpen(false)} href="/courses">Courses</a>
        <a onClick={() => setMenuOpen(false)} href="/resources">Resources</a>
        {/* <a onClick={() => setMenuOpen(false)} href="/blog">Blog</a> */}
        <a
          onClick={() => setMenuOpen(false)}
          href="#contact"
          className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-6 py-2 rounded-full text-sm font-semibold"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Header;
