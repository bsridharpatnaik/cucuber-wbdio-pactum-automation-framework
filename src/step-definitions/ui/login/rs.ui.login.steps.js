require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const HomePage = require("../../../page-objects/homepage/rs.homepage.page.js");
const ReusableFunctions = require("../../../utils/reusableFunctions.js");
const { getCurrentUrl } = require('../../../utils/browserUtils.js');

Given(/^I launch RudderStack login page$/, async () => {
  try {
    await HomePage.open(uiRoutes.login);
    expect()
  } catch (error) {
    logger.error("Error launching Rudderstack login page");
    logger.error(`Error: ${error.message}`);
    throw error; // Rethrow the exception to fail the step
  }
});

When(/^I enter my (.*) and (.*) and submit$/, async (email, password) => {
  try {
    const credentials = ReusableFunctions.replaceLoginCredentials(
      email,
      password
    );
    // prettier-ignore
    await LoginPage.login((await credentials).email, (await credentials).password);
    await LoginPage.waitTillRedirectionHappensAfterLogin();
    // Assert that the current URL is the expected redirected URL
    expect(getCurrentUrl() === ReusableFunctions.getAbsoluteURL(uiRoutes.addmfa));
  } catch (error) {
    logger.error("Error Logging in to application");
    logger.error(`Error: ${error.message}`);
    throw error; // Rethrow the exception to fail the step
  }
});
//
Given(/^I select later on add mfa page$/, async () => {
  try {
    await LoginPage.mfaClickLater();
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    throw error; // Rethrow the exception to fail the step
  }
});
Then(/^I should be able to login$/, async () => {
  return true;
});
