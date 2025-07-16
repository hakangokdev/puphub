"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/services", text: "our services", fontSize: "16px" },
    { href: "/about", text: "about us", fontSize: "17px" },
    { href: "/products", text: "Products", fontSize: "17px" },
    { href: "/pet-care", text: "Pet Care", fontSize: "17px" },
    { href: "/contact", text: "contact", fontSize: "17px" }
  ];

  return (
    <motion.header 
      className="w-full py-4 px-6 bg-white shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/logo.svg"
              alt="PupHub Logo"
              width={150}
              height={50}
              priority
              className="h-auto"
            />
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link 
                  href={item.href} 
                  className="text-black hover:opacity-70 transition-all duration-300 relative group"
                  style={{ 
                    fontFamily: 'Glades Bold, sans-serif', 
                    fontWeight: 700,
                    fontSize: item.fontSize,
                    lineHeight: '1.150390625em'
                  }}
                >
                  {item.text}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#124C5F]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sign In Button */}
            <Link href="/signin">
              <motion.button 
                className="bg-[#124C5F] text-white rounded-md px-6 py-3 hover:bg-[#0f3d4a] transition-colors duration-300"
                style={{ 
                  fontFamily: 'Glades Bold, sans-serif', 
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '1.150390625em'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Sign In
              </motion.button>
            </Link>
            
            {/* Register Button */}
            <Link href="/register">
              <motion.button 
                className="bg-[#C7E7E1] text-[#124C5F] rounded-md px-6 py-3 hover:bg-[#b3ddd5] transition-colors duration-300"
                style={{ 
                  fontFamily: 'Glades Bold, sans-serif', 
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '1.150390625em'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Register
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link 
                  href={item.href} 
                  className="block text-black hover:opacity-70 transition-opacity duration-300 py-2"
                  style={{ 
                    fontFamily: 'Glades Bold, sans-serif', 
                    fontWeight: 700,
                    fontSize: item.fontSize,
                    lineHeight: '1.150390625em'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3">
              <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                <motion.button 
                  className="w-full bg-[#124C5F] text-white rounded-md py-3 hover:bg-[#0f3d4a] transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Glades Bold, sans-serif', 
                    fontWeight: 700,
                    fontSize: '18px'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  Sign In
                </motion.button>
              </Link>
              
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <motion.button 
                  className="w-full bg-[#C7E7E1] text-[#124C5F] rounded-md py-3 hover:bg-[#b3ddd5] transition-colors duration-300"
                  style={{ 
                    fontFamily: 'Glades Bold, sans-serif', 
                    fontWeight: 700,
                    fontSize: '18px'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  Register
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
} 