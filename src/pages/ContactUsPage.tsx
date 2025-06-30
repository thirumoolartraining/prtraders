import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle,
  User,
  MessageSquare
} from 'lucide-react';
import { APP_CONFIG, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '../config/appConfig';

const ContactUsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    orderType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        orderType: 'general'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: APP_CONFIG.contact.phone.display,
      secondary: "WhatsApp Available",
      description: "Speak directly with our team for immediate assistance",
      action: getPhoneUrl(),
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: APP_CONFIG.contact.email.primary,
      secondary: "24/7 Support",
      description: "Send us your queries and we'll respond within 24 hours",
      action: getEmailUrl(),
      actionText: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "Quick Support",
      secondary: "Instant Response",
      description: "Get instant support and place orders via WhatsApp",
      action: getWhatsAppUrl(),
      actionText: "Chat Now"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: APP_CONFIG.businessHours.weekdays },
    { day: "Saturday", hours: APP_CONFIG.businessHours.saturday },
    { day: "Sunday", hours: APP_CONFIG.businessHours.sunday },
    { day: "Festivals", hours: APP_CONFIG.businessHours.festivals }
  ];

  return (
    <div className="min-h-screen bg-spiritual-warm">
      {/* Home Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-20 left-4 z-40"
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(139, 38, 53, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-spiritual-maroon text-spiritual-pure px-4 py-3 rounded-full shadow-lg hover:bg-spiritual-maroon-light transition-all duration-300 font-sans-spiritual font-semibold"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-spiritual-sandalwood via-spiritual-sandy-light to-spiritual-warm py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="text-spiritual-maroon font-sans-spiritual font-medium tracking-wide uppercase text-sm">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6"
          >
            We're Here to
            <span className="block text-spiritual-gold">Serve You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
          >
            Whether you need assistance with orders, have questions about our products, or require bulk supplies 
            for your temple or institution, our dedicated team is ready to help you on your spiritual journey.
          </motion.p>

          {/* Quick Contact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { text: "24/7 Support" },
              { text: "Instant WhatsApp" },
              { text: "Quick Response" }
            ].map((badge, index) => (
              <div key={badge.text} className="bg-spiritual-pure px-4 py-2 rounded-full shadow-md">
                <span className="text-spiritual-maroon font-sans-spiritual font-semibold text-sm">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
            >
              Choose your preferred way to connect with us. We're committed to providing 
              exceptional support for all your spiritual product needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(139, 38, 53, 0.15)" }}
                className="bg-spiritual-pure rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-spiritual-pure" />
                </div>
                
                <h3 className="font-serif-spiritual text-xl font-semibold text-spiritual-maroon mb-2">
                  {method.title}
                </h3>
                
                <div className="mb-4">
                  <p className="font-sans-spiritual font-semibold text-spiritual-maroon">
                    {method.primary}
                  </p>
                  <p className="text-spiritual-gold font-sans-spiritual text-sm font-semibold">
                    {method.secondary}
                  </p>
                </div>
                
                <p className="text-spiritual-maroon/80 font-sans-spiritual text-sm leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <motion.a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-spiritual-maroon text-spiritual-pure px-6 py-3 rounded-full font-sans-spiritual font-semibold hover:bg-spiritual-maroon-light transition-colors duration-300"
                >
                  <span>{method.actionText}</span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-spiritual-sandalwood">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-spiritual-pure rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-spiritual-gold" />
                <h3 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
                  Send Us a Message
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-spiritual-gold mx-auto mb-4" />
                  <h4 className="font-serif-spiritual text-xl font-semibold text-spiritual-maroon mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-spiritual-maroon/70 font-sans-spiritual">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spiritual-maroon/50" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spiritual-maroon/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spiritual-maroon/50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                        Inquiry Type
                      </label>
                      <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Information</option>
                        <option value="bulk">Bulk Orders</option>
                        <option value="temple">Temple/Institution</option>
                        <option value="support">Customer Support</option>
                        <option value="wholesale">Wholesale Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-spiritual-maroon mb-2 font-sans-spiritual">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-spiritual-sandy-light rounded-lg font-sans-spiritual focus:outline-none focus:border-spiritual-gold transition-colors duration-200 resize-none"
                      placeholder="Please provide details about your inquiry, including any specific product requirements, quantities, or questions you may have..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full flex items-center justify-center space-x-2 py-4 rounded-full font-sans-spiritual font-semibold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-spiritual-maroon/50 text-spiritual-pure/50 cursor-not-allowed'
                        : 'bg-spiritual-maroon text-spiritual-pure hover:bg-spiritual-maroon-light'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-spiritual-pure/30 border-t-spiritual-pure rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Business Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Location */}
              <div className="bg-spiritual-pure rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-spiritual-gold" />
                  <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
                    Visit Our Store
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                      {APP_CONFIG.business.name}
                    </h4>
                    <p className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                      {APP_CONFIG.contact.address.street}<br />
                      {APP_CONFIG.contact.address.city} {APP_CONFIG.contact.address.pincode}<br />
                      {APP_CONFIG.contact.address.state}, {APP_CONFIG.contact.address.country}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-spiritual-sandy-light">
                    <p className="text-spiritual-maroon/70 font-sans-spiritual text-sm leading-relaxed">
                      Located in the heart of sacred {APP_CONFIG.contact.address.city}, near the famous Murugan Temple. 
                      Easy access by road and well-connected to major cities in {APP_CONFIG.contact.address.state}.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-spiritual-pure rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-spiritual-gold" />
                  <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-sans-spiritual text-spiritual-maroon">
                        {schedule.day}
                      </span>
                      <span className="font-sans-spiritual font-semibold text-spiritual-gold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-spiritual-sandy-light">
                  <p className="text-spiritual-maroon/70 font-sans-spiritual text-sm">
                    <strong>Note:</strong> During festival seasons, we may have extended hours. 
                    Please call ahead to confirm availability.
                  </p>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-spiritual-maroon rounded-2xl p-8 text-spiritual-pure">
                <h3 className="font-serif-spiritual text-xl font-bold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-spiritual-pure/90 font-sans-spiritual leading-relaxed mb-6">
                  For urgent inquiries or immediate assistance with orders, 
                  reach out to us via WhatsApp for instant support.
                </p>
                
                <motion.a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-sans-spiritual font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Now</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home CTA */}
      <section className="py-16 bg-spiritual-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-4">
              Explore Our Sacred Collection
            </h3>
            <p className="text-spiritual-maroon/80 font-sans-spiritual mb-8">
              Discover our range of temple-quality spiritual products, crafted with devotion for your sacred journey.
            </p>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-spiritual-gold text-spiritual-maroon px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-gold-light transition-all duration-300 mx-auto"
              >
                <Home className="w-6 h-6" />
                <span>Browse Products</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;