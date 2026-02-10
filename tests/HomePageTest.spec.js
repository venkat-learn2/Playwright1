const { test, expect } = require('@playwright/test');
// expect for validation

// anaoymous function needs to pass
// page is fixture when create anaoymous function we need to pass page so the we can do tests
// fixture contains so many function - using page fxiture we can access all the method
// ================
// why async and await

// by default JS async Language 

// if example 4 lines of code in js will execute parallel will depened on each line output 
// but in test cases we need to execute line by line so that to make sync we use async and await
// every step is depend on previous step
// so we have to use promise
// async keyword will make sure function will return the promise
// await keyword will make sure it will wait for the promise

// as per above code every command will execute after the page loading


test('Home Page', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);
    const pageTitle = await page.title();
    console.log(pageTitle, 'PageTitle');
    await expect(page).toHaveTitle(pageTitle);

    const pageURL = await page.url(); // get current page URL
    console.log(pageURL, 'pageURL')

    await expect(page).toHaveURL(`https://www.demoblaze.com/index.html`);  //validation
    await page.close();
})


