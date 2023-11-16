//Intention to create this method is to encapsulate browser interactions in a single class

/**
 * Get current broswer URL
 * @returns
 */
const getCurrentUrl = () => {
  return browser.getUrl();
};

/**
 * Funtion to open RudderStack App as base URL followed by required path
 * @param {*} path
 * @returns
 */
const openUrl = (path) => {
  return browser.url(path);
};

module.exports = { getCurrentUrl, openUrl };
