import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../lib/useCartStore';
import CartDrawer from './CartDrawer';
import logo from '../assets/20250617_2030_Regal Camphor Logo_simple_compose_01jxz6dtfbek2aat9xwdk710fz.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <>
      <header className="sticky top-0 z-40 bg-camphor-white/95 backdrop-blur-sm border-b border-pale-sage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={logo} 
                alt="P R Traders Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                sizes="(max-width: 640px) 40px, 48px"
              />
              <div>
                <h1 className="font-inter font-bold text-lg sm:text-xl text-charcoal">P R Traders</h1>
                <p className="text-xs text-charcoal/70 hidden sm:block">Premium Camphor Since 1994</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#products" className="text-charcoal hover:text-forest-green transition-colors duration-150 font-medium">Products</a>
              <a href="#quality" className="text-charcoal hover:text-forest-green transition-colors duration-150 font-medium">Quality</a>
              <Link to="/about" className="text-charcoal hover:text-forest-green transition-colors duration-150 font-medium">About</Link>
              <Link to="/contact" className="text-charcoal hover:text-forest-green transition-colors duration-150 font-medium">Contact</Link>
              <Link to="/support" className="text-charcoal hover:text-forest-green transition-colors duration-150 font-medium">Support</Link>
            </nav>

            <div className="flex items-center space-x-3 xl:space-x-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-charcoal hover:text-forest-green transition-colors duration-150"
                aria-label="Open shopping cart"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span 
                    data-testid="cart-badge"
                    className="absolute -top-1 -right-1 bg-forest-green text-camphor-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                  >
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              <div className="hidden lg:flex items-center">
                <Link 
                  to="/bulk-quote"
                  className="bg-forest-green text-camphor-white px-4 py-2 xl:px-6 xl:py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 hover:shadow-lg text-sm xl:text-base"
                >
                  Get Bulk Quote
                </Link>
              </div>

              <button 
                className="lg:hidden p-2 -mr-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-pale-sage">
              <nav className="flex flex-col space-y-4">
                <a href="#products" className="text-charcoal hover:text-forest-green transition-colors duration-150 py-2 font-medium">Products</a>
                <a href="#quality" className="text-charcoal hover:text-forest-green transition-colors duration-150 py-2 font-medium">Quality</a>
                <Link to="/about" className="text-charcoal hover:text-forest-green transition-colors duration-150 py-2 font-medium">About</Link>
                <Link to="/contact" className="text-charcoal hover:text-forest-green transition-colors duration-150 py-2 font-medium">Contact</Link>
                <Link to="/support" className="text-charcoal hover:text-forest-green transition-colors duration-150 py-2 font-medium">Support</Link>
                <div className="pt-4 border-t border-pale-sage">
                  <Link 
                    to="/bulk-quote"
                    className="w-full bg-forest-green text-camphor-white px-6 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 inline-block text-center"
                  >
                    Get Bulk Quote
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;