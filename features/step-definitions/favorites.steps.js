const { Given, When, Then } = require('@cucumber/cucumber');
const ProductPage = require('../../page-objects/ProductPage');
const FavoritesPage = require('../../page-objects/FavoritesPage');

When(/^I click on the "Add to favorites" or heart icon$/, async () => {
    await ProductPage.addToFavorites();
});

When(/^I navigate to my favorites section$/, async () => {
    await FavoritesPage.navigateToFavorites();
});

Then(/^I should see the product saved in my favorites list$/, async () => {
    const favoriteCount = await FavoritesPage.getFavoriteItemCount();
    expect(favoriteCount).toBeGreaterThan(0);
});