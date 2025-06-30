import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Info } from 'lucide-react';
import { Product } from '../../store/useStore';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0px 15px 35px rgba(218, 165, 32, 0.15)",
        y: -5
      }}
      className="bg-spiritual-pure rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-spiritual-sandy-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Purity Badge */}
        <div className="absolute top-3 right-3 bg-spiritual-gold text-spiritual-pure px-3 py-1 rounded-full text-xs font-semibold">
          {product.purity}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 left-3 p-2 bg-spiritual-pure/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="w-4 h-4 text-spiritual-maroon" />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-spiritual-gold uppercase tracking-wide">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-spiritual-gold text-spiritual-gold" />
            ))}
          </div>
        </div>

        <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon mb-2 group-hover:text-spiritual-gold transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-spiritual-maroon/70 font-sans-spiritual text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Spiritual Properties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.spiritualProperties.slice(0, 2).map((property) => (
              <span
                key={property}
                className="text-xs bg-spiritual-rose-light text-spiritual-maroon px-2 py-1 rounded-full font-sans-spiritual"
              >
                {property}
              </span>
            ))}
          </div>
        </div>

        {/* Order Requirements */}
        <div className="mb-4 p-3 bg-spiritual-sandy-light rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Info className="w-4 h-4 text-spiritual-gold" />
            <span className="text-xs font-semibold text-spiritual-maroon uppercase tracking-wide">
              Order Requirements
            </span>
          </div>
          <div className="text-xs text-spiritual-maroon/80 font-sans-spiritual space-y-1">
            <div>Min: {product.minQuantity} {product.unit}{product.minQuantity > 1 ? 's' : ''}</div>
            <div>Increments: {product.quantityIncrement} {product.unit}{product.quantityIncrement > 1 ? 's' : ''}</div>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-spiritual-maroon">
              ₹{product.price}
            </span>
            <span className="text-sm text-spiritual-maroon/60 font-sans-spiritual ml-1">
              /{product.unit}
            </span>
          </div>

          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-spiritual-maroon text-spiritual-pure px-4 py-2 rounded-full hover:bg-spiritual-maroon-light transition-colors duration-300 group/btn font-sans-spiritual font-semibold text-sm"
          >
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 group-hover/btn:animate-gentle-bounce" />
              <span>Add {product.minQuantity}</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;