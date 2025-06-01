Feature: Add Product to Favorites
  As a logged-in customer
  I want to add products to my favorites list
  So that I can easily find them later

  Scenario: User adds a product to their favorites list
    Given I am logged into my account
    When I navigate to a product details page
    And I click on the "Add to favorites" or heart icon
    And I navigate to my favorites section
    Then I should see the product saved in my favorites list