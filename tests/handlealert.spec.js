import {test, expect} from '@playwright/test';

test('Handle Alert', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    
    page.on('dialog', async dialog => {
        
        expect(dialog.type()).toContain('alert');
        
        expect(dialog.message()).toContain('I am a JS Alert');
        
    })
    await page.getByText("Click for JS Alert").click();
});


test('Handle Prompt Alert', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');

        expect(dialog.message()).toContain('I am a JS prompt');

        await dialog.accept('Playwright');
    })
    await page.getByText("Click for JS Prompt").click();

});

test('Handle Confirm Alert', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.dismiss();
    })
    await page.getByText("Click for JS Confirm").click();
});

