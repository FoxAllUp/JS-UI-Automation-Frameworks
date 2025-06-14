const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../../page-objects/HomePage');
const LoginPage = require('../../page-objects/LoginPage');
const TestDataManager = require('../../test-data/testData');

Given(/^I am on the Practice Software Testing login page$/, async () => {
    await HomePage.openHomePage();
    await expect(browser).toHaveTitleContaining('Practice Software Testing');
});

Given(/^I am logged in$/, async () => {
    const signInLink = await HomePage.signInLink;
    await signInLink.click();
    const userData = TestDataManager.getExistingUser();
    await LoginPage.login(userData.email, userData.password);
});

When(/^I click the "Sign in" button$/, async () => {
    await HomePage.clickSignIn();
});

When(/^I click on "Register your account"$/, async () => {
    await LoginPage.clickRegisterLink();
});

When(/^I fill in all required registration fields with valid information$/, async () => {
    const userData = TestDataManager.getUniqueUser();
    await LoginPage.fillRegistrationForm(userData);
    await LoginPage.submitRegistration();
});

When(/^I click the "Register" button$/, async () => {
    await LoginPage.submitRegistration();
});

When(/^I fill "Email address" with a valid email address$/, async () => {
    const userData = TestDataManager.getExistingUser();
    await LoginPage.emailInput.setValue(userData.email);
});

When(/^I fill "Password" with a valid password$/, async () => {
    const userData = TestDataManager.getExistingUser();
    await LoginPage.passwordInput.setValue(userData.password);
});

When(/^I click the "Login" button$/, async () => {
    await LoginPage.loginButton.click();
}); 

Then(/^I should be redirected to the Login page$/, async () => {
    await browser.waitUntil(async () => {
        const title = await browser.getTitle();
        return title.includes('Login');
    });

    const currentTitle = await browser.getTitle();
    const currentUrl = await browser.getUrl();

    expect(currentTitle).contain('Login');
    expect(currentUrl).contain('login');
});

Then(/^I should be redirected to "My Account" page$/, async () => {
    await browser.waitUntil(async () => {
        const title = await browser.getTitle();
        return title.includes('Overview');
    });

    const currentUrl = await browser.getUrl();
    const currentTitle = await browser.getTitle();

    expect(currentTitle).contain('Overview');
    expect(currentUrl).contain('account');
});