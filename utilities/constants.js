const CONSTANTS = {
    URLS: {
        BASE_URL: 'https://practicesoftwaretesting.com',
        LOGIN_URL: 'https://practicesoftwaretesting.com/auth/login',
        REGISTER_URL: 'https://practicesoftwaretesting.com/auth/register',
        CART_URL: 'https://practicesoftwaretesting.com/checkout',
        FAVORITES_URL: 'https://practicesoftwaretesting.com/account/favorites'
    },
    
    TIMEOUTS: {
        SHORT: 5000,
        MEDIUM: 10000,
        LONG: 30000,
        VERY_LONG: 60000
    },
    
    BROWSERS: {
        CHROME: 'chrome',
        FIREFOX: 'firefox',
        SAFARI: 'safari'
    },
    
    TEST_DATA: {
        DEFAULT_SEARCH_TERM: 'pliers',
        DEFAULT_QUANTITY: '1',
        DEFAULT_LANGUAGE: 'en'
    },
    
    SELECTORS: {
        LOADING_SPINNER: '.loading-spinner',
        ERROR_MESSAGE: '.error-message',
        SUCCESS_MESSAGE: '.success-message'
    }
};

module.exports = CONSTANTS;