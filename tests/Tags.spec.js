const { test } = require('@playwright/test');

test('first test1@sanity', async ({ page }) => {
    console.log(`this is my first test 1`)
})

test('first test2@sanity', async ({ page }) => {
    console.log(`this is my first test 2`)
})

test('first test3@reg', async ({ page }) => {
    console.log(`this is my first test 3`)
})

test('first test4@reg', async ({ page }) => {
    console.log(`this is my first test 4`)
})

test('first test5@sanity@reg', async ({ page }) => {
    console.log(`this is my first test 5`)
})