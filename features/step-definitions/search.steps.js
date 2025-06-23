const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const SearchResultsPage = require('../../page-objects/SearchResultsPage');

When(/^I click on "Search" input field$/, async () => {
    await HomePage.searchBox.waitForDisplayed();
    await HomePage.searchBox.click();
});

When(/^I enter a search term such as "pliers" in the search field$/, async () => {
    await HomePage.searchBox.setValue('pliers');
});

When(/^I click on "Search" button$/, async () => {
    await HomePage.searchButton.click();
});

Then(/^I should see a list of products matching the search term$/, async () => {
    const namesOfProducts = await SearchResultsPage.getProductNames();
    const paginationExists = await SearchResultsPage.pagination.isExisting();
    expect(paginationExists).to.be.false;
    expect(namesOfProducts.every(name => name.includes('Pliers'))).to.be.true;
});
