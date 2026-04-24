import { test, expect } from '@playwright/test';

test('fills login email', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByPlaceholder('Enter Email').fill('admin@gmail.com');
    await page.getByPlaceholder('Enter Password').fill('admin123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('button', { name: 'Cart' }).first().hover();
    
    

    

});