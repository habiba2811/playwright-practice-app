import {test, expect} from '@playwright/test';
import { darkMode } from "../handlers/darkModeHanlder"
import { NavigationPage } from '../pageObjects/navigationPage';
 
test.beforeEach(async ({ page }) => {
  await page.goto("/")
  await darkMode({ page })
})

test('Navigate to form page', async ({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
})