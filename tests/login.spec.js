import {test, expect} from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test('Login with valid credentials', async ({page}) => {
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByPlaceholder('Email').fill(testdata.username);
    await page.getByPlaceholder('Password').fill(testdata.password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    // allure open allure-report
    // allure generate --clean
});




