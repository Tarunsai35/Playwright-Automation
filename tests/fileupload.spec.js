import  {test, expect} from '@playwright/test';

test('file upload test', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('./tests/uploads/Screenshot.png');

    await page.locator('#file-submit').click();

    const uploadedFileName = await page.getByText('File Uploaded!').textContent();

    expect(uploadedFileName).toBe('File Uploaded!');

});