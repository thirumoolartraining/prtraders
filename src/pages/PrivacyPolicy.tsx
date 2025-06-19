import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-camphor-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
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
              <Shield className="text-forest-green" size={24} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-4xl text-charcoal">Privacy Policy</h1>
              <p className="text-charcoal/70">Your privacy is our priority</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
            <p className="text-charcoal font-medium mb-2">Your Privacy Is Our Priority</p>
            <p className="text-charcoal/80 text-sm mb-3">
              At P R TRADERS, your privacy is our priority. We are fully committed to protecting the personal information you share with us and ensuring that your data is handled responsibly, securely, and in full compliance with applicable data protection laws, including the Indian IT Act and international best practices where relevant.
            </p>
            <p className="text-charcoal/80 text-sm">
              This Privacy Policy outlines what information we collect, how we use it, how it is stored, and the measures we take to protect your privacy when you engage with our website, products, or services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Eye className="text-forest-green mr-3" size={24} />
              Information We Collect
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                When you interact with our platform—whether browsing, placing an order, or subscribing to updates—we may collect certain personal information, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Full Name</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Email Address</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Shipping and Billing Address</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Payment Information</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Phone Number</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>User Preferences and Order History</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Device Information</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Cookies and Tracking Technologies</span>
                  </li>
                </ul>
              </div>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                We collect only the information necessary to provide our services efficiently and to enhance your experience with us.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Why We Collect Your Information</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">Your data is used strictly for legitimate business purposes, such as:</p>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Processing and fulfilling your orders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Communicating order updates, shipping information, and customer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Managing your account and preferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Improving our website functionality and service offerings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Sending occasional promotional content (only if you've opted in)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Analyzing website usage to improve performance and user experience (aggregated data only)</span>
                </li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                We never collect excessive or irrelevant information. Everything we gather is purposeful and aligned with delivering the best customer experience possible.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Lock className="text-forest-green mr-3" size={24} />
              How Your Information Is Protected
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We take data security seriously. All personal data is stored in secured systems with access restricted to authorized personnel only. Our platform employs industry-standard security measures, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Lock className="text-forest-green mr-2" size={16} />
                    SSL Encryption
                  </h4>
                  <p className="text-sm text-charcoal/80">Secure Sockets Layer encryption for all data transmissions</p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Server className="text-forest-green mr-2" size={16} />
                    Server Security
                  </h4>
                  <p className="text-sm text-charcoal/80">Firewalls and server security protocols to protect our backend infrastructure</p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <UserCheck className="text-forest-green mr-2" size={16} />
                    Access Control
                  </h4>
                  <p className="text-sm text-charcoal/80">Strict internal access controls for authorized personnel only</p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Shield className="text-forest-green mr-2" size={16} />
                    Payment Security
                  </h4>
                  <p className="text-sm text-charcoal/80">Secure third-party payment gateways – never stored on our servers</p>
                </div>
              </div>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                Your payment details are never stored directly on our servers—they are processed securely through certified third-party payment gateways. All data is handled in accordance with applicable security regulations, and we ensure secure handling even when using third-party tools.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Globe className="text-forest-green mr-3" size={24} />
              No Sharing with Third Parties
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We respect your privacy. Under no circumstances do we sell, rent, or share your personal information with unauthorized third parties.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Any data shared with third-party services (e.g., logistics or payment providers) is done solely for fulfilling the services you've requested, and these providers are contractually obligated to maintain your privacy and confidentiality. In cases where data must be shared with service providers outside your home country, we ensure contractual safeguards are in place to maintain a high level of data protection.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <UserCheck className="text-forest-green mr-3" size={24} />
              Your Rights & Choices
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">You have full control over your personal information:</p>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>You may request to view, edit, or delete your data at any time.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>You can unsubscribe from marketing communications via the link provided in our emails.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>You may contact our support team if you believe your data has been misused or requires correction. You may also withdraw your consent for data processing at any time, subject to legal and contractual limitations.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-6">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Questions or Concerns?</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              If you have any questions regarding our Privacy Policy or how your data is handled, please feel free to contact our Data Protection Officer via our <Link to="/contact" className="text-forest-green hover:text-shade-forest font-medium">Contact Us</Link> page.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              By continuing to use our platform, you consent to the practices described in this policy. We reserve the right to update this Privacy Policy periodically to reflect evolving legal and operational requirements. Material changes will be communicated prominently on this page with an updated revision date.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-medium text-center">
              Thank you for trusting P R TRADERS.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;