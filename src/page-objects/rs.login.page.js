const { $ } = require('@wdio/globals')
const { browser } = require('@wdio/globals')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#text-input-email');
    }

    get inputPassword () {
        return $('#text-input-password');
    }

    get btnSubmit () {
        return $('button.ant-btn-primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url("/");
    }
}

module.exports = new LoginPage();
