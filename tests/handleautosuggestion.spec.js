import {test, expect} from '@playwright/test';
import { count } from 'node:console';

test('Handle Auto Suggestion', async ({page}) => {

    await page.goto('https://www.google.com/');
    await page.locator('textarea[name="q"]').fill('Playwright Testing');

    // await page.locator("//li[@role='presentation']").first().waitFor({state: 'visible', timeout: 10000});

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
});


test.only('Handle Auto Suggestion by loop', async ({page}) => { // not working

    await page.goto('https://www.google.com/');
    await page.locator('textarea[name="q"]').fill('Playwright');

    // await page.locator("//li[@role='presentation']").first().waitFor({state: 'visible', timeout: 10000});

    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    const list =  await page.locator("//li[@role='presentation']").all();
    console.log('Total number of suggestions: ' + list.length);
    for (let i=0; i<list.length; i++) {
        const item = await list[i].textContent();
        if (item.includes('testing')) {
            await list[i].click();
            // break;   
        }
    }

    console.log('Total number of suggestions: ' + list.length);
});



