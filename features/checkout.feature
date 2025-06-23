Feature: Complete Checkout Process
  As a customer
  I want to complete my purchase
  So that I can receive the products I want

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User completes the checkout process
    Given I am on the Practice Software Testing homepage
    And I am logged in
    When I go back to homepage
    And I have at least one product in my shopping cart
    And I click on the first "Proceed to checkout" button
    And I click on the second "Proceed to checkout" button
    And I fill in the Billing Address fields with valid information
    And I click on the third "Proceed to checkout" button
    And I select a payment method
    And I click on "Confirm" button
    Then I should see a "Payment was successful" message
    When I click on "Confirm" button
    Then I should see an order confirmation message