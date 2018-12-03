class AddressCheck {
  get streetAddress() { return $('#street1-install'); }
  get city() { return $('#city-install'); }
  get state() { return $('#state-install'); }
  get zipCode() { return $('#zipcode-install'); }

  get viewPlansButton() { return $('button*=View Plans'); }

  fillOutAddress(streetAddress, city, state, zipCode) {
    this.streetAddress.waitForExist();

    this.streetAddress.setValue(streetAddress);
    this.city.setValue(city);
    this.state.selectByVisibleText(state);
    this.zipCode.setValue(zipCode);
  }

  doesGoToPlansPage() {
    this.viewPlansButton.click();
    browser.waitForExist('.plan-selection');

    return browser.getUrl().includes('/plan');
  }
}

module.exports = AddressCheck;
