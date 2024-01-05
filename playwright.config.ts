import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // testDir: '.src/tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['list', { printSteps: true }]],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://tfl.gov.uk',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    trace: "off",
    video: "on-first-retry",

      launchOptions: {
        slowMo: 150,
      },
      headless: true,
      browserName: "chromium",
      viewport: { width: 1400, height: 1400 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "run-on-chrome",
      testDir: "./src/tests",
      use: { 
        browserName: "chromium",
       },
    },

    // {
    //   name: "run-on-firefox",
    //   testDir: "./src/tests",
    //   use: { 
    //     browserName: "firefox",
    //    },
    // },
// 
    // {
    //   name: "run-on-webkit",
    //   testDir: "./src/tests",
    //   use: { 
    //     browserName: "webkit",
    //    },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
