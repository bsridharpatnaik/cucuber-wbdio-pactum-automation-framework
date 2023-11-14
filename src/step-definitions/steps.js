const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../page-objects/login.page");

const pages = {
  login: LoginPage,
};

Given(/^I launch RudderStack app$/, async () => {
  return true;
});

When(/^I enter my (.*) and (.*)$/, async (username, password) => {
  return true;
});

Then(/^I should be able to login$/, async () => {
  return true;
});

