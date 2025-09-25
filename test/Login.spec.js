import { test, expect } from '@playwright/test';

// Constants
const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.use({
  launchOptions: {
    slowMo: 2000 // slows execution for visual checking
  }
});

// Run before each test Login
test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.getByPlaceholder('Username').fill(USERNAME);
  await page.getByPlaceholder('Password').fill(PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


// Add/Remove items from cart
test('Add and remove items from cart', async ({ page }) => {

  // Add items
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  // check if the items added to the cart
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('2');

  // Remove item
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
   // check if the removed items updated in the cart
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');

    // Logout
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page).toHaveURL(BASE_URL); //open the inspector to debug the process

  });