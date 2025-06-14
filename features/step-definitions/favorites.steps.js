const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const ProductPage = require('../../page-objects/ProductPage');
const FavoritesPage = require('../../page-objects/FavoritesPage');

When(/^I click the "Add to favourites" button$/, async () => {
    await ProductPage.addToFavoritesButton.click();
});

When(/^I click on my account name$/, async () => {
    await FavoritesPage.myAccountLink.click();
});

When(/^I click "My favorites"$/, async () => {
    await FavoritesPage.favoritesLink.isDisplayed();
    await FavoritesPage.favoritesLink.click();
});

Then(/^I should see the product listed in my favorites$/, async () => {
    await $('[data-test="product-name"]').waitForExist({ timeout: 5000 });
    const numberOfFavoriteItems = await FavoritesPage.getFavoriteItemCount();
    expect(numberOfFavoriteItems).to.be.greaterThan(0);
});