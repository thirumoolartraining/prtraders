import React from 'react';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center max-w-4xl">
        <div className="bg-camphor-white border border-pale-sage rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          
          <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            Order Submitted Successfully!
          </h1>
          
          <p className="text-charcoal/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for your order. Our sales team will contact you within 24 hours with payment instructions and delivery details.
          </p>

          <div className="bg-mint-tint/30 rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4">
              What happens next?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-forest-green text-camphor-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Order Review</h3>
                  <p className="text-sm text-charcoal/70">We'll review your order and confirm availability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-forest-green text-camphor-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Payment Details</h3>
                  <p className="text-sm text-charcoal/70">Receive invoice and payment instructions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-forest-green text-camphor-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Delivery</h3>
                  <p className="text-sm text-charcoal/70">Your order will be processed and shipped</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl p-6 sm:p-8 mb-8">
            <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4">
              Need immediate assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918122800658"
                className="flex items-center justify-center space-x-2 bg-forest-green text-camphor-white px-6 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150"
              >
                <Phone size={16} />
                <span>+91 8122 800658</span>
              </a>
              <a 
                href="mailto:info@prtraders.com"
                className="flex items-center justify-center space-x-2 border-2 border-forest-green text-forest-green px-6 py-3 rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150"
              >
                <Mail size={16} />
                <span>info@prtraders.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="bg-forest-green text-camphor-white px-8 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 flex items-center justify-center space-x-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-forest-green text-forest-green px-8 py-3 rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;