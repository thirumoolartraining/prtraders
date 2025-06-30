import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Star } from 'lucide-react';
import { APP_CONFIG, getWhatsAppUrl } from '../../config/appConfig';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spiritual-maroon text-spiritual-pure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="P R Traders Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">{APP_CONFIG.business.name}</h3>
                <p className="text-spiritual-pure/80 text-sm font-sans-spiritual">{APP_CONFIG.business.tagline}</p>
              </div>
            </div>
            <p className="text-spiritual-pure/80 font-sans-spiritual leading-relaxed mb-6">
              {APP_CONFIG.business.description}
            </p>
            <div className="flex items-center space-x-2 text-spiritual-gold">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <span className="text-spiritual-pure/80 text-sm ml-2">Trusted by thousands</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif-spiritual text-lg font-semibold mb-6">Sacred Products</h4>
            <ul className="space-y-3">
              {['Premium Rose Water', 'Sandalwood Incense', 'Jasmine Incense', 'Pure Camphor', 'Temple Essentials', 'Bulk Orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-spiritual-pure/80 hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif-spiritual text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Story', href: '/about' },
                { name: 'Quality Promise', href: '/about' },
                { name: 'Temple Partners', href: '#' },
                { name: 'Wholesale', href: '#' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      className="text-spiritual-pure/80 hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-spiritual-pure/80 hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif-spiritual text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-spiritual-gold mt-1" />
                <div>
                  <p className="font-sans-spiritual">{APP_CONFIG.contact.phone.display}</p>
                  <p className="text-spiritual-pure/80 text-sm font-sans-spiritual">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-spiritual-gold mt-1" />
                <div>
                  <p className="font-sans-spiritual">{APP_CONFIG.contact.email.primary}</p>
                  <p className="text-spiritual-pure/80 text-sm font-sans-spiritual">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-spiritual-gold mt-1" />
                <div>
                  <p className="font-sans-spiritual">{APP_CONFIG.contact.address.street}</p>
                  <p className="font-sans-spiritual">{APP_CONFIG.contact.address.city} {APP_CONFIG.contact.address.pincode}, {APP_CONFIG.contact.address.state}</p>
                  <p className="text-spiritual-pure/80 text-sm font-sans-spiritual">Pan-India Delivery</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-sans-spiritual mt-6 hover:bg-green-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-spiritual-pure/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Policy Links - Horizontal */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-spiritual-pure/80 font-sans-spiritual text-sm">
              <Link 
                to="/privacy-policy" 
                className="hover:text-spiritual-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-spiritual-pure/40">|</span>
              <Link 
                to="/terms-conditions" 
                className="hover:text-spiritual-gold transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <span className="text-spiritual-pure/40">|</span>
              <Link 
                to="/shipping-policy" 
                className="hover:text-spiritual-gold transition-colors duration-300"
              >
                Shipping Policy
              </Link>
              <span className="text-spiritual-pure/40">|</span>
              <Link 
                to="/cancellation-refund" 
                className="hover:text-spiritual-gold transition-colors duration-300"
              >
                Cancellation & Refund
              </Link>
            </div>
            <div className="text-spiritual-pure/80 font-sans-spiritual text-sm">
              © 2024 {APP_CONFIG.business.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;