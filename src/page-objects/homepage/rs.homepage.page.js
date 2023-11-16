const { $ } = require('@wdio/globals')
const { browser } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * Funtion to open RudderStack App as base URL followed by required path
     * @param {*} path 
     * @returns 
     */
    open (path) {
        return browser.url(path);
    }
}

module.exports = new HomePage();
