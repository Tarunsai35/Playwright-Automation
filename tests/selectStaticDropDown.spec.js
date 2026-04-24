const {test, expect} = require ('@playwright/test');
const { time } = require('node:console');

test('Select Static Dropdown', async({page}) => {
    
    await page.goto('https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enyk');

    await page.locator("//select[@name='CompanyEmployees']").selectOption({value : '10'});
    await page.waitForTimeout(5000);
    await page.locator("//select[@name='CompanyEmployees']").selectOption({label : '21 - 200 employees'});
    await page.waitForTimeout(5000);
    await page.locator("//select[@name='CompanyEmployees']").selectOption({index : 3});
    

    
})
