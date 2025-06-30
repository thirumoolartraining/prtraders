import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

const TermsAndConditions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const sections = [
    {
      title: "General Use of the Website",
      content: [
        "By using this website, you confirm that you are at least 18 years of age or accessing it under the supervision of a legal guardian.",
        "You agree to use the website for lawful purposes only and in a manner that does not infringe upon the rights of, restrict, or inhibit the use of this site by any third party.",
        "We reserve the right to restrict access to part or all of the website at any time, without notice or liability."
      ]
    },
    {
      title: "Products, Pricing & Availability",
      content: [
        "All product listings are subject to availability and may be withdrawn or modified at any time without prior notice.",
        "We strive to ensure all descriptions, images, and pricing are accurate; however, errors may occasionally occur. We reserve the right to correct such errors, cancel affected orders, and refund payments where necessary.",
        "Prices are listed in INR (₹) unless otherwise stated and may be revised without notice due to market conditions or policy changes."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payments must be completed in full at the time of order confirmation unless a different arrangement has been explicitly made.",
        "We accept major payment methods via secure payment gateways. All payment information is processed with industry-standard encryption and security protocols.",
        "In case of failed transactions, double charges, or unauthorized use, please contact our support team immediately for assistance."
      ]
    },
    {
      title: "User Responsibilities & Conduct",
      content: [
        "Post or transmit any unlawful, offensive, or misleading content on the platform",
        "Attempt to gain unauthorized access to the website's backend or other user accounts",
        "Reproduce, duplicate, or exploit any portion of the website content for commercial purposes without express written consent from P R TRADERS"
      ],
      isProhibited: true
    },
    {
      title: "Limitation of Liability",
      content: [
        "Under no circumstances shall P R TRADERS or its affiliates be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or products.",
        "This includes but is not limited to issues related to delivery delays, service disruptions, or product unavailability."
      ]
    },
    {
      title: "Governing Law",
      content: [
        `These terms are governed by the laws of India, with jurisdiction under the courts of ${APP_CONFIG.contact.address.city}, ${APP_CONFIG.contact.address.state}.`,
        "Any disputes will be resolved accordingly."
      ]
    }
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
              Terms & Conditions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6"
          >
            Welcome to
            <span className="block text-spiritual-gold">{APP_CONFIG.business.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
          >
            By accessing and using our website, you agree to be bound by the terms and conditions outlined below. 
            These terms govern all interactions, purchases, and services provided through our platform. Please read 
            them carefully before using our website or placing an order.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-spiritual-rose-light rounded-lg p-4 mt-8 max-w-2xl mx-auto"
          >
            <p className="text-spiritual-maroon font-sans-spiritual text-sm leading-relaxed">
              <strong>Important:</strong> Your continued use of the site implies full acceptance of these terms. 
              If you do not agree with any part of the policy, we recommend discontinuing use of the site immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="bg-spiritual-pure rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-6">
                  <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
                    {section.title}
                  </h2>
                </div>

                {section.isProhibited && (
                  <div className="bg-spiritual-rose-light rounded-lg p-4 mb-6">
                    <p className="text-spiritual-maroon font-sans-spiritual font-semibold mb-2">
                      As a user, you agree not to:
                    </p>
                  </div>
                )}

                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        section.isProhibited ? 'bg-spiritual-maroon' : 'bg-spiritual-rose'
                      }`}></div>
                      <span className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                        {section.isProhibited && '• '}
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {section.isProhibited && (
                  <div className="mt-6 p-4 bg-spiritual-sandy-light rounded-lg">
                    <p className="text-spiritual-maroon font-sans-spiritual text-sm">
                      We reserve the right to suspend or terminate user access in cases of misconduct or violation of these terms.
                    </p>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Modifications Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-sandalwood rounded-2xl p-8"
            >
              <div className="mb-6">
                <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
                  Modifications to Terms
                </h2>
              </div>

              <p className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                {APP_CONFIG.business.name} reserves the right to update, modify, or revise these Terms & Conditions at any time 
                without prior notice. Any changes will be reflected on this page, and your continued use of the site 
                signifies your agreement to the updated terms. We encourage users to review this page regularly.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-maroon rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-pure mb-4">
                  Contact Us
                </h2>
                <p className="text-spiritual-pure/90 font-sans-spiritual leading-relaxed">
                  If you have any questions or concerns regarding these Terms & Conditions, feel free to reach out 
                  via our Contact Us page. We're here to ensure your experience remains smooth, fair, and secure.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-spiritual-pure font-sans-spiritual font-semibold">Email</span>
                  <a 
                    href={`mailto:${APP_CONFIG.contact.email.primary}`}
                    className="text-spiritual-pure/80 hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual text-sm"
                  >
                    {APP_CONFIG.contact.email.primary}
                  </a>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-spiritual-pure font-sans-spiritual font-semibold">Phone</span>
                  <a 
                    href={`tel:${APP_CONFIG.contact.phone.primary}`}
                    className="text-spiritual-pure/80 hover:text-spiritual-gold transition-colors duration-300 font-sans-spiritual text-sm"
                  >
                    {APP_CONFIG.contact.phone.display}
                  </a>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-spiritual-pure font-sans-spiritual font-semibold">Address</span>
                  <span className="text-spiritual-pure/80 font-sans-spiritual text-sm text-center">
                    {APP_CONFIG.contact.address.street}<br />
                    {APP_CONFIG.contact.address.city} {APP_CONFIG.contact.address.pincode}, {APP_CONFIG.contact.address.state}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Back to Home CTA */}
            <motion.div
              variants={itemVariants}
              className="text-center py-8"
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 bg-spiritual-gold text-spiritual-maroon px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-gold-light transition-all duration-300 mx-auto"
                >
                  <Home className="w-6 h-6" />
                  <span>Return to Sacred Collection</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              variants={itemVariants}
              className="text-center py-8 border-t border-spiritual-sandalwood"
            >
              <p className="text-spiritual-maroon/70 font-sans-spiritual text-sm leading-relaxed mb-4">
                By continuing to use our platform, you consent to the practices described in these terms. 
                We are committed to providing you with the highest quality spiritual products and exceptional service.
              </p>
              <p className="text-spiritual-gold font-sans-spiritual font-semibold">
                Thank you for choosing {APP_CONFIG.business.name} for your spiritual journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;