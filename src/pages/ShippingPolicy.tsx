import React from 'react';
import { ArrowLeft, Truck, Clock, MapPin, Package, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
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
              <Truck className="text-forest-green" size={24} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-4xl text-charcoal">Shipping Policy</h1>
              <p className="text-charcoal/70">Safe, secure & on-time delivery</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
            <p className="text-charcoal font-medium mb-2">Safe, Secure & On Time</p>
            <p className="text-charcoal/80 text-sm">
              At P R TRADERS, we are committed to ensuring that your order reaches you safely, securely, and on time. 
              Our shipping policy is designed to provide complete transparency and confidence as you engage with us. 
              Below you'll find all the key information regarding our order processing, delivery timelines, tracking, and more.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Clock className="text-forest-green mr-3" size={24} />
              Order Processing Time
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Once your order has been successfully placed and payment is confirmed, we begin processing it within <strong>2 to 5 business days</strong>. 
                This timeframe allows us to carefully verify, pack, and prepare your order for shipment. Orders placed during weekends or public holidays will begin processing on the next business day.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                In rare cases—such as during high-demand periods or custom bulk orders—processing times may be slightly extended. 
                Rest assured, our team works diligently to dispatch your order as quickly as possible.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <MapPin className="text-forest-green mr-3" size={24} />
              Shipping Timelines
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                We currently ship orders across India. Once your order has been dispatched, typical delivery timelines are as follows:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <MapPin className="text-forest-green mr-2" size={16} />
                    Metro Cities
                  </h4>
                  <p className="text-sm text-charcoal/80">3–6 business days after dispatch</p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Truck className="text-forest-green mr-2" size={16} />
                    Non-Metro and Remote Areas
                  </h4>
                  <p className="text-sm text-charcoal/80">5–10 business days after dispatch</p>
                </div>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                Delivery timelines may vary depending on your specific location, local courier availability, or logistical constraints. 
                All deliveries are handled through trusted logistics partners to ensure reliability, safety, and real-time tracking.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Shipping Charges</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Shipping charges (if applicable) are calculated based on the order value, delivery address, and selected shipping method. 
                These charges will be clearly displayed at checkout before you confirm your order.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-forest-green/5 p-4 rounded-lg border border-forest-green/20">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Package className="text-forest-green mr-2" size={16} />
                    Free Shipping
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    We may offer free shipping on orders above a specific value threshold. Please check ongoing promotions or banner notifications for eligibility.
                  </p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Truck className="text-forest-green mr-2" size={16} />
                    Standard Shipping
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    For orders that do not meet the free shipping criteria, a nominal shipping fee will apply based on your delivery location.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Order Tracking</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Once your order has been shipped, you will receive a <strong>tracking number via email or SMS</strong>, along with a link to track your shipment in real time. 
                You can also view tracking details under the <strong>My Orders</strong> section of your account on our website.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Please allow 24–48 hours for tracking information to update after your dispatch confirmation.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <AlertTriangle className="text-forest-green mr-3" size={24} />
              Delays and Exceptions
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                While we aim to maintain timely deliveries, certain situations may cause delays, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                    <span>Adverse weather conditions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                    <span>Transportation or courier disruptions</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                    <span>Government or regional restrictions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                    <span>Festive season backlogs</span>
                  </li>
                </ul>
              </div>
              <p className="text-charcoal/80 leading-relaxed">
                In such cases, we will proactively notify you by email or phone and provide timely updates until your order is delivered.
              </p>
            </div>
          </section>

          <section className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-6">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Need Help?</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              If you encounter any issues with your order's delivery or tracking, please don't hesitate to contact our customer support team via our <Link to="/contact" className="text-forest-green hover:text-shade-forest font-medium">Contact Us</Link> page. 
              We're here to assist you at every step.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-medium text-center">
              Thank you for choosing P R TRADERS. We value your trust and look forward to delivering a seamless, dependable shipping experience every time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;