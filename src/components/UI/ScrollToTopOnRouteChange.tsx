import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls to top when route changes
 * This ensures users start at the top of each new page
 * Updated to use smooth scrolling for consistency
 */
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element after a brief delay
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Scroll to top smoothly when route changes (no hash)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnRouteChange;