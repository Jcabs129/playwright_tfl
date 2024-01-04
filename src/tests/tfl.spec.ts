import test from "../helpers/base.page"

const journeyFrom = "Arsenal"
const journeyTo = "Greenpark"

test.describe("Testing the TFL website", () => {
  test.beforeEach(async ({ page, transportForLondon }) => {
    await page.goto('/');
    await transportForLondon.handleCookiePopUp();
    await transportForLondon.waitForHeader();
  });

  test('Plan my Jouurney', async ({ page, transportForLondon }) => {
    const validateJourneyFrom = "Arsenal Underground Station"
    const validateJourneyTo = "Green Park Underground Station"

    await transportForLondon.planMyJourneyFrom(journeyFrom);
    await transportForLondon.planMyJourneyTo(journeyTo);
    await transportForLondon.submitPlanMyJourneyBtn();
    await transportForLondon.validateJourneyResultsHeader();
    await transportForLondon.validateResultsFromAndTo(validateJourneyFrom, validateJourneyTo);
  });

  test('Plan Journey - error field validation', async ({ page, transportForLondon }) => {
    const fieldErrorMsg = "The To field is required."

    await transportForLondon.planMyJourneyFrom(journeyFrom);
    await transportForLondon.submitPlanMyJourneyBtn();
    await transportForLondon.fieldValidationError(fieldErrorMsg);
  });

  test('Plan Journey error page validation', async ({ page, transportForLondon }) => {
    const randomCharOne = "aaaaaaaa"
    const randomCharTwo = "zzzzzzzz"
    const errorMsg = "Sorry, we can't find a journey matching your criteria"

    await transportForLondon.inputRandomCharJourney(randomCharOne, randomCharTwo)
    await transportForLondon.submitPlanMyJourneyBtn();
    await transportForLondon.confirmInvalidJourneyResults(errorMsg)
  });

  test('Validate the list of headings on /maps page', async ({ page, transportForLondon }) => {
    await page.goto('/maps/');
    await transportForLondon.assertListHeadingsOnMaps();
  });

  // test('get started link', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  
  //   // Click the get started link.
  //   await page.getByRole('link', { name: 'Get started' }).click();
  
  //   // Expects the URL to contain intro.
  //   await expect(page).toHaveURL(/.*intro/);
  // });
  
})
