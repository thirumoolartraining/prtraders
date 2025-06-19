import React from 'react';
import { Link } from 'react-router-dom';
import ritualFlatlay from '../assets/20250617_1736_Camphor Ritual Display_simple_compose_01jxyweq64fgs8sx0h9cw81fpb.png';

const LifestyleBanner = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ritualFlatlay})` }}
      >
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-camphor-white mb-4 sm:mb-6 leading-tight">
          Pure Camphor,<br />
          Pure Ritual
        </h2>
        <p className="font-inter text-lg sm:text-xl lg:text-2xl text-camphor-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          From sacred temples to modern aromatherapy, our camphor maintains the highest standards of purity for every application.
        </p>
        <Link 
          to="/heritage"
          className="bg-camphor-white text-charcoal px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-camphor-white/90 transition-all duration-150 hover:shadow-lg text-sm sm:text-base inline-block"
        >
          Discover Our Heritage
        </Link>
      </div>
    </section>
  );
};

export default LifestyleBanner;