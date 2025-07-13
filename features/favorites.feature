@regression @favorites
Feature: Add Product to Favorites
  As a logged-in customer
  I want to add products to my favorites list
  So that I can easily find them later

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User adds a product to favorites
    Given I am on the Practice Software Testing homepage
    And I am logged in
    When I go back to homepage
    And I click on a product card
    Then I should be redirected to the Product Details page
    When I click the "Add to favourites" button
    And I click "my account name"
    And I click "My favorites"
    Then I should see the product listed in my favorites