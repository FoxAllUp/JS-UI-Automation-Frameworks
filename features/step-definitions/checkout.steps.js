const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const CartPage = require('../../page-objects/CartPage');
const CheckoutPage = require('../../page-objects/CheckoutPage');
const TestDataManager = require('../../test-data/testData');

When(/^I click on the first "Proceed to checkout" button$/, async () => {
    await CartPage.checkoutButton.isClickable();
    await CartPage.checkoutButton.click();
});

When(/^I click on the second "Proceed to checkout" button$/, async () => {
    await CartPage.checkoutButton2.isClickable();
    await CartPage.checkoutButton2.click();
});

When(/^I click on the third "Proceed to checkout" button$/, async () => {
    await CartPage.checkoutButton3.isClickable();
    await CartPage.checkoutButton3.click();
});

When(/^I fill in the Billing Address fields with valid information$/, async () => {
    const billingData = TestDataManager.getBillingInfo();
    await CheckoutPage.fillBillingInformation(billingData);
});

When(/^I select a payment method$/, async () => {
    await CheckoutPage.selectPaymentMethod('cash');
});

When(/^I click on "Confirm" button$/, async () => {
    await CheckoutPage.confirmOrderButton.click();
});


Then(/^I should see a "Payment was successful" message$/, async () => {
    const successMessage = await CheckoutPage.successMessage;
    await successMessage.waitForDisplayed();
    const isVisible = await successMessage.isDisplayed();
    expect(isVisible).to.be.true;
});

Then(/^I should see an order confirmation message with order number$/, async () => {
    const confirmationMessage = await CheckoutPage.orderConfirmation;
    await confirmationMessage.waitForDisplayed();
    const isVisible = await confirmationMessage.isDisplayed();
    expect(isVisible).to.be.true;
});