import { test, expect } from '@playwright/test';

test('Login test by auto generation record', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//span[@class='oxd-userdropdown-tab']").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});