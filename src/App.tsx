import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CheckoutPage from './pages/CheckoutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import CartDrawer from './components/Cart/CartDrawer';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import ScrollToTopOnRouteChange from './components/UI/ScrollToTopOnRouteChange';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTopOnRouteChange />
        <div className="min-h-screen bg-spiritual-warm">
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/cancellation-refund" element={<CancellationRefundPolicy />} />
          </Routes>
          
          <Footer />
          <CartDrawer />
          <ScrollToTop />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;