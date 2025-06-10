Feature: User Login
  As an existing user
  I want to log into my account
  So that I can access my personal information and make purchases

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: Registered user logs in
    Given I am on the Practice Software Testing homepage
    When I click the "Sign in" button
    Then I should be redirected to the Login page
    When I fill "Email address" with a valid email address
    And I fill "Password" with a valid password
    And I click the "Login" button
    Then I should be redirected to "My Account" page