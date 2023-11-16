const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const uiEndpoints = require("../../../../config/ui-routes.js");
const LoginPage = require("../../../page-objects/login/rs.login.page.js");
const HomePage = require("../../../page-objects/homepage/rs.homepage.page.js");
const ReusableFunctions = require("../../../utils/reusableFunctions.js");

const pages = {
  login: LoginPage,
  homepage: HomePage,
};

Given(/^I launch RudderStack login page$/, async () => {
  await HomePage.open(uiEndpoints.login);
});

When(/^I enter my (.*) and (.*)$/, async (email, password) => {
  const credentials = ReusableFunctions.replaceLoginCredentials(
    email,
    password
  );
  await LoginPage.login((await credentials).email, (await credentials).password);
});

Then(/^I should be able to login$/, async () => {
  return true;
});
