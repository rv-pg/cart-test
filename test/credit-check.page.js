class CreditCheck {
  get lastFour() { return $('#Vault_Last4SSNumber'); }
  get continueButton() { return $('button*=Continue'); }

  fillOutLastFour(ssn) {
    this.lastFour.waitForExist();
    this.lastFour.setValue(ssn);
  }

  doesGoToEquipmentPage() {
    this.continueButton.click();
    browser.waitForExist('.equipment');

    return browser.getUrl().includes('/equipment');
  }
}

module.exports = CreditCheck;
