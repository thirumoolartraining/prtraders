import React from 'react';
import { motion } from 'framer-motion';
import { X, Package } from 'lucide-react';
import { useStore } from '../../store/useStore';
import QuantitySelector from './QuantitySelector';

interface OrderSummaryProps {
  editable?: boolean;
  showConstraints?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  editable = true, 
  showConstraints = false 
}) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="bg-spiritual-pure rounded-2xl p-8 text-center">
        <Package className="w-16 h-16 text-spiritual-sandalwood mx-auto mb-4" />
        <h3 className="font-serif-spiritual text-xl font-semibold text-spiritual-maroon mb-2">
          Your cart is empty
        </h3>
        <p className="text-spiritual-maroon/60 font-sans-spiritual">
          Add some sacred products to continue
        </p>
      </div>
    );
  }

  return (
    <div className="bg-spiritual-pure rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
          Order Summary
        </h3>
        <span className="text-sm text-spiritual-maroon/60 font-sans-spiritual">
          {cart.length} item{cart.length > 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-6">
        {cart.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-b border-spiritual-sandy-light pb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon">
                      {item.name}
                    </h4>
                    <p className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
                      ₹{item.price} per {item.unit}
                    </p>
                  </div>
                  
                  {editable && (
                    <motion.button
                      onClick={() => removeFromCart(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-spiritual-maroon/50 hover:text-spiritual-maroon transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>

                {/* Spiritual Properties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.spiritualProperties.slice(0, 2).map((property) => (
                    <span
                      key={property}
                      className="text-xs bg-spiritual-rose-light text-spiritual-maroon px-2 py-1 rounded-full font-sans-spiritual"
                    >
                      {property}
                    </span>
                  ))}
                </div>

                {/* Quantity Controls or Display */}
                {editable ? (
                  <QuantitySelector
                    product={item}
                    currentQuantity={item.quantity}
                    onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
                    showConstraints={showConstraints}
                  />
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
                      Quantity: {item.quantity} {item.unit}{item.quantity > 1 ? 's' : ''}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-spiritual-maroon">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                )}

                {/* Total for this item (when editable) */}
                {editable && (
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-spiritual-sandy-light">
                    <span className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
                      Item Total:
                    </span>
                    <span className="font-semibold text-spiritual-maroon">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Total */}
      <div className="mt-6 pt-6 border-t border-spiritual-sandy-light">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-spiritual-maroon/70 font-sans-spiritual">
              Subtotal:
            </span>
            <span className="font-semibold text-spiritual-maroon">
              ₹{getCartTotal().toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-spiritual-maroon/70 font-sans-spiritual">
              Shipping:
            </span>
            <span className="text-spiritual-gold font-sans-spiritual font-semibold">
              Calculated at checkout
            </span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-spiritual-sandy-light">
            <span className="font-serif-spiritual text-lg font-bold text-spiritual-maroon">
              Total:
            </span>
            <span className="font-serif-spiritual text-xl font-bold text-spiritual-gold">
              ₹{getCartTotal().toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;