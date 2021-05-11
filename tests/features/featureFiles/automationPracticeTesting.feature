Feature: Validate the functionality of Automation Practice Site

  @webdriverIOScenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    Given I open Automation Practice website
    When I search for jeabs
    Then I can see the search results
