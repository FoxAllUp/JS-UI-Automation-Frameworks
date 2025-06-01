// Export main configuration
const wdioConfig = require('./wdio.conf.js');

// Export page objects
const pages = {
    BasePage: require('./page-objects/BasePage'),
    HomePage: require('./page-objects/HomePage'),
    LoginPage: require('./page-objects/LoginPage'),
    ProductPage: require('./page-objects/ProductPage'),
    CartPage: require('./page-objects/CartPage'),
    FavoritesPage: require('./page-objects/FavoritesPage'),
    CheckoutPage: require('./page-objects/CheckoutPage'),
    SearchResultsPage: require('./page-objects/SearchResultsPage')
};

// Export utilities
const utilities = {
    helpers: require('./utilities/helpers'),
    constants: require('./utilities/constants'),
    testData: require('./test-data/testData'),
    reporters: require('./utilities/reporters')
};

// Main framework object
const AutomationFramework = {
    config: wdioConfig,
    pages: pages,
    utilities: utilities,
    
    // Helper method to get page object
    getPage: (pageName) => {
        return pages[pageName];
    },
    
    // Helper method to get test data
    getTestData: (dataType) => {
        return utilities.testData.getData(dataType);
    },
    
    // Framework info
    info: {
        name: 'Practice Software Testing Automation',
        version: '1.0.0',
        description: 'WDIO automation framework for Practice Software Testing website'
    }
};

// Log framework initialization (optional)
if (require.main === module) {
    console.log('🚀 Practice Software Testing Automation Framework');
    console.log(`📦 Version: ${AutomationFramework.info.version}`);
    console.log('📚 Use npm commands to run tests:');
    console.log('   npm test - Run all tests');
    console.log('   npm run test:chrome - Run in Chrome');
    console.log('   npm run test:firefox - Run in Firefox');
    console.log('   npm run test:safari - Run in Safari');
    console.log('   npm run test:parallel - Run in parallel');
}

module.exports = AutomationFramework;