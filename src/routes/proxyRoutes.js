const express = require("express");
const { apiProxy } = require("../services/proxyService");
const rateLimiter = require("../config/rateLimiter");
const { fetchFromAPI } = require("../services/apiService");

const router = express.Router();

router.use(rateLimiter);

router.use("/", apiProxy);

module.exports = router;
