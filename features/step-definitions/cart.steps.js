const { When, Then } = require('@cucumber/cucumber');
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

Then(/^I should see in the cart the correct product (name|quantity|price)$/, async (property) => {
    await CartPage.verifyCartItem(property);
});
