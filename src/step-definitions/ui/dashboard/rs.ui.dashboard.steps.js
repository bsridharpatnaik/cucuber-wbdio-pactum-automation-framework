require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const DashBoardPage = require("../../../page-objects/dashboard/rs.dashboard.page.js");
const ReusableFunctions = require("../../../utils/ReusableFunctions.js");
const { getCurrentUrl, openUrl, pauseBrowser } = require("../../../utils/BrowserUtils.js");
const { Background } = require("@cucumber/messages");
const apiEndpoints = require("../../../../config/api-endpoints.js");
const { pause } = require("webdriverio");

Given(/^Left pane menu is displayed$/, async () => {
    try {
        expect(await DashBoardPage.getLeftPaneMenu()).isDisplayed();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^All required links should be displayed$/, async () => {
    try {
        expect(await DashBoardPage.getLeftPaneConnectionsLink()).isDisplayed();
        expect(await DashBoardPage.getLeftPaneSourcesLink()).isDisplayed();
        expect(await DashBoardPage.getLeftPaneDestinationsLink()).isDisplayed();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I click on three dots against (.*) and click disconnect$/, async (destinationName) => {
    try {
        await DashBoardPage.disconnectDestination(destinationName);
        await pauseBrowser(4000);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I click on Connections link$/, async () => {
    try {
        await DashBoardPage.clickConnectionLink();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I verify that (.*) is not displayed under source (.*)$/, async (destinationName, sourceName) => {
    try {
        await DashBoardPage.checkIfDestAvailableUnderSource(sourceName, destinationName);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I verify that connection line does exists on Connections page$/, async () => {
    try {
        await DashBoardPage.checkConnectionLineNotAvailableOnConnPage();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Given(/^Connection does not exist$/, async () => {
    try {
        return true; //TODO - code to delete connection if exists
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Given(/^Connection exists$/, async () => {
    try {
        return true; //TODO - code to create connection if does not exist
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I navigate to Sources page$/, async () => {
    try {
        await DashBoardPage.navigateToSourcePage();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I navigate to Destination page$/, async () => {
    try {
        await DashBoardPage.navigateToDestinationsPage();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I click on Destination (.*)$/, { wrapperOptions: { retry: 2 } }, async (destinationName) => {
    try {
        await DashBoardPage.clickOnSourceOrDestination(destinationName);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I click on source (.*)$/, { wrapperOptions: { retry: 2 } }, async (sourceName) => {
    try {
        await DashBoardPage.clickOnSourceOrDestination(sourceName);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

//I read and log Event stats
Then(/^I read and log Event stats$/, { wrapperOptions: { retry: 2 } }, async () => {
    try {
        await DashBoardPage.readAndLogEventStats();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I go to Events tab$/, async () => {
    try {
        await DashBoardPage.gotToEventsTabOnDestination();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});
When(/^I click on "Add Destination" button and select "use existing destination"$/, { wrapperOptions: { retry: 2 } }, async () => {
    try {
        await DashBoardPage.selectUseExistingDistFromAddDestination();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I select radio button against (.*) and click Continue$/, async (destinationName) => {
    try {
        await DashBoardPage.selectRadioAgainstDestAndContinue(destinationName);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

When(/^I Click Continue again on configuration page$/, async () => {
    try {
        await DashBoardPage.clickContinueOnConfig();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I verify that connection line exists on Connections page$/, async () => {
    try {
        await DashBoardPage.checkConnectionLineOnConnPage();
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});

Then(/^I verify that (.*) is displayed under source (.*)$/, { wrapperOptions: { retry: 2 } }, async (destinationName, sourceName) => {
    try {
        await DashBoardPage.checkIfDestAvailableUnderSource(sourceName, destinationName);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        throw error;
    }
});
