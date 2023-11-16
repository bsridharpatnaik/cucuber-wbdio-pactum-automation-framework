const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const uiEndpoints = require("../../../../config/ui-routes.js");

Given(/^I launch RudderStack homepage$/, async () => {
  await LoginPage.open("");
});