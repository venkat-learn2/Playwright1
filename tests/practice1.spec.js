const { test, expect, chromium } = require('@playwright/test');

// test('practice1', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");

// })

// setTimeout(()=>{debugger;},5000)

test('practice2', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("//button[text()='START']").click();
    // await page.click("//button[text()='START']")
    // await page.getByRole("button", { name: 'start' }).click();

    await page.locator(`//input[@id='Wikipedia1_wikipedia-search-input']`).fill('Venkat');

    await page.locator(`//input[@id='male']`).check();
    await page.locator(`//input[@id='sunday']`).check();


    // page.on("dialog", async dialog => {
    //     await expect(dialog.type()).toContain('alert');
    //     await expect(dialog.message()).toContain('I am an alert box!');
    //     await dialog.accept();
    // })

    // await page.locator(`//button[@id='alertBtn']`).click();

    // page.on("dialog", async dialog => {
    //     await expect(dialog.type()).toContain('confirm');
    //     await expect(dialog.message()).toContain('Press a button!');
    //     await dialog.dismiss();
    // })

    // page.locator(`//button[@id='confirmBtn']`).click();

    page.on("dialog", async dialog => {
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await dialog.accept('Venkat');

    })

    await page.locator(`//button[@id='promptBtn']`).click();

    await page.waitForTimeout(5000);
})

test('select', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator(`//select[@id='country']`).scrollIntoViewIfNeeded();
    await page.locator(`//select[@id='country']`).selectOption('china');
    // await page.locator(`//select[@id='country']`).selectOption({ label: 'Canada' });
    // await page.locator(`//select[@id='country']`).selectOption({ index: 8 })

    await page.locator('//select[@id="animals"]').selectOption(['cat', 'cheetah', 'fox']);

})

test('test2 - handle new tab', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'New Tab' }).click();
    const page1 = await page1Promise;
    await page1.waitForTimeout(5000)
});

test('test5', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Popup Windows' }).click();
    const page2 = page1Promise;
})

test('test6', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.locator(`//button[text()='Point Me']`).hover();
    await expect(page.locator(`//a[text()='Mobiles']`)).toHaveText('Mobiles')

    await page.getByRole("button", { name: 'Copy Text' }).dblclick();


    const source = await page.locator(`//div[@id='draggable']`);
    const target = await page.locator(`//div[@id='droppable']`);

    // await source.dragTo(target)

    await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

})

test.only('test7', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator(`//input[@id='multipleFilesInput']`).scrollIntoViewIfNeeded();
    await page.locator(`//input[@id='singleFileInput']`).setInputFiles(`Images/DiffFrameWork.png`);
    await page.locator(`//input[@id='multipleFilesInput']`).setInputFiles(['Notes/7_Notes.txt', 'Notes/6_Notes.txt', 'Notes/8_Notes.txt'])

    await page.waitForTimeout(5000);

    // screenshots

    await page.locator(`//div[@id='HTML1']`).screenshot({ path: `tests/screenshots/` + Date.now() + 'table1.png' })
    await page.screenshot({ path: `tests/screenshots` + Date.now() + 'fullPage.png', fullPage: true })
})


