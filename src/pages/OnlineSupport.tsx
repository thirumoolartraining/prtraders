import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnlineSupport = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', formData);
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
              <h1 className="font-inter font-bold text-4xl text-charcoal">Online Support</h1>
              <p className="text-charcoal/70">We're here to help with all your camphor needs</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
              <p className="text-charcoal font-medium mb-2">We're Here to Help</p>
              <p className="text-charcoal/80 text-sm">
                Whether you have questions about our camphor products, need support with bulk orders, want to share feedback, or explore business partnerships — our dedicated team is ready to assist you.
              </p>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-8 shadow-sm">
              <h2 className="font-inter font-bold text-2xl text-charcoal mb-6 flex items-center">
                <MessageSquare className="text-forest-green mr-3" size={24} />
                Send Us a Message
              </h2>
              
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
                    <option value="bulk-order">Bulk Order Support</option>
                    <option value="export">Export & International Orders</option>
                    <option value="quality">Product Quality Questions</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="technical">Technical Support</option>
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
                    placeholder="Please provide details about your inquiry, including order quantities, delivery requirements, or any specific questions..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-forest-green text-camphor-white py-3 px-6 rounded-full font-medium hover:bg-shade-forest transition-all duration-150 flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Phone Support</p>
                    <p className="text-charcoal/80">+91 4545 123456</p>
                    <p className="text-xs text-charcoal/60">Mon-Sat, 9 AM - 6 PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Email Support</p>
                    <p className="text-charcoal/80">support@prtraders.com</p>
                    <p className="text-xs text-charcoal/60">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">WhatsApp</p>
                    <p className="text-charcoal/80">+91 9876 543210</p>
                    <p className="text-xs text-charcoal/60">Quick responses</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-forest-green mt-1" size={18} />
                  <div>
                    <p className="font-medium text-charcoal">Office Address</p>
                    <p className="text-charcoal/80">100B, East Car Street</p>
                    <p className="text-charcoal/80">Palani 624 601, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-camphor-white border border-pale-sage rounded-2xl p-6 shadow-sm">
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4 flex items-center">
                <Clock className="text-forest-green mr-2" size={20} />
                Business Hours
              </h3>
              <div className="space-y-2 text-charcoal/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
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
              <h3 className="font-inter font-bold text-xl text-charcoal mb-4">What We Can Help With</h3>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Bulk order pricing and quotes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Product specifications and quality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Export documentation and shipping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Custom packaging requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Partnership opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Technical product support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-mint-tint/30 rounded-2xl p-8 text-center">
          <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Response Time Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="text-forest-green" size={24} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Phone Calls</h3>
              <p className="text-charcoal/80 text-sm">Immediate response during business hours</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="text-forest-green" size={24} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">WhatsApp</h3>
              <p className="text-charcoal/80 text-sm">Quick responses within 2-4 hours</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="text-forest-green" size={24} />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Email & Forms</h3>
              <p className="text-charcoal/80 text-sm">Detailed response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineSupport;