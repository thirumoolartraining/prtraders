import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-spiritual-warm via-spiritual-sandy-light to-spiritual-sandalwood overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-spiritual-gold/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-spiritual-rose/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-spiritual-maroon/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-spiritual-maroon font-sans-spiritual font-medium tracking-wide uppercase text-sm">
                Sacred Tradition Since Generations
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-spiritual-maroon leading-tight mb-6"
            >
              Embrace the Sacred
              <span className="block text-spiritual-gold">
                Temple-Quality Purity
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-spiritual-maroon/80 font-sans-spiritual leading-relaxed mb-8 max-w-2xl"
            >
              Discover our premium collection of rose water, handcrafted incense, and pure camphor. 
              Each product carries the essence of traditional spiritual practices, crafted with devotion 
              for your sacred rituals and daily wellness from Palani's sacred traditions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProducts}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 38, 53, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-spiritual-maroon text-spiritual-pure px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-maroon-light transition-all duration-300"
              >
                Explore Sacred Collection
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-spiritual-gold text-spiritual-gold px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-gold hover:text-spiritual-pure transition-all duration-300"
              >
                Bulk Orders
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
            >
              {[
                { title: "Pure Devotion", desc: "Crafted with spiritual love" },
                { title: "Natural Essence", desc: "100% organic ingredients" },
                { title: "Temple Grade", desc: "Authentic purity standards" }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="inline-block p-3 bg-spiritual-pure rounded-full shadow-lg mb-3">
                  </div>
                  <h3 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="/hero-banner-spiritual.png"
                alt="Sacred spiritual products with rose water and incense"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spiritual-maroon/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToProducts}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-spiritual-maroon/70 hover:text-spiritual-maroon transition-colors duration-300"
          >
            <span className="text-sm font-sans-spiritual">Explore Products</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;