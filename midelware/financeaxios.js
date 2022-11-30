const axios = require("axios");

exports.instance = axios.create({
    baseURL: "https://finance.proplast.et",
    // baseURL: "http://localhost:42000",
})

