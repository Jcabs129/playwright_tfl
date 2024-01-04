import { expect, Page } from "@playwright/test";


class Actions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(locator: string) {
    await this.page.waitForSelector(locator);
    await this.page.click(locator)
  }

  async enterText(locator: string, text: string) {
    await this.page.fill(locator, text)
  }

  async waitForElement(locator: string, timeInMs = 1500) {
    await this.page.waitForSelector(locator, { timeout: timeInMs})
  }

  async wait(milliSecond: number) {
    await this.page.waitForTimeout(milliSecond)
  }

  // async clickAndWaitToDisppear(locator: string) {
  //   await this.click(locator);
  //   await this.waitForNotVisible(locator)
  // }
}

export { Actions };
