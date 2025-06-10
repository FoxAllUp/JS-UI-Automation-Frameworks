const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const TestDataManager = require('../../test-data/testData');
const BasePage = require('../../page-objects/BasePage');

Given(/^I open the Practice Software Testing homepage$/, async () => {
    await HomePage.openHomePage();
});

Given(/^I am on the Practice Software Testing homepage$/, async () => {
    const title = await browser.getTitle();
    expect(title).to.match(/^Practice Software Testing/);
});

When(/^I go back to homepage$/, async () => {
    await HomePage.homeLink.click();    
});


Then(/^I should see the page title contains "([^"]*)"$/, async (expectedTitle) => {
    const actualTitle = await browser.getTitle();
    expect(actualTitle).toContain(expectedTitle);
});