"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  price: string;
  duration: string;
  isPopular?: boolean;
  index: number;
}

const ServiceDetail = ({ title, description, features, icon, price, duration, isPopular, index }: ServiceDetailProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative p-8 rounded-3xl border transition-all duration-300 group cursor-pointer ${
        isPopular 
          ? 'bg-gradient-to-br from-[#124C5F] to-[#0f3d4a] text-white border-[#124C5F] shadow-2xl scale-105' 
          : 'bg-white border-gray-200 hover:border-[#124C5F] shadow-lg hover:shadow-xl'
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: isPopular ? 1.05 : 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: isPopular ? 1.08 : 1.03, y: -5 }}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFEE94] text-[#124C5F] px-6 py-2 rounded-full text-sm font-bold"
          style={{ fontFamily: 'Glades Bold, sans-serif' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Most Popular
        </motion.div>
      )}

      {/* Service Icon */}
      <motion.div 
        className="w-16 h-16 mb-6 mx-auto"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Title & Price */}
      <div className="text-center mb-6">
        <h3 
          className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}
          style={{ fontFamily: 'Glades Bold, sans-serif' }}
        >
          {title}
        </h3>
        <div className={`text-3xl font-bold mb-1 ${isPopular ? 'text-[#FFEE94]' : 'text-[#124C5F]'}`}>
          {price}
        </div>
        <p className={`text-sm ${isPopular ? 'text-gray-200' : 'text-gray-600'}`}>
          {duration}
        </p>
      </div>

      {/* Description */}
      <p 
        className={`mb-6 leading-relaxed ${isPopular ? 'text-gray-200' : 'text-gray-600'}`}
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: (index * 0.15) + (idx * 0.1) + 0.3 }}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              isPopular ? 'bg-[#FFEE94]' : 'bg-[#C7E7E1]'
            }`}>
              <svg className={`w-3 h-3 ${isPopular ? 'text-[#124C5F]' : 'text-[#124C5F]'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span 
              className={`${isPopular ? 'text-white' : 'text-gray-700'}`}
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
          isPopular 
            ? 'bg-white text-[#124C5F] hover:bg-gray-100' 
            : 'bg-[#124C5F] text-white hover:bg-[#0f3d4a]'
        }`}
        style={{ fontFamily: 'Glades Bold, sans-serif' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default function ServicesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const services = [
    {
      title: 'Basic Grooming',
      description: 'Essential grooming services to keep your dog clean, healthy, and looking great.',
      features: [
        'Bath & dry',
        'Nail trimming',
        'Ear cleaning',
        'Basic brushing',
        'Sanitary trim'
      ],
      icon: '/images/services/grooming-icon.svg',
      price: '$45',
      duration: 'per session',
      isPopular: false
    },
    {
      title: 'Premium Care',
      description: 'Comprehensive care package including healthcare, grooming, and training services.',
      features: [
        'Full grooming service',
        'Health checkup',
        'Vaccination tracking',
        'Basic training',
        'Nutrition consultation',
        'Monthly progress report'
      ],
      icon: '/images/services/healthcare-icon.svg',
      price: '$149',
      duration: 'per month',
      isPopular: true
    },
    {
      title: 'Daycare',
      description: 'Safe and fun daycare environment for your dog while you\'re away.',
      features: [
        'Supervised playtime',
        'Socialization activities',
        'Feeding service',
        'Exercise sessions',
        'Daily updates'
      ],
      icon: '/images/services/daycare-icon.svg',
      price: '$35',
      duration: 'per day',
      isPopular: false
    },
    {
      title: 'Training Program',
      description: 'Professional training to help your dog learn essential skills and behaviors.',
      features: [
        'Basic obedience',
        'House training',
        'Leash training',
        'Behavioral correction',
        'Customized plan',
        '1-on-1 sessions'
      ],
      icon: '/images/services/training-icon.svg',
      price: '$89',
      duration: 'per week',
      isPopular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-gradient-to-br from-[#FEFEFE] via-[#FAFBFF] to-[#F8FBFF] flex items-center justify-center overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
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
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Pangolin, cursive' }}
              variants={itemVariants}
            >
              Our <span className="text-[#124C5F]">Premium</span>
              <br />
              Pet Care <span className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              variants={itemVariants}
            >
              Professional pet care services designed to keep your furry friends happy, healthy, and well-groomed. From basic grooming to comprehensive healthcare packages.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-[#124C5F] to-[#0f3d4a] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Service
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
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Choose Your Perfect Package
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              We offer flexible service packages tailored to meet your pet's unique needs and your budget.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceDetail
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8FBFF] to-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Why Choose PupHub?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Certified Professionals',
                description: 'Our team consists of certified veterinarians and trained pet care specialists.',
                icon: '🏆'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support and emergency care for your peace of mind.',
                icon: '⏰'
              },
              {
                title: 'Modern Facilities',
                description: 'State-of-the-art facilities equipped with the latest pet care technology.',
                icon: '🏥'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#124C5F] to-[#0f3d4a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Ready to Give Your Pet the Best Care?
            </h2>
            <p 
              className="text-xl mb-8 opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Book your appointment today and let our professionals take care of your furry friend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#124C5F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Appointment
              </motion.button>
              
              <Link href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#124C5F] transition-all duration-300"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 