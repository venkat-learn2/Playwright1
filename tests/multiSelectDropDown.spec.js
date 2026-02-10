const { test, expect } = require('@playwright/test');


test('Handle MultiSelect Dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // select multiple option from the multi select options

    // await page.selectOption(`//select[@id='colors']`, ['Blue', 'Red', 'Yellow']);

    // const multiOptions = await page.locator(`#colors option`);
    // console.log(multiOptions, '12')
    // await expect(multiOptions).toHaveCount(7);

    // const multiOptions = await page.$$(`#colors option`); // $$ will return inform of array
    // console.log(multiOptions.length, '16')
    // await expect(multiOptions.length).toBe(7)

    // presence of the option in the dropdown or content or text
    const multiOptions = await page.locator(`#colors`).textContent();
    // console.log(multiOptions, '21')
    await expect(multiOptions.includes('Green')).toBeTruthy();


    await page.waitForTimeout(5000);

})