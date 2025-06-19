import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactMessages } from '../hooks/useContactMessages';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const { submitContactMessage, loading } = useContactMessages();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await submitContactMessage(formData);
      
      if (result.success) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-forest-green hover:text-shade-forest transition-colors duration-150 mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center">
              <MessageCircle className="text-forest-green" size={24} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-4xl text-charcoal">Contact Us</h1>
              <p className="text-charcoal/70">We're here to assist you</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
              <p className="text-charcoal font-medium mb-2">We're Here to Assist You</p>
              <p className="text-charcoal/80 text-sm mb-3">
                At P R Traders, your business needs are our top priority. Whether you're seeking information about our products, need assistance with an order, wish to provide feedback, or are interested in collaboration opportunities, our dedicated team is ready to support you.
              </p>
              <p className="text-charcoal/80 text-sm">
                Our commitment is to ensure a seamless and responsive experience for every interaction. Operating hours are Monday to Saturday, 9 AM to 6 PM IST. During these times, our support team is available to address your queries, resolve issues, and guide you through our offerings.
              </p>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="font-inter font-bold text-2xl text-charcoal mb-6">How Can We Help?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <MessageSquare className="text-forest-green mr-2" size={16} />
                    General Inquiries
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Have questions about our software solutions or services? We're here to provide clear and concise information to guide you.
                  </p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Phone className="text-forest-green mr-2" size={16} />
                    Order Support
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Need help with tracking, managing, or modifying your order? Our team is equipped to offer prompt assistance with real-time updates.
                  </p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <MessageCircle className="text-forest-green mr-2" size={16} />
                    Feedback & Suggestions
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Your insights are invaluable. Whether you've had a positive experience or have suggestions for improvement, we'd love to hear from you.
                  </p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Building className="text-forest-green mr-2" size={16} />
                    Business & Collaboration
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Interested in partnerships, media inquiries, or B2B collaborations? Reach out to explore meaningful opportunities together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-8 shadow-sm">
              <h2 className="font-inter font-bold text-2xl text-charcoal mb-6 flex items-center">
                <MessageSquare className="text-forest-green mr-3" size={24} />
                Contact Form
              </h2>
              <p className="text-charcoal/80 mb-6">
                Please fill out the form below with your name, email, subject, and message. Our team will get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="business">Business & Collaboration Opportunities</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-pale-sage rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest-green text-camphor-white py-3 px-6 rounded-full font-medium hover:bg-shade-forest disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <p className="text-charcoal/80">📧 info@prtraders.com</p>
                    <p className="text-xs text-charcoal/60">Expect a response within 24–48 business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <p className="text-charcoal/80">📞 +91 84387 64765</p>
                    <p className="text-xs text-charcoal/60">Available during business hours for immediate assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4 flex items-center">
                <MapPin className="text-forest-green mr-2" size={20} />
                Our Office
              </h3>
              <div className="space-y-2 text-charcoal/80">
                <p className="font-medium text-charcoal">📍 P R Traders</p>
                <p>100B, East Car Street</p>
                <p>Palani - 624601</p>
              </div>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4 flex items-center">
                <Clock className="text-forest-green mr-2" size={20} />
                Business Hours
              </h3>
              <div className="space-y-2 text-charcoal/80">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-xs text-charcoal/60 mt-3">
                All times are in Indian Standard Time (IST)
              </p>
            </div>

            <div className="bg-forest-green/5 border border-forest-green/20 rounded-2xl p-6">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>We aim to respond to all queries promptly, typically within one business day.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>For order-related inquiries, please include your order ID or registered email to expedite assistance.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>For urgent matters, we recommend contacting us via phone during working hours.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-mint-tint/30 rounded-2xl p-8 text-center">
          <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Our Commitment</h2>
          <p className="text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            At P R Traders, we believe that exceptional service begins with effective communication. No matter the size of your concern, we're here to ensure your experience with us is smooth, clear, and supportive.
          </p>
          <p className="text-charcoal font-medium mt-4">
            Thank you for choosing P R Traders. We look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;