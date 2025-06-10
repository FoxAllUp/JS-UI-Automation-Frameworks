const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const ProductPage = require('../../page-objects/ProductPage');

Given(/^I am viewing a product details page$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickFirstProduct();
});

When(/^I click on a product card$/, async () => {
    await browser.saveScreenshot('./screenshots/before-click-product.png');
    await HomePage.clickFirstProduct();
});


When(/^I navigate to a product details page$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickFirstProduct();
});

Then(/^I should be redirected to the Product Details page$/, async () => {
    await browser.waitUntil(async () => {
        const url = await browser.getUrl();
        return url.includes('product');
    });

    const currentUrl = await browser.getUrl();

    expect(currentUrl).contain('product');
});

Then(/^I should see the product's image$/, async () => {
    const productInfo = await ProductPage.getProductInfo();
    const isVisible = await productInfo.image.isDisplayed();
    expect(isVisible).to.be.true;
});

Then(/^I should see the product's name$/, async () => {
    const productInfo = await ProductPage.getProductInfo();
    const isVisible = await productInfo.name.isDisplayed();
    expect(isVisible).to.be.true;
});

Then(/^I should see the product's description$/, async () => {
    const productInfo = await ProductPage.getProductInfo();
    const isVisible = await productInfo.description.isDisplayed();
    expect(isVisible).to.be.true;
});

Then(/^I should see the product's price$/, async () => {
    const productInfo = await ProductPage.getProductInfo();
    const isVisible = await productInfo.price.isDisplayed();
    expect(isVisible).to.be.true;
});