@regression @language
Feature: Change Website Language
  As a user
  I want to change the website language
  So that I can use the site in my preferred language

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User changes the website language
    Given I am on the Practice Software Testing homepage
    When I click the language selector
    Then I see the language options
    When I choose a different language
    Then the website content should be displayed in the selected language