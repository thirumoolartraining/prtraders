import { ArrowLeft, Package, Calculator, Clock, Shield, CheckCircle, Star, Globe, Send, Building, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useQuotes } from '../hooks/useQuotes';

const bulkQuoteSchema = z.object({
  // Personal Information
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  
  // Company Information
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.string().min(2, 'Industry is required'),
  
  // Quote Requirements
  product: z.string().min(1, 'Please select a product'),
  quantity: z.string().min(1, 'Quantity is required'),
  frequency: z.string().min(1, 'Please select order frequency'),
  timeline: z.string().min(1, 'Please select timeline'),
  
  // Additional Details
  message: z.string().optional(),
});

type BulkQuoteFormData = z.infer<typeof bulkQuoteSchema>;

const BulkQuote = () => {
  const { submitQuote, loading } = useQuotes();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BulkQuoteFormData>({
    resolver: zodResolver(bulkQuoteSchema)
  });

  const onSubmit = async (data: BulkQuoteFormData) => {
    try {
      const result = await submitQuote(data);
      
      if (result.success) {
        toast.success('Quote request submitted successfully! We\'ll contact you within 24 hours.');
        reset();
      } else {
        toast.error(result.error || 'Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
      console.error('Quote submission failed:', error);
    }
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Competitive Pricing",
      description: "Volume-based pricing with significant discounts for bulk orders. The more you order, the more you save."
    },
    {
      icon: Clock,
      title: "Priority Processing",
      description: "Bulk orders receive priority processing and dedicated account management for seamless experience."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every bulk order comes with our quality guarantee and detailed certificates of analysis."
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Worldwide shipping with optimized logistics for bulk quantities and international compliance."
    }
  ];

  const pricingTiers = [
    {
      range: "100-500 kg",
      discount: "5-10%",
      features: ["Standard Processing", "Quality Certificate", "Basic Support"]
    },
    {
      range: "500-2000 kg",
      discount: "10-15%",
      features: ["Priority Processing", "Dedicated Support", "Custom Packaging", "Flexible Payment"]
    },
    {
      range: "2000+ kg",
      discount: "15-25%",
      features: ["VIP Processing", "Account Manager", "Custom Solutions", "Extended Credit Terms"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Temple Trust Federation",
      quote: "P R Traders has been our trusted partner for 8 years. Their bulk pricing and consistent quality make them our go-to supplier for all temple requirements.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      company: "Aromatherapy Distributors Inc.",
      quote: "Excellent bulk pricing and reliable international shipping. Their camphor quality is unmatched in the global market.",
      rating: 5
    },
    {
      name: "Mohammed Al-Rashid",
      company: "Middle East Imports",
      quote: "Professional service, competitive rates, and timely delivery. P R Traders understands the needs of bulk buyers.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-forest-green hover:text-shade-forest transition-colors duration-150 mb-4 sm:mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
              <Calculator className="text-forest-green" size={20} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal">Get Bulk Quote</h1>
              <p className="text-charcoal/70 text-sm sm:text-base">Competitive pricing for your bulk camphor requirements</p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-forest-green/5 to-mint-tint/50 border-l-4 border-forest-green p-6 sm:p-8 lg:p-12 rounded-r-lg mb-8 sm:mb-12">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4 sm:mb-6">
            Unlock Wholesale Pricing for Your Business
          </h2>
          <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
            Whether you're a temple trust, distributor, manufacturer, or retailer, our bulk pricing program offers 
            significant savings on premium camphor products. With 30 years of experience serving wholesale customers 
            worldwide, we understand your unique requirements and deliver solutions that drive your business forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-camphor-white p-4 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold text-forest-green mb-1">24h</div>
              <div className="text-xs sm:text-sm text-charcoal/70">Quote Response</div>
            </div>
            <div className="bg-camphor-white p-4 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold text-forest-green mb-1">25%</div>
              <div className="text-xs sm:text-sm text-charcoal/70">Max Bulk Discount</div>
            </div>
            <div className="bg-camphor-white p-4 rounded-lg text-center">
              <div className="text-2xl sm:text-3xl font-bold text-forest-green mb-1">25+</div>
              <div className="text-xs sm:text-sm text-charcoal/70">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 flex items-center">
                <Package className="text-forest-green mr-3" size={24} />
                Request Your Custom Quote
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                    <User className="mr-3 text-forest-green" size={20} />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Phone Number *</label>
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
                <div>
                  <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                    <Building className="mr-3 text-forest-green" size={20} />
                    Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Company Name *</label>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Industry *</label>
                      <select
                        {...register('industry')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="">Select Industry</option>
                        <option value="temple-trust">Temple Trust / Religious Organization</option>
                        <option value="distributor">Distributor / Wholesaler</option>
                        <option value="retailer">Retailer / Store Chain</option>
                        <option value="manufacturer">Manufacturer / Industrial</option>
                        <option value="aromatherapy">Aromatherapy / Wellness</option>
                        <option value="export">Export / International Trade</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.industry && (
                        <p className="text-red-600 text-xs mt-1">{errors.industry.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quote Requirements */}
                <div>
                  <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                    <Package className="mr-3 text-forest-green" size={20} />
                    Quote Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Product Type *</label>
                      <select
                        {...register('product')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="">Select Product</option>
                        <option value="premium-pouches">Premium Camphor Pouches</option>
                        <option value="tablet-jars">Camphor Tablets Jar</option>
                        <option value="bulk-crystals">Bulk Camphor Crystals</option>
                        <option value="refined-blocks">Refined Camphor Blocks</option>
                        <option value="mixed-products">Mixed Products</option>
                        <option value="custom-requirements">Custom Requirements</option>
                      </select>
                      {errors.product && (
                        <p className="text-red-600 text-xs mt-1">{errors.product.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Quantity Required *</label>
                      <select
                        {...register('quantity')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="">Select Quantity</option>
                        <option value="100-500">100-500 kg</option>
                        <option value="500-1000">500-1000 kg</option>
                        <option value="1000-2000">1000-2000 kg</option>
                        <option value="2000-5000">2000-5000 kg</option>
                        <option value="5000+">5000+ kg</option>
                        <option value="custom">Custom Quantity</option>
                      </select>
                      {errors.quantity && (
                        <p className="text-red-600 text-xs mt-1">{errors.quantity.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Order Frequency *</label>
                      <select
                        {...register('frequency')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="">Select Frequency</option>
                        <option value="one-time">One-time Order</option>
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="bi-annual">Bi-annual</option>
                        <option value="annual">Annual</option>
                        <option value="as-needed">As Needed</option>
                      </select>
                      {errors.frequency && (
                        <p className="text-red-600 text-xs mt-1">{errors.frequency.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Required Timeline *</label>
                      <select
                        {...register('timeline')}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Immediate (1-2 weeks)</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="2-3-months">2-3 Months</option>
                        <option value="flexible">Flexible Timeline</option>
                      </select>
                      {errors.timeline && (
                        <p className="text-red-600 text-xs mt-1">{errors.timeline.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 flex items-center">
                    <MessageSquare className="mr-3 text-forest-green" size={20} />
                    Additional Requirements
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Special Requirements or Notes</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent text-sm sm:text-base"
                      placeholder="Please specify any special packaging requirements, delivery preferences, quality specifications, or other details..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest-green text-camphor-white py-3 sm:py-4 px-6 rounded-full font-medium hover:bg-shade-forest disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send size={16} />
                  <span>{loading ? 'Submitting Request...' : 'Get My Bulk Quote'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Benefits */}
            <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4 sm:mb-6">Why Choose Our Bulk Program?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-forest-green" size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm mb-1">{benefit.title}</h4>
                      <p className="text-charcoal/70 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl sm:rounded-2xl p-6">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4 sm:mb-6">Bulk Pricing Tiers</h3>
              <div className="space-y-4">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className="bg-camphor-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-charcoal text-sm">{tier.range}</span>
                      <span className="text-forest-green font-bold text-sm">{tier.discount} OFF</span>
                    </div>
                    <ul className="space-y-1">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-charcoal/70 flex items-center">
                          <CheckCircle size={10} className="text-forest-green mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-camphor-white border border-pale-sage rounded-xl sm:rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-charcoal text-sm">Bulk Sales Team</p>
                  <p className="text-charcoal/70 text-xs">+91 8122 800658</p>
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">Email</p>
                  <p className="text-charcoal/70 text-xs">info@prtraders.shop</p>
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">Response Time</p>
                  <p className="text-charcoal/70 text-xs">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-12 sm:mt-16">
          <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
            What Our Bulk Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-camphor-white border border-pale-sage rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-charcoal text-sm">{testimonial.name}</p>
                  <p className="text-charcoal/60 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-12 sm:mt-16">
          <div className="bg-mint-tint/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="font-inter font-bold text-2xl sm:text-3xl text-charcoal mb-6 sm:mb-8 text-center">
              Our Simple Quote Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green text-camphor-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-sm sm:text-base">Submit Request</h3>
                <p className="text-charcoal/70 text-xs sm:text-sm">Fill out our detailed quote form with your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green text-camphor-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-sm sm:text-base">Expert Review</h3>
                <p className="text-charcoal/70 text-xs sm:text-sm">Our bulk sales team reviews and analyzes your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green text-camphor-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-sm sm:text-base">Custom Quote</h3>
                <p className="text-charcoal/70 text-xs sm:text-sm">Receive detailed pricing and terms within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-green text-camphor-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold text-charcoal mb-2 text-sm sm:text-base">Partnership</h3>
                <p className="text-charcoal/70 text-xs sm:text-sm">Begin your long-term partnership with P R Traders</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BulkQuote;