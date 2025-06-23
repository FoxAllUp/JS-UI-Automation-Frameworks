const { When, Then } = require('@cucumber/cucumber');
const CartPage = require('../../page-objects/CartPage');
const CheckoutPage = require('../../page-objects/CheckoutPage');
const TestDataManager = require('../../test-data/testData');

When(/^I click on the (first|second|third) "Proceed to checkout" button$/, async (position) => {
    const buttonMap = {
        first: CartPage.checkoutButton,
        second: CartPage.checkoutButton2,
        third: CartPage.checkoutButton3,
    };

    const button = buttonMap[position];
    await button.isClickable();
    await button.click();
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

Then(/^I should see (a "Payment was successful"|an order confirmation) message$/, async (messageType) => {
    await CheckoutPage.expectCheckoutMessageVisible(messageType);
});