import { expect, test } from "@playwright/test";

test('Error message verification', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin3");
    await page.locator("//button[@type='submit']").click();

    const errorMessage = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
    console.log(errorMessage);

    await expect(errorMessage.includes("Invalid")).toBeTruthy();

});