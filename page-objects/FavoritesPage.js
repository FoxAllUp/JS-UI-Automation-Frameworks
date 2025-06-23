const BasePage = require('./BasePage');

class FavoritesPage extends BasePage {
    get favoritesLink() { return $('[data-test="nav-my-favorites"]'); }
    get myAccountLink() { return $('[data-test="nav-menu"]'); }
    get favoriteItems() { return $$('[data-test="product-name"]'); }

    async waitForElementsVisible(getElementsFn, timeout = 5000) {
        await browser.waitUntil(
          async () => {
            const elements = await getElementsFn();
            if (elements.length === 0) return false;
            for (const el of elements) {
              if (!(await el.isDisplayed())) return false;
            }
            return true;
          },
          {
            timeout,
            timeoutMsg: 'Expected all elements to be visible',
          }
        );
      }
      
}

module.exports = new FavoritesPage();