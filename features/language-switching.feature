Feature: Change Website Language
  As a user
  I want to change the website language
  So that I can use the site in my preferred language

  Scenario: User changes the website display language
    Given I am on the Practice Software Testing homepage
    When I locate the language selector in the header or footer
    And I click on the language dropdown
    And I select a different language option
    Then I should see the website content displayed in the selected language