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

Given(/^Left pane menu is displayed$/, async () => {
    expect(DashBoard.getLeftPaneMenu.isDisplayed());
});

Then(/^All required links should be displayed$/, async () => {
    expect(DashBoard.getLeftPaneConnectionsLink.isDisplayed());
    expect(DashBoard.getLeftPaneSourcesLink.isDisplayed());
    expect(DashBoard.getLeftPaneDestinationsLink.isDisplayed());
});

//I click on Connections link
Then(/^I click on Connections link$/, async () => {
    (await DashBoard.getLeftPaneConnectionsLink).click();
});