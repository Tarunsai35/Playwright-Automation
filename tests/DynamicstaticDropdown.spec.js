const {test, expect} = require ('@playwright/test');
const { time } = require('node:console');

test('Select Dynamic Dropdown', async({page}) => {
    
    await page.goto("https://www.yatra.com/");
    await page.locator("xpath=(//img[@alt='cross' and @loading='lazy'])[1]").click();
    const departureInput = page.locator("xpath=//div[@aria-label='Departure From New Delhi inputbox']");
    await departureInput.click();
    await page.locator("//input[@id='input-with-icon-adornment']").pressSequentially('new', {delay: 1000});
    await page.getByRole('listitem').filter({hasText: 'DEL'}).click();
    

})
