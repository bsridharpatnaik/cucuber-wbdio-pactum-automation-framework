const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../page-objects/rs.login.page");

const pages = {
  login: LoginPage,
};

Given(/^I launch RudderStack app$/, async () => {
  await LoginPage.open();
});

When(/^I enter my (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should be able to login$/, async () => {
  await browser.debug();
  return true;
});
