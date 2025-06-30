# Image Handling Guide

This document outlines the standardized approach for handling images in the P R Traders application.

## Directory Structure

```
public/
  images/
    products/       # Product images
    placeholders/   # Fallback/placeholder images
    logos/          # Brand logos and icons
```

## Image Components

### 1. `Image` Component

A reusable image component with built-in error handling and lazy loading.

```tsx
import Image from '@/components/ui/Image';

// Basic usage
<Image 
  src="/images/example.jpg"
  alt="Example image"
  className="w-full h-auto"
/>
```

### 2. `ProductImage` Component

Specialized component for product images that automatically uses the correct path.

```tsx
import { ProductImage } from '@/components/ui/Image';

// Automatically resolves to /images/products/{filename}
<ProductImage 
  src="product-1.jpg"
  alt="Product name"
  className="w-full h-auto"
/>
```

## Best Practices

1. **Always use the Image component** instead of native `<img>` tags
2. **Provide meaningful alt text** for accessibility
3. **Use appropriate image formats**:
   - Use WebP for better compression
   - Use SVG for logos and icons
   - Use JPG for photographs
   - Use PNG for images with transparency
4. **Optimize images** before adding them to the project
5. **Lazy load** below-the-fold images
6. **Always provide a fallback** for missing images

## Handling Missing Images

The image components automatically handle missing images by showing a placeholder. To customize the placeholder:

```tsx
<Image
  src={imageUrl}
  fallbackSrc="/images/custom-placeholder.png"
  alt="Product"
/>
```

## Vercel Deployment

- Images in the `public` directory are served statically
- The build process optimizes and hashes image filenames
- Vercel's CDN caches images for optimal performance

## Troubleshooting

If images don't appear:
1. Check the browser's network tab for 404 errors
2. Verify the file exists in the correct directory
3. Ensure the path is correct (case-sensitive)
4. Check the Vercel deployment logs for build errors
