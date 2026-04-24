const {test, expect} = require ('@playwright/test')

test('launch applcation', async({page}) => {
    // await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=691E77BC42AC337E15511C429CD8EE9C');
    await page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
    // await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
    // await page.getByRole("link",{name:"Register"}).click();
    // await page.getByText('Check Balances').click();
    // await page.getByLabel('Username').click();
    // await page.getByAltText('ParaBank').click(); 
    await page.getByTitle('ParaBank').click();


})