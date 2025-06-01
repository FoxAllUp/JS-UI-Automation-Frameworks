Feature: Search for Specific Product
  As a customer
  I want to search for products
  So that I can quickly find what I'm looking for

  Scenario: User searches for a particular product using search functionality
    Given I am on the Practice Software Testing homepage
    When I enter "pliers" in the search box
    And I click the search button or press Enter
    And I review the search results
    Then I should see relevant products containing "pliers" in the results