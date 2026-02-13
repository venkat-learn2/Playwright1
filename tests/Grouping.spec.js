const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    console.log(`this is beforeAll hook`)
})

test.afterAll(async () => {
    console.log(`this is afterall hook`)
})

test.beforeEach(async () => {
    console.log(`this is beforeEach hook`)
})

test.afterEach(async () => {
    console.log(`this is afterEach hook`)
})

test.describe.only('Group1', () => {

    test('Grouping test1', async ({ page }) => {

        await console.log(`this is my test 1`)
    })

    test('Grouping test2', async ({ page }) => {

        await console.log(`this is my test 2`)
    })
})

test.describe('Group2', () => {
    test('Grouping test3', async ({ page }) => {

        await console.log(`this is my test 3`)
    })

    test('Grouping test4', async ({ page }) => {

        await console.log(`this is my test 4`)
    })
})

