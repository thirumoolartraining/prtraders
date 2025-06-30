import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Phone, Menu } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { APP_CONFIG, getWhatsAppUrl } from '../../config/appConfig';
import { scrollToElement } from '../../utils/scrollUtils';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleCart, getCartItemsCount } = useStore();
  const cartItemsCount = getCartItemsCount();

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to products
      scrollToElement('products');
    } else {
      // Navigate to home page with products hash
      navigate('/#products');
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-spiritual-pure shadow-md border-b border-spiritual-sandy-light sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="P R Traders Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-spiritual-maroon">
                {APP_CONFIG.business.name}
              </h1>
              <p className="text-xs text-spiritual-maroon/70 font-sans-spiritual">
                {APP_CONFIG.business.tagline}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-spiritual-maroon hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual">
              Home
            </Link>
            <a 
              href="#products" 
              onClick={handleProductsClick}
              className="text-spiritual-maroon hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual cursor-pointer"
            >
              Products
            </a>
            <Link to="/about" className="text-spiritual-maroon hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual">
              About
            </Link>
            <Link to="/contact" className="text-spiritual-maroon hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* WhatsApp */}
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-sans-spiritual hover:bg-green-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </motion.a>

            {/* Cart */}
            <motion.button
              onClick={toggleCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 bg-spiritual-gold text-spiritual-pure rounded-full hover:bg-spiritual-gold-light transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-spiritual-maroon text-spiritual-pure text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-spiritual-maroon">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;