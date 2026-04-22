import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

test.describe('data driven login', () => {

    for (const data of testdata) {

        test.describe(`login with user ${data.id}`, () => {

            test('login to application', async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.getByPlaceholder("Enter Email").fill(data.username);
                await page.getByPlaceholder("Enter Password").fill(data.password);
                await page.waitForTimeout(3000);
                
            })
        })
    }
})


