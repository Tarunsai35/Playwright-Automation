import { expect, test } from "@playwright/test";

test.use({
    viewport: {
        width: 1536,
        height: 678
    }
});

test('Error message verification', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin1");
    await page.getByRole('button', { name: 'Login' }).click();

    console.log(await page.viewportSize().height);
    console.log(await page.viewportSize().width);



});