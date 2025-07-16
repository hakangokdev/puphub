"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Product Badges */}
      <div className="relative mb-4">
        {/* Product Image Container */}
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">📦</div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              BEST SELLER
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {product.brand}
          </p>
          <h3 
            className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#124C5F] transition-colors"
            style={{ fontFamily: 'Glades Bold, sans-serif' }}
          >
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                ⭐
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Description */}
        <p 
          className="text-gray-600 text-sm line-clamp-2"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span 
            className="text-2xl font-bold text-[#124C5F]"
            style={{ fontFamily: 'Glades Bold, sans-serif' }}
          >
            ${product.price}
          </span>
          {product.originalPrice && (
            <span 
              className="text-lg text-gray-500 line-through"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
            product.inStock 
              ? 'bg-[#124C5F] text-white hover:bg-[#0f3d4a]' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Glades Bold, sans-serif' }}
          whileHover={product.inStock ? { scale: 1.02 } : {}}
          whileTap={product.inStock ? { scale: 0.98 } : {}}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'food', name: 'Dog Food' },
    { id: 'treats', name: 'Treats & Snacks' },
    { id: 'toys', name: 'Toys' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'healthcare', name: 'Healthcare' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Drools Puppy Dog Food 3KG",
      brand: "Drools",
      price: 45,
      originalPrice: 55,
      category: "food",
      description: "Premium nutrition for growing puppies with real chicken and vegetables.",
      features: ["High Protein", "DHA for Brain Development", "No Artificial Colors"],
      image: "/images/products/drools-3kg.png",
      rating: 4.5,
      reviews: 124,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 2,
      name: "Canine Creek Adult Dog Food 4KG",
      brand: "Canine Creek",
      price: 62,
      category: "food",
      description: "Complete nutrition for adult dogs with lamb and rice formula.",
      features: ["Lamb & Rice", "Digestive Health", "Omega 3 & 6"],
      image: "/images/products/canine-creek-4kg.png",
      rating: 4.3,
      reviews: 89,
      inStock: true,
      isNew: true
    },
    {
      id: 3,
      name: "Biscrok Dog Biscuits",
      brand: "Biscrok",
      price: 18,
      originalPrice: 22,
      category: "treats",
      description: "Crunchy biscuits perfect for training and rewards.",
      features: ["Training Treats", "Natural Ingredients", "Dental Care"],
      image: "/images/products/biscrok-biscuits.png",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isBestSeller: true
    },
    {
      id: 4,
      name: "Interactive Puzzle Toy",
      brand: "PetSafe",
      price: 35,
      category: "toys",
      description: "Mental stimulation toy that challenges your dog's problem-solving skills.",
      features: ["Mental Stimulation", "Durable Material", "Multiple Difficulty Levels"],
      image: "/images/products/puzzle-toy.png",
      rating: 4.4,
      reviews: 67,
      inStock: false
    },
    {
      id: 5,
      name: "Premium Dog Collar with LED",
      brand: "SafePup",
      price: 28,
      category: "accessories",
      description: "Waterproof LED collar for nighttime visibility and safety.",
      features: ["LED Lights", "Waterproof", "Adjustable Size"],
      image: "/images/products/led-collar.png",
      rating: 4.6,
      reviews: 93,
      inStock: true,
      isNew: true
    },
    {
      id: 6,
      name: "Multivitamin Supplements",
      brand: "VetPlus",
      price: 42,
      category: "healthcare",
      description: "Essential vitamins and minerals for optimal dog health.",
      features: ["Complete Nutrition", "Immune Support", "Vet Recommended"],
      image: "/images/products/multivitamin.png",
      rating: 4.8,
      reviews: 201,
      inStock: true,
      isBestSeller: true
    }
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

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
              Premium <span className="text-[#124C5F]">Dog</span>
              <br />
              <span className="bg-gradient-to-r from-[#124C5F] to-[#3A8DA8] bg-clip-text text-transparent">Products</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              variants={itemVariants}
            >
              Everything your furry friend needs - from nutritious food to fun toys and essential care products.
            </motion.p>

            <motion.div
              className="bg-[#FFEE94] text-[#124C5F] px-8 py-4 rounded-full inline-block font-bold text-lg"
              style={{ fontFamily: 'Glades Bold, sans-serif' }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              🎉 25% OFF All Products This Week!
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#124C5F] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#124C5F] focus:border-transparent"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
              Showing {filteredProducts.length} products
              {selectedCategory !== 'all' && (
                <span> in "{categories.find(c => c.id === selectedCategory)?.name}"</span>
              )}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
              >
                No products found
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Try adjusting your filters or search terms.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
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
              Why Shop with PupHub?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Shipping",
                description: "Free delivery on orders over $50",
                icon: "🚚"
              },
              {
                title: "Quality Guaranteed",
                description: "Only the best products for your pets",
                icon: "✅"
              },
              {
                title: "Expert Support",
                description: "Get advice from our pet care specialists",
                icon: "👨‍⚕️"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
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
              Need Help Choosing?
            </h2>
            <p 
              className="text-xl mb-8 opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Our pet care experts are here to help you find the perfect products for your furry friend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#124C5F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Expert Advice
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#124C5F] transition-all duration-300"
                style={{ fontFamily: 'Glades Bold, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 