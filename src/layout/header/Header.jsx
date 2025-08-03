import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-11 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-14 w-24 object-cover" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="/" className="hover:text-yellow-200 transition">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-200 transition">About Us</a></li>
          <li><a href="/courses" className="hover:text-yellow-200 transition">Courses</a></li>
          <li><a href="/resources" className="hover:text-yellow-200 transition">Resources</a></li>
          <li><a href="/blog" className="hover:text-yellow-200 transition">Blog</a></li>
          <li>
            <a
              href="#contact"
              className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a onClick={() => setMenuOpen(false)} href="/">Home</a>
        <a onClick={() => setMenuOpen(false)} href="/about">About Us</a>
        <a onClick={() => setMenuOpen(false)} href="/courses">Courses</a>
        <a onClick={() => setMenuOpen(false)} href="/resources">Resources</a>
        <a onClick={() => setMenuOpen(false)} href="/blog">Blog</a>
        <a
          onClick={() => setMenuOpen(false)}
          href="#contact"
          className="bg-gradient-to-r from-gray-200 to-gray-300 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Header;
