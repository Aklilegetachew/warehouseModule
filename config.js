const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
  DBNAME:process.env.DATABASENAME,
  DBUSER: process.env.USER, 
  DBPASSWORD: process.env.DBPASSWORD
};
