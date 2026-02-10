const { test, expect } = require('@playwright/test');


// setTimeout(()=>{debugger},5000); // to take xpath from the hovering elements

test('Auto Suggest dropdown', async ({ page }) => {
    await page.goto(`https://www.redbus.in/`);

    await page.fill("#srcinput", "chennai");

    // wait until dropdown appears
    await page.waitForSelector("//div[@role='heading']");

    const options = page.locator("//div[@role='heading']");

    const count = await options.count();
    console.log("Total options:", count);

    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).textContent());
    }




    await page.waitForTimeout(5000);
})   