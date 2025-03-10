const { TARGET_API } = require("../config/env");
const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: TARGET_API,
  changeOrigin: true,
  pathRewrite: (path) => {
    if (!path.includes("/works/")) {
      return `/search.json?${path.replace(
        "/?",
        ""
      )}&fields=key,title,author_name,publish_year,first_sentence`;
    }
    return path;
  },
  logger: console,
});

module.exports = { apiProxy };
