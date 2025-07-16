"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-[#C7E7E1]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-[#FFEE94]/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Dog Image with Decorative Elements */}
          <motion.div 
            className="relative flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Background Shape Container */}
            <div className="relative w-full max-w-lg">
              {/* Background Shape */}
              <motion.div 
                className="relative w-full h-[500px] sm:h-[600px] z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/about-section/background-shape.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Dog Image */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div 
                    className="relative w-[380px] h-[280px] sm:w-[420px] sm:h-[320px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/about-section/shetland-dog.png"
                      alt="Beautiful Shetland Sheepdog"
                      fill
                      className="object-contain"
                      priority
                      sizes="420px"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Paw Groups - Outside main shape */}
              <motion.div 
                className="absolute top-12 right-4 w-10 h-10 sm:w-12 sm:h-12 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Image 
                  src="/images/about-section/paw-group-1.svg" 
                  alt="" 
                  fill 
                  className="object-contain opacity-60" 
                />
              </motion.div>

              <motion.div 
                className="absolute bottom-28 -left-8 w-8 h-8 sm:w-10 sm:h-10 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <Image 
                  src="/images/about-section/paw-group-2.svg" 
                  alt="" 
                  fill 
                  className="object-contain opacity-60" 
                />
              </motion.div>

              <motion.div 
                className="absolute top-20 -left-4 w-10 h-10 sm:w-12 sm:h-12 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Image 
                  src="/images/about-section/paw-group-3.svg" 
                  alt="" 
                  fill 
                  className="object-contain opacity-60" 
                />
              </motion.div>

              <motion.div 
                className="absolute bottom-16 right-12 w-10 h-10 sm:w-12 sm:h-12 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <Image 
                  src="/images/about-section/paw-group-4.svg" 
                  alt="" 
                  fill 
                  className="object-contain opacity-60" 
                />
              </motion.div>

              {/* Learn More Video Button */}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 cursor-pointer">
                  <Image
                    src="/images/about-section/learnmore.svg"
                    alt="Learn More Video"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Food Icon */}
              <motion.div 
                className="absolute -bottom-4 left-1/3 z-40"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <div className="relative w-16 h-16 sm:w-18 sm:h-18">
                  <Image
                    src="/images/about-section/food.svg"
                    alt="Pet Food"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Large Paw Icon - Positioned to the right */}
            <motion.div 
              className="absolute top-8 -right-8 sm:top-4 sm:-right-12 lg:-right-16 xl:-right-20 z-50"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={isInView ? { opacity: 0.5, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <Image
                  src="/images/about-section/aboutpaw.svg"
                  alt=""
                  fill
                  className="object-contain opacity-50"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Heading */}
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight"
              style={{ 
                fontFamily: 'Pangolin, cursive',
                letterSpacing: '5%',
                lineHeight: '1.25'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dogs do speak, but only to those who know how to listen.
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-[#4E4C46] leading-relaxed"
              style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                letterSpacing: '5%',
                lineHeight: '1.38'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Sweet roll ice cream powder candy canes ice cream donut pudding 
              biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding 
              fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding 
              biscuit caramels topb
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="bg-[#124C5F] text-white px-8 py-4 rounded-lg font-medium text-base flex items-center gap-3 hover:bg-[#0f3d4a] transition-all duration-300 group"
                style={{ fontFamily: 'Rubik, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore More</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
} 