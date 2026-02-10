const { test, expect } = require('@playwright/test');

test("Handle Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // multiple ways to select the dropdown from the option

    // await page.locator(`//select[@id='country']`).selectOption({ label: 'Australia' }); // Label or Visible Text
    // await page.locator(`//select[@id='country']`).selectOption('Australia');//Visible Text
    // await page.locator(`//select[@id='country']`).selectOption({value:'usa'});// using value
    // await page.locator(`//select[@id='country']`).selectOption({index:7});// using index 
    // await page.selectOption(`//select[@id='country']`,'India') // by text only

    // Assertions on Dropdown 

    // check number of options in the dropdown - approch 1

    // const options = await page.locator(`//select[@id='country']/option`);
    // await expect(options).toHaveCount(10);

    // check number of options in the dropdown - approch2

    // const options = await page.$$(`//select[@id='country']/option`);
    // console.log(options.length)
    // await expect(options.length).toBe(10);

    // check presence of value in the dropdown
    // const content = await page.locator(`//select[@id='country']`).textContent();
    // await expect(content.includes('India').toBeTruthy();

    // check the presense of the value in the dropdown - looping approach

    const options = await page.$$(`//select[@id='country']/option`);
    let status = false;
    
    for (const option of options) {
        console.log(await option.textContent());
        const eachOption = await option.textContent();
        if (eachOption.includes('Canada')) {
            status = true;
            break;
        }
    }

    await expect(status).toBeTruthy();

    await page.waitForTimeout(5000);
})

