/**
 * Locators for tfl page
 */

import { getMapHeadings } from "../helpers/utils.js"


const transportForlondonScreen = {
  tflHeader: `(//*[text()="Plan a journey"])[1]`,
  myJourneysTab: `//*[@id="jp-fav-tab-home"]//*[text()="My Journeys"]`,
  inputFrom: "[id='InputFrom']",
  inputTo: "[id='InputTo']",
  stopNameArsenal: "[data-id='940GZZLUASL']",
  stopNameGreenpark: "[data-id='940GZZLUGPK']",
  cookiesAcceptAllBtn: "[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']",
  planMyJourneytBtn: "[id='plan-journey-button']",
  journeyResultsTitle: "(//span[text()='Journey results'])[2]",
  resultsFrom: (from: string) => `//strong[text()="${from}"]`,
  resultsTo: (to: string) => `//strong[text()="${to}"]`,
  listHeadings: `//div[@class='text-link']//h2[text()="${getMapHeadings}"]`
}

export default transportForlondonScreen;