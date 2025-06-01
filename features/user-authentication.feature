Feature: User Login
  As an existing user
  I want to log into my account
  So that I can access my personal information and make purchases

  Scenario: Existing user logs into their account
    Given I am on the Practice Software Testing login page
    When I enter my registered email address
    And I enter my correct password
    And I click the "Login" button
    Then I should be redirected to my account dashboard