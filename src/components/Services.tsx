"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  variant?: 'white' | 'yellow';
  index: number;
}

const ServiceCard = ({ title, icon, variant = 'white', index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gradientClass = variant === 'yellow' 
    ? 'bg-gradient-to-b from-[#FFFAE0] to-white/0'
    : 'bg-gradient-to-b from-[#F9FFFE] to-white/0';
  
  const borderClass = variant === 'yellow'
    ? 'border-[#FFEE94]'
    : 'border-[#98F2E1]';

  return (
    <motion.div 
      ref={ref}
      className={`
        relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 
        ${gradientClass} ${borderClass} border 
        rounded-3xl p-6 sm:p-8 lg:p-12
        shadow-[0px_4px_74px_0px_rgba(199,231,225,0.27)]
        transition-all duration-300
        flex flex-col items-center justify-center
        group cursor-pointer
      `}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0px 8px 84px 0px rgba(199,231,225,0.4)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <motion.div 
        className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mb-4 sm:mb-6 lg:mb-8"
        whileHover={{ 
          scale: 1.2, 
          rotate: [0, -10, 10, -5, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          fill
          className="object-contain"
        />
      </motion.div>
      
      {/* Title */}
      <motion.h3 
        className="text-lg sm:text-xl lg:text-2xl text-black text-center leading-tight"
        style={{ 
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 400 
        }}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>

      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Services() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: 'Grooming',
      icon: '/images/services/grooming-icon.svg',
      variant: 'white' as const
    },
    {
      title: 'Hyginic care',
      icon: '/images/services/hyginic-care-icon.svg',
      variant: 'white' as const
    },
    {
      title: 'Healthcare',
      icon: '/images/services/healthcare-icon.svg',
      variant: 'yellow' as const
    },
    {
      title: 'Daycare',
      icon: '/images/services/daycare-icon.svg',
      variant: 'white' as const
    },
    {
      title: 'Training',
      icon: '/images/services/training-icon.svg',
      variant: 'yellow' as const
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          ref={titleRef}
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl text-black mb-3 sm:mb-4"
            style={{ 
              fontFamily: 'Pangolin, cursive',
              fontWeight: 400,
              lineHeight: '1.25'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Services Category
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-24 sm:w-32 lg:w-36 h-1 bg-[#3A8DA8] rounded-full"
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: "auto" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              variant={service.variant}
              index={index}
            />
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div 
          className="flex justify-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-[#124C5F] text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wider hover:bg-[#0f3d4a] transition-colors duration-300 shadow-lg group"
            style={{ fontFamily: 'Glades Bold, sans-serif' }}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0px 8px 25px rgba(18, 76, 95, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              View All Services
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 