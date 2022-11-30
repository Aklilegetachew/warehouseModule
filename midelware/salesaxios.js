const axios = require("axios");

exports.instance = axios.create({
  baseURL: "https://sales.proplast.et",
  // baseURL: "http://localhost:42000",
});


