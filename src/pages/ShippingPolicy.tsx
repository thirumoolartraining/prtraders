import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
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
      title: "Order Processing Time",
      content: [
        "Once your order has been successfully placed and payment is confirmed, we begin processing it within 2 to 5 business days.",
        "This timeframe allows us to carefully verify, pack, and prepare your order for shipment.",
        "Orders placed during weekends or public holidays will begin processing on the next business day.",
        "In rare cases—such as during high-demand periods or custom bulk orders—processing times may be slightly extended.",
        "Rest assured, our team works diligently to dispatch your order as quickly as possible."
      ]
    },
    {
      title: "Shipping Timelines",
      content: [
        "We currently ship orders across India. Once your order has been dispatched, typical delivery timelines are as follows:"
      ],
      deliveryTimes: [
        { location: "Metro Cities", time: "3–6 business days after dispatch" },
        { location: "Non-Metro and Remote Areas", time: "5–10 business days after dispatch" }
      ],
      note: "Delivery timelines may vary depending on your specific location, local courier availability, or logistical constraints. All deliveries are handled through trusted logistics partners to ensure reliability, safety, and real-time tracking."
    },
    {
      title: "Shipping Charges",
      content: [
        "Shipping charges (if applicable) are calculated based on the order value, delivery address, and selected shipping method.",
        "These charges will be clearly displayed at checkout before you confirm your order."
      ],
      shippingTypes: [
        {
          type: "Free Shipping",
          description: "We may offer free shipping on orders above a specific value threshold. Please check ongoing promotions or banner notifications for eligibility."
        },
        {
          type: "Standard Shipping",
          description: "For orders that do not meet the free shipping criteria, a nominal shipping fee will apply based on your delivery location."
        }
      ]
    },
    {
      title: "Order Tracking",
      content: [
        "Once your order has been shipped, you will receive a tracking number via email or SMS, along with a link to track your shipment in real time.",
        "You can also view tracking details under the My Orders section of your account on our website.",
        "Please allow 24–48 hours for tracking information to update after your dispatch confirmation."
      ]
    },
    {
      title: "Delays and Exceptions",
      content: [
        "While we aim to maintain timely deliveries, certain situations may cause delays, including:"
      ],
      delayReasons: [
        "Adverse weather conditions",
        "Transportation or courier disruptions",
        "Government or regional restrictions",
        "Festive season backlogs"
      ],
      note: "In such cases, we will proactively notify you by email or phone and provide timely updates until your order is delivered."
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
              Shipping Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl font-bold text-spiritual-maroon leading-tight mb-6"
          >
            Safe, Secure & On-Time
            <span className="block text-spiritual-gold">Delivery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-spiritual-maroon/80 font-sans-spiritual leading-relaxed max-w-3xl mx-auto"
          >
            At P R TRADERS, we are committed to ensuring that your order reaches you safely, securely, and on time. 
            Our shipping policy is designed to provide complete transparency and confidence as you engage with us. 
            Below you'll find all the key information regarding our order processing, delivery timelines, tracking, and more.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { text: "Secure Packaging" },
              { text: "Trusted Partners" },
              { text: "Real-time Tracking" }
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

                <ul className="space-y-3 mb-6">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-spiritual-rose rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Delivery Times */}
                {section.deliveryTimes && (
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {section.deliveryTimes.map((delivery, deliveryIndex) => (
                      <div key={deliveryIndex} className="bg-spiritual-sandy-light rounded-lg p-4">
                        <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                          {delivery.location}
                        </h4>
                        <p className="text-spiritual-gold font-sans-spiritual font-semibold">
                          {delivery.time}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Shipping Types */}
                {section.shippingTypes && (
                  <div className="space-y-4 mb-6">
                    {section.shippingTypes.map((shipping, shippingIndex) => (
                      <div key={shippingIndex} className="bg-spiritual-sandalwood rounded-lg p-4">
                        <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon mb-2">
                          {shipping.type}
                        </h4>
                        <p className="text-spiritual-maroon/80 font-sans-spiritual text-sm leading-relaxed">
                          {shipping.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Delay Reasons */}
                {section.delayReasons && (
                  <div className="bg-spiritual-rose-light rounded-lg p-4 mb-6">
                    <ul className="space-y-2">
                      {section.delayReasons.map((reason, reasonIndex) => (
                        <li key={reasonIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-spiritual-maroon rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-spiritual-maroon font-sans-spiritual text-sm">
                            {reason}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section Note */}
                {section.note && (
                  <div className="bg-spiritual-sandy-light rounded-lg p-4">
                    <p className="text-spiritual-maroon font-sans-spiritual text-sm leading-relaxed">
                      <strong>Note:</strong> {section.note}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Need Help Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-maroon rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-pure mb-4">
                  Need Help?
                </h2>
                <p className="text-spiritual-pure/90 font-sans-spiritual leading-relaxed">
                  If you encounter any issues with your order's delivery or tracking, please don't hesitate to 
                  contact our customer support team via our Contact Us page. We're here to assist you at every step.
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

            {/* Thank You Section */}
            <motion.div
              variants={itemVariants}
              className="bg-spiritual-sandalwood rounded-2xl p-8 text-center"
            >
              <h2 className="font-serif-spiritual text-2xl font-bold text-spiritual-maroon mb-4">
                Thank You for Choosing P R TRADERS
              </h2>
              <p className="text-spiritual-maroon font-sans-spiritual leading-relaxed">
                We value your trust and look forward to delivering a seamless, dependable shipping experience every time. 
                Your spiritual journey is important to us, and we're honored to be part of it.
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
                Our shipping policy is designed with your satisfaction in mind. We continuously work to improve our 
                delivery processes and partner with the most reliable logistics providers to ensure your sacred products 
                reach you in perfect condition.
              </p>
              <p className="text-spiritual-gold font-sans-spiritual font-semibold">
                Safe travels for your spiritual essentials.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicy;