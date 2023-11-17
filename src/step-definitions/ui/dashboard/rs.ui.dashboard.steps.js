require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const DashBoardPage = require("../../../page-objects/dashboard/rs.dashboard.page.js");
const ReusableFunctions = require("../../../utils/reusableFunctions.js");
const {
    getCurrentUrl,
    openUrl,
    pauseBrowser,
} = require("../../../utils/BrowserUtils.js");
const { Background } = require("@cucumber/messages");
const apiEndpoints = require("../../../../config/api-endpoints.js");
const { pause } = require("webdriverio");

Given(/^Left pane menu is displayed$/, async () => {
    expect(DashBoardPage.getLeftPaneMenu).isDisplayed();
});

Then(/^All required links should be displayed$/, async () => {
    expect(DashBoardPage.getLeftPaneConnectionsLink).isDisplayed();
    expect(DashBoardPage.getLeftPaneSourcesLink).isDisplayed();
    expect(DashBoardPage.getLeftPaneDestinationsLink).isDisplayed();
});

Then(/^I click on Connections link$/, async () => {
    await DashBoardPage.clickConnectionLink();
});

Given(/^Connection does not exist$/, async () => {
    return true;
});

When(/^I navigate to Sources page$/, async () => {
    await DashBoardPage.navigateToSourcePage();
});

When(/^I click on source (.*)$/, async (sourceName) => {
    await DashBoardPage.clickOnSource(sourceName);
});

When(
    /^I click on "Add Destination" button and select "use existing destination"$/,
    async () => {
        await DashBoardPage.selectUseExistingDistFromAddDestination();
    }
);

When(
    /^I select radio button against (.*) and click Continue$/,
    async (destinationName) => {
        await DashBoardPage.selectRadioAgainstDestAndContinue(destinationName);
    }
);

When(/^I Click Continue again on configuration page$/, async () => {
    await DashBoardPage.clickContinueOnConfig();
});

Then(/^I verify that connection line exists on Connections page$/, async () => {
    await DashBoardPage.checkConnectionLineOnConnPage();
});

Then(
    /^I verify that (.*) is displayed under source (.*)$/,
    async (destinationName, sourceName) => {
        await DashBoardPage.checkIfDestAvailableUnderSource(sourceName, destinationName);
    }
);
