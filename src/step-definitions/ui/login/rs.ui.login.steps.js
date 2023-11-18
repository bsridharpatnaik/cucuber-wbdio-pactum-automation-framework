require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const DashBoard = require("../../../page-objects/dashboard/rs.dashboard.page.js");
const ReusableFunctions = require("../../../utils/ReusableFunctions.js");
const { getCurrentUrl, openUrl, waitForRedirectionToExpectedURL } = require("../../../utils/BrowserUtils.js");

Given(/^I launch RudderStack login page$/, async () => {
    try {
        await openUrl(uiRoutes.login);
        await waitForRedirectionToExpectedURL(uiRoutes.login);
    } catch (error) {
        logger.error("Error launching Rudderstack login page");
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

When(/^I enter my (.*) and (.*) and submit$/, async (email, password) => {
    try {
        // prettier-ignore
        const credentials = ReusableFunctions.replaceLoginCredentials(email, password);
        await LoginPage.login(credentials.email, credentials.password);
//        await waitForRedirectionToExpectedURL(uiRoutes.addmfa);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

When(/^I enter any (.*) as email$/, async (email) => {
    try {
        await LoginPage.enterEmail(email);
    } catch (error) {
        logger.error("Error Logging in to application");
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

Then(/^I should see wrong email or password message$/, async () => {
    try {
        await LoginPage.getWrongCredMessage.isDisplayed();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

Then(/^I select later on add mfa page$/, async () => {
    try {
        await LoginPage.mfaClickLater();
        await waitForRedirectionToExpectedURL(uiRoutes.addmfalater);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

Then(/^I click "Go to Dashboard" on addmfa later page$/, async () => {
    try {
        await LoginPage.clickGoToDashboard();
        //TODO - add assertion to check URL route
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

Then(/^I should land on Dashboard$/, async () => {
    try {
        //TODO - add assertion to check URL route
        //expect((await DashBoard.getDashboardPageTitle)).isDisplayed();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});

Then(/^Login button should be disabled$/, async () => {
    try {
        await expect(await LoginPage.getLoginButton).toBeDisabled();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error; // Rethrow the exception to fail the step
    }
});
