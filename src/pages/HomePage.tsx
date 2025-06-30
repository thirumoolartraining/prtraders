import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/Hero/HeroSection';
import CategoryFilter from '../components/Products/CategoryFilter';
import ProductCard from '../components/Products/ProductCard';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import { getProductsByCategory } from '../data/products';
import { useStore } from '../store/useStore';
import { scrollToElement } from '../utils/scrollUtils';

const HomePage: React.FC = () => {
  const location = useLocation();
  const { selectedCategory } = useStore();
  const filteredProducts = getProductsByCategory(selectedCategory);

  // Handle hash navigation (e.g., /#products)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the #
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        scrollToElement(elementId);
      }, 100);
    }
  }, [location.hash]);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Section */}
      <section id="products" className="py-20 bg-spiritual-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">
              Sacred Product Collection
            </h2>
            <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated collection of temple-quality spiritual products, 
              crafted with devotion for your sacred rituals and daily wellness practices
            </p>
          </div>
          
          <CategoryFilter />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSection />
    </main>
  );
};

export default HomePage;