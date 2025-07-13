# Automated Testing in JS: UI Automation Framework

This project contains automated UI tests for the [Practice Software Testing](https://practicesoftwaretesting.com/) website using WebDriverIO (WDIO) and Cucumber BDD.

---

## 🚀 Project Overview

This BDD UI automation framework covers 8 key user scenarios:
1. **User Registration**
2. **User Login**
3. **View Product Details**
4. **Add Product to Shopping Cart**
5. **Add Product to Favorites**
6. **Complete Checkout Process**
7. **Search for Specific Product**
8. **Change Website Language**

Each scenario is written in Gherkin (`.feature` files) with step definitions and page object models for maintainability.

---

## 🖥️ Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)
- Chrome, Firefox, or Microsoft Edge browsers

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FoxAllUp/JS-UI-Automation-Frameworks.git
   cd JS-UI-Automation-Frameworks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. *(Optional but recommended)* **Check browser drivers**
   - The project uses WebDriverIO, which manages drivers for Chrome, Firefox, and Edge automatically. Make sure you have at least one of these browsers installed.

---

## 🗂️ Project Structure

```
js-ui-automation-frameworks/
│
├── features/                    # Gherkin feature files
│   ├── user-registration.feature
│   ├── user-authentication.feature
│   ├── product-details.feature
│   ├── shopping-cart.feature
│   ├── favorites.feature
│   ├── checkout.feature
│   ├── search-functionality.feature
│   └── language-switching.feature
│
├── features/step-definitions/   # Step definition files
├── page-objects/                # Page Object Model classes
├── test-data/                   # Test data in JSON
├── config/                      # WDIO config files for browsers
├── wdio.conf.js                 # Main WDIO config
├── Jenkinsfile                  # Jenkins CI config
└── package.json                 # Project scripts and dependencies
```

---

## 🗝️ Key Features

- **Headless Mode:** All tests run in headless browsers by default.
- **Parallel Execution:** Speed up with parallel WDIO instances.
- **Retry Logic:** Tests retry 2 times before marking as failed.
- **Cross-browser:** Chrome, Firefox, Edge supported.
- **Page Object Model:** Clean and maintainable code.
- **Data-driven:** Test data in JSON for easy management.
- **BDD Framework:** Uses Cucumber for readable test scenarios.
- **Custom Reporting:** WDIO generates readable reports in `reports/` folder.

---

## 🏷️ Cucumber Tags

Each `.feature` file and/or scenario is tagged to enable flexible test runs:

- `@smoke` – Critical user flows (quick feedback)
- `@regression` – Full regression suite (all features)
- Feature-specific tags: `@login`, `@registration`, `@cart`, `@checkout`, `@favorites`, `@product`, `@search`, `@language`

---

## 🧪 Running Tests

### Run All Tests (Headless mode)
```bash
npm test
```

### Run Smoke Tests Only
```bash
npm run test:smoke
```

### Run Regression Suite
```bash
npm run test:regression
```

### Run Feature-Specific Tests
```bash
npm run test:login
npm run test:cart
npm run test:favorites
npm run test:checkout
npm run test:search
npm run test:language
```

### Run Any Tag Ad Hoc
```bash
npm run test:tag -- --cucumberOpts.tags='@yourtag'
# Example:
npm run test:tag -- --cucumberOpts.tags='@registration'
```

### Browser-Specific Runs
```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Parallel Execution (2 instances)
```bash
npm run test:parallel
```

---

## 📊 Reporters

This project provides multiple reporting formats for test results:

- **Spec Reporter** (default): Human-readable test output in the console.
- **Allure Reporter**: Generates rich, interactive HTML reports.
  - After a test run, open the report with:
    ```bash
    npm run report:allure
    ```
  - (You may need to install [Allure Commandline](https://docs.qameta.io/allure/#_installing_a_commandline) globally.)
- **JUnit Reporter**: Generates XML reports (for CI integration, e.g., Jenkins).
- **HTML Reporter**: Generates static HTML report files.
- **JSON Reporter**: Easy machine parsing for custom dashboards.

> **Reports are output to the `reports/` directory by default.**

---

## 🧹 Code Quality: Linting, Formatting, and Best Practices

- **ESLint**: Enforces JavaScript best practices and coding style.
  - Run lint checks:
    ```bash
    npm run lint
    ```
  - Auto-fix linting errors:
    ```bash
    npm run lint:fix
    ```
- **Prettier**: Opinionated code formatter for consistent style.
  - Format code:
    ```bash
    npm run format
    ```

- **EditorConfig**: Ensures consistent indentation and line endings across different editors.

- **.gitignore**: Keeps unnecessary files (like `node_modules`, report outputs) out of version control.

---

## 🏗️ CI/CD Integration

### Jenkinsfile runs both suites:
- **Smoke Stage:** Runs `npm run test:smoke`
- **Regression Stage:** Runs `npm run test:regression`
- Both stages are separated for fast feedback and full coverage.

---

## 🏷️ Summary Table

| Tool              | Purpose                       | Run with                 |
|-------------------|-------------------------------|--------------------------|
| Allure Reporter   | Interactive HTML reports      | `npm run report:allure`  |
| JUnit Reporter    | CI integration, XML output    | (runs on test)           |
| HTML Reporter     | Human-readable HTML file      | (runs on test)           |
| JSON Reporter     | Machine-readable test data    | (runs on test)           |
| ESLint            | Linting JavaScript code       | `npm run lint`           |
| Prettier          | Code formatting               | `npm run format`         |

---

*See the `wdio.conf.js` for configuration details of each reporter.*

---

## ✍️ Adding or Updating Tests

1. Create/update `.feature` files in `features/`
2. Add step definitions in `features/step-definitions/`
3. Update or add page objects in `page-objects/`
4. Update or add test data in `test-data/`
5. Tag new scenarios appropriately

---

## 📄 License

This project is for educational purposes as part of the Automated Testing in JS course.