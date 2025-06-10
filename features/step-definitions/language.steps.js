const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const TestDataManager = require('../../test-data/testData');


When(/^I click the language selector$/, async () => {
    await HomePage.languageSelector.isDisplayed();
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
});

Then(/^the website content should be displayed in the selected language$/, async () => {
    const homeLinkText = await HomePage.getHomeLink();
    const homeText = TestDataManager.getHomeText('es');
    expect(homeLinkText).to.equal(homeText); 
});