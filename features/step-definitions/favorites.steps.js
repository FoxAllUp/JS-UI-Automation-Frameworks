const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const ProductPage = require('../../page-objects/ProductPage');
const FavoritesPage = require('../../page-objects/FavoritesPage');

When(/^I click (?:the )?"(Add to favourites|My favorites|my account name)"(?: button)?$/, async (target) => {
    switch (target) {
        case 'Add to favourites':
            await ProductPage.addToFavoritesButton.click();
            break;
        case 'my account name':
            await FavoritesPage.myAccountLink.click();
            break;
        case 'My favorites':
            await FavoritesPage.favoritesLink.waitForDisplayed();
            await FavoritesPage.favoritesLink.click();
            break;
        default:
            throw new Error(`Unknown clickable target: "${target}"`);
    }
});

Then(/^I should see the product listed in my favorites$/, async () => {
    await FavoritesPage.waitForElementsVisible(() => FavoritesPage.favoriteItems);
    const items = await FavoritesPage.favoriteItems;
    expect(items.length).to.be.greaterThan(0);
});
