const { test, expect } = require('@playwright/test');

test('Soft Assertion', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`)

    // Hard Assertion
    // await expect(page).toHaveTitle("STORE1");
    // await expect(page).toHaveURL(`https://www.demoblaze.com/index.html`);
    // const logo = await page.locator(`//a[@id='nava']/img`);
    // await expect(logo).toBeVisible();

    //Soft Assertion
    await expect.soft(page).toHaveTitle("STORE1");
    await expect.soft(page).toHaveURL(`https://www.demoblaze.com/index.html`);
    const logo = await page.locator(`//a[@id='nava']/img`);
    await expect.soft(logo).toBeVisible();
})