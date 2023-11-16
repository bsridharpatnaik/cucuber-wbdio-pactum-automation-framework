const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const uiEndpoints = require("../../../../config/ui-routes.js");
const { logger } = require("../../../../config/logger.js");

Given(/^I launch RudderStack homepage$/, async () => {
  try {
    await LoginPage.open("");
  } catch (error) {
    logger.error("Failed to open RS home page")
    logger.error(`Error: ${error.message}`);
    throw error; // Rethrow the exception to fail the step
  }
});
