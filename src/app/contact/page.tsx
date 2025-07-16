"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
  preferredContact: string;
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    preferredContact: 'email'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: '',
      preferredContact: 'email'
    });
    
    console.log('Contact form submitted:', formData);
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Emergency', hours: '24/7 Available' }
  ];

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      info: '+1 (555) 123-PETS',
      description: 'Call us for immediate assistance'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'hello@puphub.com',
      description: 'Send us a message anytime'
    },
    {
      icon: '📍',
      title: 'Address',
      info: '123 Pet Care Street, Dog City, DC 12345',
      description: 'Visit our modern facility'
    },
    {
      icon: '🚨',
      title: 'Emergency',
      info: '+1 (555) 911-PETS',
      description: 'Available 24/7 for emergencies'
    }
  ];

  const faqs = [
    {
      question: "What are your appointment booking policies?",
      answer: "We recommend booking appointments at least 48 hours in advance. For urgent care, we accept same-day appointments based on availability. Emergency cases are always prioritized."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for major procedures and treatments. We also accept all major credit cards, cash, and pet insurance."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Please bring your pet's vaccination records, any medications they're currently taking, and a list of questions or concerns you'd like to discuss."
    },
    {
      question: "Do you provide grooming services for all dog breeds?",
      answer: "Yes, our professional groomers are experienced with all dog breeds and sizes. We customize our services based on your pet's specific needs and breed requirements."
    },
    {
      question: "How far in advance should I book daycare services?",
      answer: "For regular daycare, we recommend booking a week in advance. For special events or holidays, please book at least 2-3 weeks ahead as these times fill up quickly."
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
              Get in <span className="text-[#124C5F]">Touch</span>
              <br />
              <span className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent">With PupHub</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              variants={itemVariants}
            >
              We're here to answer your questions and provide the best care for your beloved pets. 
              Reach out to us anytime!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
              How to Reach Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="text-center p-6 bg-gradient-to-br from-[#F8FBFF] to-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {method.title}
                </h3>
                <p 
                  className="text-[#124C5F] font-semibold mb-2"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {method.info}
                </p>
                <p 
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-[#F8FBFF] to-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Phone & Service Type */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                        placeholder="(555) 123-4567"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="serviceType" 
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        Service Interest
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        <option value="">Select a service</option>
                        <option value="veterinary">Veterinary Care</option>
                        <option value="grooming">Grooming</option>
                        <option value="training">Training</option>
                        <option value="daycare">Daycare</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                      placeholder="Brief description of your inquiry"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#124C5F] focus:border-transparent transition-all duration-300"
                      placeholder="Tell us more about your inquiry..."
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-[#124C5F] focus:ring-[#124C5F]"
                        />
                        <span className="ml-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-[#124C5F] focus:ring-[#124C5F]"
                        />
                        <span className="ml-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#124C5F] to-[#0f3d4a] text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Glades Bold, sans-serif' }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Business Info & Hours */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {schedule.day}
                      </span>
                      <span 
                        className={`font-semibold ${schedule.day === 'Emergency' ? 'text-red-600' : 'text-[#124C5F]'}`}
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  Our Location
                </h3>
                <div className="bg-gradient-to-br from-[#124C5F]/10 to-[#C7E7E1]/20 rounded-2xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🗺️</div>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Interactive Map Coming Soon
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <p 
                    className="text-gray-700 mb-2"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    123 Pet Care Street<br />
                    Dog City, DC 12345
                  </p>
                  <motion.button
                    className="text-[#124C5F] font-semibold hover:underline"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Get Directions →
                  </motion.button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-[#124C5F] to-[#0f3d4a] rounded-3xl p-8 text-white">
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  Need Immediate Help?
                </h3>
                <p 
                  className="mb-6 opacity-90"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  For urgent matters or emergencies, call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    className="bg-white text-[#124C5F] px-6 py-3 rounded-xl font-bold flex items-center justify-center"
                    style={{ fontFamily: 'Glades Bold, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📞 Call Now
                  </motion.button>
                  <motion.button
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-white hover:text-[#124C5F] transition-all duration-300"
                    style={{ fontFamily: 'Glades Bold, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💬 Live Chat
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p 
              className="text-xl text-gray-600"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F8FBFF] to-white rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 
                  className="text-lg font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Glades Bold, sans-serif' }}
                >
                  {faq.question}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 