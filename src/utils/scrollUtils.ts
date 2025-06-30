/**
 * Utility functions for smooth scrolling and navigation
 */

/**
 * Scrolls to the top of the page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Scrolls to a specific element by ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 80px for header)
 */
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handles navigation to products section with proper routing
 * @param navigate - React Router navigate function
 * @param currentPath - Current pathname
 */
export const navigateToProducts = (navigate: (path: string) => void, currentPath: string) => {
  if (currentPath === '/') {
    // Already on home page, just scroll to products
    scrollToElement('products');
  } else {
    // Navigate to home page with products hash
    navigate('/#products');
  }
};

/**
 * Scrolls to a specific Y position
 * @param position - The Y position to scroll to
 */
export const scrollToPosition = (position: number) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
};

/**
 * Checks if an element is in the viewport
 * @param element - The element to check
 * @returns boolean indicating if element is visible
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Gets the current scroll position
 * @returns object with x and y scroll positions
 */
export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};