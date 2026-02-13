const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    // Login
    await page.goto(`https://www.demoblaze.com/index.html`);
    await page.locator(`#login2`).click();
    await page.locator(`#loginusername`).fill(`pavanol`);
    await page.locator(`#loginpassword`).fill(`test@123`);
    await page.locator(`//button[text()='Log in']`).click();
});

test.afterEach(async () => {
    // Logout
    await page.click(`#logout2`)
})

test('Home page test', async () => {
    // Home Page
    const products = await page.locator('.hrefch').allTextContents();
    await expect(products.length).toBe(9);
})


test('Add product to cart test', async () => {
    // Add Product
    await page.locator(`//a[text()='Samsung galaxy s6']`).click()
    await page.locator(`//a[text()='Add to cart']`).click();

    // Alert Handling
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
})