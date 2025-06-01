const { config } = require('../wdio.conf.js');

// Safari-specific configuration
config.capabilities = [{
    browserName: 'safari'
}];

config.services = ['safari'];

exports.config = config;