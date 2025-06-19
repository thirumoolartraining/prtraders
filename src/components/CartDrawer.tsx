import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../lib/useCartStore';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, updateQty, removeItem, clear, getTotalItems, getTotalAmount } = useCartStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const handleQuantityChange = (id: string, newQty: number) => {
    if (newQty >= 10 && newQty <= 100) {
      updateQty(id, newQty);
    }
  };

  if (!isOpen) return null;

  const totalItems = getTotalItems();
  const totalAmount = getTotalAmount();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
      
      <div 
        className="absolute right-0 top-0 h-full w-full sm:w-96 lg:w-[384px] bg-camphor-white shadow-2xl transform transition-transform"
        data-testid="cart-drawer"
        role="dialog"
        aria-labelledby="cart-drawer-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-pale-sage">
          <h2 id="cart-drawer-title" className="font-inter font-bold text-lg sm:text-xl text-charcoal flex items-center space-x-2">
            <ShoppingBag size={20} />
            <span>Shopping Cart</span>
            {totalItems > 0 && (
              <span className="bg-forest-green text-camphor-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-pale-sage/30 rounded-full transition-colors duration-150"
            aria-label="Close cart"
          >
            <X size={20} className="text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingBag size={48} className="text-charcoal/30 mb-4" />
              <h3 className="font-inter font-semibold text-lg text-charcoal mb-2">
                Your cart is empty
              </h3>
              <p className="text-charcoal/60 mb-6">
                Add some products to get started
              </p>
              <button
                onClick={onClose}
                className="bg-forest-green text-camphor-white px-6 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-mint-tint/20 rounded-lg p-4 border border-pale-sage/30">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-camphor-white rounded-lg flex items-center justify-center">
                        <ShoppingBag size={20} className="text-forest-green" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-inter font-semibold text-charcoal text-sm mb-1 truncate">
                          {item.name}
                        </h4>
                        <p className="text-forest-green font-bold text-sm">
                          {formatCurrency(item.price)}/kg
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mt-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.qty - 5)}
                            disabled={item.qty <= 10}
                            className="w-8 h-8 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          
                          <span className="font-mono font-bold text-sm min-w-[3rem] text-center">
                            {item.qty} kg
                          </span>
                          
                          <button
                            onClick={() => handleQuantityChange(item.id, item.qty + 5)}
                            disabled={item.qty >= 100}
                            className="w-8 h-8 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-2 p-1 text-red-500 hover:bg-red-50 rounded transition-colors duration-150"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold text-forest-green">
                          {formatCurrency(item.price * item.qty)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-pale-sage p-4 sm:p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-charcoal">Total:</span>
                  <span className="text-forest-green">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="w-full bg-forest-green text-camphor-white py-3 px-4 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Proceed to Checkout</span>
                  </Link>
                  
                  <button
                    onClick={clear}
                    className="w-full text-red-600 hover:text-red-700 py-2 text-sm font-medium transition-colors duration-150"
                  >
                    Empty Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;