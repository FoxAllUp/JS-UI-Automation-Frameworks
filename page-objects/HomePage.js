const BasePage = require('./BasePage');

class HomePage extends BasePage {
    get signInLink() { return $('a[data-test="nav-sign-in"]'); }
    get searchBox() { return $('[data-test="search-query"]'); }
    get searchButton() { return $('[data-test="search-submit"]'); }
    get languageSelector() { return $('[data-test="language-select"]'); }
    get productCards() { return $$('[data-test^="product-01"]')[0]; }
    get firstProduct() { return $$('[data-test^="product-01"]')[0]; }
    get homeLink() { return $('[data-test="nav-home"]'); }

    async openHomePage() {
        await this.open();
    }

    async clickSignIn() {
        await this.signInLink.click();
    }

    async searchForProduct(searchTerm) {
        await this.searchBox.waitForDisplayed({ timeout: 10000 });
        await this.searchBox.setValue(searchTerm);
        await this.searchButton.click();
    }

    async clickFirstProduct() {
        await this.firstProduct.click();
    }

    async getHomeLink() {
        const homeLink = await this.homeLink.getText();
        return homeLink;
    }

    async getSearchBox() {
        const searchBox = await this.searchBox;
        return searchBox;
    }

    async selectLanguage(language) {
        const languageOption = $(`[data-test="lang-${language}"]`);
        await languageOption.click();
    }
}

module.exports = new HomePage();