import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home, Package, CheckCircle, Mail } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useCheckoutStore } from '../store/useCheckoutStore';
import CheckoutSteps from '../components/Checkout/CheckoutSteps';
import OrderSummary from '../components/Checkout/OrderSummary';
import OrderTypeSelector from '../components/Checkout/OrderTypeSelector';
import CustomerInfoForm from '../components/Checkout/CustomerInfoForm';
import PaymentSection from '../components/Checkout/PaymentSection';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useStore();
  const { 
    currentStep, 
    setCurrentStep, 
    validateStep, 
    isProcessing, 
    setProcessing,
    orderType,
    paymentMethod,
    resetCheckout
  } = useCheckoutStore();

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart.length, navigate]);

  // Reset checkout state when component mounts
  useEffect(() => {
    resetCheckout();
  }, [resetCheckout]);

  const handleNextStep = () => {
    const cartTotal = getCartTotal();
    if (validateStep(currentStep, cartTotal)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        handlePlaceOrder();
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  const handlePlaceOrder = async () => {
    setProcessing(true);
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Move to confirmation step
      setCurrentStep(4);
    } catch (error) {
      console.error('Order processing failed:', error);
      alert('Order processing failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <OrderSummary editable={true} showConstraints={true} />
            <OrderTypeSelector />
          </div>
        );
      case 2:
        return <CustomerInfoForm />;
      case 3:
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <PaymentSection />
            <OrderSummary editable={false} />
          </div>
        );
      case 4:
        return (
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-6"
            >
              {orderType === 'bulk-quote' ? (
                <Mail className="w-10 h-10 text-spiritual-pure" />
              ) : (
                <CheckCircle className="w-10 h-10 text-spiritual-pure" />
              )}
            </motion.div>
            
            <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-4">
              {orderType === 'bulk-quote' ? 'Quote Request Submitted!' : 'Order Confirmed!'}
            </h2>
            
            <div className="max-w-md mx-auto space-y-4">
              {orderType === 'bulk-quote' ? (
                <p className="text-spiritual-maroon/70 font-sans-spiritual">
                  We will review your requirements and send you a custom quote within 24 hours.
                </p>
              ) : paymentMethod === 'bank-transfer' ? (
                <div className="space-y-3">
                  <p className="text-spiritual-maroon/70 font-sans-spiritual">
                    Thank you for your order! Please check your email for bank transfer details and payment instructions.
                  </p>
                  <div className="bg-spiritual-sandy-light rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-spiritual-gold">
                      <Mail className="w-5 h-5" />
                      <span className="font-sans-spiritual font-semibold text-sm">
                        Bank details sent to your email
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-spiritual-maroon/70 font-sans-spiritual">
                  Thank you for your order. You will receive a confirmation email shortly with tracking details.
                </p>
              )}
              
              {/* Order Summary for Confirmation */}
              <div className="bg-spiritual-sandalwood rounded-lg p-4 mt-6">
                <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                  Order Summary
                </h4>
                <div className="text-sm text-spiritual-maroon/80 font-sans-spiritual space-y-1">
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span>{cart.length} product{cart.length > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order Type:</span>
                    <span className="capitalize">{orderType.replace('-', ' ')}</span>
                  </div>
                  {orderType !== 'bulk-quote' && (
                    <div className="flex justify-between">
                      <span>Payment:</span>
                      <span className="capitalize">{paymentMethod.replace('-', ' ')}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-spiritual-maroon pt-2 border-t border-spiritual-maroon/20">
                    <span>Total:</span>
                    <span>₹{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Review Your Order';
      case 2: return 'Customer Information';
      case 3: return 'Payment Details';
      case 4: return 'Order Confirmation';
      default: return '';
    }
  };

  const getNextButtonText = () => {
    switch (currentStep) {
      case 1: return 'Continue to Customer Info';
      case 2: return 'Continue to Payment';
      case 3: return orderType === 'bulk-quote' ? 'Submit Quote Request' : 'Place Order';
      case 4: return 'Continue Shopping';
      default: return 'Next';
    }
  };

  if (cart.length === 0) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-spiritual-warm">
      {/* Header */}
      <div className="bg-spiritual-pure shadow-sm border-b border-spiritual-sandy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-spiritual-maroon hover:text-spiritual-gold transition-colors duration-300">
              <Home className="w-5 h-5" />
              <span className="font-sans-spiritual font-semibold">Back to Home</span>
            </Link>
            
            <h1 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
              Sacred Checkout
            </h1>
            
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CheckoutSteps currentStep={currentStep} onStepClick={handleStepClick} />

        <div className="mb-8">
          <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-2">
            {getStepTitle()}
          </h2>
          <p className="text-spiritual-maroon/70 font-sans-spiritual">
            Step {currentStep} of 4
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {getStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-spiritual-sandy-light">
          <motion.button
            onClick={currentStep === 1 ? () => navigate('/') : currentStep === 4 ? () => navigate('/') : handlePrevStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 border-2 border-spiritual-sandalwood text-spiritual-maroon rounded-full font-sans-spiritual font-semibold hover:border-spiritual-gold hover:bg-spiritual-sandy-light transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{currentStep === 1 || currentStep === 4 ? 'Back to Shopping' : 'Previous Step'}</span>
          </motion.button>

          {currentStep < 4 && (
            <motion.button
              onClick={handleNextStep}
              disabled={isProcessing}
              whileHover={!isProcessing ? { scale: 1.05 } : {}}
              whileTap={!isProcessing ? { scale: 0.95 } : {}}
              className={`flex items-center space-x-2 px-8 py-3 rounded-full font-sans-spiritual font-semibold transition-all duration-300 ${
                isProcessing
                  ? 'bg-spiritual-maroon/50 text-spiritual-pure/50 cursor-not-allowed'
                  : 'bg-spiritual-maroon text-spiritual-pure hover:bg-spiritual-maroon-light'
              }`}
            >
              <span>
                {isProcessing ? 'Processing...' : getNextButtonText()}
              </span>
              {!isProcessing && <ArrowRight className="w-5 h-5" />}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;