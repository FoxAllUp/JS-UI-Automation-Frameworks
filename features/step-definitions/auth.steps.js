const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../page-objects/HomePage');
const LoginPage = require('../../page-objects/LoginPage');
const TestDataManager = require('../../test-data/testData');

Given(/^I am on the Practice Software Testing login page$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickSignIn();
});

Given(/^I am logged into my account$/, async () => {
    await HomePage.openHomePage();
    await HomePage.clickSignIn();
    const userData = TestDataManager.getExistingUser();
    await LoginPage.login(userData.email, userData.password);
});

When(/^I click on the "Sign in" link$/, async () => {
    await HomePage.clickSignIn();
});

When(/^I click on "Register your account"$/, async () => {
    await LoginPage.clickRegisterLink();
});

When(/^I fill in valid registration details$/, async () => {
    const userData = TestDataManager.getUniqueUser();
    await LoginPage.fillRegistrationForm(userData);
    await LoginPage.submitRegistration();
});

When(/^I enter my registered email address$/, async () => {
    const userData = TestDataManager.getExistingUser();
    await LoginPage.emailInput.setValue(userData.email);
});

When(/^I enter my correct password$/, async () => {
    const userData = TestDataManager.getExistingUser();
    await LoginPage.passwordInput.setValue(userData.password);
});

When(/^I click the "Login" button$/, async () => {
    await LoginPage.loginButton.click();
    await browser.pause(2000);
});

Then(/^I should see a successful registration confirmation message$/, async () => {
    const isSuccessDisplayed = await LoginPage.isSuccessMessageDisplayed();
    expect(isSuccessDisplayed).toBe(true);
});

Then(/^I should be redirected to my account dashboard$/, async () => {
    await browser.pause(3000);
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('account');
});