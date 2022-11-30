const axios = require("axios");

exports.instance = axios.create({
  baseURL: "https://warehouse.proplast.et",
  // baseURL: "http://localhost:42000",
});


