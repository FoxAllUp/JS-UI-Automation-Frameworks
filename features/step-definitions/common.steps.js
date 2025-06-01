const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../page-objects/HomePage');
const TestDataManager = require('../../test-data/testData');

Given(/^I am on the Practice Software Testing homepage$/, async () => {
    await HomePage.openHomePage();
});

Given(/^I wait for (\d+) seconds$/, async (seconds) => {
    await browser.pause(parseInt(seconds) * 1000);
});

When(/^I refresh the page$/, async () => {
    await browser.refresh();
});

Then(/^I should see the page title contains "([^"]*)"$/, async (expectedTitle) => {
    const actualTitle = await browser.getTitle();
    expect(actualTitle).toContain(expectedTitle);
});