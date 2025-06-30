import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';

const CartDrawer: React.FC = () => {
  const navigate = useNavigate();
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, getCartTotal } = useStore();

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25
      }
    }
  };

  const handleQuantityDecrease = (item: any) => {
    const newQuantity = Math.max(item.minQuantity, item.quantity - item.quantityIncrement);
    updateQuantity(item.id, newQuantity);
  };

  const handleQuantityIncrease = (item: any) => {
    const newQuantity = item.quantity + item.quantityIncrement;
    updateQuantity(item.id, newQuantity);
  };

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 h-full w-96 bg-spiritual-pure shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-spiritual-sandy-light">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-6 h-6 text-spiritual-gold" />
                <h2 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
                  Sacred Cart
                </h2>
              </div>
              <motion.button
                onClick={toggleCart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-spiritual-sandy-light rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-spiritual-maroon" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-spiritual-sandalwood mx-auto mb-4" />
                  <p className="text-spiritual-maroon/60 font-sans-spiritual">
                    Your sacred cart is empty
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-spiritual-warm rounded-lg p-4"
                    >
                      <div className="flex items-start space-x-4 mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif-spiritual font-semibold text-spiritual-maroon text-sm">
                            {item.name}
                          </h3>
                          <p className="text-xs text-spiritual-maroon/70 font-sans-spiritual">
                            ₹{item.price} per {item.unit}
                          </p>
                          
                          {/* Order Requirements Info */}
                          <div className="flex items-center space-x-1 mt-1">
                            <Info className="w-3 h-3 text-spiritual-gold" />
                            <span className="text-xs text-spiritual-maroon/60 font-sans-spiritual">
                              Min: {item.minQuantity}, Step: {item.quantityIncrement}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-spiritual-maroon/50 hover:text-spiritual-maroon transition-colors duration-200 flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <motion.button
                            onClick={() => handleQuantityDecrease(item)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={item.quantity <= item.minQuantity}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                              item.quantity <= item.minQuantity
                                ? 'bg-spiritual-sandalwood/50 text-spiritual-maroon/30 cursor-not-allowed'
                                : 'bg-spiritual-sandalwood text-spiritual-maroon hover:bg-spiritual-sandy-light'
                            }`}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          
                          <div className="text-center min-w-[3rem]">
                            <span className="font-semibold text-spiritual-maroon">
                              {item.quantity}
                            </span>
                            <div className="text-xs text-spiritual-maroon/60 font-sans-spiritual">
                              {item.unit}{item.quantity > 1 ? 's' : ''}
                            </div>
                          </div>
                          
                          <motion.button
                            onClick={() => handleQuantityIncrease(item)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-spiritual-gold text-spiritual-pure rounded-full flex items-center justify-center hover:bg-spiritual-gold-light transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold text-spiritual-maroon">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-xs text-spiritual-maroon/60 font-sans-spiritual">
                            Total
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-spiritual-sandy-light p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-serif-spiritual text-lg font-semibold text-spiritual-maroon">
                    Total:
                  </span>
                  <span className="font-serif-spiritual text-2xl font-bold text-spiritual-gold">
                    ₹{getCartTotal().toLocaleString()}
                  </span>
                </div>
                
                <motion.button
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-spiritual-maroon text-spiritual-pure py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-maroon-light transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-spiritual-gold text-spiritual-gold py-3 rounded-full font-sans-spiritual font-semibold hover:bg-spiritual-gold hover:text-spiritual-pure transition-all duration-300"
                >
                  Request Bulk Quote
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;