const BasePage = require('./BasePage');

class HomePage extends BasePage {
  get signInLink() {
    return $('a[data-test="nav-sign-in"]');
  }
  get searchBox() {
    return $('[data-test="search-query"]');
  }
  get searchButton() {
    return $('[data-test="search-submit"]');
  }
  get languageSelector() {
    return $('[data-test="language-select"]');
  }
  get firstProduct() {
    return $$('[data-test^="product-01"]')[0];
  }
  get homeLink() {
    return $('[data-test="nav-home"]');
  }

  async openHomePage() {
    await this.open();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickFirstProduct() {
    await this.firstProduct.click();
  }

  async getHomeLink() {
    const homeLink = await this.homeLink.getText();
    return homeLink;
  }

  async selectLanguage(language) {
    const languageOption = $(`[data-test="lang-${language}"]`);
    await languageOption.click();
  }

  async expectRedirection(expectedTitleKeyword, expectedUrlPart) {
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title.includes(expectedTitleKeyword);
    });

    const currentUrl = await browser.getUrl();
    const currentTitle = await browser.getTitle();

    currentTitle.should.contain(expectedTitleKeyword);
    currentUrl.should.contain(expectedUrlPart);
  }
}

module.exports = new HomePage();
