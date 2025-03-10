const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.RATE_LIMIT || 100,
  message: "Too much requests",
});

module.exports = apiLimiter;
