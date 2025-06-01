class Helpers {
    static async waitForPageLoad(timeout = 10000) {
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout,
                timeoutMsg: 'Page did not fully load within the specified timeout'
            }
        );
    }

    static async takeScreenshot(filename) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotName = `${filename}-${timestamp}.png`;
        await browser.saveScreenshot(`./reports/screenshots/${screenshotName}`);
        return screenshotName;
    }

    static generateUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    static async scrollToBottom() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    static async scrollToTop() {
        await browser.execute(() => {
            window.scrollTo(0, 0);
        });
    }

    static async waitForElementToDisappear(selector, timeout = 10000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout, reverse: true });
    }

    static async getCurrentDateTime() {
        return new Date().toISOString();
    }

    static async refreshPageUntilElementExists(selector, maxAttempts = 3) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const element = await $(selector);
                if (await element.isDisplayed()) {
                    return true;
                }
            } catch (error) {
                if (attempt < maxAttempts) {
                    await browser.refresh();
                    await this.waitForPageLoad();
                } else {
                    throw error;
                }
            }
        }
        return false;
    }
}

module.exports = Helpers;