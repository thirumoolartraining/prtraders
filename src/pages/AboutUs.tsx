import React from 'react';
import { ArrowLeft, Award, Users, Globe, Factory, Leaf, Shield, Target, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const milestones = [
    {
      year: "1994",
      title: "Foundation",
      description: "P R Traders was established in Palani with a vision to provide pure, temple-grade camphor to the world."
    },
    {
      year: "2005",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification, establishing our commitment to quality management systems."
    },
    {
      year: "2012",
      title: "Export Expansion",
      description: "Began international exports, serving customers across Asia, Europe, and the Americas."
    },
    {
      year: "2018",
      title: "Modern Facility",
      description: "Upgraded to state-of-the-art manufacturing facility with advanced quality control systems."
    },
    {
      year: "2024",
      title: "30 Years Strong",
      description: "Celebrating three decades of excellence with over 25 countries served and countless satisfied customers."
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Purity First",
      description: "We maintain the highest standards of purity in every product, ensuring temple-grade quality that meets spiritual and industrial needs."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Our rigorous quality control processes and certifications guarantee consistent excellence in every batch we produce."
    },
    {
      icon: Heart,
      title: "Customer Commitment",
      description: "Building lasting relationships through reliable service, transparent communication, and unwavering support for our clients' success."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From our roots in Palani, we've grown to serve customers worldwide while maintaining our commitment to traditional values."
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "30+",
      label: "Years of Excellence",
      description: "Three decades of trusted service"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local values"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Satisfied Customers",
      description: "Building lasting partnerships"
    },
    {
      icon: Factory,
      number: "99.9%",
      label: "Purity Standard",
      description: "Temple-grade quality assured"
    }
  ];

  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl">
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-forest-green hover:text-shade-forest transition-colors duration-150 mb-4 sm:mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
              <Users className="text-forest-green" size={20} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal">About Us</h1>
              <p className="text-charcoal/70 text-sm sm:text-base">30 years of purity, tradition, and excellence</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-mint-tint/50 border-l-4 border-forest-green p-4 sm:p-6 lg:p-8 rounded-r-lg mb-8 sm:mb-12">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-3 sm:mb-4">
            Preserving Tradition, Embracing Excellence
          </h2>
          <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
            For over three decades, P R Traders has been synonymous with pure, high-quality camphor products. 
            Founded in 1994 in the sacred town of Palani, Tamil Nadu, we began with a simple yet profound mission: 
            to provide temple-grade camphor that honors both spiritual traditions and modern industrial requirements.
          </p>
          <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base lg:text-lg">
            What started as a local business rooted in devotion and quality has grown into a trusted global supplier, 
            serving customers across 25+ countries while never compromising on the purity and authenticity that defines our brand.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="text-forest-green" size={20} />
              </div>
              <h3 className="font-inter font-bold text-2xl sm:text-3xl text-forest-green mb-2">{stat.number}</h3>
              <p className="font-semibold text-charcoal mb-1 text-sm sm:text-base">{stat.label}</p>
              <p className="text-xs sm:text-sm text-charcoal/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">Our Journey</h2>
          <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-6 sm:mb-8">
              <div>
                <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-3 sm:mb-4">From Sacred Beginnings</h3>
                <p className="text-charcoal/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  P R Traders was born from a deep respect for tradition and an unwavering commitment to quality. 
                  Located in Palani, a town renowned for its spiritual significance and the famous Murugan temple, 
                  we understood the sacred importance of pure camphor in religious ceremonies and daily rituals.
                </p>
                <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  Our founder recognized that the market needed a reliable source of authentic, high-purity camphor 
                  that could serve both traditional spiritual needs and modern industrial applications. This vision 
                  became the cornerstone of our business philosophy.
                </p>
              </div>
              <div className="bg-mint-tint/30 p-4 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2 sm:mb-3 text-sm sm:text-base">Our Mission</h4>
                <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  To be the world's most trusted supplier of premium camphor products, bridging the gap between 
                  traditional purity and modern quality standards while serving customers with integrity and excellence.
                </p>
                <h4 className="font-semibold text-charcoal mb-2 sm:mb-3 text-sm sm:text-base">Our Vision</h4>
                <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed">
                  To preserve and promote the authentic essence of camphor while expanding our global reach, 
                  ensuring that every product we deliver meets the highest standards of purity and quality.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-t border-pale-sage pt-6 sm:pt-8">
              <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6 text-center">Key Milestones</h3>
              <div className="space-y-4 sm:space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-forest-green text-xs sm:text-sm">{milestone.year}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-charcoal text-base sm:text-lg mb-1 sm:mb-2">{milestone.title}</h4>
                      <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-green/10 rounded-full flex items-center justify-center group-hover:bg-forest-green group-hover:text-camphor-white transition-colors duration-300">
                    <value.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality & Certifications */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-4 sm:mb-6 text-center flex items-center justify-center">
              <Shield className="text-forest-green mr-2 sm:mr-3" size={24} />
              Quality & Certifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-3 sm:mb-4">Our Quality Promise</h3>
                <p className="text-charcoal/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Quality is not just a standard for us—it's our identity. Every batch of camphor undergoes rigorous 
                  testing and quality control processes to ensure it meets our exacting standards of 99.9% purity.
                </p>
                <ul className="space-y-2 text-charcoal/80 text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>State-of-the-art testing laboratories</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Multi-stage purification processes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Continuous quality monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Traceability from source to delivery</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-3 sm:mb-4">Certifications & Standards</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-mint-tint/30 p-3 sm:p-4 rounded-lg text-center">
                    <Award className="text-forest-green mx-auto mb-2" size={20} />
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">ISO 9001:2015</p>
                    <p className="text-xs text-charcoal/70">Quality Management</p>
                  </div>
                  <div className="bg-mint-tint/30 p-3 sm:p-4 rounded-lg text-center">
                    <Shield className="text-forest-green mx-auto mb-2" size={20} />
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">GMP Certified</p>
                    <p className="text-xs text-charcoal/70">Manufacturing Standards</p>
                  </div>
                  <div className="bg-mint-tint/30 p-3 sm:p-4 rounded-lg text-center">
                    <Globe className="text-forest-green mx-auto mb-2" size={20} />
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">Export License</p>
                    <p className="text-xs text-charcoal/70">Global Trade Approved</p>
                  </div>
                  <div className="bg-mint-tint/30 p-3 sm:p-4 rounded-lg text-center">
                    <Target className="text-forest-green mx-auto mb-2" size={20} />
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">Quality Assured</p>
                    <p className="text-xs text-charcoal/70">Temple-Grade Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-4 sm:mb-6 text-center flex items-center justify-center">
              <Globe className="text-forest-green mr-2 sm:mr-3" size={24} />
              Global Reach, Local Values
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <TrendingUp className="text-forest-green" size={20} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">Growing Presence</h3>
                <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  From our humble beginnings in Palani, we now serve customers across Asia, Europe, Americas, 
                  and other regions, maintaining the same commitment to quality that started our journey.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="text-forest-green" size={20} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">Diverse Applications</h3>
                <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  Our camphor serves various industries—from traditional temples and religious ceremonies 
                  to modern aromatherapy, pharmaceuticals, and industrial applications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="text-forest-green" size={20} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">Customer-Centric</h3>
                <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  Every relationship we build is based on trust, transparency, and mutual respect. 
                  Our customers aren't just buyers—they're partners in our journey of excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-3 sm:mb-4">Join Our Legacy</h2>
          <p className="text-charcoal/80 leading-relaxed max-w-4xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
            Whether you're a distributor, manufacturer, temple, or individual customer, we invite you to experience 
            the P R Traders difference. Discover why thousands of customers worldwide trust us for their camphor needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-forest-green text-camphor-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 hover:shadow-lg text-sm sm:text-base"
            >
              Get in Touch
            </Link>
            <button className="border-2 border-forest-green text-forest-green px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150 text-sm sm:text-base">
              View Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;