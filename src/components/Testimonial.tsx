"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      image: "/images/testimonial-section/anna-tobby.png",
      backgroundColor: "#FFF1A6",
      name: "Anna & Tobby",
      text: "Amazing Products & Delivery on time.",
      rating: "4.2/5"
    },
    {
      id: 2,
      image: "/images/testimonial-section/christine-tom.png",
      backgroundColor: "#EBA8BF",
      name: "Christine & Tom",
      text: "Love the overall Shopping experience!",
      rating: "4.2/5"
    },
    {
      id: 3,
      image: "/images/testimonial-section/sindy-kitch.png",
      backgroundColor: "#DDC7ED",
      name: "Sindy & Kitch",
      text: "Kitch is love food from the pup-hub",
      rating: "4.2/5"
    }
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-6 h-6 ${filled ? 'text-[#DDCA69]' : 'text-[#DDCA69] opacity-30'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FFFFF6] via-[#FBFBFB] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-radial from-[#FFF1A6]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-48 h-48 bg-gradient-radial from-[#EBA8BF]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-radial from-[#DDC7ED]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4"
            style={{ 
              fontFamily: 'Pangolin, cursive',
              lineHeight: '1.25'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Happy Customer
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative w-24 h-1">
              <Image
                src="/images/testimonial-section/line.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative group"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-t-[33px] rounded-b-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105">
                
                {/* Colored Background Section */}
                <motion.div 
                  className="relative h-64 sm:h-72 overflow-hidden rounded-t-[33px]"
                  style={{ backgroundColor: testimonial.backgroundColor }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* User Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div 
                      className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                    </motion.div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full"
                    animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="bg-[#124C5F] p-6 sm:p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  {/* Name */}
                  <motion.h3 
                    className="text-[#DDCA69] text-xl sm:text-2xl font-medium mb-4"
                    style={{ 
                      fontFamily: 'Rubik, sans-serif',
                      lineHeight: '1.18'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  
                  {/* Review Text */}
                  <motion.p 
                    className="text-white text-sm sm:text-base mb-6 leading-relaxed"
                    style={{ 
                      fontFamily: 'Rubik, sans-serif',
                      lineHeight: '1.18'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                  >
                    {testimonial.text}
                  </motion.p>

                  {/* Rating */}
                  <motion.div 
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.6 + index * 0.2 + star * 0.1, duration: 0.3 }}
                        >
                          <StarIcon filled={true} />
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 2.1 + index * 0.2, duration: 0.3 }}
                      >
                        <StarIcon filled={false} />
                      </motion.div>
                    </div>
                    
                    {/* Rating Text */}
                    <motion.span 
                      className="text-white text-sm font-medium ml-2"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 2.2 + index * 0.2, duration: 0.6 }}
                    >
                      {testimonial.rating}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div 
                className="absolute -inset-2 rounded-t-[35px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur-xl"
                style={{ 
                  background: `linear-gradient(45deg, ${testimonial.backgroundColor}60, ${testimonial.backgroundColor}20)` 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            className="bg-[#124C5F] text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-3 hover:bg-[#0f3d4a] transition-all duration-300 group mx-auto shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Rubik, sans-serif' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore More</span>
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 