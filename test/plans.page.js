class Plans {
  get planButton() { return $('*=Order Online'); }

  doesShowPlans() {
    return this.planButton.waitForExist();
  }

  doesGoToContactPage() {
    this.planButton.click();
    browser.waitForExist('.contact-collection');

    return browser.getUrl().includes('/info');
  }
}

module.exports = Plans;
