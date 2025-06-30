import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
      title: "Information We Collect",
      content: [
        "Full Name",
        "Email Address", 
        "Shipping and Billing Address",
        "Payment Information",
        "Phone Number",
        "User Preferences and Order History",
        "Device Information",
        "Cookies and Tracking Technologies"
      ],
      description: "We collect only the information necessary to provide our services efficiently and to enhance your experience with us."
    },
    {
      title: "Why We Collect Your Information",
      content: [
        "Processing and fulfilling your orders",
        "Communicating order updates, shipping information, and customer support",
        "Managing your account and preferences",
        "Improving our website functionality and service offerings",
        "Sending occasional promotional content (only if you've opted in)",
        "Analyzing website usage to improve performance and user experience (aggregated data only)"
      ],
      description: "We never collect excessive or irrelevant information. Everything we gather is purposeful and aligned with delivering the best customer experience possible."
    },
    {
      title: "How Your Information Is Protected",
      content: [
        "SSL Encryption - Secure Sockets Layer encryption for all data transmissions",
        "Server Security - Firewalls and server security protocols to protect our backend infrastructure", 
        "Access Control - Strict internal access controls for authorized personnel only",
        "Payment Security - Secure third-party payment gateways – never stored on our servers"
      ],
      description: "Your payment details are never stored directly on our servers—they are processed securely through certified third-party payment gateways."
    },
    {
      title: "No Sharing with Third Parties",
      content: [
        "We never sell, rent, or share your personal information with unauthorized third parties",
        "Data shared with service providers is done solely for fulfilling requested services",
        "All third-party providers are contractually obligated to maintain privacy and confidentiality",
        "International data transfers include contractual safeguards for high-level protection"
      ],
      description: "We respect your privacy and ensure secure handling even when using third-party tools."
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
              Privacy Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6"
          >
            Your Privacy Is Our
            <span className="block text-spiritual-gold">Sacred Priority</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
          >
            At P R TRADERS, your privacy is our priority. We are fully committed to protecting the personal 
            information you share with us and ensuring that your data is handled responsibly, securely, 
            and in full compliance with applicable data protection laws.
          </motion.p>
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

                <p className="text-spiritual-maroon/80 font-sans-spiritual leading-relaxed mb-6">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spiritual-rose rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Your Rights Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-sandalwood rounded-2xl p-8"
            >
              <div className="mb-6">
                <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
                  Your Rights & Choices
                </h2>
              </div>

              <p className="text-spiritual-maroon/80 font-sans-spiritual leading-relaxed mb-6">
                You have full control over your personal information:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-spiritual-maroon font-sans-spiritual">
                      You may request to view, edit, or delete your data at any time
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-spiritual-maroon font-sans-spiritual">
                      You can unsubscribe from marketing communications via email links
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-spiritual-maroon font-sans-spiritual">
                      Contact our support team for data corrections or concerns
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-spiritual-maroon font-sans-spiritual">
                      Withdraw consent for data processing at any time
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-maroon rounded-2xl p-8 text-center"
            >
              <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-pure mb-4">
                Questions or Concerns?
              </h2>
              <p className="text-spiritual-pure/90 font-sans-spiritual leading-relaxed mb-6">
                If you have any questions regarding our Privacy Policy or how your data is handled, 
                please feel free to contact our Data Protection Officer via our Contact Us page.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-spiritual-gold text-spiritual-maroon px-8 py-3 rounded-full font-sans-spiritual font-semibold hover:bg-spiritual-gold-light transition-colors duration-300"
              >
                Contact Us
              </motion.button>
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
              <p className="text-spiritual-maroon/70 font-sans-spiritual text-sm leading-relaxed">
                By continuing to use our platform, you consent to the practices described in this policy. 
                We reserve the right to update this Privacy Policy periodically to reflect evolving legal 
                and operational requirements. Material changes will be communicated prominently on this page.
              </p>
              <p className="text-spiritual-gold font-sans-spiritual font-semibold mt-4">
                Thank you for trusting P R TRADERS.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;