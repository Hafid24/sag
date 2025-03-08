const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const targetApi = process.env.TARGET_API;

const apiProxy = createProxyMiddleware({
  target: targetApi + "/search.json",
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
  logger: console,
});

module.exports = { apiProxy };
