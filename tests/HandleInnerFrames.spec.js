const { test, expect } = require('@playwright/test');

test('Handle Innner Iframe', async ({ page }) => {
    await page.goto(`https://ui.vision/demo/webtest/frames/`);

    const frame3 = await page.frame({ url: `https://ui.vision/demo/webtest/frames/frame_3.html` });

    await frame3.locator(`input[name='mytext3']`).fill(`Welcome`);

    const childFrame = await frame3.childFrames();
    await childFrame[0].locator(`//div[@id='i6']`).check();

    await page.waitForTimeout(5000);

})