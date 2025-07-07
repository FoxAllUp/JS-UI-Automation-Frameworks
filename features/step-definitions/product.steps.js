const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const ProductPage = require('../../page-objects/ProductPage');

When(/^I click on a product card$/, async () => {
  await HomePage.clickFirstProduct();
});

Then(/^I should be redirected to the Product Details page$/, async () => {
  const url = await browser.waitUntil(
    async () => {
      const current = await browser.getUrl();
      return current.includes('product') ? current : false;
    },
    {
      timeout: 5000,
      timeoutMsg: 'Expected to be redirected to a product page',
    }
  );

  expect(url).to.include('product');
});

Then(/^I should see the product's (image|name|description|price)$/, async element => {
  const productInfo = await ProductPage.getProductInfo();
  const isVisible = await productInfo[element].isDisplayed();
  expect(isVisible).to.be.true;
});
