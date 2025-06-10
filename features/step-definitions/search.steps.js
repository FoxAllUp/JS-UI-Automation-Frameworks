const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const SearchResultsPage = require('../../page-objects/SearchResultsPage');
const TestDataManager = require('../../test-data/testData');

When(/^I click on "Search" input field$/, async () => {
    await HomePage.searchBox.click();
});

When(/^I enter a search term such as "pliers" in the search field$/, async () => {
    await HomePage.searchBox.setValue('pliers');
});

When(/^I click on "Search" button$/, async () => {
    await HomePage.searchButton.click();
});

Then(/^I should see a list of products matching the search term$/, async () => {
    const nameOfProduct = await SearchResultsPage.productName.getText();
    expect(nameOfProduct).contain('Pliers');
});