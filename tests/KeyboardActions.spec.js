const { test, expect } = require('@playwright/test');

test('Keyboard actions', async ({ page }) => {

    await page.goto(`https://gotranscript.com/text-compare`);

    // await page.locator(`//textarea[@name='text1']`).fill(`Welcome to the Automation world`);

    await page.type(`//textarea[@name='text1']`, `Welcome to the Automation world`);

    // Ctrl + A
    await page.keyboard.press("Control+A");

    // Ctrl + C
    await page.keyboard.press("Control+C")

    // TAB key
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    // Ctrl + V
    await page.keyboard.press("Control+V")

    await page.waitForTimeout(5000);

})