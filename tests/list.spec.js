const { test, expect } = require('@playwright/test')

test('launch applcation', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=691E77BC42AC337E15511C429CD8EE9C');
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

    const menuItems = page.locator("xpath=//ul[@class='leftmenu']");

    await expect(menuItems.getByRole('listitem')).toHaveCount(6);

    // for (const row of await page.getByRole('listitem').all())
        // console.log(await menuItems.textContent());

})
