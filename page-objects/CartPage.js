const BasePage = require('./BasePage');

class CartPage extends BasePage {
    get cartIcon() { return $('[data-icon="cart-shopping"]'); }
    get cartItems() { return $$('[data-test="cart-item"]'); }
    get cartTotal() { return $('[data-test="cart-total"]'); }
    get anyCheckoutButton() { return $('[data-test^="proceed-"]'); }
    get checkoutButton() { return $('[data-test="proceed-1"]'); }
    get checkoutButton2() { return $('[data-test="proceed-2"]'); }
    get checkoutButton3() { return $('[data-test="proceed-3"]'); }
    get emptyCartMessage() { return $('.empty-cart'); }
    get productInCart() { return $('[data-test="product-title"]'); }
    get quantityInCart() { return $('[data-test="product-quantity"]'); }
    get priceInCart() { return $('[data-test="product-price"]'); }

    async navigateToCart() {
        await this.cartIcon.waitForDisplayed();
        await this.cartIcon.click();
    }

    async isProductInCart(productName) {
        try {
            await this.productInCart.waitForDisplayed({ timeout: 5000 });
            const cartProduct = await this.productInCart.getText();
            return cartProduct.includes(productName) || productName.includes(cartProduct);
        } catch (error) {
            return false;
        }
    }

    async getCartItemName() {
        const name = await this.productInCart;
        return name;
    }

    async getCartItemQuantity() {
        const quantityElement = await this.quantityInCart;
        const quantity = await quantityElement.getValue();
        return quantity;
    }    

    async getCartTotal() {
        const total = await this.cartTotal;
        return total;
    }

    async proceedToCheckout() {
        await this.checkoutButton.waitForDisplayed({ timeout: 10000 });
        await this.checkoutButton.click();
    }

    async proceedToCheckout2() {
        await this.checkoutButton2.waitForDisplayed({ timeout: 10000 });
        await this.checkoutButton2.click();
    }

    async isCartEmpty() {
        try {
            await this.emptyCartMessage.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new CartPage();