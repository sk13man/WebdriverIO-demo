const login = require('../pages/LoginObject').LoginObject;
const creds = require('../../data/Logins');
const assert = require('assert');
let sentLogin;
let sentPass;

describe('Demo test 1', function() {

    it('Perform login,intercept request and check if login successful', function() {
        browser.enablePerformanceAudits();
        browser.url('https://opensource-demo.orangehrmlive.com');
        browser.cdp('Network', 'enable');
        browser.on('Network.requestWillBeSent', (params) => {
            if (params.request.method === 'POST') {
                console.log('My POST data', params.request.postData);
                let parsed = params.request.postData.split('&');
                sentLogin = parsed[4].split('=')[1];
                sentPass = parsed[5].split('=')[1];
            }
        });
        login.loginPerform(creds.user.login, creds.user.password);
        browser.waitUntil(() => {
           return  login.welcomeMessage.isDisplayed()
        });
        assert.strictEqual(login.getWelComeMessage(), 'Welcome Admin')
    });
    it('validate if used and intercepted credentials are equal', function() {
        console.log('Logged as ', creds.user);
        console.log('parsed login', sentLogin);
        console.log('parsed pass', sentPass);
        assert.strictEqual(sentLogin, creds.user.login);
        assert.strictEqual(sentPass, creds.user.password);
    })
});
