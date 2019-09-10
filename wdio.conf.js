exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./test/e2e/specs/*.spec.js'],
    sync: true,
    bail: 0,
    logLevel: 'silent',
    maxInstances: 1,
    capabilities: [
        {
            browserName: 'chrome',
        },
    ],
    baseUrl: 'https://www.phptravels.net',
    waitforTimeout: 10000,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    services: [
        'devtools',
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
