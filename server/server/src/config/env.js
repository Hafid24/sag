require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  TARGET_API: process.env.TARGET_API || "https://jsonplaceholder.typicode.com",
  RATE_LIMIT: process.env.RATE_LIMIT || 100,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  API_KEY: process.env.API_KEY || "your-default-api-key", // For authentication
  LOG_LEVEL: process.env.LOG_LEVEL || "info", // Logging level (info, debug, error)
};
