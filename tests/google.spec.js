import { test, expect } from '@playwright/test';

test('google has title',async({page})=>{
    await page.goto('https://www.google.com/');
    
    const url = page.url();
    console.log(url);

    const title = await page.title();
    console.log(title);
    


});