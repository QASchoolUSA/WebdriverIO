const NativePage = require('./native.page.js');

class automationPracticePage extends NativePage {

  get element() {
    return this.getPage('automationPractice.locators');
  }

  openAutomationPractice() {
    browser.url('/');
  }

  search(query){
    let searchTextbox = $(this.element.searchTextbox);
    let searchButton = $(this.element.searchButton);
    let searchResultsHeader = $(this.element.searchResultsHeader);

    searchTextbox.waitForDisplayed();
    searchTextbox.setValue(query);
    searchButton.waitForDisplayed();
    searchButton.click();
    searchResultsHeader.waitForDisplayed();

  }

  searchIsExecuted(){
    $(this.element.searchResultsHeader).waitForDisplayed();
  }
}

module.exports = automationPracticePage;
