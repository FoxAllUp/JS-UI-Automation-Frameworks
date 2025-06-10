const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
    get billingAddressForm() { return $('[data-test="billing-address"]'); }
    get firstNameInput() { return $('[data-test="first-name"]'); }
    get lastNameInput() { return $('[data-test="last-name"]'); }
    get addressInput() { return $('[data-test="street"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get postcodeInput() { return $('[data-test="postal_code"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
    
    get nextButton() { return $('[data-test="proceed-2"]'); }
    get paymentNextButton() { return $('[data-test="proceed-3"]'); }
    
    get creditCardOption() { return $('[data-test="payment-method-1"]'); }
    get bankTransferOption() { return $('[data-test="payment-method-2"]'); }
    get giftCardOption() { return $('[data-test="payment-method-3"]'); }
    get cashOption() { return $('[value="cash-on-delivery"]'); }
    
    get confirmOrderButton() { return $('[data-test="finish"]'); }
    get orderConfirmation() { return $('[id=order-confirmation]'); }
    get orderNumber() { return $('[data-test="order-number"]'); }

    get successMessage() { return $('[data-test="payment-success-message"]'); }

    async fillBillingInformation(billingData) {
        await this.addressInput.setValue(billingData.street);
        await this.cityInput.setValue(billingData.city);
        await this.stateInput.setValue(billingData.state);
        await this.countrySelect.setValue(billingData.country);
        await this.postcodeInput.setValue(billingData.postcode);
    }

    async proceedToPayment() {
        await this.nextButton.waitForDisplayed({ timeout: 10000 });
        await this.nextButton.click();
        await browser.pause(2000);
    }

    async selectPaymentMethod(method = 'cash') {
        switch (method) {
            case 'cash':
                await this.cashOption.click();
                break;
            case 'credit-card':
                await this.creditCardOption.waitForDisplayed({ timeout: 10000 });
                await this.creditCardOption.click();
                break;
            case 'bank-transfer':
                await this.bankTransferOption.click();
                break;
            case 'gift-card':
                await this.giftCardOption.click();
                break;
            default:
                await this.creditCardOption.click();
        }
        await browser.pause(1000);
    }

    async proceedToConfirmation() {
        await this.paymentNextButton.waitForDisplayed({ timeout: 10000 });
        await this.paymentNextButton.click();
        await browser.pause(2000);
    }

    async confirmOrder() {
        await this.confirmOrderButton.waitForDisplayed({ timeout: 10000 });
        await this.confirmOrderButton.click();
        await browser.pause(3000);
    }

    async isOrderConfirmationDisplayed() {
        try {
            await this.orderConfirmation.waitForDisplayed({ timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async getOrderNumber() {
        try {
            await this.orderNumber.waitForDisplayed({ timeout: 5000 });
            return await this.orderNumber.getText();
        } catch (error) {
            return null;
        }
    }
}

module.exports = new CheckoutPage();