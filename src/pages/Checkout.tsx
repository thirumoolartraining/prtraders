import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ShoppingBag, User, Building, MapPin, CreditCard, Plus, Minus, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../lib/useCartStore';
import { useOrders } from '../hooks/useOrders';
import { checkoutSchema, CheckoutFormData } from '../schemas/checkout';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { items, clear, updateQty, removeItem, getTotalAmount } = useCartStore();
  const { createOrder, loading: orderLoading } = useOrders();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      country: 'India'
    }
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      // Create order in database
      const result = await createOrder(data, items);
      
      if (result.success) {
        // Clear cart and redirect to thank you page
        clear();
        toast.success('Order submitted successfully!');
        navigate('/thank-you');
      } else {
        toast.error(result.error || 'Failed to submit order');
      }
    } catch (error) {
      console.error('Order submission failed:', error);
      toast.error('Failed to submit order. Please try again.');
    }
  };

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

  const incrementQuantity = (id: string, currentQty: number) => {
    const newQty = currentQty + 5;
    if (newQty <= 100) {
      updateQty(id, newQty);
    }
  };

  const decrementQuantity = (id: string, currentQty: number) => {
    const newQty = currentQty - 5;
    if (newQty >= 10) {
      updateQty(id, newQty);
    }
  };

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-camphor-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingBag size={64} className="text-charcoal/30 mx-auto mb-6" />
          <h1 className="font-inter font-bold text-3xl text-charcoal mb-4">Your cart is empty</h1>
          <p className="text-charcoal/70 mb-8">Add some products before proceeding to checkout</p>
          <Link 
            to="/#products"
            className="bg-forest-green text-camphor-white px-8 py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const totalAmount = getTotalAmount();

  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-forest-green hover:text-shade-forest transition-colors duration-150 mb-4 sm:mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-2">
            Checkout
          </h1>
          <p className="text-charcoal/70 text-sm sm:text-base">
            Complete your order details below
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Order Summary - Mobile First, Desktop Right */}
            <div className="lg:col-span-1 lg:order-2">
              <div className="bg-mint-tint/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 sticky top-24">
                <h2 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <ShoppingBag className="mr-3 text-forest-green" size={20} />
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="bg-camphor-white rounded-lg p-4 border border-pale-sage/30">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-12 h-12 bg-mint-tint/30 rounded-lg flex items-center justify-center">
                          <ShoppingBag size={16} className="text-forest-green" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-charcoal text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-forest-green font-bold text-sm">
                            {formatCurrency(item.price)}/kg
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-forest-green text-sm">
                            {formatCurrency(item.price * item.qty)}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 mt-1"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-charcoal/60">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => decrementQuantity(item.id, item.qty)}
                            disabled={item.qty <= 10}
                            className="w-6 h-6 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={10} />
                          </button>
                          
                          <input
                            type="number"
                            value={item.qty}
                            onChange={(e) => {
                              const newQty = parseInt(e.target.value) || 10;
                              handleQuantityChange(item.id, newQty);
                            }}
                            min={10}
                            max={100}
                            step={5}
                            className="w-16 text-center text-xs font-bold py-1 border border-pale-sage rounded focus:ring-1 focus:ring-forest-green focus:border-transparent"
                          />
                          
                          <button
                            type="button"
                            onClick={() => incrementQuantity(item.id, item.qty)}
                            disabled={item.qty >= 100}
                            className="w-6 h-6 bg-pale-sage hover:bg-forest-green hover:text-camphor-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-150"
                            aria-label="Increase quantity"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-xs text-charcoal/60 mt-2 text-center">
                        {item.qty} kg (Min: 10kg, Max: 100kg)
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-pale-sage pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Subtotal:</span>
                    <span className="text-charcoal">{formatCurrency(totalAmount)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Shipping:</span>
                    <span className="text-charcoal">Calculated at delivery</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-pale-sage">
                    <span className="text-charcoal">Total:</span>
                    <span className="text-forest-green">{formatCurrency(totalAmount)}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-forest-green/5 rounded-lg">
                  <p className="text-xs text-charcoal/70 text-center">
                    You can edit quantities or remove items above before proceeding
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="lg:col-span-2 lg:order-1 space-y-6 sm:space-y-8">
              {/* Personal Information */}
              <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <User className="mr-3 text-forest-green" size={20} />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <Building className="mr-3 text-forest-green" size={20} />
                  Company Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Company Name *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter company name"
                    />
                    {errors.company && (
                      <p className="text-red-600 text-xs mt-1">{errors.company.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      GSTIN (Optional)
                    </label>
                    <input
                      {...register('gstin')}
                      type="text"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter GSTIN if applicable"
                    />
                    {errors.gstin && (
                      <p className="text-red-600 text-xs mt-1">{errors.gstin.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <MapPin className="mr-3 text-forest-green" size={20} />
                  Shipping Address
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Address *
                    </label>
                    <textarea
                      {...register('address')}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter complete address"
                    />
                    {errors.address && (
                      <p className="text-red-600 text-xs mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        City *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter city"
                      />
                      {errors.city && (
                        <p className="text-red-600 text-xs mt-1">{errors.city.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        State *
                      </label>
                      <input
                        {...register('state')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter state"
                      />
                      {errors.state && (
                        <p className="text-red-600 text-xs mt-1">{errors.state.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Pincode *
                      </label>
                      <input
                        {...register('pincode')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter pincode"
                      />
                      {errors.pincode && (
                        <p className="text-red-600 text-xs mt-1">{errors.pincode.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Country *
                      </label>
                      <input
                        {...register('country')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter country"
                      />
                      {errors.country && (
                        <p className="text-red-600 text-xs mt-1">{errors.country.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="bg-mint-tint/30 p-4 rounded-lg mb-6">
                  <div className="flex items-start space-x-3">
                    <CreditCard className="text-forest-green mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Payment Information</h4>
                      <p className="text-sm text-charcoal/80">
                        After submitting your order, our sales team will contact you within 24 hours with payment instructions and invoice details. We accept bank transfers, UPI, and other secure payment methods.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || orderLoading}
                  className="w-full bg-forest-green text-camphor-white py-3 sm:py-4 px-6 rounded-full font-medium hover:bg-shade-forest disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 text-sm sm:text-base"
                >
                  {isSubmitting || orderLoading ? 'Submitting Order...' : 'Submit Order'}
                </button>
                
                <p className="text-xs text-charcoal/60 text-center mt-4">
                  By submitting this order, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;