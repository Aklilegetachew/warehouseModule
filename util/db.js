const mysql = require("mysql2");

const config =  require('../config');

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "versavvy_proPlast",
//   database: "versavvy_warehouse",
//   password: "D57T08)YwgQF",
// });

const pool = mysql.createPool({
  host: "localhost",
  user: config.DBUSER,
  database: config.DBNAME,
  password: config.DBPASSWORD,
});


// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "warehouse",
//   password: "",
// });

module.exports = pool.promise();
