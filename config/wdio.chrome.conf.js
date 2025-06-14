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
            '--disable-gpu',
            '--guest'
        ]
    } 
}];
config.specs = [
    "../features/*.feature",
  ]

config.services = ['chromedriver'];

exports.config = config;