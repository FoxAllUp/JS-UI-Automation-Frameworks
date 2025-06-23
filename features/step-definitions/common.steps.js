const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');

Given(/^I open the Practice Software Testing homepage$/, async () => {
    await HomePage.openHomePage();
});

Given(/^I am on the Practice Software Testing homepage$/, async () => {
    await browser.waitUntil(async () => {
        return (await browser.getTitle()).startsWith("Practice Software Testing");
    }, {timeout : 5000});
    const title = await browser.getTitle();
    expect(title).to.match(/^Practice Software Testing/);
});

When(/^I go back to homepage$/, async () => {
    await HomePage.homeLink.click();    
});