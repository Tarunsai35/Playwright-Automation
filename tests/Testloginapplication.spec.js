import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { Homepage } from '../pages/homepage';

test('Login Application', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
   
    const loginpage = new LoginPage(page);
    const homepage = new Homepage(page);

    await loginpage.login('admin@email.com', 'admin@123');
    await homepage.signout();


});
