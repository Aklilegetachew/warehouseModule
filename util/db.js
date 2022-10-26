const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "versavvy_proPlast",
  database: "versavvy_warehouse",
  password: "D57T08)YwgQF",
});

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "warehouse",
//   password: "",
// });

module.exports = pool.promise();
