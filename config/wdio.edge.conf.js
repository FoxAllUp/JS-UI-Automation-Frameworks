const { config } = require('../wdio.conf.js');

// Safari-specific configuration
config.capabilities = [
  {
    browserName: "MicrosoftEdge",
    "ms:edgeOptions": {
      args: [
        "--headless", 
        "--disable-gpu", 
        "--window-size=1920,1080"],
    },
  },
];
config.specs = [
  "../features/*.feature",
]

config.services = [[
  "edgedriver",
  {
    // see https://github.com/webdriverio-community/node-edgedriver#options for more
    // options that can be passed into EdgeDriver directly
    edgedriverOptions: {
      customEdgeDriverPath: "./msedgedriver.exe", // az a path, ahova a letöltött driver-t tetted
    },
  },
]];

exports.config = config;