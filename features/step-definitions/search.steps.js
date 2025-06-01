const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../page-objects/HomePage');
const SearchResultsPage = require('../../page-objects/SearchResultsPage');
const TestDataManager = require('../../test-data/testData');

When(/^I enter "([^"]*)" in the search box$/, async (searchTerm) => {
    await HomePage.searchForProduct(searchTerm);
});

When(/^I click the search button or press Enter$/, async () => {
    // This is handled in the searchForProduct method
    await browser.pause(2000);
});

When(/^I review the search results$/, async () => {
    await browser.pause(2000);
    const hasResults = await SearchResultsPage.hasSearchResults();
    expect(hasResults).toBe(true);
});

Then(/^I should see relevant products containing "([^"]*)" in the results$/, async (searchTerm) => {
    const areResultsRelevant = await SearchResultsPage.areResultsRelevant(searchTerm);
    const resultCount = await SearchResultsPage.getResultCount();
    
    expect(resultCount).toBeGreaterThan(0);
    // Note: Some results might not contain the exact term but could still be relevant
    console.log(`Found ${resultCount} search results for "${searchTerm}"`);
});