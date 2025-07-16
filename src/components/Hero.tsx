"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[75vh] bg-gradient-to-br from-[#FEFEFE] via-[#FAFBFF] to-[#F8FBFF] overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Soft circular gradients */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-[#C7E7E1]/20 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-[#FFEE94]/15 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-[#98F2E1]/10 to-transparent rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[300px] lg:min-h-[350px]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-tight font-medium"
              style={{ 
                fontFamily: 'Pangolin, cursive',
                letterSpacing: '2%',
                lineHeight: '1.1'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Taking care
              </motion.span>
              <br />
              <motion.span 
                className="text-[#124C5F]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                for your
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "backOut" }}
              >
                Smart Dog !
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ 
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Human–canine bonding is the relationship between dogs and humans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#124C5F] to-[#0f3d4a] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:shadow-xl transition-all duration-300 group"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  EXPLORE MORE 
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
              
              <motion.button
                className="bg-white/80 backdrop-blur-sm text-[#124C5F] px-8 py-4 rounded-xl font-semibold text-lg border border-[#124C5F]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dog Image with Yellow Blob and Paw Prints */}
          <motion.div 
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            
            {/* Yellow Blob with Dog Inside */}
            <motion.div 
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Yellow Blob Background with enhanced styling */}
              <motion.div 
                className="relative w-full h-full"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/hero/yellow-blob.svg"
                  alt=""
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 500px"
                />
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-radial from-[#F1C21B]/20 to-transparent rounded-full blur-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Dog Image Inside Blob */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/hero/smart-dog.png"
                    alt="Smart Dog with Sunglasses"
                    fill
                    className="object-contain rounded-3xl drop-shadow-lg"
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                  />
                </motion.div>
              </div>

              {/* Enhanced Blob Paws Inside Yellow Blob */}
              <motion.div 
                className="absolute top-8 right-8 sm:top-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image 
                  src="/images/hero/blobpaw.svg" 
                  alt="" 
                  fill 
                  className="object-contain drop-shadow-md" 
                />
              </motion.div>

              <motion.div 
                className="absolute bottom-12 left-8 sm:bottom-16 sm:left-12 w-10 h-10 sm:w-14 sm:h-14"
                animate={{ rotate: [0, -10, 10, 0], scale: [1, 0.9, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image 
                  src="/images/hero/blobpaw.svg" 
                  alt="" 
                  fill 
                  className="object-contain opacity-80 drop-shadow-md" 
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Paw Prints in Circle Around Yellow Blob */}
            {[
              { src: "/images/hero/paw-1.svg", className: "absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20", delay: 0 },
              { src: "/images/hero/paw-2.svg", className: "absolute top-4 sm:top-8 -right-6 sm:-right-8 lg:-right-12 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24", delay: 0.2 },
              { src: "/images/hero/paw-3.svg", className: "absolute top-1/2 -right-8 sm:-right-12 lg:-right-16 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18", delay: 0.4 },
              { src: "/images/hero/paw-4.svg", className: "absolute -bottom-6 sm:-bottom-8 right-4 sm:right-8 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20", delay: 0.6 },
              { src: "/images/hero/paw-5.svg", className: "absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 w-15 h-15 sm:w-19 sm:h-19 lg:w-22 lg:h-22", delay: 0.8 },
              { src: "/images/hero/paw-6.svg", className: "absolute top-1/2 -left-8 sm:-left-12 lg:-left-16 transform -translate-y-1/2 w-13 h-13 sm:w-17 sm:h-17 lg:w-19 lg:h-19", delay: 1.0 }
            ].map((paw, index) => (
              <motion.div 
                key={index}
                className={paw.className}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7], 
                  scale: [0.8, 1, 0.8],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: paw.delay + 1.5,
                  ease: "easeInOut"
                }}
              >
                <Image src={paw.src} alt="" fill className="object-contain drop-shadow-md" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}