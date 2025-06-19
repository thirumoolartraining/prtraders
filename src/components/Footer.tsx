import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/20250617_2030_Regal Camphor Logo_simple_compose_01jxz6dtfbek2aat9xwdk710fz.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-camphor-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img 
                src={logo} 
                alt="P R Traders Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                sizes="(max-width: 640px) 40px, 48px"
              />
              <div>
                <h3 className="font-inter font-bold text-xl sm:text-2xl">P R Traders</h3>
                <p className="text-camphor-white/70 text-sm">Premium Camphor Since 1994</p>
              </div>
            </div>
            
            <p className="text-camphor-white/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Leading camphor wholesaler and exporter from India, serving distributors, manufacturers, and importers worldwide with temple-grade purity and industrial reliability.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-camphor-white/10 rounded-full flex items-center justify-center hover:bg-forest-green transition-colors duration-150">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-camphor-white/10 rounded-full flex items-center justify-center hover:bg-forest-green transition-colors duration-150">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-camphor-white/10 rounded-full flex items-center justify-center hover:bg-forest-green transition-colors duration-150">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-camphor-white/10 rounded-full flex items-center justify-center hover:bg-forest-green transition-colors duration-150">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#products" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">Products</a></li>
              <li><a href="#quality" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">Quality Assurance</a></li>
              <li><Link to="/about" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">About Us</Link></li>
              <li><Link to="/contact" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">Contact</Link></li>
              <li><Link to="/support" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-lg mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-forest-green mt-1 flex-shrink-0" size={16} />
                <div className="text-sm sm:text-base">
                  <p className="text-camphor-white/80">100B, East Car Street</p>
                  <p className="text-camphor-white/80">Palani 624 601, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-forest-green flex-shrink-0" size={16} />
                <a href="tel:+918122800658" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base">
                  +91 81228 00658
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-forest-green flex-shrink-0" size={16} />
                <a href="mailto:info@prtraders.com" className="text-camphor-white/80 hover:text-camphor-white transition-colors duration-150 text-sm sm:text-base break-all">
                  info@prtraders.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="text-forest-green flex-shrink-0" size={16} />
                <span className="text-camphor-white/80 text-sm sm:text-base">www.prtraders.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-camphor-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-camphor-white/60 text-xs sm:text-sm text-center lg:text-left">
              <p>GSTIN: 33BTWPN7631L1ZX | © 2024 P R Traders. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy" className="text-camphor-white/60 hover:text-camphor-white transition-colors duration-150">Privacy Policy</Link>
              <Link to="/terms" className="text-camphor-white/60 hover:text-camphor-white transition-colors duration-150">Terms & Conditions</Link>
              <Link to="/shipping" className="text-camphor-white/60 hover:text-camphor-white transition-colors duration-150">Shipping Policy</Link>
              <Link to="/cancellation-refund" className="text-camphor-white/60 hover:text-camphor-white transition-colors duration-150">Cancellation & Refund</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;