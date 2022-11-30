const axios = require("axios");

exports.instance = axios.create({
    baseURL: "https://auth.proplast.et",
    // baseURL: "http://localhost:42000",
})

