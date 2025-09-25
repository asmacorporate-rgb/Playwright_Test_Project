
//A repository to store automation test scripts using the tool playwright
import { test, expect } from '@playwright/test';

// Constants
const BASE_URL = 'https://www.saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.use({
    launchOptions: {
        slowMo: 2000 // adds 1 second delay between actions
    }
});

test('test a website', async ({ page }) => {
    // login to the site
  await page.goto(BASE_URL);
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.getByPlaceholder('Username').fill(USERNAME);
  await page.getByPlaceholder('Password').fill(PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('2');
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
  
})