# Playwright_Test_Project
Playwright automation for testing login and add-to-cart flows

# Installation & Execution

**Step 1: Set up the repository**

  - Create a repository on GitHub.

  - Clone the repository locally.

  - Create a folder inside the repo to store your test scripts.

  - Create your spec.js Playwright file to write test scripts.


**Step 2: Install Playwright**

Run the following commands in the terminal inside your project folder:

  - npm init -y
  - npm install -D @playwright/test
  - npx playwright install

**Step 3: Add basic Playwright code to navigate to a website**

  - npx playwright test tests/Login.spec.js
  - Commit and push.

**Step 4: Add login code with the required credentials**

  - npx playwright test tests/Login.spec.js --headed //runs the browser in visible mode so you can see the test execution.
  - Commit and push.

**Step 5: Add test script to add/remove items from the cart and validate cart count**

  - npx playwright test tests/Login.spec.js --headed //runs the browser in visible mode so you can see the test execution.
  - Commit and push.

**Step 6: Rewrite the code to include constants for username, password, base URL, and beforeEach hook**

  - npx playwright test tests/Login.spec.js --headed //runs the browser in visible mode so you can see the test execution.
  - Commit and push.

**Step 7: Add logout functionality in the test script**

  - npx playwright test tests/Login.spec.js --headed //runs the browser in visible mode so you can see the test execution.
  - Commit and push.


# Playwright Automation: Login & Add to Cart - SauceDemo

This repository contains **Playwright automation scripts** for testing the login and shopping cart functionality on [SauceDemo](https://www.saucedemo.com/).

## Features

- End-to-end test automation using **Playwright Test**.  
- Includes **login, add to cart, remove from cart, and logout** flows.  
- Uses **slowMo** for better visual debugging.  
- Uses **locators** (`getByPlaceholder`, `getByRole`, `locator`) for reliable element targeting.  
- Scalable and maintainable structure for adding more tests in the future.  


## Project Overview

The project automates key user journeys of the SauceDemo web application:

1. **Login Functionality**  
   - Navigates to the login page.  
   - Fills in valid credentials.  
   - Verifies successful login and redirection to the inventory page.

2. **Add/Remove Items from Cart**  
   - Adds multiple items to the shopping cart.  
   - Validates the cart count.  
   - Removes an item and verifies the cart count update.  
   - Logs out and ensures the user is redirected to the login page.

---



