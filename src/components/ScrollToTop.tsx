import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 160) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      data-testid="scroll-top-btn"
      aria-label="Back to top"
      className={`
        fixed z-40 rounded-full shadow-lg transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-forest-green/70 focus:ring-offset-2
        bg-forest-green hover:bg-shade-forest text-camphor-white
        h-11 w-11 sm:h-12 sm:w-12
        flex items-center justify-center
        bottom-6 right-6 sm:bottom-10 sm:right-10
        hover:scale-110 active:scale-95
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
    >
      <ArrowUp 
        size={20} 
        strokeWidth={2.4} 
        className="transition-transform duration-300 group-hover:-translate-y-0.5" 
      />
    </button>
  );
};

export default ScrollToTop;