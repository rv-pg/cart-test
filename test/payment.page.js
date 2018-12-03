class Payment {
  get lastFour() { return $('#Vault_Last4SSNumber'); }
  get continueButton() { return $('button*=Continue'); }

  doesGoToCompletedPage() {
    this.continueButton.click();
    browser.waitForExist('.complete');

    return browser.getUrl().includes('/complete');
  }
}

module.exports = Payment;
