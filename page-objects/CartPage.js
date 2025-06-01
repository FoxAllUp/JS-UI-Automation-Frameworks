const BasePage = require('./BasePage');

class CartPage extends BasePage {
    get cartIcon() { return $('[data-test="nav-cart"]'); }
    get cartItems() { return $$('[data-test="cart-item"]'); }
    get cartTotal() { return $('[data-test="cart-total"]'); }
    get checkoutButton() { return $('[data-test="proceed-1"]'); }
    get checkoutButton2() { return $('[data-test="proceed-2"]'); }
    get emptyCartMessage() { return $('.empty-cart'); }
    get productInCart() { return $('[data-test="product-title"]'); }
    get quantityInCart() { return $('[data-test="product-quantity"]'); }
    get priceInCart() { return $('[data-test="product-price"]'); }

    async navigateToCart() {
        await this.cartIcon.waitForDisplayed({ timeout: 10000 });
        await this.cartIcon.click();
        await browser.pause(2000);
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

    async getCartItemCount() {
        try {
            const items = await this.cartItems;
            return items.length;
        } catch (error) {
            return 0;
        }
    }

    async getCartTotal() {
        try {
            await this.cartTotal.waitForDisplayed({ timeout: 5000 });
            return await this.cartTotal.getText();
        } catch (error) {
            return '0';
        }
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