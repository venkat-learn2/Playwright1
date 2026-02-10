const { test, expect } = require('@playwright/test');

test('inputbox', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    // InputBox 
    const InputBox1 = await page.locator(`//input[@id='firstName']`);
    await expect(InputBox1).toBeVisible();
    await expect(InputBox1).toBeEmpty();
    await expect(InputBox1).toBeEditable();
    await expect(InputBox1).toBeEnabled();



    // await page.locator(`//input[@id='firstName']`).fill(`Venkat`);
    await page.fill(`//input[@id='firstName']`, `Venkat`);

    await page.waitForTimeout(5000);



})