class Install {
  get dayButton() { return $('p*=Thursday'); }
  get timeButton() {
    const morningButton = $('p*=MORNING');
    const afternoonButton = $('p*=AFTERNOON');
    return morningButton.type !== 'NoSuchElement'
      ? morningButton
      : afternoonButton;
  }
  get continueButton() { return $('button*=Continue'); }

  clickDayButton() {
    this.dayButton.waitForExist();
    this.dayButton.click();
  }

  clickTimeButton() {
    this.timeButton.waitForExist();
    this.timeButton.click();
  }

  doesGoToPaymentPage() {
    this.continueButton.click();
    browser.waitForExist('.payment');

    return browser.getUrl().includes('/payment');
  }
}

module.exports = Install;
