const { expect, test } = require('playwright/test')


test('locating multiple elements', async ({ page }) => {
    await page.goto(`https://www.demoblaze.com/index.html`);

    const links = await page.$$(`//a`);

    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText, 'linktext')
    }

    const productLinks = await page.$$(`//div[@class='card-block']/h4/a`);

    for (const productLink of productLinks) {
        const productLinkText = await productLink.textContent();
        console.log(productLinkText)
    }
})