const {test, expect} = require ('@playwright/test')

test('launch applcation', async({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();

    await page.locator("xpath=//div[@class='inventory_item']")
    .filter({hasText:'Sauce Labs Bike Light'})
     .getByRole('button').click();

    


})