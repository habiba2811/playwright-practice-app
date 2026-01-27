import { test, expect } from '@playwright/test';
import { darkMode } from "../../handlers/darkModeHanlder"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
  await darkMode({ page })
})

test.describe('Ui Components - Table', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Table").click()
   expect(page).toHaveURL('/uikit/table')
  })
  test('Table', async ({page})=> {
    // // Frozen Columns
    const frozenTableCard= page.locator('.card', { hasText: 'Frozen Columns'})
    const balanceButton= frozenTableCard.getByRole('button', { name: 'Balance'})
    await balanceButton.click()
 }) })