import { test, expect } from '@playwright/test';

test('select vale from dropdown', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("#state").selectOption({label:"Punjab"});

    await page.waitForTimeout(2000);

    await page.locator("#state").selectOption({value:"Gujarat"});

    await page.waitForTimeout(2000);

    await page.locator("#state").selectOption({index:3});

    await page.waitForTimeout(2000);    

    const count = await page.locator("#state").textContent();
    
    console.log(count);

    await expect(count.includes("Punjab")).toBeTruthy();


    let states = await page.$("#state");
    let Alloptions = await states.$$("option");

    for(let i=0; i<Alloptions.length; i++){
        let element = await Alloptions[i];
        let text = await element.textContent();
        console.log("list of states: " + text);

        let ddstate = false;
        if(text.includes("Punjab")){
            ddstate = true;
            break;
        }
    }
    await expect(true).toBeTruthy();

    // select Multiple options
    await page.locator("#hobbies").selectOption(['Playing','Singing']);

    await page.waitForTimeout(2000);


});