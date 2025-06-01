Feature: View Product Details
  As a customer
  I want to view detailed information about products
  So that I can make informed purchasing decisions

  Scenario: User views detailed information about a specific product
    Given I am on the Practice Software Testing homepage
    When I click on a product from the product list
    And I am redirected to the product details page
    And I can see the product image, description, and price
    Then I should see all relevant product information including specifications and reviews