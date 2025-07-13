@regression @product
Feature: View Product Details
  As a customer
  I want to view detailed information about products
  So that I can make informed purchasing decisions

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User views details of a specific product
    Given I am on the Practice Software Testing homepage
    When I click on a product card
    Then I should be redirected to the Product Details page
    And I should see the product's image
    And I should see the product's name
    And I should see the product's description
    And I should see the product's price