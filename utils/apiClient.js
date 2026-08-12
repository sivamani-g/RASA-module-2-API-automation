const axios = require("axios");
require("dotenv").config();

const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
});

module.exports = apiClient;