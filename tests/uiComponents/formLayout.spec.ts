import { test, expect } from "@playwright/test"
import { darkMode } from "../../handlers/darkModeHanlder"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
  await darkMode({ page })
})

test.describe("Ui Components - Form Layout", () => {
  test.describe.configure({retries:2})
  test.beforeEach(async ({ page }) => {
    await page.getByText("Form Layout").click()
  })

  test.only("input fields Vertical", async ({ page }) => {
    const verticalCard = page.locator(".card", {
      has: page.getByText("Vertical", { exact: true }),
    })
    await verticalCard.getByLabel("Name").fill("test")
    await verticalCard.getByLabel("Email").fill("test@test.com")
    await verticalCard.getByLabel("Email").clear()
    await verticalCard
      .getByLabel("Email")
      .pressSequentially("test2@test.com", { delay: 500 })
    const inputValue = await verticalCard.getByLabel("Email").inputValue()
    expect(inputValue).toEqual("test2@test.com")
    await verticalCard.getByLabel("Age").fill("90")
  })
  test("input fields Horizontal", async ({ page }) => {
    const horizontalCard = page.locator(".card", {
      has: page.getByText("Horizontal"),
    })
    await horizontalCard.getByLabel("Name").fill("test")
    await horizontalCard.getByLabel("Email").fill("test@test.com")
    await expect(horizontalCard.getByLabel("Email")).toHaveValue(
      "test@test.com",
    )
  })

  test("input fields Vertical Grid", async ({ page }) => {
    const verticalGridCard = page.locator(".card", {
      has: page.getByText("Vertical Grid"),
    })
    await verticalGridCard.getByLabel("Name").fill("test")
    await verticalGridCard.getByLabel("Email").fill("test@test.com")
  })

  test("input fields Help Text", async ({ page }) => {
    const helpText = page.locator(".card", { has: page.getByText("Help Text") })
    await helpText.getByLabel("Username").fill("test")
  })

  test("input fields Advanced", async ({ page }) => {
    const Advanced = page.locator(".card", { has: page.getByText("Advanced") })
    await Advanced.getByLabel("Firstname").fill("test")
    await Advanced.getByLabel("Lastname").fill("test")
    await Advanced.getByLabel("Address").fill("test")
    await Advanced.getByRole("combobox", { name: "Select One" }).click()
    await page.getByRole("option", { name: "Option 1" }).click()
    await Advanced.getByLabel("Zip").fill("test")
  })
})
