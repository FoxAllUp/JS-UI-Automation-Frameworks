class BasePage {
  constructor() {
    this.baseUrl = 'https://practicesoftwaretesting.com/';
  }

  async open() {
    await browser.url(this.baseUrl);
  }

  async waitForElement(selector, timeout = 10000) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
    return element;
  }

  async getText(selector) {
    const element = await this.waitForElement(selector);
    return await element.getText();
  }

  async getTitle() {
    return await browser.getTitle();
  }
}

module.exports = BasePage;
