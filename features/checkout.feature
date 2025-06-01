Feature: Complete Checkout Process
  As a customer
  I want to complete my purchase
  So that I can receive the products I want

  Scenario: User successfully completes a purchase
    Given I have products in my shopping cart
    And I am logged into my account
    When I proceed to checkout
    And I fill in my billing and shipping information
    And I select a payment method and confirm the order
    Then I should receive an order confirmation with order details