const { test, expect } = require('@playwright/test');

test('Handle checkbox', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    // single checkbox
    await page.locator(`//input[@id='hobbies-checkbox-1']`).check();

    await expect(await page.locator(`//input[@id='hobbies-checkbox-1']`)).toBeChecked();

    await expect(await page.locator(`//input[@id='hobbies-checkbox-1']`).isChecked()).toBeTruthy();// is checked will return true or false

    await expect(await page.locator(`//input[@id='hobbies-checkbox-3']`).isChecked()).toBeFalsy();// is checked will return true or false


    // multiplecheckbox
    const checkboxes = [`//input[@id='hobbies-checkbox-1']`, `//input[@id='hobbies-checkbox-3']`]

    for (const checkbox of checkboxes) {
        await page.locator(checkbox).check();
    }


    for (const checkbox of checkboxes) {
        if (page.locator(checkbox).isChecked())
            await page.locator(checkbox).uncheck();
    }


    await page.waitForTimeout(5000)
})