const { test, expect } = require('@playwright/test');

test('MouseRightClick', async ({ page }) => {
    await page.goto(`https://swisnl.github.io/jQuery-contextMenu/demo.html`);

    // right click

    await page.locator(`//span[text()='right click me']`).click({ button: 'right' })

    await page.waitForTimeout(5000);
})