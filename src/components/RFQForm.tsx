import React, { useState } from 'react';
import { Send, Package, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const RFQForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-mint-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-charcoal mb-3 sm:mb-4">
            Request Bulk Quote
          </h2>
          <p className="font-inter text-base sm:text-lg xl:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Get competitive pricing for your camphor requirements. Our team will respond within 24 hours.
          </p>
          <Link 
            to="/bulk-quote"
            className="inline-flex items-center space-x-2 bg-forest-green text-camphor-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 hover:shadow-lg text-sm sm:text-base"
          >
            <Package size={18} />
            <span>Get Detailed Quote</span>
          </Link>
        </div>

        <div className="bg-camphor-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                  step >= num ? 'bg-forest-green text-camphor-white' : 'bg-pale-sage text-charcoal/60'
                }`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`w-12 sm:w-16 h-1 mx-2 ${
                    step > num ? 'bg-forest-green' : 'bg-pale-sage'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <User className="mr-3 text-forest-green" size={20} />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <Package className="mr-3 text-forest-green" size={20} />
                  Product Requirements
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Product Type *</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      required
                    >
                      <option value="">Select Product</option>
                      <option value="pouches">Premium Camphor Pouches</option>
                      <option value="tablets">Camphor Tablets Jar</option>
                      <option value="crystals">Bulk Camphor Crystals</option>
                      <option value="blocks">Refined Camphor Blocks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Quantity Required (kg) *</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="e.g., 1000"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="font-inter font-bold text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6 flex items-center">
                  <MessageSquare className="mr-3 text-forest-green" size={20} />
                  Additional Details
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Additional Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                    placeholder="Please specify any special requirements, delivery timeline, packaging preferences, or other details..."
                  ></textarea>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-forest-green text-forest-green rounded-full font-medium hover:bg-forest-green hover:text-camphor-white transition-all duration-150 text-sm sm:text-base"
                >
                  Previous
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto bg-forest-green text-camphor-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 text-sm sm:text-base"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-forest-green text-camphor-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <Send size={14} />
                  <span>Submit Quote Request</span>
                </button>
              )}
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-pale-sage text-center">
            <p className="text-charcoal/70 text-sm mb-4">
              Need a more detailed quote with custom requirements?
            </p>
            <Link 
              to="/bulk-quote"
              className="inline-flex items-center space-x-2 text-forest-green hover:text-shade-forest font-medium text-sm transition-colors duration-150"
            >
              <Package size={16} />
              <span>Use Our Advanced Quote Form</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQForm;