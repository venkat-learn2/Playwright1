// const { expect, test } = require("@playwright/test");
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);

    // click on login button - property can be any name , id , class , href what ever property we can use it

    await page.locator(`id=login2`).click();
    // await page.click(`id=login2`);

    // await page.locator(`//input[@id='loginusername']`).fill(`venkat`);
    await page.fill(`//input[@id='loginusername']`, 'pavanol')
    // await page.type(`//input[@id='loginusername']`, 'venkat')

    await page.fill(`//input[@id='loginpassword']`, 'test@123')

    await page.click(`//button[text()='Log in']`);

    // verify logout is presence

    const logoutLink = await page.locator(`//a[@id='logout2']`);
    await expect(logoutLink).toBeVisible();

    await page.close();
})