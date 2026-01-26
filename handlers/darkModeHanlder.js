import { expect } from "@playwright/test"

export async function darkMode({ page }) {
  const topbar = page.locator(".layout-topbar")
  const darkMode = topbar.locator(
    "button.layout-topbar-action:has(i.pi.pi-sun)",
  )
  await expect(darkMode).toBeVisible()
  await darkMode.click()
  await expect(
    topbar.locator("button.layout-topbar-action:has(i.pi.pi-moon)"),
  ).toBeVisible()
}
