const { test, expect } = require('@playwright/test');

test('radio button', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    // InputBox 
    await page.locator(`//input[@id='gender-radio-1']`).check();
    // await page.check(`//input[@id='gender-radio-1']`)
    await expect(await page.locator(`//input[@id='gender-radio-1']`)).toBeChecked();
    await expect(await page.locator(`//input[@id='gender-radio-1']`).isChecked).toBeTruthy();

    await expect(await page.locator(`//input[@id='gender-radio-2']`).isChecked).toBeFalsy();

    await page.waitForTimeout(5000);

})