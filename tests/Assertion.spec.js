const { test, expect } = require('@playwright/test');

test('Assertion', async ({ page }) => {

    await page.goto(`https://demo.nopcommerce.com/register`); // await keyword is 

    // check if the page contains valid URL or Not

    await expect(page).toHaveURL(`https://demo.nopcommerce.com/register`);

    // check if the page contain have title
    await expect(page).toHaveTitle(`nopCommerce demo store. Register`);

    // check if the element is visible or not
    const logoElement = await page.locator(`//div[@class='header-logo']/a/img[@alt='nopCommerce demo store']`);
    await expect(logoElement).toBeVisible();

    // check if the element is enabled to perform any action on that
    const searchElement = await page.locator(`//input[@id='small-searchterms']`);
    await expect(searchElement).toBeEnabled();

    // check if raidio selected or not

    const maleRadioElement = await page.locator(`//input[@id='gender-male']`);
    await maleRadioElement.click();
    await expect(maleRadioElement).toBeChecked();

    // check if the checkbox already selected or not

    const checkElement = await page.locator(`//input[@id='NewsLetterSubscriptions_0__IsActive']`);
    await expect(checkElement).toBeChecked();

    // the spefic atrriubute the element contain or not

    const substonewsletter = await page.locator(`//h2[text()='Subscribe to newsletter']`);
    await expect(substonewsletter).toHaveAttribute('class', 'title')

    // to have text - full text
    await expect(substonewsletter).toHaveText('Subscribe to newsletter')


    // to contain text - partial text any part of the entire sentence
    await expect(substonewsletter).toContainText('newsletter')

    // to check input box have some value in it that value is crt or not

    const emailElement = await page.locator(`//input[@id='Email']`);
    await emailElement.fill('venkat@gmail.com')

    await expect(emailElement).toHaveValue(`venkat@gmail.com`)


    // expect locator to have Count - lists of element has given length

    await page.locator(`//a[text()='Books']`).click();
    const selectElemet = await page.locator(`//select[@id='products-orderby']/option`);
    await expect(selectElemet).toHaveCount(6);

    // all of the above are hard assertions

    // hard assertion - if any assertions failed then code not executed further
    // soft assertion - if any assertions rest of the code will execute fruther

})