import {test , expect} from '@playwright/test';

test('Handle Dynamic Load', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.getByText("New user? Signup").click();

    await page.waitForLoadState('networkidle');

    const checkbox = await page.locator("//input[@type='checkbox']").count();

    console.log('Checkbox is visible: ' + checkbox );

    // expect(checkbox).toBe(6);
    


});