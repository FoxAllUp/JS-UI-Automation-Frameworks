const BasePage = require('./BasePage');

class HomePage extends BasePage {
    get signInLink() { return $('[data-test="nav-sign-in"]'); }
    get searchBox() { return $('[data-test="search-query"]'); }
    get searchButton() { return $('[data-test="search-submit"]'); }
    get languageSelector() { return $('.language-selector'); }
    get productCards() { return $$('[data-test^="product-01"]')[0]; }
    get firstProduct() { return $$('[data-test^="product-01"]')[0]; }

    async openHomePage() {
        await this.open();
        await browser.pause(2000); // Wait for page to load
    }

    async clickSignIn() {
        await this.signInLink.waitForDisplayed({ timeout: 10000 });
        await this.signInLink.click();
    }

    async searchForProduct(searchTerm) {
        await this.searchBox.waitForDisplayed({ timeout: 10000 });
        await this.searchBox.setValue(searchTerm);
        await this.searchButton.click();
    }

    async clickFirstProduct() {
        await this.firstProduct.waitForDisplayed({ timeout: 20000 });
        await this.firstProduct.click();
    }

    async changeLanguage(language) {
        if (await this.languageSelector.isDisplayed()) {
            await this.languageSelector.click();
            const languageOption = $(`[value="${language}"]`);
            await languageOption.click();
        }
    }
}

module.exports = new HomePage();