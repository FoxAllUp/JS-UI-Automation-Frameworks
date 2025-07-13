@smoke @cart
Feature: Add Product to Shopping Cart
  As a customer
  I want to add products to my shopping cart
  So that I can purchase multiple items at once

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User adds a product to the shopping cart
    Given I am on the Practice Software Testing homepage
    When I click on a product card
    Then I should be redirected to the Product Details page
    When I select a quantity
    And I click "Add to cart" button
    And I click on shopping cart icon
    Then I should see in the cart the correct product name
    And I should see in the cart the correct product quantity
    And I should see in the cart the correct product price
