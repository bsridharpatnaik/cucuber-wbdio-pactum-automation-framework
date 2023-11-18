require("dotenv").config({
    path: "../../config/environments/.env." + process.env.NODE_ENV,
});

class BrowserFactory {
    
    static async tearDownBrowser() {
        try{
            await browser.execute("window.localStorage.clear()");
            await browser.execute("window.sessionStorage.clear()");
            await browser.deleteAllCookies();
        } catch (e){
            // Intentional. Exception will be thrown for API Tests. This is to supress them.
        }
        
    }
}

module.exports = BrowserFactory;
