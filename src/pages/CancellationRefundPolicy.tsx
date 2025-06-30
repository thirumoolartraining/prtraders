import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home } from 'lucide-react';

const CancellationRefundPolicy: React.FC = () => {
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
      title: "Order Cancellations",
      subtitle: "Cancellation Window: 2 Hours",
      content: [
        "Order cancellations are accepted only if requested within 2 hours of placing the order and before the order has been processed or dispatched from our facility.",
        "Once an order has been packed or handed over to the logistics partner, cancellation is not possible.",
        "Requests for cancellation must be submitted through our Contact Page or by reaching out to our support team."
      ],
      note: "If you believe a product was ordered in error, please contact us immediately for resolution before shipment is initiated."
    },
    {
      title: "Damaged or Defective Deliverables",
      content: [
        "If you receive a shipment that is physically damaged or tampered with, or if you find any discrepancies in quantity or packaging, please notify our support team within 7 days of receiving the goods.",
        "Upon verification, we will arrange for a replacement or issue a refund as appropriate."
      ],
      requirements: [
        "Your Order ID",
        "Photographic evidence of the issue (e.g., packaging or product damage)",
        "A brief description of the discrepancy"
      ]
    },
    {
      title: "Service Satisfaction",
      content: [
        "If your order does not meet the quality standards described or you believe there is a defect in the product received, please report the issue within 7 days of delivery.",
        "We will assess the situation and may offer a suitable remedy such as a replacement, credit note, or partial refund—depending on the case.",
        "Our team is dedicated to maintaining our purity and quality promise and will work with you to find a fair resolution."
      ]
    },
    {
      title: "Manufacturer Warranty",
      content: [
        "Our products are manufactured under strict quality protocols. However, if any product you receive is covered under a manufacturer's or third-party quality certification, you may be advised to coordinate with the issuing authority for resolution.",
        "For issues related to transit damage or packaging, please contact us directly."
      ]
    },
    {
      title: "Refund Processing",
      content: [
        "If a refund is approved, it will be initiated within 3–5 business days of confirmation",
        "Refunds will be processed to the original payment method used at checkout",
        "Processing timelines may vary depending on your bank, payment gateway, or regional clearing timeframes."
      ],
      processingDetails: [
        { label: "Processing Time", value: "3–5 business days" },
        { label: "Refund Method", value: "Original payment method" }
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
              Cancellation & Refund Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6"
          >
            Clear Guidelines for
            <span className="block text-spiritual-gold">Cancellations & Refunds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
          >
            At P R Traders, we strive to ensure a smooth and satisfactory experience for all our clients. 
            While we aim to deliver the right products the first time, we understand there may be occasions 
            where you need to cancel an order or request a refund.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { text: "2-Hour Cancellation" },
              { text: "Quality Guarantee" },
              { text: "Quick Refunds" }
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

      {/* Our Commitment Section */}
      <section className="py-16 bg-spiritual-sandalwood">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-spiritual-pure rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-6">
              <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon">
                Our Commitment to You
              </h2>
            </div>
            <p className="text-spiritual-maroon/80 font-sans-spiritual leading-relaxed text-lg">
              Please review our policy below for clarity on cancellations, returns, and resolution procedures. 
              We are committed to transparency, reliability, and customer satisfaction.
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
                  {section.subtitle && (
                    <p className="text-spiritual-gold font-sans-spiritual font-semibold text-sm mt-1">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-6">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spiritual-rose rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Requirements */}
                {section.requirements && (
                  <div className="bg-spiritual-sandy-light rounded-lg p-6 mb-6">
                    <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-4">
                      To speed up resolution, please provide:
                    </h4>
                    <ul className="space-y-2">
                      {section.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-spiritual-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-spiritual-maroon font-sans-spiritual text-sm">
                            {requirement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Processing Details */}
                {section.processingDetails && (
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {section.processingDetails.map((detail, detailIndex) => (
                      <div key={detailIndex} className="bg-spiritual-sandalwood rounded-lg p-4">
                        <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                          {detail.label}
                        </h4>
                        <p className="text-spiritual-gold font-sans-spiritual font-semibold">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Section Note */}
                {section.note && (
                  <div className="bg-spiritual-rose-light rounded-lg p-4">
                    <div>
                      <p className="text-spiritual-maroon font-sans-spiritual font-semibold text-sm mb-1">
                        Important Note:
                      </p>
                      <p className="text-spiritual-maroon font-sans-spiritual text-sm leading-relaxed">
                        {section.note}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Need Assistance Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-maroon rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-pure mb-4">
                  Need Assistance?
                </h2>
                <p className="text-spiritual-pure/90 font-sans-spiritual leading-relaxed">
                  If you need help with cancellations, refund requests, or delivery-related concerns, 
                  our support team is here to assist. Please visit our Contact Page or reach out to us during business hours.
                </p>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-spiritual-gold text-spiritual-maroon px-8 py-3 rounded-full font-sans-spiritual font-semibold hover:bg-spiritual-gold-light transition-colors duration-300"
                >
                  Contact Support
                </motion.button>
              </div>
            </motion.div>

            {/* Commitment Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-sandalwood rounded-2xl p-8 text-center"
            >
              <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-4">
                Our Promise to You
              </h2>
              <p className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                P R Traders is committed to transparency, reliability, and customer satisfaction. 
                We value your trust and will ensure your concerns are resolved with fairness and professionalism.
              </p>
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
                We understand that sometimes circumstances change. Our cancellation and refund policy is designed 
                to be fair and transparent while maintaining the quality and integrity of our sacred products.
              </p>
              <p className="text-spiritual-gold font-sans-spiritual font-semibold">
                Thank you for trusting P R Traders with your spiritual journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CancellationRefundPolicy;