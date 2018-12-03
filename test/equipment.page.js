class Equipment {
  get checkBox() { return $('.atom-input-field__checkboxradio'); }

  get continueButton() { return $('button*=Continue'); }

  clickCheckBox() {
    this.checkBox.waitForExist();
    this.checkBox.click();
  }

  doesGoToInstallPage() {
    this.continueButton.click();
    browser.waitForExist('.installation');

    return browser.getUrl().includes('/installation');
  }
}

module.exports = Equipment;
