import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Heart, Award, Users, MapPin, Phone, Mail, Star } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

const AboutUsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Devotion & Purity",
      description: "Every product is crafted with spiritual devotion, maintaining the highest standards of purity that temples and spiritual practitioners trust."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We source only the finest natural ingredients and follow traditional methods passed down through generations to ensure authentic quality."
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Serving temples, spiritual centers, and devoted individuals across India with products that enhance their sacred practices and daily wellness."
    }
  ];

  const milestones = [
    {
      year: "1980s",
      title: "Sacred Beginnings",
      description: `Founded in the holy town of ${APP_CONFIG.contact.address.city}, starting with traditional rose water production for local temples.`
    },
    {
      year: "1990s",
      title: "Expanding Devotion",
      description: "Introduced handcrafted incense sticks and pure camphor, becoming a trusted supplier for spiritual communities."
    },
    {
      year: "2000s",
      title: "Regional Growth",
      description: `Expanded across ${APP_CONFIG.contact.address.state} and South India, serving major temples and spiritual institutions.`
    },
    {
      year: "2020s",
      title: "Digital Transformation",
      description: "Launched online platform to serve spiritual seekers nationwide while maintaining traditional quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-spiritual-warm">
      {/* Home Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-20 left-4 z-40"
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(139, 38, 53, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-spiritual-maroon text-spiritual-pure px-4 py-3 rounded-full shadow-lg hover:bg-spiritual-maroon-light transition-all duration-300 font-sans-spiritual font-semibold"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-spiritual-sandalwood via-spiritual-sandy-light to-spiritual-warm py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-spiritual-maroon font-sans-spiritual font-medium tracking-wide uppercase text-sm">
                  About {APP_CONFIG.business.name}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6">
                Four Decades of
                <span className="block text-spiritual-gold">Sacred Devotion</span>
              </h1>

              <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed mb-8">
                From the sacred hills of {APP_CONFIG.contact.address.city}, we have been crafting temple-quality spiritual products 
                for over four decades. Our journey began with a simple mission: to provide pure, 
                authentic spiritual essentials that enhance sacred rituals and daily wellness practices.
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-spiritual-gold font-serif-spiritual">40+</div>
                  <div className="text-sm text-spiritual-maroon/70 font-sans-spiritual">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-spiritual-gold font-serif-spiritual">1000+</div>
                  <div className="text-sm text-spiritual-maroon/70 font-sans-spiritual">Temples Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-spiritual-gold font-serif-spiritual">50K+</div>
                  <div className="text-sm text-spiritual-maroon/70 font-sans-spiritual">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/Products/hero-about.png"
                alt="Traditional spiritual products and temple offerings"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spiritual-maroon/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-spiritual-pure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6">
              Our Sacred Journey
            </h2>
            <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto">
              Rooted in the spiritual heritage of {APP_CONFIG.contact.address.city}, our story is one of unwavering devotion to quality, 
              tradition, and the sacred practices that connect us to the divine.
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-spiritual-sandalwood rounded-2xl p-8">
                    <div className="text-spiritual-gold font-serif-spiritual text-2xl font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-serif-spiritual text-xl font-semibold text-spiritual-maroon mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-spiritual-maroon/80 font-sans-spiritual leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-spiritual-gold rounded-full flex-shrink-0"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={ref} className="py-20 bg-spiritual-sandalwood">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
            >
              These principles guide everything we do, from sourcing the finest ingredients to 
              crafting products that honor spiritual traditions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(139, 38, 53, 0.15)" }}
                className="bg-spiritual-pure rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-spiritual-pure" />
                </div>
                <h3 className="font-serif-spiritual text-xl font-semibold text-spiritual-maroon mb-4">
                  {value.title}
                </h3>
                <p className="text-spiritual-maroon/80 font-sans-spiritual leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Heritage Section */}
      <section className="py-20 bg-spiritual-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6">
                Rooted in Sacred {APP_CONFIG.contact.address.city}
              </h2>
              <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed mb-6">
                Located in the heart of {APP_CONFIG.contact.address.city}, one of {APP_CONFIG.contact.address.state}'s most revered spiritual destinations, 
                our facility is blessed by the divine energy that flows through this sacred town. 
                The proximity to the famous Palani Murugan Temple infuses our products with 
                spiritual significance and authentic temple-quality standards.
              </p>
              
              <div className="bg-spiritual-pure rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-spiritual-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                      Our Location
                    </h4>
                    <p className="text-spiritual-maroon font-sans-spiritual">
                      {APP_CONFIG.contact.address.street}<br />
                      {APP_CONFIG.contact.address.city} {APP_CONFIG.contact.address.pincode}, {APP_CONFIG.contact.address.state}<br />
                      {APP_CONFIG.contact.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/Products/sacred-palani.png"
                alt="Palani temple and spiritual heritage"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spiritual-maroon/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-spiritual-pure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-spiritual-maroon rounded-2xl p-12 text-spiritual-pure"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Our Quality Promise
            </h2>
            <p className="text-lg text-spiritual-pure/90 font-sans-spiritual leading-relaxed mb-8 max-w-3xl mx-auto">
              Every product that bears the {APP_CONFIG.business.name} name undergoes rigorous quality checks and 
              is crafted using traditional methods. We promise temple-grade purity, authentic ingredients, 
              and the spiritual essence that makes our products truly special.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-spiritual-maroon" />
                </div>
                <h4 className="font-serif-spiritual font-semibold mb-2">100% Natural</h4>
                <p className="text-spiritual-pure/80 font-sans-spiritual text-sm">
                  No artificial additives or chemicals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-spiritual-maroon" />
                </div>
                <h4 className="font-serif-spiritual font-semibold mb-2">Temple Grade</h4>
                <p className="text-spiritual-pure/80 font-sans-spiritual text-sm">
                  Meets the highest purity standards
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-spiritual-maroon" />
                </div>
                <h4 className="font-serif-spiritual font-semibold mb-2">Made with Devotion</h4>
                <p className="text-spiritual-pure/80 font-sans-spiritual text-sm">
                  Crafted with spiritual reverence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-spiritual-sandalwood">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6">
              Connect with Us
            </h2>
            <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed">
              We'd love to hear from you. Whether you have questions about our products, 
              need bulk orders for your temple, or want to learn more about our spiritual heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-spiritual-pure rounded-2xl p-6 text-center shadow-lg"
            >
              <Phone className="w-8 h-8 text-spiritual-gold mx-auto mb-4" />
              <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                Call Us
              </h4>
              <p className="text-spiritual-maroon font-sans-spiritual">
                {APP_CONFIG.contact.phone.display}
              </p>
              <p className="text-spiritual-maroon/60 font-sans-spiritual text-sm mt-1">
                WhatsApp Available
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-spiritual-pure rounded-2xl p-6 text-center shadow-lg"
            >
              <Mail className="w-8 h-8 text-spiritual-gold mx-auto mb-4" />
              <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                Email Us
              </h4>
              <p className="text-spiritual-maroon font-sans-spiritual">
                {APP_CONFIG.contact.email.primary}
              </p>
              <p className="text-spiritual-maroon/60 font-sans-spiritual text-sm mt-1">
                24/7 Support
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-spiritual-pure rounded-2xl p-6 text-center shadow-lg"
            >
              <MapPin className="w-8 h-8 text-spiritual-gold mx-auto mb-4" />
              <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                Visit Us
              </h4>
              <p className="text-spiritual-maroon font-sans-spiritual text-sm">
                {APP_CONFIG.contact.address.street}<br />
                {APP_CONFIG.contact.address.city} {APP_CONFIG.contact.address.pincode}, {APP_CONFIG.contact.address.state}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 bg-spiritual-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-4">
              Ready to Experience Our Sacred Products?
            </h3>
            <p className="text-spiritual-maroon/80 font-sans-spiritual mb-8">
              Discover our collection of temple-quality spiritual essentials, crafted with four decades of devotion.
            </p>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-spiritual-gold text-spiritual-maroon px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-gold-light transition-all duration-300 mx-auto"
              >
                <Home className="w-6 h-6" />
                <span>Explore Our Sacred Collection</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;