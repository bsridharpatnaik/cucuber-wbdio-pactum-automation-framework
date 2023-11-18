require("dotenv").config({ path: "../../config/environments/.env." + process.env.NODE_ENV });
const testData = require("../test-data/test-data");
const path = require('path');
class ReusableFunctions {
  /**
   * Funtion to receive email, password as parameters and replacing them with actual test data.
   * @param {*} email
   * @param {*} password
   */
  replaceLoginCredentials(email, password) {
    if (email === "<validEmail>" && password === "<validPassword>") {
      return {
        email: testData.loginData.validEmail,
        password: testData.loginData.validPassword
      };
    }
    else if(email === "<inValidEmail>" && password === "<inValidPassword>"){
        return {
            email: testData.loginData.inValidEmail,
            password: testData.loginData.inValidPassword
          };
    }
  }

  /**
   * Received path and converts it into URL by appending to base URL
   * @param {*} route 
   * @returns 
   */
}

module.exports = new ReusableFunctions();
