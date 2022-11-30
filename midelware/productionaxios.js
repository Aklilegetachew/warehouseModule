const axios = require("axios");

exports.instance = axios.create({
    baseURL: "https://production.proplast.et",
    // baseURL: "http://localhost:42000",
})

