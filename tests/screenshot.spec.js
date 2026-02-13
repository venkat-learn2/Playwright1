const { test, expect } = require('@playwright/test');


test('page screenshot', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })
})

test('full page screenshot', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + "FullPageScreenshot.png", fullPage: true })
})

test.only('element screenshot', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);
    await page.locator(`(//div[@class='col-lg-4 col-md-6 mb-4'])[1]`).screenshot({ path: 'tests/screenshots/' + Date.now() + "ElementScreenshot.png" })
})