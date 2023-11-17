require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const DashBoardPage = require("../../../page-objects/dashboard/rs.dashboard.page.js");
const ReusableFunctions = require("../../../utils/reusableFunctions.js");
const { getCurrentUrl, openUrl } = require("../../../utils/BrowserUtils.js");
const { Background } = require("@cucumber/messages");
const apiEndpoints = require("../../../../config/api-endpoints.js");

Given(/^Left pane menu is displayed$/, async () => {
    expect(DashBoardPage.getLeftPaneMenu.isDisplayed());
});

Then(/^All required links should be displayed$/, async () => {
    expect(DashBoardPage.getLeftPaneConnectionsLink.isDisplayed());
    expect(DashBoardPage.getLeftPaneSourcesLink.isDisplayed());
    expect(DashBoardPage.getLeftPaneDestinationsLink.isDisplayed());
});


Then(/^I click on Connections link$/, async () => {
    (await DashBoardPage.getLeftPaneConnectionsLink).click();
});

Given(/^Connection does not exist$/, async () => {
    return true;
});

When(/^I navigate to Sources page$/, async () => {
    await DashBoardPage.getLeftPaneSourcesLink.click();
    await DashBoardPage.getPageTitle("Sources").isDisplayed();
});

When(/^I click on source (.*)$/, async (sourceName) => {
    await DashBoardPage.getSourceByName(sourceName).isDisplayed();
    await DashBoardPage.getSourceByName(sourceName).click();
    await DashBoardPage.getPageTitle(sourceName).isDisplayed();
});

When(/^I click on "Add Destination" button and select "use existing destination"$/, async () => {
    await DashBoardPage.getOverviewTab.click();
    elementHover(DashBoardPage.getAddDestinationButton);
    await DashBoardPage.getUseExistingDDestination.click();
    await DashBoardPage.getPageTitle("Connect existing destination").isDisplayed();
    //return true;
});

When(/^I select radio button against (.*) and click Continue$/, async (destinationName) => {
    return true;
});

When(/^I Click Continue again on configuration page$/, async () => {
    return true;
});

Then(/^I verify that connection line exists on Connections page$/, async () => {
    return true;
});

Then(/^I verify that (.*) is displayed under source page$/, async (destinationName) => {
    return true;
});

