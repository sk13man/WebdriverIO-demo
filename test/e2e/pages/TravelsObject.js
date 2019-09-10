class Travels {
    get englishImg() {return  $('.container .navbar-right.user_menu [alt="English"]')};

    get ruOption() {return  $('.container [data-langname="Russian"]')};

    get myAccount() {return $('.container #li_myaccount [data-toggle="dropdown"]')};

    get contactUs() {return $('.contact-no')}

    get blogLink() {return $('[href="https://www.phptravels.net/blog"]')}

    get offersLink() {return $('[href="https://www.phptravels.net/offers"]')}

    get location()  {return $('#location')};

    get checkin() {return $('input.hcheckin')};

    get checkout() {return $('input.hcheckout')};

    get searchButton() {return $('#thhotels  button[type="submit"]')}

    get flightSearchButton() {return $('#thflight  button[type="submit"]')}

    get travellers() {return $('#htravellersInput')}

    get dropdownAdults() {return $$('.hoptions.form-horizontal')[0]}

    get dropdownChild() {return $$('.hoptions.form-horizontal')[1]}

    get hotelsTab() {return $('[title="Hotels"] .hidden-xs')}

    get flightsTab() {return $('[title="Flights"] .hidden-xs')}

    get toursTab() {return $('[title="Tours"] .hidden-xs')}

    get carsTab() {return $('[title="Cars"] .hidden-xs')}

    get allToursDetails() {return $$('.details div.go-text-right')}

    get bookingButtons() {return $$('.details .button')}

    get toursTitle() {return $('.title .text-center')}

    get avgPerPerson() {return $$('.details .hint')}

    get carsTitle() {return $('.destination-title-container')}

    get carsPromos() {return $$('.cars .probox')}

    get footer() {return $('.theme-hero-area-body')}

    get departure() {return $('#thflights #origin')}

    get arrival() { return $('#thflights #destination')}

    get availableFlights() {return $('#available_flights')}

    openTravellers() {
        this.travellers.click();
        this.dropdownChild.waitForDisplayed(3000);
    }

    translateFromEnglish(){
        this.englishImg.moveTo();
        browser.waitUntil(() => {
            return this.ruOption.getText() === 'Russian'});
        this.ruOption.click()
    }
    fillDestinationsByIATA(departure, arrival) {
        $('#s2id_origin').click();
        this.departure.setValue(departure);
        browser.waitUntil(() => {
            return $('.select2-match').getText() === departure
        });
        $('.select2-match').click();
        $('#s2id_destination').click();
        this.arrival.setValue(arrival);
        browser.waitUntil(() => {
            return $('.select2-match').getText() === arrival
        });
        $('.select2-match').click();
    }
    selectRoundTrip() {
        $('.pure-checkbox [for="round"]').click();
    }
    fillDates(){
        $('.departureTime').click();
        $('.datepicker:nth-child(21) > .datepicker-days .switch').click();
        $('.datepicker:nth-child(21) > .datepicker-months .next').click();
        $('.datepicker:nth-child(21) .month:nth-child(2)').click();
     //   browser.pause(1500);
        $$('.datepicker:nth-child(22) .datepicker-days .day:not([class*="disabled"])')[2].click();
      //  browser.pause(1500);
    }

}
exports.Travels = new Travels();
