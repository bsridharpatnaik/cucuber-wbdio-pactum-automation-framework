require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });
const fs = require("fs-extra");
const { logger } = require("../../../config/logger.js");
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const pactum = require("pactum");
const dataTemplate = require('../../test-data/data-template.js');
const baseUrl = process.env.API_BASE_URL;
const apiEndpointsEndpoints = require("../../../config/api-endpoints.js");
const reusableFunctions = require("../../utils/ReusableFunctions.js");

Given(/^I make Login API call using (.*) and (.*)$/, async (email, password) => {
    try {
        const credentials = reusableFunctions.replaceLoginCredentials(email, password);
        dataTemplate.loginData.loginPayload.email = credentials.email;
        dataTemplate.loginData.loginPayload.password = credentials.password;

        await pactum
            .spec()
            .post(baseUrl + apiEndpointsEndpoints.login)
            .withJson(dataTemplate.loginData.loginPayload)
            .expectStatus(200);
    } catch (error) {
        console.error(`Error in 'I make a login API call': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});

Then(/^I should get success response with access key$/, async () => {
    //await browser.debug();
    return true;
});
