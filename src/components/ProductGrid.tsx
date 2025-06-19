import React, { useState } from 'react';
import { Eye, Package, Star, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';
import { products } from '../data/products';
import { useCartStore } from '../lib/useCartStore';
import QuantityModal from './QuantityModal';
import { Product } from '../types/product';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCartFromModal = (product: Product, quantity: number) => {
    addItem({
      id: product.slug,
      name: product.name,
      price: product.unitPrice,
      qty: quantity
    });
    
    toast.success(`${product.name} added to cart`);
    setSelectedProduct(null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <>
      <section id="products" className="py-16 sm:py-20 lg:py-24 bg-mint-tint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-forest-green/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Package className="text-forest-green" size={16} />
              <span className="text-forest-green font-medium text-xs sm:text-sm uppercase tracking-wide">Our Products</span>
            </div>
            <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-charcoal mb-4 sm:mb-6">
              Premium Camphor Range
            </h2>
            <p className="font-inter text-base sm:text-lg xl:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
              From temple rituals to industrial applications, we offer camphor in various forms to meet your specific requirements. Each product maintains our commitment to purity and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`relative bg-camphor-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-pale-sage/30 flex flex-col h-full ${
                  product.featured ? 'ring-2 ring-forest-green/20' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <div className="bg-forest-green text-camphor-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star size={10} fill="currentColor" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
                
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-camphor-white to-mint-tint/30">
                  <img 
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-camphor-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Eye className="text-forest-green" size={18} />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2 group-hover:text-forest-green transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-forest-green text-lg">
                        {formatCurrency(product.unitPrice)}/kg
                      </p>
                      <p className="text-xs text-charcoal/60">
                        Min. order {product.minimumOrder} kg
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 p-3 bg-mint-tint/50 rounded-xl">
                    <div className="text-center">
                      <p className="text-xs text-charcoal/60 uppercase tracking-wide font-medium mb-1">Purity</p>
                      <p className="font-mono font-bold text-forest-green text-base sm:text-lg">{product.purity}</p>
                    </div>
                    <div className="w-px h-6 sm:h-8 bg-pale-sage"></div>
                    <div className="text-center">
                      <p className="text-xs text-charcoal/60 uppercase tracking-wide font-medium mb-1">Min Order</p>
                      <p className="font-mono font-bold text-forest-green text-base sm:text-lg">{product.minimumOrder} kg</p>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6 flex-grow">
                    <p className="text-xs text-charcoal/60 uppercase tracking-wide font-medium mb-2">Applications</p>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-forest-green/10 text-forest-green px-2 py-1 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    data-testid={`add-to-cart-btn-${product.slug}`}
                    className="w-full bg-forest-green text-camphor-white py-2.5 sm:py-3 px-4 rounded-full font-medium hover:bg-forest-green/90 transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-sm hover:shadow-lg mt-auto text-sm sm:text-base"
                  >
                    <ShoppingCart size={14} className="group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="bg-camphor-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm border border-pale-sage/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Star className="text-forest-green" size={20} />
                  </div>
                  <h3 className="font-inter font-bold text-2xl sm:text-3xl text-forest-green mb-2">99.9%</h3>
                  <p className="text-charcoal/80 font-medium text-sm sm:text-base">Maximum Purity</p>
                  <p className="text-charcoal/60 text-xs sm:text-sm mt-1">Temple-grade quality assured</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Package className="text-forest-green" size={20} />
                  </div>
                  <h3 className="font-inter font-bold text-2xl sm:text-3xl text-forest-green mb-2">4+</h3>
                  <p className="text-charcoal/80 font-medium text-sm sm:text-base">Product Variants</p>
                  <p className="text-charcoal/60 text-xs sm:text-sm mt-1">Tailored for every need</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <ShoppingCart className="text-forest-green" size={20} />
                  </div>
                  <h3 className="font-inter font-bold text-2xl sm:text-3xl text-forest-green mb-2">24h</h3>
                  <p className="text-charcoal/80 font-medium text-sm sm:text-base">Order Processing</p>
                  <p className="text-charcoal/60 text-xs sm:text-sm mt-1">Fast, reliable service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuantityModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeModal}
        onAddToCart={handleAddToCartFromModal}
      />
    </>
  );
};

export default ProductGrid;