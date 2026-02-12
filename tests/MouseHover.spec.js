const { test, expect } = require('@playwright/test');

test('MouseHover', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    const pointMeButton = await page.locator(`//button[text()='Point Me']`);

    // mouse hover

    await pointMeButton.hover();

    await page.waitForTimeout(5000);

})