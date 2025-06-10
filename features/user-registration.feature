Feature: User Registration
  As a new user
  I want to create an account
  So that I can access personalized features

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User successfully creates a new account
    Given I am on the Practice Software Testing homepage
    When I click the "Sign in" button
    Then I should be redirected to the Login page
    When I click on "Register your account"
    And I fill in all required registration fields with valid information
    And I click the "Register" button
    Then I should be redirected to the Login page