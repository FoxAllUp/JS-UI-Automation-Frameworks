const { config } = require('../wdio.conf.js');

// Chrome-specific configuration
config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--window-size=1920,1080'
        ]
    }
}];

config.services = ['chromedriver'];

exports.config = config;