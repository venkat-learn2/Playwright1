const { test, expect } = require('@playwright/test');

// test.skip('Annotations-test1', async ({ page }) => {
//     console.log(`test 1`)
// })

// test('Annotations-test2', async ({ page }) => {
//     console.log(`test 2`)
// })

// test('Annotations-test3', async ({ page, browserName }) => {

//     console.log(`test 3`)

//     if (browserName == 'chromium') {
//         test.skip()
//     }
// })

// test('Annotations-test4', async ({ page }) => {
//     test.fixme()
//     console.log(`test 4`)
// })

// test('Annotations-test5', async ({ page }) => {
//     test.fail();
//     console.log(`test 5`)
//     await expect(1).toBe(2)
// })

// test('Annotations-test6', async ({ page, browserName }) => {
//     if(browserName == 'chromium'){
//         test.fail();
//     }
//     console.log(`test 6`)

// })

test('Annotations-test7', async ({ page, browserName }) => {
    // test.slow()
    test.setTimeout(5000)
    console.log(`test 7`)
    await page.goto(`https://www.demoblaze.com/index.html`);
})

// only - for execute one only test case from the file
// skip - for skip particular test case or we can skip N of test case
// browser - given browser name skip based on the input
//fixme - if test case has some issue until resolve it use this
//fail - if both actual and expected fail it will pass
//slow - will increase 3 X from the config file timeout
// setTimeout - custom timeout for ind test case
