Feature: Search for Specific Product
  As a customer
  I want to search for products
  So that I can quickly find what I'm looking for

  Background: 
    Given I open the Practice Software Testing homepage

  Scenario: User searches for a specific product
    Given I am on the Practice Software Testing homepage
    When I click on "Search" input field
    And I enter a search term such as "pliers" in the search field
    And I click on "Search" button
    Then I should see a list of products matching the search term