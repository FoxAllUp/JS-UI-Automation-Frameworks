const { config } = require('../wdio.conf.js');

// Chrome-specific configuration
config.capabilities = [{
    browserName: 'chrome'
    ,
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--window-size=1920,1080',
            '--start-maximized',
            '--disable-web-security',
            '--disable-features=VizDisplayCompositor',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu', // Add this for stability
            '--disable-extensions',
            '--disable-plugins'
        ]
    } 
}];

config.services = ['chromedriver'];

exports.config = config;