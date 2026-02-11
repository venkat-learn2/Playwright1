const { test, expect } = require('@playwright/test');

test('Handling Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    // 1) total number of rows and columns

    const columns = table.locator('thead tr th');
    await expect(columns).toHaveCount(4);


    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(5);

    // 2) select the checkbox for product 4

    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: `Smartwatch`
    // })
    // await matchedRow.locator('input').check();

    // 3) for multiple product checks

    await selectProduct(rows, page, 'Laptop')
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Wireless Earbuds')

    // 4) print all product details using looping statement
    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator('td');
    //     for (let j = 0; j < await tds.count() - 1; j++) {
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }

    // 5) read data from all the pages from the table

    const pages = await page.locator(`.pagination li a`)
    const numOfPages = await pages.count();
    console.log(numOfPages, 'numOfPages');

    for (let p = 0; p < await numOfPages; p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(5000);
    }
    // await page.waitForTimeout(5000);
});


async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}
