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
     * Funtion to receive username, password as parameters and enter them on RudderStack UI login page. Then click login button.
     * @param {*} username 
     * @param {*} password 
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
