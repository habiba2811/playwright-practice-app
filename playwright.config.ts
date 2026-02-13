import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    process.env.CI ? ["dot"] : ["list"],
     [
      "@argos-ci/playwright/reporter",
      {
        uploadToArgos: !!process.env.CI,
      }
    ],
  ],
  use: {
    baseURL: "https://sakai.primeng.org",
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "on",
    launchOptions: {
      slowMo: 100,
    },
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: 'Mobile',
      testMatch: 'testMobile.spec.ts',
      use: { ...devices['iPhone 14 Pro'] },
      
    },
  ],
})
