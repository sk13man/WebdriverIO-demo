const page = require('../pages/TravelsObject').Travels;
const ru = require('../../data/translations-ru');
describe('Demo test 2', () => {
    before( () => {
        browser.url('');
        page.translateFromEnglish();
    });
    it('should translate main page and check that URL has changed', () => {
        expect(browser.getUrl()).to.equal(browser.options.baseUrl + '/ru');
    });
    it('should check header elements are translated ',  () => {
        expect(page.myAccount.getText()).to.equal(ru.myAccount);
        expect(page.contactUs.getText()).to.contain(ru.contactUs);
        expect(page.blogLink.getText()).to.equal(ru.blog)
    });
    it('should check header elements are not translated (should fail)', () => {
        expect(page.offersLink.getText()).to.equal(ru.offers)
    });
    it('should check search widget elements are translated',  () => {
        expect(page.location.getAttribute('placeholder')).to.equal(ru.location);
        expect(page.checkin.getAttribute('placeholder')).to.equal(ru.checkin);
        expect(page.checkout.getAttribute('placeholder')).to.equal(ru.checkout);
        expect(page.searchButton.getText()).to.equal(ru.hotelSearch);
    });
    it('should check travellers dropdown elements are translated',  () => {
        page.openTravellers();
        expect(page.dropdownAdults.getText()).to.equal(ru.adults);
        expect(page.dropdownChild.getText()).to.equal(ru.child)
    });
    it('should check search widget elements are not translated (should fail)',  () => {
        expect(page.travellers.getAttribute('value')).to.equal(ru.travellers);
    });
    it('should check widget tabs elements are translated',  () => {
        expect(page.hotelsTab.getText()).to.equal(ru.hotels);
        expect(page.flightsTab.getText()).to.equal(ru.flights);
        expect(page.carsTab.getText()).to.equal(ru.cars);
    });
    it('should check widget tabs elements are not translated (should fail)',  () => {
        expect(page.toursTab.getText()).to.equal(ru.tours);
    });
    it('should check tours title is translated (should fail)',  () => {
        expect(page.toursTitle.getText()).to.equal(ru.toursTitle);
    });
    it('should check day&night translations in "Feature Tours" block',  () => {
        page.allToursDetails.forEach(detail => {
            expect(detail.getText()).to.contain(ru.days).and.to.contain(ru.nights)
        });
    });
    it('should check [booking] translations in "Feature Tours" block',  () => {
        page.bookingButtons.forEach(button => {
            expect(button.getText()).to.equal(ru.booking)
        });
    });
    it('should check avg/person translation in "Feature Tours" block (should fail)',  () => {
         // Translated, but incorrectly
        page.avgPerPerson.forEach(hint => {
            expect(hint.getText()).to.contain(ru.hintAvg).and.to.contain(ru.hintPerson)
        });
    });
    it('should check Featured Cars title is translated',  () => {
        expect(page.carsTitle.getText()).to.equal(ru.carsTitle)
    });
    it('should check footer is translated (should fail)',  () => {
        // Maybe not best solution - but I don't know correct translations
        // It will fail until listed strings are present in footer
        page.footer.moveTo();
        expect(page.footer.getText()).not.to.contain("Contact")
            .and.not.to.contain("About Us")
            .and.not.to.contain("How to Book")
            .and.not.to.contain("Booking Tips")
            .and.not.to.contain("Support")
            .and.not.to.contain("Our partners")
            .and.not.to.contain("Privacy Policy")
            .and.not.to.contain("Terms of Use")
            .and.not.to.contain("Business")
            .and.not.to.contain("FAQ")
            .and.not.to.contain("Supplier Login")
    });
    it('should hover to every car and check appeared button text',  () => {
        page.carsPromos.forEach(promo => {
            promo.moveTo();
            promo.$('.loader').waitForDisplayed();
            expect(promo.$('.loader').getText()).to.equal(ru.carBooking);
        })
    });

});
