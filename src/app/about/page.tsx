"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

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

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian",
      experience: "12 years",
      image: "/images/team/vet-1.jpg",
      description: "Specialized in small animal medicine and emergency care."
    },
    {
      name: "Mike Rodriguez",
      role: "Head Groomer",
      experience: "8 years",
      image: "/images/team/groomer-1.jpg", 
      description: "Expert in breed-specific styling and therapeutic grooming."
    },
    {
      name: "Emma Wilson",
      role: "Animal Behaviorist",
      experience: "10 years",
      image: "/images/team/trainer-1.jpg",
      description: "Certified in positive reinforcement training techniques."
    },
    {
      name: "James Chen",
      role: "Facility Manager",
      experience: "6 years",
      image: "/images/team/manager-1.jpg",
      description: "Ensures the highest standards of cleanliness and safety."
    }
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every pet with the love and care they deserve.",
      icon: "❤️"
    },
    {
      title: "Professional Excellence",
      description: "Our team maintains the highest standards of veterinary care.",
      icon: "⭐"
    },
    {
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We continuously adopt the latest in pet care technology.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] bg-gradient-to-br from-[#FEFEFE] via-[#FAFBFF] to-[#F8FBFF] flex items-center justify-center overflow-hidden"
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
              About <span className="text-[#124C5F]">PupHub</span>
              <br />
              <span className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent">Our Story</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              variants={itemVariants}
            >
              For over a decade, we've been dedicated to providing exceptional care for your beloved pets. 
              Our passion for animals drives everything we do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
              >
                Our Journey Started with Love
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <p>
                  PupHub was founded in 2013 by Dr. Sarah Johnson, who had a simple yet powerful vision: 
                  to create a place where pets receive the same level of care and attention that we give to our own family members.
                </p>
                
                <p>
                  What started as a small veterinary clinic has grown into a comprehensive pet care facility, 
                  but our core values remain unchanged. We believe that every pet deserves to live a happy, 
                  healthy life surrounded by love and professional care.
                </p>
                
                <p>
                  Today, we serve over 5,000 families in our community, providing everything from routine checkups 
                  to emergency care, grooming, training, and daycare services. Our state-of-the-art facility is 
                  designed with your pet's comfort and safety in mind.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { number: "5000+", label: "Happy Pets" },
                  { number: "10+", label: "Years Experience" },
                  { number: "24/7", label: "Emergency Care" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div 
                      className="text-3xl font-bold text-[#124C5F] mb-2"
                      style={{ fontFamily: 'Glades Bold, sans-serif' }}
                    >
                      {stat.number}
                    </div>
                    <div 
                      className="text-gray-600"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#124C5F]/80 to-[#0f3d4a]/60 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">🐕</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Glades Bold, sans-serif' }}>
                      "Dogs do speak, but only to those who know how to listen"
                    </h3>
                    <p style={{ fontFamily: 'Roboto, sans-serif' }}>
                      - Our founding philosophy
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 
                className="text-3xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
              >
                Our Mission
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed text-center"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                To provide exceptional, compassionate care for pets while supporting and educating pet owners. 
                We strive to enhance the human-animal bond through professional services, modern facilities, 
                and a genuine love for all animals.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-6xl mb-6 text-center">👁️</div>
              <h3 
                className="text-3xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
              >
                Our Vision
              </h3>
              <p 
                className="text-lg text-gray-600 leading-relaxed text-center"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                To be the leading pet care center in our community, known for innovation, excellence, 
                and unwavering commitment to animal welfare. We envision a world where every pet 
                receives the love and care they deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              These values guide every decision we make and every service we provide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-gradient-to-br from-[#F8FBFF] to-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Our passionate professionals are dedicated to providing the best care for your pets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-3xl p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Team Member Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#124C5F] to-[#0f3d4a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 
                  className="text-xl font-bold text-gray-900 mb-1"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {member.name}
                </h3>
                
                <p 
                  className="text-[#124C5F] font-semibold mb-1"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {member.role}
                </p>
                
                <p 
                  className="text-gray-500 text-sm mb-3"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {member.experience} experience
                </p>
                
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {member.description}
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
              Join the PupHub Family
            </h2>
            <p 
              className="text-xl mb-8 opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Experience the difference that genuine care and professional expertise can make for your pet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#124C5F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Visit
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#124C5F] transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 