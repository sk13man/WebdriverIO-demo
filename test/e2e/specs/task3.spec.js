const page = require('../pages/TravelsObject').Travels;

describe('Demo test 3', () => {
    before(() => {
        browser.url('');
        page.flightsTab.click();
    });
    it('should choose destinations', () => {
        page.fillDestinationsByIATA('KBP', 'TLV');
    });
    it('should select round trip', () => {
        page.selectRoundTrip();
    });
    it('should select trip dates', () => {
       page.fillDates();
    });
    it('should start search and wait for all results and print to console', () => {
        page.flightSearchButton.click();
        page.availableFlights.waitForExist(60000, false,'No results, sorry');
        console.log('Search returned ==> ',page.availableFlights.getAttribute('value'), 'available flights')
    });
});
