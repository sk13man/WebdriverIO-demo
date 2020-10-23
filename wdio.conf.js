exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./test/e2e/specs/*.ts'],
    sync: true,
    bail: 0,
    logLevel: 'silent',
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
            // 'goog:chromeOptions': {
            //     // to run chrome headless the following flags are required
            //     // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            //   //   args: ['--headless', '--disable-gpu'],
            // }
        },
    ],
    waitforTimeout: 10000,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
    services: [
       // 'devtools',
        'selenium-standalone',
    ],
    before() {
        expect = require('chai').expect;
        browser.setWindowSize(1920, 1080);
    },
    beforeTest() {
        browser.setTimeout({
            implicit: 250
        });
    }
};
