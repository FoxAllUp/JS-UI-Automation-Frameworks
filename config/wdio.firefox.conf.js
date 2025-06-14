const { config } = require('../wdio.conf.js');

// Firefox-specific configuration
config.capabilities = [{
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: [
//            '--headless',
            '--width=1920',
            '--height=1080'
        ]
    }
}];

config.specs = [
    "../features/*.feature",
  ]

config.services = ['geckodriver'];

exports.config = config;