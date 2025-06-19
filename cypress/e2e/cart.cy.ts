describe('E-commerce Cart Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add each SKU at MOQ and verify grand total', () => {
    // Test data matching the updated product specifications
    const products = [
      { slug: 'premium-camphor-pouches', moq: 10, price: 1000, expectedTotal: 10000 },
      { slug: 'camphor-tablets-jar', moq: 10, price: 1199, expectedTotal: 11990 },
      { slug: 'bulk-camphor-crystals', moq: 10, price: 1299, expectedTotal: 12990 },
      { slug: 'refined-camphor-blocks', moq: 10, price: 1099, expectedTotal: 10990 }
    ];

    let grandTotal = 0;

    // Add each product at MOQ
    products.forEach((product) => {
      // Click Add to Cart button
      cy.get(`[data-testid="add-to-cart-btn-${product.slug}"]`).click();
      
      // Verify modal opens with correct MOQ
      cy.get('[role="dialog"]').should('be.visible');
      cy.get('input[type="number"]').should('have.value', product.moq);
      
      // Verify subtotal calculation
      const expectedSubtotal = product.moq * product.price;
      cy.contains(`₹${expectedSubtotal.toLocaleString('en-IN')}`).should('be.visible');
      
      // Add to cart
      cy.contains('Add to Cart').click();
      
      // Verify modal closes
      cy.get('[role="dialog"]').should('not.exist');
      
      grandTotal += expectedSubtotal;
    });

    // Open cart drawer
    cy.get('[aria-label="Open shopping cart"]').click();
    
    // Verify cart drawer opens
    cy.get('[data-testid="cart-drawer"]').should('be.visible');
    
    // Verify total items count (sum of all quantities)
    const totalItems = products.reduce((sum, p) => sum + p.moq, 0);
    cy.contains(`${totalItems}`).should('be.visible');
    
    // Verify grand total
    cy.contains(`₹${grandTotal.toLocaleString('en-IN')}`).should('be.visible');
    
    // Proceed to checkout
    cy.contains('Proceed to Checkout').click();
    
    // Verify checkout page loads
    cy.url().should('include', '/checkout');
    cy.contains('Checkout').should('be.visible');
  });

  it('should enforce maximum order limit of 100kg', () => {
    // Test maximum order limit
    cy.get('[data-testid="add-to-cart-btn-premium-camphor-pouches"]').click();
    
    // Verify modal opens
    cy.get('[role="dialog"]').should('be.visible');
    
    // Try to set quantity above maximum (100kg)
    cy.get('input[type="number"]').clear().type('150');
    
    // Verify the input is capped at maximum
    cy.get('input[type="number"]').should('have.value', '100');
    
    // Verify increment button is disabled at maximum
    cy.get('input[type="number"]').clear().type('100');
    cy.get('[aria-label="Increase quantity"]').should('be.disabled');
    
    // Verify maximum limit text is shown
    cy.contains('Maximum 100 kg per order').should('be.visible');
    
    // Close modal
    cy.contains('Cancel').click();
  });

  it('should validate required fields on checkout form', () => {
    // Add a product first
    cy.get('[data-testid="add-to-cart-btn-premium-camphor-pouches"]').click();
    cy.contains('Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Open shopping cart"]').click();
    cy.contains('Proceed to Checkout').click();
    
    // Try to submit empty form
    cy.contains('Submit Order').click();
    
    // Verify validation errors appear
    cy.contains('Name must be at least 2 characters').should('be.visible');
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Phone number must be at least 10 digits').should('be.visible');
    cy.contains('Company name must be at least 2 characters').should('be.visible');
    cy.contains('Address must be at least 10 characters').should('be.visible');
    cy.contains('City must be at least 2 characters').should('be.visible');
    cy.contains('State must be at least 2 characters').should('be.visible');
    cy.contains('Pincode must be 6 digits').should('be.visible');
  });

  it('should complete full checkout flow with valid data', () => {
    // Add a product
    cy.get('[data-testid="add-to-cart-btn-premium-camphor-pouches"]').click();
    cy.contains('Add to Cart').click();
    
    // Go to checkout
    cy.get('[aria-label="Open shopping cart"]').click();
    cy.contains('Proceed to Checkout').click();
    
    // Fill out form with valid data
    cy.get('input[placeholder="Enter your full name"]').type('John Doe');
    cy.get('input[placeholder="Enter your email"]').type('john@example.com');
    cy.get('input[placeholder="Enter your phone number"]').type('9876543210');
    cy.get('input[placeholder="Enter company name"]').type('Test Company Ltd');
    cy.get('textarea[placeholder="Enter complete address"]').type('123 Test Street, Test Area');
    cy.get('input[placeholder="Enter city"]').type('Mumbai');
    cy.get('input[placeholder="Enter state"]').type('Maharashtra');
    cy.get('input[placeholder="Enter pincode"]').type('400001');
    
    // Submit form
    cy.contains('Submit Order').click();
    
    // Verify thank you page
    cy.url().should('include', '/thank-you');
    cy.contains('Order Submitted Successfully!').should('be.visible');
  });

  it('should be responsive on different viewport sizes', () => {
    const viewports = [
      { width: 375, height: 667, name: 'iPhone SE' },
      { width: 820, height: 1180, name: 'iPad Air Portrait' },
      { width: 1180, height: 820, name: 'iPad Air Landscape' },
      { width: 1280, height: 800, name: '13" Laptop' },
      { width: 1440, height: 900, name: '1440px Desktop' },
      { width: 3840, height: 2160, name: '4K Monitor' }
    ];

    viewports.forEach((viewport) => {
      cy.viewport(viewport.width, viewport.height);
      
      // Test product grid responsiveness
      cy.get('[data-testid="add-to-cart-btn-premium-camphor-pouches"]').should('be.visible');
      
      // Test cart drawer responsiveness
      cy.get('[aria-label="Open shopping cart"]').click();
      cy.get('[data-testid="cart-drawer"]').should('be.visible');
      
      // On mobile, cart should be full width
      if (viewport.width <= 640) {
        cy.get('[data-testid="cart-drawer"]').should('have.class', 'w-full');
      }
      
      // Close cart
      cy.get('[aria-label="Close cart"]').click();
    });
  });

  it('should persist cart data after page refresh', () => {
    // Add product to cart
    cy.get('[data-testid="add-to-cart-btn-premium-camphor-pouches"]').click();
    cy.contains('Add to Cart').click();
    
    // Verify cart has items
    cy.get('[aria-label="Open shopping cart"]').should('contain', '10');
    
    // Refresh page
    cy.reload();
    
    // Verify cart still has items
    cy.get('[aria-label="Open shopping cart"]').should('contain', '10');
    
    // Open cart and verify contents
    cy.get('[aria-label="Open shopping cart"]').click();
    cy.contains('Premium Camphor Pouches').should('be.visible');
    cy.contains('10 kg').should('be.visible');
  });
});