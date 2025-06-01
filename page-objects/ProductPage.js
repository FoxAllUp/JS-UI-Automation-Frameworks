const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    get productImage() { return $('[data-test="product-image"]'); }
    get productTitle() { return $('[data-test="product-title"]'); }
    get productDescription() { return $('[data-test="product-description"]'); }
    get productPrice() { return $('[data-test="product-price"]'); }
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
        const title = await this.productTitle.getText();
        const price = await this.productPrice.getText();
        const description = await this.productDescription.getText();
        
        return {
            title,
            price,
            description
        };
    }

    async setQuantity(quantity) {
        await this.quantityInput.waitForDisplayed({ timeout: 10000 });
        await this.quantityInput.clearValue();
        await this.quantityInput.setValue(quantity);
    }

    async addToCart() {
        await this.addToCartButton.waitForDisplayed({ timeout: 10000 });
        await this.addToCartButton.click();
        await browser.pause(2000); // Wait for cart update
    }

    async addToFavorites() {
        // Try both selectors as the site might use different ones
        try {
            if (await this.addToFavoritesButton.isDisplayed()) {
                await this.addToFavoritesButton.click();
            } else if (await this.heartIcon.isDisplayed()) {
                await this.heartIcon.click();
            }
            await browser.pause(2000);
        } catch (error) {
            console.log('Favorites button not found, trying alternative selector');
            const heartButton = $('button[title*="favorite"], button[title*="heart"], .fa-heart');
            if (await heartButton.isDisplayed()) {
                await heartButton.click();
            }
        }
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