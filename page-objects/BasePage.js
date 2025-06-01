class BasePage {
    constructor() {
        this.baseUrl = 'https://practicesoftwaretesting.com';
    }

    async open(path = '') {
        await browser.url(this.baseUrl + path);
        await browser.maximizeWindow();
    }

    async waitForElement(selector, timeout = 10000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    async clickElement(selector) {
        const element = await this.waitForElement(selector);
        await element.click();
    }

    async setText(selector, text) {
        const element = await this.waitForElement(selector);
        await element.clearValue();
        await element.setValue(text);
    }

    async getText(selector) {
        const element = await this.waitForElement(selector);
        return await element.getText();
    }

    async isElementDisplayed(selector) {
        try {
            const element = await $(selector);
            return await element.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    async scrollToElement(selector) {
        const element = await $(selector);
        await element.scrollIntoView();
    }
}

module.exports = BasePage;