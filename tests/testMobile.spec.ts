import { test, expect } from "@playwright/test"
import { faker } from "@faker-js/faker"

  test("input fields Advanced", async ({ page }, testInfo) => {
    await page.goto("/")
    if (testInfo.project.name == 'Mobile')
    await page.locator('.layout-menu-button.layout-topbar-action').click();

    await page.getByText("Form Layout").click()
    const Advanced = page.locator(".card", { has: page.getByText("Advanced") })
    await Advanced.getByLabel("Firstname").fill(`${faker.person.firstName()}`)
    await Advanced.getByLabel("Lastname").fill(`${faker.person.lastName()}`)
    await Advanced.getByLabel("Address").fill(`${faker.location.streetAddress()}`)
    await Advanced.getByRole("combobox", { name: "Select One" }).click()
    await page.getByRole("option", { name: "Option 1" }).click()
    await Advanced.getByLabel("Zip").fill(`${faker.location.zipCode()}`)
  })

