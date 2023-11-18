const { logger } = require("../../../config/logger.js");
const { Given, Then } = require("@wdio/cucumber-framework");
const pactum = require("pactum");
const dataTemplate = require("../../test-data/data-template.js");
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
        logger.error(`Error in 'I make a login API call': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});

Then(/^I should get success response with access key$/, async () => {
    try {
        // Your assertions or actions here
        // await browser.debug();
        return true;
    } catch (error) {
        logger.error(`Error in 'I should get success response with access key': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});
