import { test as base } from "@playwright/test";
import { TransportForLondon } from "../pages/tfl.page"

const test = base.extend<{
  transportForLondon: TransportForLondon
}>({

  transportForLondon: async ({ page }, use) => {
    await use(new TransportForLondon(page));
  }
})

export default test;