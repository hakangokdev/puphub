"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CareGuide {
  id: number;
  title: string;
  category: string;
  description: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  tips: string[];
  isPopular?: boolean;
}

const GuideCard = ({ guide, index }: { guide: CareGuide; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Image Header */}
      <div className="relative h-48 bg-gradient-to-br from-[#124C5F]/20 to-[#C7E7E1]/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-60">
            {guide.category === 'nutrition' && '🥘'}
            {guide.category === 'grooming' && '✂️'}
            {guide.category === 'training' && '🎯'}
            {guide.category === 'health' && '🏥'}
            {guide.category === 'exercise' && '🏃‍♀️'}
            {guide.category === 'behavior' && '🧠'}
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {guide.isPopular && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              POPULAR
            </span>
          )}
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(guide.difficulty)}`}>
            {guide.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span 
            className="text-sm text-[#124C5F] font-semibold uppercase tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {guide.category}
          </span>
          <span className="text-sm text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {guide.readTime}
          </span>
        </div>

        <h3 
          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#124C5F] transition-colors"
          style={{ fontFamily: 'Glades Bold, sans-serif' }}
        >
          {guide.title}
        </h3>

        <p 
          className="text-gray-600 mb-4 leading-relaxed"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {guide.description}
        </p>

        {/* Key Tips Preview */}
        <div className="mb-6">
          <h4 
            className="text-sm font-semibold text-gray-900 mb-2"
            style={{ fontFamily: 'Glades Bold, sans-serif' }}
          >
            Key Tips:
          </h4>
          <ul className="space-y-1">
            {guide.tips.slice(0, 2).map((tip, idx) => (
              <li 
                key={idx}
                className="text-sm text-gray-600 flex items-start"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <span className="text-[#124C5F] mr-2">•</span>
                {tip}
              </li>
            ))}
            {guide.tips.length > 2 && (
              <li className="text-sm text-gray-500 italic">
                +{guide.tips.length - 2} more tips...
              </li>
            )}
          </ul>
        </div>

        {/* Read More Button */}
        <motion.button
          className="w-full bg-[#124C5F] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#0f3d4a] transition-all duration-300"
          style={{ fontFamily: 'Glades Bold, sans-serif' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Read Full Guide
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function PetCarePage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Guides', icon: '📚' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥘' },
    { id: 'grooming', name: 'Grooming', icon: '✂️' },
    { id: 'training', name: 'Training', icon: '🎯' },
    { id: 'health', name: 'Health', icon: '🏥' },
    { id: 'exercise', name: 'Exercise', icon: '🏃‍♀️' },
    { id: 'behavior', name: 'Behavior', icon: '🧠' }
  ];

  const careGuides: CareGuide[] = [
    {
      id: 1,
      title: "Complete Puppy Nutrition Guide",
      category: "nutrition",
      description: "Learn how to properly feed your puppy during their crucial growth period with age-appropriate nutrition plans.",
      readTime: "8 min read",
      difficulty: "Beginner",
      image: "/images/guides/puppy-nutrition.jpg",
      tips: [
        "Feed puppies 3-4 times daily until 6 months old",
        "Choose high-quality puppy-specific food",
        "Monitor weight gain weekly",
        "Introduce new foods gradually"
      ],
      isPopular: true
    },
    {
      id: 2,
      title: "Professional Grooming at Home",
      category: "grooming",
      description: "Master the art of grooming your dog at home with professional techniques and the right tools.",
      readTime: "12 min read",
      difficulty: "Intermediate",
      image: "/images/guides/home-grooming.jpg",
      tips: [
        "Brush before bathing to remove loose fur",
        "Use lukewarm water for sensitive skin",
        "Trim nails regularly to prevent overgrowth",
        "Clean ears weekly to prevent infections"
      ]
    },
    {
      id: 3,
      title: "Basic Obedience Training",
      category: "training",
      description: "Teach your dog essential commands like sit, stay, come, and down using positive reinforcement methods.",
      readTime: "15 min read",
      difficulty: "Beginner",
      image: "/images/guides/obedience-training.jpg",
      tips: [
        "Start with short 5-10 minute sessions",
        "Use high-value treats for motivation",
        "Be consistent with commands and timing",
        "End sessions on a positive note"
      ],
      isPopular: true
    },
    {
      id: 4,
      title: "Recognizing Health Warning Signs",
      category: "health",
      description: "Learn to identify early warning signs of common health issues and when to contact your veterinarian.",
      readTime: "10 min read",
      difficulty: "Intermediate",
      image: "/images/guides/health-signs.jpg",
      tips: [
        "Monitor eating and drinking habits daily",
        "Check for changes in energy levels",
        "Watch for unusual behavioral changes",
        "Perform regular physical examinations"
      ]
    },
    {
      id: 5,
      title: "Exercise Plans by Age and Breed",
      category: "exercise",
      description: "Customize your dog's exercise routine based on their age, breed, and individual needs for optimal health.",
      readTime: "7 min read",
      difficulty: "Beginner",
      image: "/images/guides/exercise-plans.jpg",
      tips: [
        "Puppies need mental stimulation over physical",
        "High-energy breeds require 2+ hours daily",
        "Senior dogs benefit from gentle, consistent exercise",
        "Adjust activity in extreme weather"
      ]
    },
    {
      id: 6,
      title: "Understanding Dog Body Language",
      category: "behavior",
      description: "Decode your dog's body language to better understand their emotions and strengthen your bond.",
      readTime: "11 min read",
      difficulty: "Advanced",
      image: "/images/guides/body-language.jpg",
      tips: [
        "Tail position indicates emotional state",
        "Ear position shows attention and mood",
        "Eye contact can signal different emotions",
        "Body posture reveals confidence levels"
      ],
      isPopular: true
    }
  ];

  const filteredGuides = selectedCategory === 'all' 
    ? careGuides 
    : careGuides.filter(guide => guide.category === selectedCategory);

  const emergencyTips = [
    {
      title: "Choking",
      steps: ["Open mouth and remove visible objects", "Lift hind legs if small dog", "Contact vet immediately"],
      icon: "🚨"
    },
    {
      title: "Poisoning",
      steps: ["Don't induce vomiting", "Contact poison control", "Bring substance sample to vet"],
      icon: "☠️"
    },
    {
      title: "Bleeding",
      steps: ["Apply direct pressure", "Keep wound elevated", "Use clean cloth or bandage"],
      icon: "🩸"
    },
    {
      title: "Heatstroke",
      steps: ["Move to cool area", "Apply cool water to paws/belly", "Offer small amounts of water"],
      icon: "🌡️"
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
              Pet Care <span className="text-[#124C5F]">Guides</span>
              <br />
              <span className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent">& Expert Tips</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              variants={itemVariants}
            >
              Comprehensive guides and expert advice to help you provide the best care for your beloved companion.
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
                Start Learning
              </motion.button>
              
              <motion.button
                className="bg-white/80 backdrop-blur-sm text-[#124C5F] px-8 py-4 rounded-xl font-semibold text-lg border border-[#124C5F]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: 'Roboto, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Emergency Guide
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#124C5F] text-white scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Roboto, sans-serif' }}
                whileHover={{ scale: selectedCategory === category.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guides Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Results Count */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Showing {filteredGuides.length} care guides
              {selectedCategory !== 'all' && (
                <span> in "{categories.find(c => c.id === selectedCategory)?.name}"</span>
              )}
            </p>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, index) => (
              <GuideCard
                key={guide.id}
                guide={guide}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Care Section */}
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
              Emergency First Aid
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Quick reference guide for common pet emergencies. Always contact your veterinarian immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                className="bg-white rounded-3xl p-6 shadow-lg border-l-4 border-red-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.steps.map((step, idx) => (
                    <li 
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      <span className="text-red-500 mr-2 font-bold">{idx + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 
                className="text-xl font-bold text-red-800 mb-2"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
              >
                🚨 Emergency Hotline: (555) 911-PETS
              </h4>
              <p 
                className="text-red-700"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Available 24/7 for immediate assistance and guidance during pet emergencies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weekly Care Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
            >
              Weekly Care Checklist
            </h2>
            <p 
              className="text-xl text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Stay on top of your pet's health with this essential weekly routine.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#F8FBFF] to-white rounded-3xl p-8 shadow-lg">
            <div className="space-y-4">
              {[
                "Check and refill food and water bowls",
                "Brush teeth and check for dental issues",
                "Brush coat and check for skin problems",
                "Clean ears and check for infections",
                "Trim nails if needed",
                "Weigh your pet and record",
                "Review exercise and activity levels",
                "Check for any behavioral changes"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-[#124C5F] transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#124C5F] rounded mr-4 focus:ring-[#124C5F]"
                  />
                  <span 
                    className="text-gray-700 flex-1"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
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
              Need Personalized Advice?
            </h2>
            <p 
              className="text-xl mb-8 opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Our veterinary experts are available for one-on-one consultations to address your specific pet care concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#124C5F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#124C5F] transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Guides
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 