const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    get registerLink() { return $('[data-test="register-link"]'); }
    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get loginButton() { return $('[data-test="login-submit"]'); }
    
    // Registration fields
    get firstNameInput() { return $('[data-test="first-name"]'); }
    get lastNameInput() { return $('[data-test="last-name"]'); }
    get dobInput() { return $('[data-test="dob"]'); }
    get streetInput() { return $('[data-test="street"]'); }
    get postcodeInput() { return $('[data-test="postal_code"]'); }
    get cityInput() { return $('[data-test="city"]'); }
    get stateInput() { return $('[data-test="state"]'); }
    get countrySelect() { return $('[data-test="country"]'); }
    get phoneInput() { return $('[data-test="phone"]'); }
    get registerButton() { return $('[data-test="register-submit"]'); }

    get successMessage() { return $('.alert-success'); }
    get errorMessage() { return $('.alert-danger'); }

    async clickRegisterLink() {
//        await this.registerLink.waitForDisplayed();
        await this.registerLink.click();
    }

    async fillRegistrationForm(userData) {
        await this.firstNameInput.waitForDisplayed({ timeout: 10000 });
        await this.firstNameInput.setValue(userData.firstName);
        await this.lastNameInput.setValue(userData.lastName);

//        await this.dobInput.setValue(userData.dob);

        await this.dobInput.click();
        await this.dobInput.setValue('1990');
        await browser.keys('Tab');
        await browser.keys(['0', '1', '0', '1']);


        await this.streetInput.setValue(userData.street);
        await this.postcodeInput.setValue(userData.postcode);
        await this.cityInput.setValue(userData.city);
        await this.stateInput.setValue(userData.state);
        await this.countrySelect.selectByVisibleText(userData.country);
        await this.phoneInput.setValue(userData.phone);
        await this.emailInput.setValue(userData.email);
        await this.passwordInput.setValue(userData.password);
    }

    async submitRegistration() {
        await this.registerButton.click();
    }

    async login(email, password) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await browser.pause(2000);
    }

    async isSuccessMessageDisplayed() {
        try {
            await this.successMessage.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new LoginPage();