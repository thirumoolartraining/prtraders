import { test, expect } from '@playwright/test';

test.describe('Cart functionality', () => {
  test('should add product to cart and update badge', async ({ page }) => {
    // Visit the homepage
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check initial cart badge state (should be 0 or not visible)
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).not.toBeVisible();
    
    // Click the first product's add-to-cart button
    await page.getByTestId('add-to-cart-btn-premium-camphor-pouches').click();
    
    // Wait for modal to appear
    await page.waitForSelector('[role="dialog"]');
    
    // Click "Add to Cart" in the modal
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    
    // Wait for modal to close
    await page.waitForSelector('[role="dialog"]', { state: 'hidden' });
    
    // Check that cart badge now shows 1
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
    
    // Open cart drawer
    await page.getByLabel('Open shopping cart').click();
    
    // Verify cart drawer opens and shows the product
    await expect(page.getByTestId('cart-drawer')).toBeVisible();
    await expect(page.getByText('Premium Camphor Pouches')).toBeVisible();
  });
  
  test('should persist cart after page reload', async ({ page }) => {
    // Visit the homepage
    await page.goto('/');
    
    // Add a product to cart
    await page.getByTestId('add-to-cart-btn-premium-camphor-pouches').click();
    await page.waitForSelector('[role="dialog"]');
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.waitForSelector('[role="dialog"]', { state: 'hidden' });
    
    // Verify cart badge shows 1
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
    
    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Verify cart badge still shows 1
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
    
    // Open cart and verify product is still there
    await page.getByLabel('Open shopping cart').click();
    await expect(page.getByText('Premium Camphor Pouches')).toBeVisible();
  });
});