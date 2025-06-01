const { Given, When, Then } = require('@cucumber/cucumber');
const CartPage = require('../../page-objects/CartPage');
const CheckoutPage = require('../../page-objects/CheckoutPage');
const TestDataManager = require('../../test-data/testData');

When(/^I proceed to checkout$/, async () => {
    await CartPage.navigateToCart();
    await CartPage.proceedToCheckout();
    await CartPage.proceedToCheckout2();
});

When(/^I fill in my billing and shipping information$/, async () => {
    const billingData = TestDataManager.getBillingInfo();
    await CheckoutPage.fillBillingInformation(billingData);
    await CheckoutPage.proceedToPayment();
});

When(/^I select a payment method and confirm the order$/, async () => {
    await CheckoutPage.selectPaymentMethod('credit-card');
    await CheckoutPage.proceedToConfirmation();
    await CheckoutPage.confirmOrder();
});

Then(/^I should receive an order confirmation with order details$/, async () => {
    const isConfirmationDisplayed = await CheckoutPage.isOrderConfirmationDisplayed();
    expect(isConfirmationDisplayed).toBe(true);
    
    const orderNumber = await CheckoutPage.getOrderNumber();
    expect(orderNumber).toBeTruthy();
});