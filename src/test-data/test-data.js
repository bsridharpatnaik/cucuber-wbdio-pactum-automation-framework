require("dotenv").config({ path: "environments/.env." + process.env.NODE_ENV });

const validEmail = process.env.email;
const validPassword = process.env.password;

module.exports = {
  loginData: {
    validEmail: validEmail,
    validPassword: validPassword,
    inValidEmail: "dummy@rs.com", //TODO - Can use faker to generate this. 
    inValidPassword: "Test@123",
  },
};
