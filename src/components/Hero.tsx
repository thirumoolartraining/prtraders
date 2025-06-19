import React from 'react';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import newHeroImage from '../assets/ChatGPT Image Jun 17, 2025, 06_14_42 PM.png';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-camphor-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-7 xl:col-span-6 order-2 lg:order-1">
            <img 
              src={newHeroImage}
              alt="PR Traders 1 kg camphor stand-up pouch with goddess icon"
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 aspect-square object-contain"
              loading="eager"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
          
          <div className="lg:col-span-5 xl:col-span-6 order-1 lg:order-2">
            <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-charcoal leading-tight mb-4 sm:mb-6">
              Pure Camphor.<br />
              <span className="text-forest-green">Proven Supply.</span>
            </h1>
            
            <p className="font-inter text-base sm:text-lg xl:text-xl text-charcoal/80 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              30 years of excellence in camphor wholesale and export. From our facility in Palani, we deliver temple-grade purity to distributors, manufacturers, and importers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link 
                to="/bulk-quote"
                className="bg-forest-green text-camphor-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Get Bulk Quote</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <button 
                onClick={scrollToProducts}
                className="border-2 border-forest-green text-forest-green px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150 text-sm sm:text-base"
              >
                View Products
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="text-forest-green mb-2" size={20} />
                <span className="text-xs sm:text-sm font-medium text-charcoal">ISO Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="text-forest-green mb-2" size={20} />
                <span className="text-xs sm:text-sm font-medium text-charcoal">Global Export</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="text-forest-green mb-2" size={20} />
                <span className="text-xs sm:text-sm font-medium text-charcoal">30+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;