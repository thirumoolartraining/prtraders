import React from 'react';
import { ArrowLeft, RotateCcw, Shield, AlertTriangle, Clock, CheckCircle, Package, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const CancellationRefund = () => {
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
              <RotateCcw className="text-forest-green" size={24} />
            </div>
            <div>
              <h1 className="font-inter font-bold text-4xl text-charcoal">Cancellation & Refund Policy</h1>
              <p className="text-charcoal/70">Clear guidelines for cancellations and refunds</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-mint-tint/50 border-l-4 border-forest-green p-6 rounded-r-lg mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="text-forest-green mt-1" size={20} />
              <div>
                <p className="text-charcoal font-medium mb-2">Our Commitment to You</p>
                <p className="text-charcoal/80 text-sm mb-3">
                  At P R Traders, we strive to ensure a smooth and satisfactory experience for all our clients. While we aim to deliver the right products the first time, we understand there may be occasions where you need to cancel an order or request a refund. Please review our policy below for clarity on cancellations, returns, and resolution procedures.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Clock className="text-forest-green mr-3" size={24} />
              Order Cancellations
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <div className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-4 mb-4">
                <p className="text-charcoal/80 leading-relaxed font-medium mb-2">
                  <CheckCircle className="inline text-forest-green mr-2" size={16} />
                  Cancellation Window: 2 Hours
                </p>
                <p className="text-charcoal/80 text-sm">
                  Order cancellations are accepted only if requested within 2 hours of placing the order and before the order has been processed or dispatched from our facility.
                </p>
              </div>
              
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Once an order has been packed or handed over to the logistics partner, cancellation is not possible.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2"></div>
                  <span>Requests for cancellation must be submitted through our <Link to="/contact" className="text-forest-green hover:text-shade-forest font-medium">Contact Page</Link> or by reaching out to our support team.</span>
                </li>
              </ul>
              
              <div className="bg-mint-tint/30 p-4 rounded-lg mt-4">
                <p className="text-charcoal/80 text-sm">
                  <strong>Note:</strong> If you believe a product was ordered in error, please contact us immediately for resolution before shipment is initiated.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <AlertTriangle className="text-forest-green mr-3" size={24} />
              Damaged or Defective Deliverables
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                If you receive a shipment that is physically damaged or tampered with, or if you find any discrepancies in quantity or packaging, please notify our support team within <strong>7 days of receiving the goods</strong>.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Upon verification, we will arrange for a replacement or issue a refund as appropriate.
              </p>
              
              <div className="bg-mint-tint/30 p-4 rounded-lg">
                <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                  <Camera className="text-forest-green mr-2" size={16} />
                  To speed up resolution, please provide:
                </h4>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Your Order ID</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>Photographic evidence of the issue (e.g., packaging or product damage)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                    <span>A brief description of the discrepancy</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Service Satisfaction</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                If your order does not meet the quality standards described or you believe there is a defect in the product received, please report the issue within <strong>7 days of delivery</strong>. We will assess the situation and may offer a suitable remedy such as a replacement, credit note, or partial refund—depending on the case.
              </p>
              <div className="bg-forest-green/5 p-4 rounded-lg">
                <p className="text-charcoal/80 text-sm">
                  Our team is dedicated to maintaining our purity and quality promise and will work with you to find a fair resolution.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4 flex items-center">
              <Shield className="text-forest-green mr-3" size={24} />
              Manufacturer Warranty
            </h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our products are manufactured under strict quality protocols. However, if any product you receive is covered under a manufacturer's or third-party quality certification, you may be advised to coordinate with the issuing authority for resolution.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                For issues related to transit damage or packaging, please contact us directly.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Refund Processing</h2>
            <div className="bg-camphor-white border border-pale-sage rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <Clock className="text-forest-green mr-2" size={16} />
                    Processing Time
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    If a refund is approved, it will be initiated within 3–5 business days of confirmation
                  </p>
                </div>
                <div className="bg-mint-tint/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                    <RotateCcw className="text-forest-green mr-2" size={16} />
                    Refund Method
                  </h4>
                  <p className="text-sm text-charcoal/80">
                    Refunds will be processed to the original payment method used at checkout
                  </p>
                </div>
              </div>
              <p className="text-charcoal/80 leading-relaxed mt-4 text-sm">
                Processing timelines may vary depending on your bank, payment gateway, or regional clearing timeframes.
              </p>
            </div>
          </section>

          <section className="bg-forest-green/5 border border-forest-green/20 rounded-lg p-6">
            <h2 className="font-inter font-bold text-2xl text-charcoal mb-4">Need Assistance?</h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              If you need help with cancellations, refund requests, or delivery-related concerns, our support team is here to assist. Please visit our <Link to="/contact" className="text-forest-green hover:text-shade-forest font-medium">Contact Page</Link> or reach out to us during business hours.
            </p>
            <div className="bg-camphor-white p-4 rounded-lg">
              <p className="text-charcoal/80 leading-relaxed font-medium text-center">
                P R Traders is committed to transparency, reliability, and customer satisfaction. We value your trust and will ensure your concerns are resolved with fairness and professionalism.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefund;