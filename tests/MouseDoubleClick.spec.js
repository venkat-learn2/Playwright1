const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // double click

    await page.locator(`//button[text()='Copy Text']`).dblclick();

    const inputbox2 = await page.locator(`#field2`);

    await expect(inputbox2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);

})