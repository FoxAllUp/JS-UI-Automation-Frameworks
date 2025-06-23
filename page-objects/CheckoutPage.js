const BasePage = require('./BasePage');

const { expect } = require('chai');


class CheckoutPage extends BasePage {
    get firstNameInput() { return $('[data-test="first-name"]'); }
    get lastNameInput() { return $('[data-test="last-name"]'); }
    get addressInput() { return $('[data-test="street"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get postcodeInput() { return $('[data-test="postal_code"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
        
    get creditCardOption() { return $('[data-test="payment-method-1"]'); }
    get bankTransferOption() { return $('[data-test="payment-method-2"]'); }
    get giftCardOption() { return $('[data-test="payment-method-3"]'); }
    get cashOption() { return $('[value="cash-on-delivery"]'); }
    
    get confirmOrderButton() { return $('[data-test="finish"]'); }
    get orderConfirmation() { return $('[id=order-confirmation]'); }

    get successMessage() { return $('[data-test="payment-success-message"]'); }

    async fillBillingInformation(billingData) {
        await this.addressInput.setValue(billingData.street);
        await this.cityInput.setValue(billingData.city);
        await this.stateInput.setValue(billingData.state);
        await this.countrySelect.setValue(billingData.country);
        await this.postcodeInput.setValue(billingData.postcode);
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
    }

    async confirmOrder() {
        await this.confirmOrderButton.waitForDisplayed({ timeout: 10000 });
        await this.confirmOrderButton.click();
    }

    async expectCheckoutMessageVisible(messageType) {
        let element;
    
        switch (messageType) {
            case 'a "Payment was successful"':
                element = await this.successMessage;
                break;
            case 'an order confirmation':
                element = await this.orderConfirmation;
                break;
            default:
                throw new Error(`Unknown message type: "${messageType}"`);
        }
    
        await element.waitForDisplayed();
        const isVisible = await element.isDisplayed();
        expect(isVisible, `"${messageType}" message should be visible`).to.be.true;
    }
    
}

module.exports = new CheckoutPage();