import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';

interface QuantityModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const QuantityModal: React.FC<QuantityModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(10);

  useEffect(() => {
    if (isOpen && product) {
      setQuantity(product.minimumOrder);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

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

  const handleQuantityChange = (newQuantity: number) => {
    if (!product) return;
    
    // Ensure quantity is within bounds
    const clampedQuantity = Math.max(
      product.minimumOrder, 
      Math.min(product.maximumOrder, newQuantity)
    );
    
    setQuantity(clampedQuantity);
  };

  const incrementQuantity = () => {
    if (!product) return;
    const newQuantity = quantity + product.quantityStep;
    if (newQuantity <= product.maximumOrder) {
      setQuantity(newQuantity);
    }
  };

  const decrementQuantity = () => {
    if (!product) return;
    const newQuantity = quantity - product.quantityStep;
    if (newQuantity >= product.minimumOrder) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    onAddToCart(product, quantity);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  if (!isOpen || !product) return null;

  const subtotal = quantity * product.unitPrice;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
        
        <div 
          className="relative bg-camphor-white rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all"
          role="dialog"
          aria-labelledby="quantity-modal-title"
          aria-describedby="quantity-modal-description"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-pale-sage">
            <h2 id="quantity-modal-title" className="font-inter font-bold text-lg sm:text-xl text-charcoal">
              Add to Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-pale-sage/30 rounded-full transition-colors duration-150"
              aria-label="Close modal"
            >
              <X size={20} className="text-charcoal" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Product Info */}
            <div className="flex items-start space-x-4 mb-6">
              <img
                src={product.image}
                alt={product.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-mint-tint/30 rounded-lg"
                sizes="80px"
              />
              <div className="flex-1">
                <h3 className="font-inter font-semibold text-charcoal text-sm sm:text-base mb-1">
                  {product.name}
                </h3>
                <p className="text-forest-green font-bold text-lg sm:text-xl">
                  {formatCurrency(product.unitPrice)}/kg
                </p>
                <p className="text-charcoal/60 text-xs sm:text-sm">
                  Min. order {product.minimumOrder} kg • Max. order {product.maximumOrder} kg
                </p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-3">
                Quantity (kg)
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= product.minimumOrder}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || product.minimumOrder;
                    handleQuantityChange(value);
                  }}
                  min={product.minimumOrder}
                  max={product.maximumOrder}
                  step={product.quantityStep}
                  className="flex-1 text-center text-lg sm:text-xl font-bold py-2 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                />
                
                <button
                  onClick={incrementQuantity}
                  disabled={quantity >= product.maximumOrder}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <p className="text-xs text-charcoal/60 mt-2">
                Increments of {product.quantityStep} kg • Maximum {product.maximumOrder} kg per order
              </p>
            </div>

            {/* Subtotal */}
            <div className="bg-mint-tint/30 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium text-charcoal">Subtotal:</span>
                <span className="font-bold text-xl text-forest-green">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="text-xs text-charcoal/60 mt-1">
                {quantity} kg × {formatCurrency(product.unitPrice)}/kg
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border-2 border-forest-green text-forest-green rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-forest-green text-camphor-white px-4 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;