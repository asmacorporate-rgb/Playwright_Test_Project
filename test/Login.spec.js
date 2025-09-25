
//A repository to store automation test scripts using the tool playwright
import { test, expect } from '@playwright/test';

test('test', async({page}) => {
// 
    await page.goto('https://www.saucedemo.com/');
})