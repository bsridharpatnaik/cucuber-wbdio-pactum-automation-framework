const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const uiEndpoints = require("../../../../config/ui-endpoints.js");

const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const HomePage = require("../../../page-objects/homepage/rs.homepage.page.js");

const pages = {
  login: LoginPage,
  homepage: HomePage
};

Given(/^I launch RudderStack login page$/, async () => {
  await HomePage.open(uiEndpoints.login);
});

When(/^I enter my (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should be able to login$/, async () => {
  //await browser.debug();
  return true;
});
