import React from 'react';
import { ArrowLeft, Shield, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
              <FileText className="text-forest-green" size={24} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-4xl text-charcoal">Terms & Conditions</h1>
              <p className="text-charcoal/70">Last updated: January 2024</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-forest-green mt-1" size={20} />
              <div>
                <p className="text-charcoal font-medium mb-2">Welcome to P R TRADERS</p>
                <p className="text-charcoal/80 text-sm">
                  By accessing and using our website, you agree to be bound by the terms and conditions outlined below. 
                  These terms govern all interactions, purchases, and services provided through our platform. Please read them carefully before using our website or placing an order.
                </p>
                <p className="text-charcoal/80 text-sm mt-2">
                  Your continued use of the site implies full acceptance of these terms. If you do not agree with any part of the policy, we recommend discontinuing use of the site immediately.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Shield className="text-forest-green mr-3" size={24} />
              General Use of the Website
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                By using this website, you confirm that you are at least 18 years of age or accessing it under the supervision of a legal guardian. 
                You agree to use the website for lawful purposes only and in a manner that does not infringe upon the rights of, restrict, or inhibit the use of this site by any third party.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                We reserve the right to restrict access to part or all of the website at any time, without notice or liability.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Products, Pricing & Availability</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>All product listings are subject to availability and may be withdrawn or modified at any time without prior notice.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>We strive to ensure all descriptions, images, and pricing are accurate; however, errors may occasionally occur. We reserve the right to correct such errors, cancel affected orders, and refund payments where necessary.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Prices are listed in INR (₹) unless otherwise stated and may be revised without notice due to market conditions or policy changes.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Payment Terms</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Payments must be completed in full at the time of order confirmation unless a different arrangement has been explicitly made.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>We accept major payment methods via secure payment gateways. All payment information is processed with industry-standard encryption and security protocols.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>In case of failed transactions, double charges, or unauthorized use, please contact our support team immediately for assistance.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">User Responsibilities & Conduct</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">As a user, you agree not to:</p>
              <ul className="space-y-2 text-charcoal/80 ml-4">
                <li>• Post or transmit any unlawful, offensive, or misleading content on the platform</li>
                <li>• Attempt to gain unauthorized access to the website's backend or other user accounts</li>
                <li>• Reproduce, duplicate, or exploit any portion of the website content for commercial purposes without express written consent from P R TRADERS</li>
              </ul>
              <p className="text-charcoal/80 leading-relaxed mt-4">
                We reserve the right to suspend or terminate user access in cases of misconduct or violation of these terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Modifications to Terms</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed">
                P R TRADERS reserves the right to update, modify, or revise these Terms & Conditions at any time without prior notice. 
                Any changes will be reflected on this page, and your continued use of the site signifies your agreement to the updated terms. 
                We encourage users to review this page regularly.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Limitation of Liability</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed">
                Under no circumstances shall P R TRADERS or its affiliates be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or products. 
                This includes but is not limited to issues related to delivery delays, service disruptions, or product unavailability.
              </p>
            </div>
          </section>

          <section className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-6">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Contact Us</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              If you have any questions or concerns regarding these Terms & Conditions, feel free to reach out via our <Link to="/contact" className="text-forest-green hover:text-shade-forest font-medium">Contact Us</Link> page. 
              We're here to ensure your experience remains smooth, fair, and secure.
            </p>
            <div className="space-y-2 text-charcoal/80">
              <p><strong>Email:</strong> info@prtraders.com</p>
              <p><strong>Phone:</strong> +91 8122 800658</p>
              <p><strong>Address:</strong> 100B, East Car Street, Palani 624 601, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;