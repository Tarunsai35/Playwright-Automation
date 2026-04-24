const { test, expect } = require('@playwright/test')

test('launch applcation', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=691E77BC42AC337E15511C429CD8EE9C');
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

    const menuItems = page.locator("xpath=//ul[@class='leftmenu']");

    // for(const row of await menuItems.getByRole('listitem').all())
    //     console.log(await row.textContent());

    const listItems = menuItems.getByRole('listitem');
    const count = await listItems.count();
    for(var i=0; i<count; i++){
        console.log(await listItems.nth(i).textContent());
    }

})
