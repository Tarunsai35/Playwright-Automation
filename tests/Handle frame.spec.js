import {test, expect} from '@playwright/test';

test('Handle Frame', async ({page}) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    
    const frame = await page.frameLocator("//frame[@name='packageListFrame']");

    await frame.getByText('java.applet').click();

    await page.pause();



});