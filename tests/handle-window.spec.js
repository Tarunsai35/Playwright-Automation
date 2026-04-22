import {test, expect} from '@playwright/test';

test('Handle Window', async ({browser}) => {  

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/');

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ]);

    await newpage.waitForTimeout(5000);

    await newpage.locator("(//input[@name='email'])[2]").fill('test@example.com');

    await newpage.close();

    await page.waitForTimeout(5000);

    // await page.locator("#email1").fill('example@gmaol.com');

    // await page.waitForTimeout(5000);


});