"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Detail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#F6FFFD] via-[#FBFBFB] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-[#4AB1D2]/20 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-radial from-[#9ED6E7]/30 to-transparent rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-radial from-[#A0D6E7]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], x: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#4AB1D2]/40 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/4 w-6 h-6 bg-[#9ED6E7]/50 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#A0D6E7]/60 rounded-full"
          animate={{ y: [0, -10, 0], x: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Quote */}
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight font-medium"
              style={{ 
                fontFamily: 'Pangolin, cursive',
                letterSpacing: '5%',
                lineHeight: '1.25'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                No one appreciates the very special
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#124C5F] to-[#4AB1D2] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
              >
                genius of your conversation
              </motion.span>
              <motion.span 
                className="block text-[#4AB1D2]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                as the dog does.
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl text-[#4E4C46] leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                letterSpacing: '5%',
                lineHeight: '1.38'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Sweet roll ice cream powder candy canes ice cream donut pudding 
              biscuit ice cream. Biscuit caramels topb perfect treats for your beloved companion.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                className="bg-[#124C5F] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                style={{ fontFamily: 'Rubik, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#4AB1D2] to-[#124C5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative flex items-center justify-center gap-3">
                  Explore More 
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div 
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            
            {/* Main Circle Container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              
              {/* Central Circle */}
              <motion.div 
                className="absolute inset-16 bg-gradient-to-br from-[#4AB1D2]/20 to-[#9ED6E7]/40 rounded-full backdrop-blur-sm border border-white/30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Inner glow */}
                <motion.div 
                  className="absolute inset-4 bg-gradient-radial from-[#4AB1D2]/30 to-transparent rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Floating Icons around circle */}
              {[
                { icon: "🐕", delay: 0, radius: "top-4 left-1/2", size: "text-2xl" },
                { icon: "🦴", delay: 0.5, radius: "top-1/2 right-4", size: "text-xl" },
                { icon: "🐾", delay: 1, radius: "bottom-4 right-1/3", size: "text-lg" },
                { icon: "❤️", delay: 1.5, radius: "bottom-1/2 left-4", size: "text-xl" },
                { icon: "🏠", delay: 2, radius: "top-8 left-8", size: "text-lg" },
                { icon: "🎾", delay: 2.5, radius: "top-8 right-8", size: "text-lg" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.radius} ${item.size} select-none cursor-default`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: [0.6, 1, 0.6], 
                    scale: [0.8, 1.2, 0.8],
                    y: [0, -10, 0]
                  } : {}}
                  transition={{ 
                    delay: item.delay + 1.5,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Orbiting elements */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#4AB1D2] rounded-full transform -translate-x-1/2" />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-[#9ED6E7] rounded-full transform translate-x-1/2" />
              </motion.div>

              {/* Central content */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 1, ease: "backOut" }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🐕‍🦺
                  </motion.div>
                  <motion.p 
                    className="text-[#124C5F] font-semibold text-lg"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.5, duration: 0.8 }}
                  >
                    Best Friend
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Additional decorative paws */}
            <motion.div 
              className="absolute -top-8 -right-8 text-4xl opacity-60"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🐾
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 text-3xl opacity-60"
              animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              🐾
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 