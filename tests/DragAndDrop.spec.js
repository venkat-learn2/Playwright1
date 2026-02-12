const { test, expect } = require('@playwright/test');

test(`Drag and Drop`, async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // for d and d we need to know source element and target element

    const source = await page.locator(`#draggable`);

    const target = await page.locator(`#droppable`);

    // approach 1

    // await source.hover();
    // await page.mouse.down();

    // await target.hover();
    // await page.mouse.up();

    // approach 2 
    await source.dragTo(target);


    await page.waitForTimeout(5000);

})