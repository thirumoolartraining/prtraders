import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import QualityStrip from './components/QualityStrip';
import LifestyleBanner from './components/LifestyleBanner';
import RFQForm from './components/RFQForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import OnlineSupport from './pages/OnlineSupport';
import ContactUs from './pages/ContactUs';
import CancellationRefund from './pages/CancellationRefund';
import AboutUs from './pages/AboutUs';
import Heritage from './pages/Heritage';
import BulkQuote from './pages/BulkQuote';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';

function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <QualityStrip />
      <LifestyleBanner />
      <RFQForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-camphor-white font-inter antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/bulk-quote" element={<BulkQuote />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/support" element={<OnlineSupport />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#0f5132',
              color: '#f7fdfa',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;