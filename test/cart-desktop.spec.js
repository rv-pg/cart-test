const config = require('../config');
const billingDropdownSelector = '.atom-order-overview__billing-dropdown.billing-dropdown ';

function clickBillingDropdown() {
  browser.waitForExist(billingDropdownSelector);
  browser.click(billingDropdownSelector);
}

/* **********************************************************************
Address Check Page tests
********************************************************************** */

describe('Address Check Page', function() {
  const AddressCheck = require('./address-check.page');
  const addressCheck = new AddressCheck();
  const { testUrl } = config;

  // start the cart flow at this url
  browser.url(testUrl);

  const {
    streetAddress,
    city,
    state,
    zipCode,
  } = config;

  it('should let you fill out the address form', function() {
    addressCheck.fillOutAddress(streetAddress, city, state, zipCode);
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to plans page after clicking submit', function() {
    expect(addressCheck.doesGoToPlansPage()).to.be.true;
  });
});

/* **********************************************************************
Plans Page tests
********************************************************************** */

describe('Plans Page', function() {
  const Plans = require('./plans.page');
  const plans = new Plans();

  it('should show plans', function() {
    expect(plans.doesShowPlans()).to.be.true;
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to contact page after selecting plan', function() {
    expect(plans.doesGoToContactPage()).to.be.true;
  });
});

/* **********************************************************************
Contact Page tests
********************************************************************** */

describe('Contact Page', function() {
  const Contact = require('./contact.page');
  const contact = new Contact();

  const {
    firstName,
    lastName,
    email,
    homePhone,
  } = config;

  it('should let you fill out the contact form', function() {
    contact.fillOutContactForm(firstName, lastName, email, homePhone);
  });

  const {
    billingAddress,
    billingCity,
    billingState,
    billingZip,
  } = config;

  it('should let you fill out the billing address form', function() {
    contact.fillOutBillingForm(billingAddress, billingCity, billingState, billingZip);
  });

  it('should show the billing dropdown', function() {
    clickBillingDropdown();
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to credit check page after clicking submit', function() {
    expect(contact.doesGoToCreditCheckPage()).to.be.true;
  });
});

/* **********************************************************************
Credit Check Page tests
********************************************************************** */

describe('Credit Check Page', function() {
  const CreditCheck = require('./credit-check.page');
  const creditCheck = new CreditCheck();
  const { lastFour } = config;

  it('should switch focus to iFrame', function () {
    // Using `element` to find an iframe and providing it to `frame` method
    browser.waitForExist('iframe#vault-Last4SSN');
    const vaultFrame = $('iframe#vault-Last4SSN').value;
    browser.frame(vaultFrame);
  });

  it('should let you fill in the last 4 of SSN', function() {
    creditCheck.fillOutLastFour(lastFour);

    // switch focus back to main site
    browser.frame();
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to equipment page after clicking submit', function() {
    expect(creditCheck.doesGoToEquipmentPage()).to.be.true;
  });
});

/* **********************************************************************
Equipment Page tests
********************************************************************** */

describe('Equipment Page', function() {
  const Equipment = require('./equipment.page');
  const equipment = new Equipment();

  it('should let you select equipment', function() {
    equipment.clickCheckBox();
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to install page after clicking continue', function() {
    expect(equipment.doesGoToInstallPage()).to.be.true;
  });
});

/* **********************************************************************
Install Page tests
********************************************************************** */

describe('Install Page', function() {
  const Install = require('./install.page');
  const install = new Install();

  it('should let you select an install day', function() {
    install.clickDayButton();
  });

  it('should let you select an install time', function() {
    install.clickTimeButton();
  });

  it('should show the billing dropdown', function() {
    clickBillingDropdown();
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

  it('should go to payment page after clicking continue', function() {
    expect(install.doesGoToPaymentPage()).to.be.true;
  });
});

/* **********************************************************************
Payment Page tests
********************************************************************** */

describe('Payment Page', function() {

  it('should show the billing dropdown', function() {
    clickBillingDropdown();
  });

  it('should match designs', function() {
    const results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });

});
