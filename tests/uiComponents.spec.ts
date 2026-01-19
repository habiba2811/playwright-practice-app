import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('/')
})

test.describe('Form Layout page', ()=> {
    test.beforeEach( async ({page}) => {
        await page.getByText('Form Layout').click()

    })
    test('input fields Vertical ', async ({page})=> {
    const verticalCard = page.locator('.card', { has: page.getByText('Vertical', { exact: true }) });
    await verticalCard.getByLabel('Name').fill('test');

    })
})