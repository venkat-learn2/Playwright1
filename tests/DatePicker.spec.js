const { test, expect } = require('@playwright/test');

test('Handle date picker', async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // await page.locator(`//input[@id='datepicker']`).fill('06/18/2026');

    // Date picker 
    const year = '2026';
    const month = 'Jun';
    const day = '16';

    await page.click(`#txtDate`); // opens calendar

    while (true) {
        const currentMonth = await page.locator(`//div[@class='ui-datepicker-title']/select[@data-handler='selectMonth']/option[@selected]`).textContent();
        const currentYear = await page.locator(`//div[@class='ui-datepicker-title']/select[@data-handler='selectYear']/option[@selected]`).textContent();

        console.log(currentMonth, currentYear, '20')

        if (currentYear == year && currentMonth == month) {
            break;
        }
        await page.locator(`//span[@class='ui-icon ui-icon-circle-triangle-e']`).click();
    }

    const dates = page.locator("//a[@class='ui-state-default']");

    const allDates = await dates.allTextContents();

    console.log(allDates);

    // date selection using loop
    for (const date of allDates) {
        if (date == day) {
            await page.locator(`//a[@data-date=${date}]`).click();
            break;
        }
    }

    await page.waitForTimeout(5000);


})