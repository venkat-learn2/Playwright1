const { test, expect, chromium } = require('@playwright/test');


// we are going to create our own page so imported chromium

test('Handling pages/windows', async () => {
    // if do not want to use own page fixture use it below like 

    const browser = await chromium.launch() // it will create a new browser
    const context = await browser.newContext() // this will create new context by using context we can create multiple pages

    const page1 = await context.newPage() // own page creation way

    const page2 = await context.newPage();

    const allpages = await context.pages();
    console.log(allpages.length, '16');

    await page1.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page1).toHaveTitle(`OrangeHRM`)

    await page2.goto(`https://www.orangehrm.com/`);
    await expect(page2).toHaveTitle(`Human Resources Management Software | HRMS | OrangeHRM`)

})

test.only('Handling pages/windows 2', async () => {
    // if do not want to use own page fixture use it below like 

    const browser = await chromium.launch() // it will create a new browser
    const context = await browser.newContext() // this will create new context by using context we can create multiple pages

    const page1 = await context.newPage() // own page creation way
    await page1.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page1).toHaveTitle(`OrangeHRM`)

    const pagePromise = context.waitForEvent('page'); // opens empty tab

    await page1.locator(`//a[text()='OrangeHRM, Inc']`).click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle(`Human Resources Management Software | HRMS | OrangeHRM`);

    await page1.waitForTimeout(5000);

    await newPage.waitForTimeout(5000);

    await browser.close();

})