const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const HomePage = require('../../page-objects/HomePage');
const ProductPage = require('../../page-objects/ProductPage');
const CartPage = require('../../page-objects/CartPage');
const TestDataManager = require('../../test-data/testData');

When(/^I have at least one product in my shopping cart$/, async () => {
    await HomePage.clickFirstProduct();
    await ProductPage.setQuantity(TestDataManager.getQuantity('single'));
    await ProductPage.addToCart();
    await CartPage.navigateToCart();
});

When(/^I select a quantity$/, async () => {
    const quantity = TestDataManager.getQuantity('multiple');
    await ProductPage.setQuantity(quantity);
});

When(/^I click "Add to cart" button$/, async () => {
    await ProductPage.addToCart();
});

When(/^I click on shopping cart icon$/, async () => {
    await CartPage.navigateToCart();
});

Then(/^I should see in the cart the correct product name$/, async () => {
    await $('[data-test="product-title"]').waitForExist({ timeout: 5000 });
    const productName = await CartPage.getCartItemName();
    const isVisible = await productName.isDisplayed();
    assert.isTrue(isVisible);
});

Then(/^I should see in the cart the correct product quantity$/, async () => {
    const quantity = TestDataManager.getQuantity('multiple');
    const actualQuantity = await CartPage.getCartItemQuantity();
    assert.equal(actualQuantity, quantity);
});

Then(/^I should see in the cart the correct product's price$/, async () => {
    const total = await CartPage.getCartTotal();
    const isVisible = await total.isDisplayed();
    assert.isTrue(isVisible);
});