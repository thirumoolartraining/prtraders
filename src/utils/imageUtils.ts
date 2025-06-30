/**
 * Centralized utility for handling image paths
 * Ensures consistent path handling across development and production
 */

// Base URL for all images (empty string for relative paths)
const BASE_URL = '';

// Common image paths
export const IMAGE_PATHS = {
  PLACEHOLDER: `${BASE_URL}/images/placeholders/image-not-found.png`,
  LOGO: `${BASE_URL}/images/logo.png`,
  // Add other common image paths here
};

/**
 * Gets the full URL for a product image
 * @param imageName - The name of the image file (e.g., 'product-1.jpg')
 * @returns Full URL to the product image
 */
export function getProductImageUrl(imageName: string): string {
  if (!imageName) return IMAGE_PATHS.PLACEHOLDER;
  return `${BASE_URL}/images/products/${imageName}`;
}

/**
 * Handles image loading errors by replacing with a placeholder
 * @param e - The error event from an <img> element
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>): void {
  const img = e.target as HTMLImageElement;
  if (img.src !== IMAGE_PATHS.PLACEHOLDER) {
    img.src = IMAGE_PATHS.PLACEHOLDER;
    img.alt = 'Image not found';
  }
}
