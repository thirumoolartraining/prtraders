import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building, Shield, CheckSquare } from 'lucide-react';
import { useCheckoutStore } from '../../store/useCheckoutStore';
import { useStore } from '../../store/useStore';
import { PaymentMethod } from '../../types/checkout';

const paymentMethods = [
  {
    id: 'razorpay' as PaymentMethod,
    name: 'Online Payment',
    description: 'Pay securely with cards, UPI, wallets & net banking',
    icon: CreditCard,
    features: ['Instant confirmation', 'Secure encryption', 'Multiple options'],
    recommended: true
  },
  {
    id: 'cod' as PaymentMethod,
    name: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: Smartphone,
    features: ['Pay on delivery', 'No advance payment', 'Cash only'],
    note: 'Available for orders under ₹5,000'
  },
  {
    id: 'bank-transfer' as PaymentMethod,
    name: 'Bank Transfer',
    description: 'Direct bank transfer for bulk orders',
    icon: Building,
    features: ['For bulk orders', 'Bank details provided', 'Manual verification'],
    note: 'Recommended for orders above ₹10,000'
  }
];

const PaymentSection: React.FC = () => {
  const { 
    paymentMethod, 
    setPaymentMethod, 
    orderType, 
    termsAccepted, 
    setTermsAccepted, 
    errors 
  } = useCheckoutStore();
  
  const { getCartTotal } = useStore();
  const cartTotal = getCartTotal();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon mb-2">
          Payment Method
        </h3>
        <p className="text-spiritual-maroon/70 font-sans-spiritual">
          Choose your preferred payment method
        </p>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => {
          const isDisabled = 
            (method.id === 'cod' && (orderType === 'bulk-quote' || cartTotal > 5000)) ||
            (method.id === 'bank-transfer' && orderType === 'standard');

          return (
            <motion.div
              key={method.id}
              whileHover={!isDisabled ? { scale: 1.02 } : {}}
              whileTap={!isDisabled ? { scale: 0.98 } : {}}
              onClick={() => !isDisabled && setPaymentMethod(method.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                isDisabled
                  ? 'border-spiritual-sandy-light bg-spiritual-sandy-light/50 opacity-50 cursor-not-allowed'
                  : paymentMethod === method.id
                  ? 'border-spiritual-gold bg-spiritual-gold/10 shadow-lg'
                  : 'border-spiritual-sandy-light bg-spiritual-pure hover:border-spiritual-sandalwood'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${
                  isDisabled
                    ? 'bg-spiritual-sandy-light text-spiritual-maroon/50'
                    : paymentMethod === method.id
                    ? 'bg-spiritual-gold text-spiritual-pure'
                    : 'bg-spiritual-sandy-light text-spiritual-maroon'
                }`}>
                  <method.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon">
                      {method.name}
                    </h4>
                    {method.recommended && !isDisabled && (
                      <span className="text-xs bg-spiritual-gold text-spiritual-pure px-2 py-1 rounded-full font-sans-spiritual font-semibold">
                        Recommended
                      </span>
                    )}
                    {paymentMethod === method.id && (
                      <div className="w-2 h-2 bg-spiritual-gold rounded-full"></div>
                    )}
                  </div>
                  
                  <p className="text-sm text-spiritual-maroon/70 font-sans-spiritual mb-3">
                    {method.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {method.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-spiritual-rose-light text-spiritual-maroon px-2 py-1 rounded-full font-sans-spiritual"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {method.note && (
                    <p className="text-xs text-spiritual-maroon/60 font-sans-spiritual italic">
                      {method.note}
                    </p>
                  )}

                  {/* COD Limit Warning */}
                  {method.id === 'cod' && cartTotal > 5000 && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-xs text-red-600 font-sans-spiritual">
                        <strong>Not Available:</strong> Your order total (₹{cartTotal.toLocaleString()}) exceeds the ₹5,000 COD limit.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {errors.paymentMethod && (
        <p className="text-red-500 text-sm font-sans-spiritual">{errors.paymentMethod}</p>
      )}

      {/* Terms & Conditions Acceptance */}
      <div className="bg-spiritual-sandy-light rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <motion.button
            onClick={() => setTermsAccepted(!termsAccepted)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              termsAccepted
                ? 'bg-spiritual-gold border-spiritual-gold text-spiritual-pure'
                : 'border-spiritual-maroon/30 hover:border-spiritual-gold'
            }`}
          >
            {termsAccepted && <CheckSquare className="w-4 h-4" />}
          </motion.button>
          
          <div className="flex-1">
            <p className="text-sm text-spiritual-maroon font-sans-spiritual leading-relaxed">
              I agree to the{' '}
              <Link 
                to="/terms-conditions" 
                target="_blank"
                className="text-spiritual-gold hover:text-spiritual-gold-light font-semibold underline"
              >
                Terms & Conditions
              </Link>
              {' '}and{' '}
              <Link 
                to="/privacy-policy" 
                target="_blank"
                className="text-spiritual-gold hover:text-spiritual-gold-light font-semibold underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        
        {errors.termsAccepted && (
          <p className="text-red-500 text-xs mt-2 ml-9 font-sans-spiritual">{errors.termsAccepted}</p>
        )}
      </div>

      {/* Security Notice */}
      <div className="bg-spiritual-sandy-light rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-spiritual-gold" />
          <div>
            <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon text-sm">
              Secure Payment
            </h4>
            <p className="text-xs text-spiritual-maroon/70 font-sans-spiritual">
              All payments are processed securely with 256-bit SSL encryption. 
              Your payment information is never stored on our servers.
            </p>
          </div>
        </div>
      </div>

      {/* Bulk Quote Notice */}
      {orderType === 'bulk-quote' && (
        <div className="bg-spiritual-rose-light rounded-lg p-4">
          <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon text-sm mb-2">
            Bulk Quote Process
          </h4>
          <p className="text-xs text-spiritual-maroon/70 font-sans-spiritual">
            For bulk quote requests, our team will review your requirements and send you a 
            custom quote with payment instructions within 24 hours.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;