import { expect, Page } from "@playwright/test";
import { Actions } from "../helpers/actions";
import transportForLondonScreen from "../screens/tfl.screen"

export class TransportForLondon extends Actions {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async waitForHeader() {
    await this.waitForElement(transportForLondonScreen.tflHeader);
    await expect(this.page.locator(transportForLondonScreen.tflHeader)).toBeVisible();
  }

async handleCookiePopUp() {
   let locatorExist = await this.page.isVisible(transportForLondonScreen.cookiesAcceptAllBtn);
   while (locatorExist) {
    await this.waitForElement(transportForLondonScreen.cookiesAcceptAllBtn).then(async () => {
      await this.click(transportForLondonScreen.cookiesAcceptAllBtn);
    });
    locatorExist = await this.page.isVisible(transportForLondonScreen.cookiesAcceptAllBtn);
   }  
}

  async planMyJourneyFrom(from: string = "") {
    await this.page.fill(transportForLondonScreen.inputFrom, from);
    await this.click(transportForLondonScreen.stopNameArsenal);
  }

  async planMyJourneyTo(to: string = "") {
    await this.page.fill(transportForLondonScreen.inputTo, to);
    await this.click(transportForLondonScreen.stopNameGreenpark);

  }

  async submitPlanMyJourneyBtn() {
    await this.click(transportForLondonScreen.planMyJourneytBtn);
  }

  async validateJourneyResultsHeader() {
    await expect(this.page.locator(transportForLondonScreen.journeyResultsTitle)).toBeVisible();
  }

  async validateResultsFromAndTo(from: string, to: string) {
    await expect(this.page.locator(transportForLondonScreen.resultsFrom(from))).toBeVisible();
    await expect(this.page.locator(transportForLondonScreen.resultsTo(to))).toBeVisible()
  }

  async fieldValidationError(errorMsg: string) {
    await expect(this.page.getByText(errorMsg)).toBeVisible()
  }

  async confirmInvalidJourneyResults(errorMsg: string = "") {
    await expect(this.page).toHaveURL(/.results/)
    await expect (this.page.getByRole("listitem").filter({ hasText: errorMsg })).toBeVisible()
  }

  async inputRandomCharJourney(from: string = "", to: string = ""){
    await this.page.fill(transportForLondonScreen.inputFrom, from);
    await this.page.fill(transportForLondonScreen.inputTo, to);
  }

  // Asserts an array of headings and confirm its on the DOM
  async assertListHeadingsOnMaps(){
    await expect(this.page.locator(transportForLondonScreen.listHeadings)).toBeVisible()
    console.log(transportForLondonScreen.listHeadings)
  }
}
