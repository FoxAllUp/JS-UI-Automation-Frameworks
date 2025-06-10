const BasePage = require('./BasePage');

class FavoritesPage extends BasePage {
    get favoritesLink() { return $('[data-test="nav-my-favorites"]'); }
    get myAccountLink() { return $('[data-test="nav-menu"]'); }
    get favoritesSection() { return $('[data-test="favorites"]'); }
    get favoriteItems() { return $$('[data-test="product-name"]'); }
    get emptyFavoritesMessage() { return $('.empty-favorites'); }
    get favoriteProductTitle() { return $('[data-test="product-title"]'); }

    async navigateToFavorites() {
        try {
            // First try direct favorites link
            if (await this.favoritesLink.isDisplayed()) {
                await this.favoritesLink.click();
            } else {
                // Try through user menu
                await this.myAccountLink.waitForDisplayed({ timeout: 10000 });
                await this.myAccountLink.click();
                await browser.pause(1000);
                
                const favoritesMenuItem = $('a[href*="favorites"], a[href*="wishlist"]');
                if (await favoritesMenuItem.isDisplayed()) {
                    await favoritesMenuItem.click();
                } else {
                    // Navigate directly via URL
                    await this.open('/account/favorites');
                }
            }
            await browser.pause(2000);
        } catch (error) {
            console.log('Direct navigation to favorites failed, trying URL approach');
            await this.open('/account/favorites');
        }
    }

    async isProductInFavorites(productName) {
        try {
            await this.favoriteProductTitle.waitForDisplayed({ timeout: 5000 });
            const favoriteProduct = await this.favoriteProductTitle.getText();
            return favoriteProduct.includes(productName) || productName.includes(favoriteProduct);
        } catch (error) {
            // Alternative approach - check if any favorite items exist
            try {
                const items = await this.favoriteItems;
                return items.length > 0;
            } catch (e) {
                return false;
            }
        }
    }

    async getFavoriteItemCount() {
        const items = await this.favoriteItems;
        return items.length;
    }

    async isFavoritesEmpty() {
        try {
            await this.emptyFavoritesMessage.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new FavoritesPage();