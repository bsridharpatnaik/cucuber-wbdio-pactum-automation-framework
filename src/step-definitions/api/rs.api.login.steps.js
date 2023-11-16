const environment = process.env.NODE_ENV
require("dotenv").config({path: 'environments/.env.${environment}'});

const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const pactum = require("pactum");

const baseUrl = process.env.API_BASE_URL;
const apiEndpointsEndpoints = require("../../../config/api-endpoints.js");

Given(
  /^I make Login API call using (.*) and (.*)$/,
  async (email, password) => {
    await pactum
      .spec()
      .post(baseUrl + apiEndpointsEndpoints.login)
      .withJson({
        email: "sridhar@evergreencity.in",
        password: "te@mW0rk@123",
      })
      .expectStatus(200);
  }
);

Then(/^I should get success response with access key$/, async () => {
  //await browser.debug();
  return true;
});
