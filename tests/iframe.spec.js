const { test, expect } = require('@playwright/test')

test('iframe demo', async ({ page }) => {

    await page.goto('https://demoqa.com/frames');
    const framepage =  page.frameLocator("//div[@id='frame1Wrapper']");
    framepage.locator("//h1[@id='sampleHeading']");




})
