"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 bg-black/20 backdrop-blur-lg">
      <div className="lg:flex hidden bg-black/20 backdrop-blur-lg rounded-full px-8 py-4">
        <ul className="flex space-x-16 ">
          <li>
            <Link
              href="/"
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={400}
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={400}
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              Experience
            </ScrollLink>
          </li>
         
          <li>
            <Link
              href="/notes"
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              Résumé
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white font-medium  rounded-full bg-white/10 hover:px-4 hover:py-2 hover:bg-white/20 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex justify-between items-center w-full px-4">
        <div className="text-purple-400 text-2xl font-bold">VB</div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 50 }}
          exit={{ opacity: 10, y: -70 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden absolute  left-0 right-0 bg-purple-600 backdrop-blur-lg flex flex-col items-center px-5 mx-8 rounded-lg shadow-lg"
        >
          <div className="lg:hidden absolute  left-0 right-0 bg-purple-600 backdrop-blur-lg flex flex-col items-center px-5 mx-8  rounded-lg">
            <ul className="flex flex-col space-y-4 my-8 ">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  Experience
                </ScrollLink>
              </li>
            
              
              <li>
                <Link
                  href="/notes"
                  className="text-white/80 hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-white/80 hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  Résumé
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-purple-400 hover:bg-black hover:rounded-full hover:p-2 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
