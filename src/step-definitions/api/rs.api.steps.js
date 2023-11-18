const { logger } = require("../../../config/logger.js");
const { Given, Then } = require("@wdio/cucumber-framework");
const pactum = require("pactum");
const { spec } = require("pactum");
const dataTemplate = require("../../test-data/data-template.js");
const baseUrl = process.env.API_BASE_URL;
const dpUrl = process.env.dataPlaneURL;
const apiEndpointsEndpoints = require("../../../config/api-endpoints.js");
const reusableFunctions = require("../../utils/ReusableFunctions.js");
const { string } = require("pactum-matchers");
const apiEndpoints = require("../../../config/api-endpoints.js");

Given(/^I make Login API call using (.*) and (.*) and receive 200 with access token$/, async (email, password) => {
    try {
        const credentials = reusableFunctions.replaceLoginCredentials(email, password);
        dataTemplate.loginData.loginPayload.email = credentials.email;
        dataTemplate.loginData.loginPayload.password = credentials.password;

        const response = await pactum
            .spec()
            .post(baseUrl + apiEndpointsEndpoints.login)
            .withJson(dataTemplate.loginData.loginPayload)
            .expectStatus(200)
            .expectJsonMatch({
                accessToken: string(),
            })
            .stores("accessToken", "accessToken")
            .stores("idToken", "idToken")
            .toss();
        logger.info("API Login call completed.");
    } catch (error) {
        logger.error(`Error in 'I make a login API call': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});

//
Then(/^I should be able to make call to IdentifyURL$/, async () => {
    try {
        const authHeader = `Basic ${Buffer.from(process.env.writeKey + ":").toString("base64")}`;
        pactum
            .spec()
            .post(dpUrl + apiEndpoints.identify)
            .withHeaders({
                "Content-Type": "application/json",
                Authorization: authHeader,
            })
            .withJson(dataTemplate.identifyAPIData)
            .expectStatus(200)
            .toss();
    } catch (error) {
        logger.error(`I should be able to make call to IdentifyURL': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});

Then(/^I should be able to make call to TrackURL$/, async () => {
    try {
        const authHeader = `Basic ${Buffer.from(process.env.writeKey + ":").toString("base64")}`;
        pactum
            .spec()
            .post(dpUrl + apiEndpoints.track)
            .withHeaders({
                "Content-Type": "application/json",
                Authorization: authHeader,
            })
            .withJson(dataTemplate.trackAPIData)
            .expectStatus(200)
            .toss();
    } catch (error) {
        logger.error(`I should be able to make call to IdentifyURL': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});

Then(/^I should be able to get total events$/, async () => {
    try {
        const currentDate = new Date();
        currentDate.setDate(new Date().getDate() - 1); // Subtract 1 day
        const isoDateString = currentDate.toISOString();
        const requestUrl = baseUrl + "/workspaces/" + process.env.workSpaceId + "/sources/" + process.env.sourcedId + "/totalEvents";

        pactum
            .spec()
            .get(requestUrl)
            .withHeaders({
                accept: "application/json, text/plain, */*",
                authorization: "Bearer $S{idToken}",
            })
            .withQueryParams({
                start: isoDateString,
                region: "US",
            })
            .expectStatus(200)
            .inspect()
            .toss();
    } catch (error) {
        logger.error(`I should be able to make call to IdentifyURL': ${error.message}`);
        throw error; // Rethrow the error to mark the step as failed
    }
});
