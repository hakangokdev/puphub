"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const navigationLinks = [
    { href: "/services", text: "Our Services" },
    { href: "/about", text: "About Us" },
    { href: "/products", text: "Products" },
    { href: "/pet-care", text: "Pet Care" },
    { href: "/contact", text: "Contact" }
  ];

  const socialLinks = [
    { href: "#", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter" },
    { href: "#", icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 3.95-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-.35 0-.69-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", name: "Facebook" },
    { href: "#", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z", name: "Instagram" },
    { href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-br from-[#124C5F] via-[#1a5970] to-[#0f3d4a] text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & Description */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="PupHub Logo"
                width={160}
                height={60}
                className="h-auto brightness-0 invert"
              />
            </Link>
            <p 
              className="text-gray-300 leading-relaxed mb-6 max-w-sm"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Taking care of your smart dog with love, expertise, and dedication. Your pet's happiness is our priority.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C7E7E1] hover:text-[#124C5F] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#C7E7E1] transition-colors duration-300 flex items-center group"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#C7E7E1] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                    />
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Contact Info
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-[#C7E7E1] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    123 Pet Care Street<br />
                    Dog City, DC 12345
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-[#C7E7E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  +1 (555) 123-PETS
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-[#C7E7E1] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  hello@puphub.com
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Newsletter
            </h3>
            <p 
              className="text-gray-300 mb-6"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Subscribe to get special offers, pet care tips, and updates.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C7E7E1] focus:bg-white/15 transition-all duration-300"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                />
                <motion.button
                  className="px-6 py-3 bg-[#C7E7E1] text-[#124C5F] rounded-xl font-bold hover:bg-white transition-colors duration-300"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
              
              <p className="text-sm text-gray-400" style={{ fontFamily: 'Roboto, sans-serif' }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/20"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-center md:text-left"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              whileHover={{ color: "#C7E7E1" }}
              transition={{ duration: 0.3 }}
            >
              © 2025 PupHub. All rights reserved. Made with ❤️ for pet lovers.
            </motion.p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-[#C7E7E1] transition-colors duration-300 text-sm"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
} 