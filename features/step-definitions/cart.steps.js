const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../page-objects/HomePage');
const ProductPage = require('../../page-objects/ProductPage');
const CartPage = require('../../page-objects/CartPage');
const TestDataManager = require('../../test-data/testData');

Given(/^I have products in my shopping cart$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickFirstProduct();
    await ProductPage.setQuantity(TestDataManager.getQuantity('single'));
    await ProductPage.addToCart();
});

When(/^I select the desired quantity$/, async () => {
    const quantity = TestDataManager.getQuantity('multiple');
    await ProductPage.setQuantity(quantity);
});

When(/^I click the "Add to cart" button$/, async () => {
    await ProductPage.addToCart();
});

When(/^I navigate to the shopping cart$/, async () => {
    await CartPage.navigateToCart();
});

Then(/^I should see the selected product in my cart with correct quantity and price$/, async () => {
    const cartItemCount = await CartPage.getCartItemCount();
    expect(cartItemCount).toBeGreaterThan(0);
    
    const cartTotal = await CartPage.getCartTotal();
    expect(cartTotal).toBeTruthy();
});