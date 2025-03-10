"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "about", label: "About", scroll: true },
  { href: "experience", label: "Experience", scroll: true },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const renderLinks = (isMobile = false) => (
    <ul
      className={`flex ${isMobile ? "flex-col space-y-4 my-8" : "space-x-16"}`}
    >
      {NAV_LINKS.map(({ href, label, scroll }) => (
        <li key={label}>
          {scroll ? (
            <ScrollLink
              to={href}
              smooth={true}
              duration={400}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white px-4 py-2 font-medium rounded-full bg-white/10 transition-colors hover:px-4 hover:py-2 hover:bg-white/20 "
            >
              {label}
            </ScrollLink>
          ) : (
            <Link
              href={href}
              className="text-white px-4 py-2 font-medium rounded-full bg-white/10 transition-colors hover:px-4 hover:py-2 hover:bg-white/20 "
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 bg-black/20 backdrop-blur-lg">
      {/* Desktop Navbar */}
      <div className="lg:flex hidden bg-black/20 backdrop-blur-lg rounded-full px-8 py-4">
        {renderLinks()}
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center w-full px-4">
        <div className="text-purple-400 text-2xl font-bold">VB</div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 50 }}
          exit={{ opacity: 10, y: -70 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute left-0 right-0 bg-purple-900 backdrop-blur-lg flex flex-col text-center justify-center items-center px-5 mx-8 rounded-lg shadow-lg "
        >
          {renderLinks(true)}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
