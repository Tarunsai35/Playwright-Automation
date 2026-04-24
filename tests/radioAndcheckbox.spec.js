const {test, expect} = require ('@playwright/test')

test('Radio and checkbox', async({page}) => {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator("xpath=//div[@class='col-auto form-check']").first().click();
    await page.waitForTimeout(5000);
    await page.locator("xpath=//div[@class='col-auto form-check']").nth(1).click();
    
    
    
    // await page.goto("https://login.salesforce.com/?locale=in");
    // await page.locator('#rememberUn').click();
    // expect(page.locator('#rememberUn')).toBeChecked();
})