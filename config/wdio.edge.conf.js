const { config } = require('../wdio.conf.js');

// Safari-specific configuration
config.capabilities = [
  {
    browserName: 'MicrosoftEdge',
    'ms:edgeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
    },
  },
];
config.specs = ['../features/*.feature'];

config.services = [
  [
    'edgedriver',
    {
      edgedriverOptions: {
        customEdgeDriverPath: './msedgedriver.exe',
      },
    },
  ],
];

exports.config = config;
