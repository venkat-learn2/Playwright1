const { test, expect } = require('@playwright/test');

test('built-in locators', async ({ page }) => {
    await page.goto(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`);
    const logo = await page.getByAltText(`company-branding`);
    console.log(logo, '6')
    await expect(logo).toBeVisible();

    // input boxes 

    await page.getByPlaceholder(`Username`).fill('Admin');
    await page.getByPlaceholder(`Password`).fill('admin123');
    
    

    // get by role using tag name generally a tag

    await page.getByRole('button', { type: 'submit' }).click();


    // get by text which elements having text content
    await expect(await page.getByText(`John James`)).toBeVisible();

    

})