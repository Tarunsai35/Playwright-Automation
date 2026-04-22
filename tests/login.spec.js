import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/);

    await page.locator("[class='oxd-userdropdown-name']").click();
    await page.getByText("Logout").click();

    await expect(page).toHaveURL(/login/);

    await page.close();
});