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
            return (await browser.getUrl()) === await expectedUrl;
        },
        {
            timeout: 30000, // Adjust the timeout as needed
            timeoutMsg: "URL was not redirected within the specified time.",
            timeoutMsg: "URL " + await expectedUrl + " was not redirected within the specified time.",
        }
    );
};
pauseBrowser = async (ms) => {
    if(ms > 30000){
        ms = 30000;  // do not allow pause more than 30 sec
    }
    await browser.pause(ms);
}
module.exports = { getCurrentUrl, openUrl, waitForRedirectionToExpectedURL, pauseBrowser};