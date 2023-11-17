require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const { logger } = require("../../../../config/logger.js");

const uiRoutes = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const DashBoard = require("../../../page-objects/dashboard/rs.dashboard.page.js");
const ReusableFunctions = require("../../../utils/reusableFunctions.js");
const { getCurrentUrl, openUrl } = require("../../../utils/BrowserUtils.js");
const { Background } = require("@cucumber/messages");
const apiEndpoints = require("../../../../config/api-endpoints.js");

Given(/^Left pane menu is displayed$/, async () => {
    expect(DashBoard.getLeftPaneMenu.isDisplayed());
});

Then(/^All required links should be displayed$/, async () => {
    expect(DashBoard.getLeftPaneConnectionsLink.isDisplayed());
    expect(DashBoard.getLeftPaneSourcesLink.isDisplayed());
    expect(DashBoard.getLeftPaneDestinationsLink.isDisplayed());
});


Then(/^I click on Connections link$/, async () => {
    (await DashBoard.getLeftPaneConnectionsLink).click();
});

Given(/^Connection does not exist$/, async () => {
    return true;
});

When(/^I navigate to Sources page$/, async () => {
    (await DashBoard.getLeftPaneSourcesLink).click();
//
    browser.pause(5000);
});

When(/^I click on source (.*)$/, async (sourceName) => {
    (await DashBoard.getSourceByName(sourceName)).click();
    browser.pause(20000);
});

When(/^I click on "Add Destination" button and select "use existing destination"$/, async () => {
    return true;
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

