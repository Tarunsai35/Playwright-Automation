const {test, expect} = require ('@playwright/test')

test('launch applcation', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=691E77BC42AC337E15511C429CD8EE9C');

    await page.locator("css=#username").fill("john");
    await page.locator("//input[@id='password']").fill("demo");

    


})