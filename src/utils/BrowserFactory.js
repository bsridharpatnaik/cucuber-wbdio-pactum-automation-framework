require("dotenv").config({
    path: "../../config/environments/.env." + process.env.NODE_ENV,
});

class BrowserFactory {
    static startBrowser() {
        // Perform browser setup (e.g., open browser, navigate to URL)
        //browser.url(process.env.BASE_URL);
    }

    static async tearDownBrowser() {
        await browser.execute("window.localStorage.clear()");
        await browser.execute("window.sessionStorage.clear()");
        await browser.deleteAllCookies();
    }
}

module.exports = BrowserFactory;
