import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Info } from 'lucide-react';
import { Product } from '../../store/useStore';

interface QuantitySelectorProps {
  product: Product;
  currentQuantity: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
  showConstraints?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  product,
  currentQuantity,
  onQuantityChange,
  disabled = false,
  showConstraints = true
}) => {
  const { minQuantity, quantityIncrement, unit } = product;

  const handleDecrease = () => {
    const newQuantity = Math.max(minQuantity, currentQuantity - quantityIncrement);
    onQuantityChange(newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = currentQuantity + quantityIncrement;
    onQuantityChange(newQuantity);
  };

  const handleDirectInput = (value: string) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;
    
    // Validate against constraints
    if (numValue < minQuantity) {
      onQuantityChange(minQuantity);
      return;
    }
    
    // Calculate the nearest valid quantity
    // Find the closest multiple of quantityIncrement that is >= minQuantity
    const excessFromMin = numValue - minQuantity;
    const remainder = excessFromMin % quantityIncrement;
    
    let validQuantity;
    if (remainder === 0) {
      // Already a valid quantity
      validQuantity = numValue;
    } else {
      // Round up to the next valid increment
      validQuantity = numValue + (quantityIncrement - remainder);
    }
    
    onQuantityChange(validQuantity);
  };

  const canDecrease = currentQuantity > minQuantity;
  const quickIncrements = [quantityIncrement * 5, quantityIncrement * 10].filter(inc => inc !== quantityIncrement);

  return (
    <div className="space-y-4">
      {/* Main Quantity Controls */}
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={handleDecrease}
          disabled={disabled || !canDecrease}
          whileHover={!disabled && canDecrease ? { scale: 1.05 } : {}}
          whileTap={!disabled && canDecrease ? { scale: 0.95 } : {}}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            disabled || !canDecrease
              ? 'bg-spiritual-sandalwood/50 text-spiritual-maroon/30 cursor-not-allowed'
              : 'bg-spiritual-sandalwood text-spiritual-maroon hover:bg-spiritual-sandy-light'
          }`}
        >
          <Minus className="w-5 h-5" />
        </motion.button>

        <div className="flex items-center space-x-3">
          <input
            type="number"
            value={currentQuantity}
            onChange={(e) => handleDirectInput(e.target.value)}
            disabled={disabled}
            min={minQuantity}
            step={quantityIncrement}
            className="w-20 text-center font-semibold text-lg text-spiritual-maroon bg-spiritual-pure border-2 border-spiritual-sandy-light rounded-lg py-2 focus:border-spiritual-gold focus:outline-none disabled:opacity-50"
          />
          <div className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
            {unit}{currentQuantity > 1 ? 's' : ''}
          </div>
        </div>

        <motion.button
          onClick={handleIncrease}
          disabled={disabled}
          whileHover={!disabled ? { scale: 1.05 } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            disabled
              ? 'bg-spiritual-gold/50 text-spiritual-pure/50 cursor-not-allowed'
              : 'bg-spiritual-gold text-spiritual-pure hover:bg-spiritual-gold-light'
          }`}
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Quick Increment Buttons */}
      {quickIncrements.length > 0 && (
        <div className="flex items-center space-x-2">
          <span className="text-xs text-spiritual-maroon/60 font-sans-spiritual">Quick add:</span>
          {quickIncrements.map((increment) => (
            <motion.button
              key={increment}
              onClick={() => onQuantityChange(currentQuantity + increment)}
              disabled={disabled}
              whileHover={!disabled ? { scale: 1.05 } : {}}
              whileTap={!disabled ? { scale: 0.95 } : {}}
              className={`px-3 py-1 text-xs rounded-full transition-colors duration-200 ${
                disabled
                  ? 'bg-spiritual-sandalwood/50 text-spiritual-maroon/30 cursor-not-allowed'
                  : 'bg-spiritual-sandalwood text-spiritual-maroon hover:bg-spiritual-sandy-light font-sans-spiritual font-semibold'
              }`}
            >
              +{increment}
            </motion.button>
          ))}
        </div>
      )}

      {/* Constraint Information */}
      {showConstraints && (
        <div className="bg-spiritual-sandy-light rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Info className="w-4 h-4 text-spiritual-gold" />
            <span className="text-xs font-semibold text-spiritual-maroon uppercase tracking-wide">
              Order Requirements
            </span>
          </div>
          <div className="text-xs text-spiritual-maroon/80 font-sans-spiritual space-y-1">
            <div>Minimum: {minQuantity} {unit}{minQuantity > 1 ? 's' : ''}</div>
            <div>Increments: {quantityIncrement} {unit}{quantityIncrement > 1 ? 's' : ''}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantitySelector;