const BasePage = require('./BasePage');
const TestDataManager = require('../test-data/testData');

const assert = require('chai').assert;

class CartPage extends BasePage {
  get cartIcon() {
    return $('[data-test="nav-cart"]');
  }
  get cartTotal() {
    return $('[data-test="cart-total"]');
  }
  get checkoutButton() {
    return $('[data-test="proceed-1"]');
  }
  get checkoutButton2() {
    return $('[data-test="proceed-2"]');
  }
  get checkoutButton3() {
    return $('[data-test="proceed-3"]');
  }
  get productInCart() {
    return $('[data-test="product-title"]');
  }
  get quantityInCart() {
    return $('[data-test="product-quantity"]');
  }

  async navigateToCart() {
    await this.cartIcon.waitForClickable({ timeout: 5000 });
    await this.cartIcon.click();
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

  async verifyCartItem(property) {
    switch (property) {
      case 'name': {
        await this.productInCart.waitForExist({ timeout: 5000 });
        const productName = await this.getCartItemName();
        const isVisible = await productName.isDisplayed();
        assert.isTrue(isVisible);
        break;
      }
      case 'quantity': {
        const quantity = TestDataManager.getQuantity('multiple');
        const actualQuantity = await this.getCartItemQuantity();
        assert.equal(actualQuantity, quantity);
        break;
      }
      case 'price': {
        const total = await this.getCartTotal();
        const isVisible = await total.isDisplayed();
        assert.isTrue(isVisible);
        break;
      }
      default:
        throw new Error(`Unknown property: ${property}`);
    }
  }
}

module.exports = new CartPage();
