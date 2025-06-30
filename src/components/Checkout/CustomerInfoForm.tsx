import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useCheckoutStore } from '../../store/useCheckoutStore';

const CustomerInfoForm: React.FC = () => {
  const { 
    customerInfo, 
    updateCustomerInfo, 
    updateBillingAddress, 
    updateShippingAddress,
    errors 
  } = useCheckoutStore();

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-spiritual-pure rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-spiritual-gold" />
          <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
            Personal Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
              First Name *
            </label>
            <input
              type="text"
              value={customerInfo.firstName}
              onChange={(e) => updateCustomerInfo({ firstName: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                errors.firstName
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-spiritual-sandy-light focus:border-spiritual-gold'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
              Last Name *
            </label>
            <input
              type="text"
              value={customerInfo.lastName}
              onChange={(e) => updateCustomerInfo({ lastName: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                errors.lastName
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-spiritual-sandy-light focus:border-spiritual-gold'
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spiritual-maroon/50" />
              <input
                type="email"
                value={customerInfo.email}
                onChange={(e) => updateCustomerInfo({ email: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spiritual-maroon/50" />
              <input
                type="tel"
                value={customerInfo.phone}
                onChange={(e) => updateCustomerInfo({ phone: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
                placeholder="+91 98765 43210"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.phone}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Billing Address */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-spiritual-pure rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="w-6 h-6 text-spiritual-gold" />
          <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
            Billing Address
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
              Street Address *
            </label>
            <textarea
              value={customerInfo.billingAddress.street}
              onChange={(e) => updateBillingAddress({ street: e.target.value })}
              rows={3}
              className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 resize-none ${
                errors.billingStreet
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-spiritual-sandy-light focus:border-spiritual-gold'
              }`}
              placeholder="Enter your complete address"
            />
            {errors.billingStreet && (
              <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.billingStreet}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                City *
              </label>
              <input
                type="text"
                value={customerInfo.billingAddress.city}
                onChange={(e) => updateBillingAddress({ city: e.target.value })}
                className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                  errors.billingCity
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
                placeholder="City"
              />
              {errors.billingCity && (
                <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.billingCity}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                State *
              </label>
              <select
                value={customerInfo.billingAddress.state}
                onChange={(e) => updateBillingAddress({ state: e.target.value })}
                className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                  errors.billingState
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.billingState && (
                <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.billingState}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                Pincode *
              </label>
              <input
                type="text"
                value={customerInfo.billingAddress.pincode}
                onChange={(e) => updateBillingAddress({ pincode: e.target.value })}
                className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                  errors.billingPincode
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
                placeholder="123456"
                maxLength={6}
              />
              {errors.billingPincode && (
                <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.billingPincode}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shipping Address */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-spiritual-pure rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-spiritual-gold" />
            <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
              Shipping Address
            </h3>
          </div>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={customerInfo.shippingAddress.sameAsBilling}
              onChange={(e) => updateShippingAddress({ sameAsBilling: e.target.checked })}
              className="w-4 h-4 text-spiritual-gold border-spiritual-sandy-light rounded focus:ring-spiritual-gold"
            />
            <span className="text-sm text-spiritual-maroon font-sans-spiritual">
              Same as billing address
            </span>
          </label>
        </div>

        {!customerInfo.shippingAddress.sameAsBilling && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                Street Address *
              </label>
              <textarea
                value={customerInfo.shippingAddress.street}
                onChange={(e) => updateShippingAddress({ street: e.target.value })}
                rows={3}
                className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 resize-none ${
                  errors.shippingStreet
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                }`}
                placeholder="Enter shipping address"
              />
              {errors.shippingStreet && (
                <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.shippingStreet}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                  City *
                </label>
                <input
                  type="text"
                  value={customerInfo.shippingAddress.city}
                  onChange={(e) => updateShippingAddress({ city: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                    errors.shippingCity
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                  }`}
                  placeholder="City"
                />
                {errors.shippingCity && (
                  <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.shippingCity}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                  State *
                </label>
                <select
                  value={customerInfo.shippingAddress.state}
                  onChange={(e) => updateShippingAddress({ state: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                    errors.shippingState
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                  }`}
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                {errors.shippingState && (
                  <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.shippingState}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={customerInfo.shippingAddress.pincode}
                  onChange={(e) => updateShippingAddress({ pincode: e.target.value })}
                  className={`w-full px-4 py-3 border-2 rounded-lg font-sans-spiritual focus:outline-none transition-colors duration-200 ${
                    errors.shippingPincode
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-spiritual-sandy-light focus:border-spiritual-gold'
                  }`}
                  placeholder="123456"
                  maxLength={6}
                />
                {errors.shippingPincode && (
                  <p className="text-red-500 text-xs mt-1 font-sans-spiritual">{errors.shippingPincode}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Special Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-spiritual-pure rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-6 h-6 text-spiritual-gold" />
          <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
            Special Instructions
          </h3>
        </div>

        <div>
          <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
            Order Notes (Optional)
          </label>
          <textarea
            value={customerInfo.specialInstructions}
            onChange={(e) => updateCustomerInfo({ specialInstructions: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200 resize-none"
            placeholder="Any special instructions for your order, delivery preferences, or temple/institution details..."
          />
          <p className="text-xs text-spiritual-maroon/60 mt-2 font-sans-spiritual">
            For temple/institution orders, please mention your organization name and any special requirements.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerInfoForm;