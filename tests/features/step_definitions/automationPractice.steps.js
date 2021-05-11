const { Then, When, Given } = require('cucumber');

const automationPracticePage = require('../../pages/automationPractice.page.js');
const automationPractice = new automationPracticePage();


    Given(/^I open Automation Practice website$/, () => {
    automationPractice.openAutomationPractice();
});

    When(/^I search for {string}$/, (query) => {
    automationPractice.search(query);
});

    Then(/^I can see the search results$/, () => {
    automationPractice.searchIsExecuted();
});