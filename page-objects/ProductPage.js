const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    get productImage() { return $$('.row.my-3')[0].$('img'); }
    get productName() { return $('[data-test="product-name"]'); }
    get productDescription() { return $('[data-test="product-description"]'); }
    get productPrice() { return $('[data-test="unit-price"]'); }
    get quantityInput() { return $('[data-test="quantity"]'); }
    get addToCartButton() { return $('[data-test="add-to-cart"]'); }
    get addToFavoritesButton() { return $('[data-test="add-to-favorites"]'); }

    async getProductInfo() {
        const image = await this.productImage;
        const name = await this.productName;
        const description = await this.productDescription;
        const price = await this.productPrice;      
        
        return {
            image,
            name,
            description,
            price
        };
    }

    async setQuantity(quantity) {
        await this.quantityInput.clearValue();
        await this.quantityInput.setValue(quantity);
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = new ProductPage();