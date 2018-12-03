class Contact {
  get firstName() { return $('#firstName'); }
  get lastName() { return $('#lastName'); }
  get email() { return $('#email'); }
  get homePhone() { return $('#homePhone'); }
  get checkBox() { return $('[for="same-address-check"]'); }

  get billingAddress() { return $('#address-billing'); }
  get billingCity() { return $('#city-billing'); }
  get billingState() { return $('#state-billing'); }
  get billingZip() { return $('#zipCode-billing'); }

  get continueButton() { return $('button*=Continue'); }

  fillOutContactForm(firstName, lastName, email, homePhone) {
    this.firstName.waitForExist();

    this.firstName.setValue(firstName);
    this.lastName.setValue(lastName);
    this.email.setValue(email);
    this.homePhone.setValue(homePhone);

    this.checkBox.click();
  }

  fillOutBillingForm(billingAddress, billingCity, billingState, billingZip) {
    browser.waitForExist('#address-billing');

    this.billingAddress.setValue(billingAddress);
    this.billingCity.setValue(billingCity);
    this.billingState.selectByVisibleText(billingState);
    this.billingZip.setValue(billingZip);
  }

  doesGoToCreditCheckPage() {
    this.continueButton.click();
    browser.waitForExist('.credit-check');

    return browser.getUrl().includes('/verify');
  }
}

module.exports = Contact;
