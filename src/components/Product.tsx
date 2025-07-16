"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Product() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: 1,
      image: "/images/product-section/product-1.png",
      background: "/images/product-section/bg-pink.svg",
      backgroundColor: "#FFC6DA",
      title: "Drools | 3KG",
      description: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food"
    },
    {
      id: 2,
      image: "/images/product-section/product-2.png",
      background: "/images/product-section/bg-yellow.svg",
      backgroundColor: "#FFF1A6",
      title: "Canine Creek 4 KG",
      description: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food"
    },
    {
      id: 3,
      image: "/images/product-section/product-3.png",
      background: "/images/product-section/bg-blue.svg",
      backgroundColor: "#BAD8EB",
      title: "Biscork Biscuits",
      description: "Adult chicken and egg Egg, Chicken Dry Adult Dog Food"
    }
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-[#FFC6DA]/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-[#BAD8EB]/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          {/* Left Side - Title and Line */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Title */}
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-900"
              style={{ 
                fontFamily: 'Pangolin, cursive',
                lineHeight: '1.25'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Dog Nutrients & Food
            </motion.h2>
            
            {/* Decorative Line */}
            <motion.div 
              className="relative w-24 h-1"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <Image
                src="/images/product-section/line.svg"
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Offer Text */}
            <motion.p 
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-bold mt-6"
              style={{ 
                fontFamily: 'Glades Bold, sans-serif',
                lineHeight: '1.15'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              25 DISCOUNT OFF all Products
            </motion.p>
          </motion.div>

          {/* Right Side - View More Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="bg-[#124C5F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-3 hover:bg-[#0f3d4a] transition-all duration-300 group"
              style={{ fontFamily: 'Rubik, sans-serif' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View More</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
            >
              {/* Product Card Container */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* Background Shape */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 z-10"
                    style={{ backgroundColor: product.backgroundColor }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={product.background}
                      alt=""
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Product Image */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                    <motion.div 
                      className="relative w-full h-full max-w-[200px] max-h-[180px]"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="200px"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <motion.h3 
                    className="text-lg sm:text-xl font-medium text-gray-900"
                    style={{ 
                      fontFamily: 'Rubik, sans-serif',
                      lineHeight: '1.18'
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                  >
                    {product.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    style={{ 
                      fontFamily: 'Rubik, sans-serif',
                      lineHeight: '1.18'
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  >
                    {product.description}
                  </motion.p>

                  {/* Buy Now Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.button
                      className="w-full border-2 border-[#124C5F] text-[#124C5F] py-3 px-6 rounded-lg font-medium text-base hover:bg-[#124C5F] hover:text-white transition-all duration-300"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Buy Now
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Glow */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-lg"
                style={{ backgroundColor: product.backgroundColor + '40' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 