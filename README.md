# Automated Testing in JS course Module 4 TASK: JS UI Automation frameworks

This project contains automated tests for the Practice Software Testing website using WebDriverIO (WDIO) with Cucumber BDD framework.

## 🚀 Project Overview

This automation framework tests 8 key scenarios (created in module 2):
1. User Registration
2. User Login  
3. View Product Details
4. Add Product to Shopping Cart
5. Add Product to Favorites
6. Complete Checkout Process
7. Search for Specific Product
8. Change Website Language

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Chrome browser
- Firefox browser
- Microsoft Edge browser

## 🔧 Key Dependencies

- **WebDriverIO**: v8.x - Main automation framework
- **Cucumber**: v9.x - BDD framework for Gherkin scenarios
- **Chromedriver**: Latest - Chrome browser automation
- **Geckodriver**: Latest - Firefox browser automation
- **Edgedriver**: Latest - Microsoft Edge browser automation

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd js-ui-automation-frameworks
```

2. Install dependencies:
```bash
npm install
```

## 🏗️ Project Structure

```
practice-software-testing-automation/
├── features/                    # Feature files and step definitions
│   ├── step-definitions/       # Step definition files
│   └── *.feature              # Gherkin feature files
├── page-objects/               # Page Object Model classes
├── config/                     # WDIO configuration files
├── test-data/                  # Test data files
└── package.json               # Project dependencies
```

## 🎯 Running Tests

### Basic Test Execution
```bash
# Run all tests
npm test
```

### Browser-Specific Tests
```bash
# Chrome (headless)
npm run test:chrome

# Firefox (headless)  
npm run test:firefox

# Microsoft Edge (headless)
npm run test:edge
```

### Parallel Execution
```bash
# Run tests in parallel (2 instances)
npm run test:parallel
```

### Development Mode
```bash
# Run with browser visible (non-headless)
npm run test:dev
```

## 🔧 Configuration

### Main Configuration
- `wdio.conf.ts` - Main WDIO configuration
- `config/wdio.chrome.conf.js` - Chrome-specific settings
- `config/wdio.firefox.conf.js` - Firefox-specific settings  
- `config/wdio.edge.conf.js` - Edge-specific settings

### Key Features
- **Headless Mode**: All tests run in headless mode by default
- **Parallel Execution**: Tests run with 2 parallel instances
- **Retry Logic**: Tests retry 2 times before marking as failed
- **Multiple Browsers**: Support for Chrome, Firefox and Microsoft Edge
- **BDD Framework**: Uses Cucumber for readable test scenarios

## 📊 Test Reports

WDIO generates built-in reports after test execution:
- Console output with test results summary 
- **Allure** - Interactive HTML reports with screenshots, step details, and trend analysis
- Built-in **spec reporter** shows real-time test progress

## 🧪 Test Data

Test data is managed in the `test-data/` directory:
- `users.json` - Test user accounts
- `products.json` - Product information
- `testData.js` - Data management utilities

## 🎨 Page Object Model

The framework uses Page Object Model (POM) for maintainable code:
- `BasePage.js` - Common page methods and utilities
- `HomePage.js` - Homepage interactions and navigation
- `LoginPage.js` - Login and registration functionality
- `ProductPage.js` - Product detail operations
- `CartPage.js` - Shopping cart actions
- `FavoritesPage.js` - Favorites/wishlist management
- `CheckoutPage.js` - Checkout process handling
- `SearchResultsPage.js` - Search results interactions

## 🔄 CI/CD Integration

The project is ready for CI/CD integration with:
- Headless browser execution
- JSON/XML report generation
- Parallel test execution
- Configurable browser selection

## 📝 Writing New Tests

1. Create/update `.feature` files in the `features/` directory
2. Implement step definitions in `features/step-definitions/`
3. Add page objects in `page-objects/` directory
4. Update test data in `test-data/` as needed

Example feature:
```gherkin
Feature: User Registration
  Scenario: User successfully creates a new account
    Given I am on the Practice Software Testing homepage
    When I click on the "Sign in" link
    And I fill in valid registration details
    Then I should see a successful registration confirmation message
```

## 📄 License

This project is for educational purposes as part of the Automated Testing in JS course.
