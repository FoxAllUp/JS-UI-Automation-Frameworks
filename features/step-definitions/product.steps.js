const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../page-objects/HomePage');
const ProductPage = require('../../page-objects/ProductPage');

Given(/^I am viewing a product details page$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickFirstProduct();
});

When(/^I click on a product from the product list$/, async () => {
    await HomePage.clickFirstProduct();
});

When(/^I am redirected to the product details page$/, async () => {
    await browser.pause(2000);
    const isOnProductPage = await ProductPage.isProductDetailsPageDisplayed();
    expect(isOnProductPage).toBe(true);
});

When(/^I can see the product image, description, and price$/, async () => {
    const areDetailsVisible = await ProductPage.areAllDetailsVisible();
    expect(areDetailsVisible).toBe(true);
});

When(/^I navigate to a product details page$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickFirstProduct();
});

Then(/^I should see all relevant product information including specifications and reviews$/, async () => {
    const productInfo = await ProductPage.getProductInfo();
    expect(productInfo.title).toBeTruthy();
    expect(productInfo.price).toBeTruthy();
    expect(productInfo.description).toBeTruthy();
});