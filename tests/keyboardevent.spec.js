import {test, expect} from '@playwright/test';

test('keyboard event test', async ({page}) => {

    await page.goto('https://www.google.com');

    await page.locator('textarea[name="q"]').type('Playwright');

    // await page.keyboard.press('Control+A');

    // await page.keyboard.press('Control+C');
    
    // await page.keyboard.press('Backspace');

    // await page.keyboard.press('Control+V');

    await page.keyboard.press('ArrowLeft'); 
    await page.keyboard.down('Shift');

    for (let i=0; i<'wright'.length; i++) {
        await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace'); 






});  