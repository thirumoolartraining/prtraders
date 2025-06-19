import React from 'react';
import { ArrowLeft, Clock, Award, Users, Heart, Leaf, Mountain, Star, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Heritage = () => {
  const milestones = [
    {
      year: "1994",
      title: "Sacred Beginnings",
      description: "Founded in the holy town of Palani, where Lord Murugan's temple has blessed devotees for centuries. Our journey began with a simple mission: to provide the purest camphor for sacred rituals.",
      icon: Mountain
    },
    {
      year: "1998",
      title: "Temple Recognition",
      description: "Major temples across Tamil Nadu began sourcing our camphor, recognizing our commitment to maintaining traditional purity standards that honor ancient practices.",
      icon: Star
    },
    {
      year: "2003",
      title: "Artisan Mastery",
      description: "Perfected our traditional purification methods, combining time-honored techniques with modern quality control to achieve consistent temple-grade purity.",
      icon: Award
    },
    {
      year: "2008",
      title: "Cultural Preservation",
      description: "Established partnerships with traditional camphor artisans, ensuring ancient knowledge and techniques are preserved for future generations.",
      icon: Users
    },
    {
      year: "2015",
      title: "Global Heritage",
      description: "Began serving Indian diaspora communities worldwide, carrying the essence of our sacred traditions to temples and homes across continents.",
      icon: Globe
    },
    {
      year: "2024",
      title: "Legacy Continues",
      description: "Three decades later, we remain guardians of purity, bridging ancient wisdom with modern needs while never compromising on our sacred commitment.",
      icon: Heart
    }
  ];

  const traditions = [
    {
      title: "Sacred Sourcing",
      description: "Our camphor is sourced from the finest natural materials, following traditional methods that have been passed down through generations of artisans.",
      icon: Leaf
    },
    {
      title: "Ritual Purity",
      description: "Every batch undergoes purification processes that honor ancient Vedic principles, ensuring our camphor maintains its spiritual potency.",
      icon: Star
    },
    {
      title: "Temple Standards",
      description: "We maintain the exacting standards required by India's most sacred temples, where purity is not just quality—it's devotion.",
      icon: Mountain
    },
    {
      title: "Cultural Continuity",
      description: "By preserving traditional camphor-making techniques, we ensure that future generations can experience authentic spiritual practices.",
      icon: Clock
    }
  ];

  const values = [
    {
      title: "Devotion to Purity",
      description: "Our commitment goes beyond business—it's a sacred duty to provide camphor worthy of the divine.",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "Respect for Tradition",
      description: "We honor the ancient wisdom of our ancestors while embracing modern quality assurance.",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Community Connection",
      description: "From local temples to global communities, we serve as a bridge connecting hearts to heritage.",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Spiritual Responsibility",
      description: "Every product carries the weight of tradition and the promise of authentic spiritual experience.",
      color: "bg-green-100 text-green-800"
    }
  ];

  const scrollToProducts = () => {
    // Navigate to home page and scroll to products section
    window.location.href = '/#products';
  };

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
              <Mountain className="text-forest-green" size={20} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal">Discover Our Heritage</h1>
              <p className="text-charcoal/70 text-sm sm:text-base">30 years of sacred tradition and pure devotion</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-forest-green/5 to-mint-tint/50 border-l-4 border-forest-green p-6 sm:p-8 lg:p-12 rounded-r-lg mb-8 sm:mb-12">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4 sm:mb-6">
            Where Sacred Tradition Meets Pure Excellence
          </h2>
          <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
            In the sacred town of Palani, where Lord Murugan's divine presence has blessed devotees for millennia, 
            P R Traders was born from a profound reverence for tradition and an unwavering commitment to purity. 
            Our story is not just about business—it's about preserving the sacred essence that connects hearts to the divine.
          </p>
          <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg lg:text-xl">
            For three decades, we have been guardians of an ancient craft, ensuring that every grain of camphor 
            we produce carries the spiritual potency and purity that our ancestors demanded. This is our heritage—
            a legacy of devotion, tradition, and uncompromising quality.
          </p>
        </div>

        {/* Sacred Origins */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
            Sacred Origins in Palani
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6">
                The Holy Land of Lord Murugan
              </h3>
              <p className="text-charcoal/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Palani is not just our home—it's one of India's most sacred pilgrimage sites, where millions of devotees 
                come to seek Lord Murugan's blessings. The very air here is infused with centuries of prayers, rituals, 
                and spiritual energy. It was in this divine atmosphere that P R Traders took root.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Our founder understood that camphor used in sacred rituals must be more than just pure—it must be 
                blessed by the very environment in which it's created. Every day, as temple bells ring across Palani 
                and devotional chants fill the air, our camphor absorbs this spiritual essence.
              </p>
              <div className="bg-mint-tint/30 p-4 sm:p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2 sm:mb-3 text-sm sm:text-base">The Divine Connection</h4>
                <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed">
                  "In Palani, we don't just make camphor—we participate in a sacred tradition that has blessed 
                  countless souls for generations. Every product carries the divine energy of this holy land."
                </p>
              </div>
            </div>
            <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="text-forest-green" size={28} />
                </div>
                <h4 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2">Palani's Spiritual Legacy</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                  <span className="text-charcoal/80 text-sm">One of the six sacred abodes of Lord Murugan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                  <span className="text-charcoal/80 text-sm">Millions of pilgrims visit annually</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                  <span className="text-charcoal/80 text-sm">Center of Tamil spiritual culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                  <span className="text-charcoal/80 text-sm">Ancient traditions preserved for centuries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
            Our Sacred Journey
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center">
                      <milestone.icon className="text-forest-green" size={24} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal">{milestone.title}</h3>
                      <span className="text-forest-green font-bold text-lg sm:text-xl">{milestone.year}</span>
                    </div>
                    <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Traditions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
            Sacred Traditions We Preserve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {traditions.map((tradition, index) => (
              <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-forest-green/10 rounded-full flex items-center justify-center group-hover:bg-forest-green group-hover:text-camphor-white transition-colors duration-300">
                    <tradition.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">{tradition.title}</h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{tradition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
            Values That Guide Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${value.color}`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-lg text-charcoal mb-2">{value.title}</h3>
                    <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Artisan's Touch */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
              The Artisan's Sacred Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6">
                  Masters of Ancient Craft
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Our camphor is crafted by master artisans who have inherited their skills through generations. 
                  These guardians of tradition understand that creating sacred camphor is not just a process—it's a meditation, 
                  a prayer, and a responsibility to the divine.
                </p>
                <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                  Each step of our purification process is performed with reverence and precision. From the initial 
                  selection of raw materials to the final blessing of each batch, our artisans infuse their devotion 
                  into every grain of camphor they create.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-camphor-white p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Shield className="text-forest-green mr-2" size={16} />
                    Traditional Purification
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Seven-stage purification process following ancient Vedic principles
                  </p>
                </div>
                <div className="bg-camphor-white p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Heart className="text-forest-green mr-2" size={16} />
                    Devotional Crafting
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Each batch is created with prayers and mantras for spiritual potency
                  </p>
                </div>
                <div className="bg-camphor-white p-4 sm:p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Award className="text-forest-green mr-2" size={16} />
                    Master Artisans
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Skilled craftsmen with decades of experience in sacred camphor creation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Heritage */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center flex items-center justify-center">
              <Globe className="text-forest-green mr-3" size={28} />
              Carrying Heritage Across Continents
            </h2>
            <div className="text-center mb-8">
              <p className="text-charcoal/80 leading-relaxed max-w-4xl mx-auto text-base sm:text-lg">
                Today, our sacred camphor travels from the holy hills of Palani to temples and homes across the world, 
                carrying with it the essence of our heritage and the blessings of our ancestors.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="text-forest-green" size={24} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2">Sacred Source</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">
                  From the holy land of Palani, where tradition and divinity converge
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-forest-green" size={24} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2">Cultural Bridge</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">
                  Connecting diaspora communities to their spiritual roots and traditions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-forest-green" size={24} />
                </div>
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2">Global Devotion</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">
                  Serving temples and devotees across 25+ countries with authentic purity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-forest-green to-shade-forest rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-camphor-white">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
            Be Part of Our Sacred Legacy
          </h2>
          <p className="text-camphor-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
            When you choose P R Traders, you're not just buying camphor—you're becoming part of a sacred tradition 
            that has blessed countless souls for three decades. Experience the purity, devotion, and heritage 
            that makes our camphor truly divine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProducts}
              className="bg-camphor-white text-forest-green px-8 py-3 rounded-full font-medium hover:bg-camphor-white/90 transition-all duration-150 hover:shadow-lg text-sm sm:text-base"
            >
              Explore Our Sacred Products
            </button>
            <Link 
              to="/contact"
              className="border-2 border-camphor-white text-camphor-white px-8 py-3 rounded-full font-medium hover:bg-camphor-white hover:text-forest-green transition-all duration-150 text-sm sm:text-base inline-block"
            >
              Connect With Our Heritage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;