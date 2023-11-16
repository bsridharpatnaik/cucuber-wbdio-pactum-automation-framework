const testData = require("./test-data.js");

class ReusableFunctions {
  /**
   * Funtion to receive email, password as parameters and replacing them with actual test data.
   * @param {*} email
   * @param {*} password
   */
  async replaceLoginCredentials(email, password) {
    if (email === "validEmail" && password === "validPassword") {
      return {
        email: testData.loginData.validEmail,
        password: testData.loginData.validPassword
      };
    }
    else if(email === "inValidEmail" && password === "inValidPassword"){
        return {
            email: testData.loginData.inValidEmail,
            password: testData.loginData.inValidPassword
          };
    }
  }
}

module.exports = new ReusableFunctions();
