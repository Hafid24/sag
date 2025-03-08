const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const targetApi = process.env.TARGET_API;

const apiProxy = createProxyMiddleware({
  target: targetApi,
  changeOrigin: true,
  pathRewrite: { "^/": "/search.json" },
  logger: console,
});

module.exports = { apiProxy };
