require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });

const { logger } = require("../../../config/logger.js");
const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const pactum = require("pactum");

const baseUrl = process.env.API_BASE_URL;
const apiEndpointsEndpoints = require("../../../config/api-endpoints.js");
const reusableFunctions = require("../../utils/reusableFunctions.js");


Given(
    /^I make Login API call using (.*) and (.*)$/,
    async (email, password) => {
        const credentials = reusableFunctions.replaceLoginCredentials(
            email,
            password
        );
        
        const requestPayload = {
            "email": credentials.email,
            "password": credentials.password,
        };

        await pactum
            .spec()
            .post(baseUrl + apiEndpointsEndpoints.login)
            .withJson(requestPayload)
            .expectStatus(200);
    }
);

Then(/^I should get success response with access key$/, async () => {
    //await browser.debug();
    return true;
});
