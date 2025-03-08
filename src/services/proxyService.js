const { TARGET_API } = require("../config/env");

const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: TARGET_API,
  changeOrigin: true,
  pathRewrite: { "^/": "/search.json" },
  logger: console,
});

module.exports = { apiProxy };
