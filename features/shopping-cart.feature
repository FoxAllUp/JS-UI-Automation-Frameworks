Feature: Add Product to Shopping Cart
  As a customer
  I want to add products to my shopping cart
  So that I can purchase multiple items at once

  Scenario: User adds a product to their shopping basket
    Given I am viewing a product details page
    When I select the desired quantity
    And I click the "Add to cart" button
    And I navigate to the shopping cart
    Then I should see the selected product in my cart with correct quantity and price