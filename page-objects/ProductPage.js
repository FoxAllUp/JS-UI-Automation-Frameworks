const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    get productImage() { return $$('.row.my-3')[0].$('img'); }
    get productName() { return $('[data-test="product-name"]'); }
    get productDescription() { return $('[data-test="product-description"]'); }
    get productPrice() { return $('[data-test="unit-price"]'); }
    get quantityInput() { return $('[data-test="quantity"]'); }
    get addToCartButton() { return $('[data-test="add-to-cart"]'); }
    get addToFavoritesButton() { return $('[data-test="add-to-favorites"]'); }
    get heartIcon() { return $('.fa-heart'); }
    get specifications() { return $('[data-test="product-specifications"]'); }
    get reviews() { return $('[data-test="product-reviews"]'); }

    async isProductDetailsPageDisplayed() {
        try {
            await this.productTitle.waitForDisplayed({ timeout: 10000 });
            await this.productPrice.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

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

    async areAllDetailsVisible() {
        const imageVisible = await this.productImage.isDisplayed();
        const titleVisible = await this.productTitle.isDisplayed();
        const priceVisible = await this.productPrice.isDisplayed();
        const descriptionVisible = await this.productDescription.isDisplayed();
        
        return imageVisible && titleVisible && priceVisible && descriptionVisible;
    }
}

module.exports = new ProductPage();