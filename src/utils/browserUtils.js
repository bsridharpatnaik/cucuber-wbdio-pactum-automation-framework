require("dotenv").config({
    path: "../../config/environments/.env." + process.env.NODE_ENV,
});
//Intention to create this method is to encapsulate browser interactions in a single class

/**
 * Get current broswer URL
 * @returns
 */
getCurrentUrl = async () => {
    const currentUrl = await browser.getUrl();
    return currentUrl;
};

/**
 * Funtion to open RudderStack App as base URL followed by required path
 * @param {*} path
 * @returns
 */
const openUrl = (path) => {
    return browser.url(path);
};

waitForRedirectionToExpectedURL = async (expectedUrl) => {
    await browser.waitUntil(
        async () => {
            return (await browser.getUrl()) === expectedUrl;
        },
        {
            timeout: 15000, // Adjust the timeout as needed
            timeoutMsg: "URL was not redirected within the specified time.",
        }
    );
};

module.exports = { getCurrentUrl, openUrl, waitForRedirectionToExpectedURL };
