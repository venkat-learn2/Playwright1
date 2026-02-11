const { test, expect } = require('@playwright/test');

// playwright dismiss the dialog automatically be default

test.skip('Alert with OK', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // enable alert handle before click the alert button in the UI
    // if not enabling not able handle the alert

    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.locator(`//button[@id='alertBtn']`).click();

    await page.waitForTimeout(5000);

})

test.skip('Alert with OK and Cancel', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // enable alert handle before click the alert button in the UI
    // if not enabling not able handle the alert

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept(); // OK button
        await dialog.dismiss();   // Cancel button
    });
    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[text()='You pressed Cancel!']")).toContainText("You pressed Cancel!");

    await page.waitForTimeout(5000);

})

test('Alert with Prompt ', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // enable alert handle before click the alert button in the UI
    // if not enabling not able handle the alert

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Venkat');
    })
    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toContainText("Hello Venkat! How are you today?");

    await page.waitForTimeout(5000);

})