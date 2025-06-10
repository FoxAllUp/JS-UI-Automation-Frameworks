const users = require('./users.json');
const products = require('./products.json');

class TestDataManager {
    static getValidUser() {
        return users.validUser;
    }

    static getExistingUser() {
        return users.existingUser;
    }

    static getBillingInfo() {
        return users.billingInfo;
    }

    static getSearchTerm(term = 'pliers') {
        return products.searchTerms[term] || term;
    }

    static getQuantity(type = 'single') {
        return products.quantities[type] || '1';
    }

    static getLanguage(lang = 'english') {
        return products.languages[lang] || 'en';
    }
    static getHomeText(lang = 'en') {
        return products.homeInDifferentLanguages[lang] || 'Home';
    }

    static generateRandomEmail() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `test.user.${timestamp}.${random}@example.com`;
    }

    static getUniqueUser() {
        const baseUser = this.getValidUser();
        return {
            ...baseUser,
            email: this.generateRandomEmail()
        };
    }
}

module.exports = TestDataManager;