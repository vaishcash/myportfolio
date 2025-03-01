"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4 bg-black/80 backdrop-blur-lg">
      <div className="text-purple-400 text-2xl font-bold">VB</div>
      <button
        className="sm:block hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <ul
        className={`sm:flex sm:space-x-8 sm:static sm:bg-transparent sm:p-0 absolute bg-black w-full left-0 top-16 space-y-4 p-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/"
            className="text-white font-medium px-4 py-2 hover:text-purple-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/notes"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Résumé
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
