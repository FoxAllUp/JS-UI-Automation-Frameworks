const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const TestDataManager = require('../../test-data/testData');


When(/^I click the language selector$/, async () => {
    await HomePage.languageSelector.waitForDisplayed();
    await HomePage.languageSelector.click();
});

Then(/^I see the language options$/, async () => {
    const expectedLangs = ['es', 'fr', 'de'];
        for (const lang of expectedLangs) {
        const option = await $(`[data-test="lang-${lang}"]`);
        const IsOptionDisplayed = await option.isDisplayed();
        expect(IsOptionDisplayed).to.be.true;
    }
});

When(/^I choose a different language$/, async () => {
    const language = TestDataManager.getLanguage('spanish');
    await HomePage.selectLanguage(language);
    
    const expectedHomeText = TestDataManager.getHomeText('es');
    await browser.waitUntil(async () => {
        const currentHomeText = await HomePage.getHomeLink();
        return currentHomeText === expectedHomeText;
    }, {
        timeout: 10000,
        timeoutMsg: 'Language change was not completed within the expected time'
    });
});

Then(/^the website content should be displayed in the selected language$/, async () => {
    const homeText = TestDataManager.getHomeText('es');
    await browser.waitUntil(async () => {
        const homeLinkText = await HomePage.getHomeLink();
        return homeLinkText === homeText;
    }, {
        timeout: 5000,
        timeoutMsg: 'Home link text did not update to the expected language'
    });
    
    const homeLinkText = await HomePage.getHomeLink();
    expect(homeLinkText).to.equal(homeText); 
});