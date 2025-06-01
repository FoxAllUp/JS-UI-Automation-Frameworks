Feature: User Registration
  As a new user
  I want to create an account
  So that I can access personalized features

  Scenario: User successfully creates a new account
    Given I am on the Practice Software Testing homepage
    When I click on the "Sign in" link
    And I click on "Register your account"
    And I fill in valid registration details
    Then I should see a successful registration confirmation message