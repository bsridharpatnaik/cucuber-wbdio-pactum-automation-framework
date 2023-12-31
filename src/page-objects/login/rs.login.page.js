const { $ } = require("@wdio/globals");
const { browser } = require("@wdio/globals");
const { getCurrentUrl } = require("../../utils/BrowserUtils");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define all locators
     */

    // Login Page
    inputEmail = "#text-input-email";
    inputPassword = "#text-input-password";
    loginButton = "button.ant-btn-primary";
    wrongCredMessage = "div.sc-iqcoie.gDuCAl";

    // Add mfa page
    mfaDoLaterLink = "=I'll do this later";
    goToDashboardButton = "button.ant-btn-primary";

    /**
     * Funtion to receive email, password as parameters and enter them on RudderStack UI login page. Then click login button.
     * @param {*} email
     * @param {*} password
     */
    async login(email, password) {
        await this.getInputEmail.setValue(email);
        await this.getInputPassword.setValue(password);
        await this.getLoginButton.isDisplayed();
        await this.getLoginButton.click();
    }

    /**
     * Funtion to receive email and enter it on RudderStack UI login page..
     * @param {*} email
     */
    async enterEmail(email) {
        await this.getInputEmail.setValue(email);
    }

    /**
     * Funtion to check if mfa is displayed. If yes, click on do later link.
     */
    async mfaClickLater() {
        this.getMfaDoLaterLink.waitForDisplayed(10000);
        await this.getMfaDoLaterLink.click();
    }

    /**
     * Funtion to click "Got To dashboard" on after selecting later on mfa page
     */
    async clickGoToDashboard() {
        this.getGoToDashboardButton.waitForDisplayed(10000);
        await this.getGoToDashboardButton.click();
    }

    /**
     * All getter methods for locators
     */
    get getWrongCredMessage() {
        return $(this.wrongCredMessage);
    }
    get getInputEmail() {
        return $(this.inputEmail);
    }

    get getInputPassword() {
        return $(this.inputPassword);
    }

    get getLoginButton() {
        return $(this.loginButton);
    }

    get getMfaDoLaterLink() {
        return $(this.mfaDoLaterLink);
    }

    get getGoToDashboardButton() {
        return $(this.goToDashboardButton);
    }
}

module.exports = new LoginPage();
