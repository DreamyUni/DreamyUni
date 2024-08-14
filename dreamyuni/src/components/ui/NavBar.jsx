"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const leftLinks = ['Dashboard', 'Boost Chances', 'Database'];
  const rightLinks = ['Discord', 'LinkedIn'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/dreamyuni.png" alt="DreamyUni Logo" width={40} height={40} />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {leftLinks.map((link) => (
                  <NavLink key={link} href={`/${link.toLowerCase().replace(' ', '-')}`}>
                    {link}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {rightLinks.map((link) => (
                <NavLink key={link} href={`https://${link.toLowerCase()}.com`} external>
                  {link}
                </NavLink>
              ))}
              <button className="bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, external = false }) => {
  return (
    <Link href={href} passHref>
      <motion.a
        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export default Navbar;