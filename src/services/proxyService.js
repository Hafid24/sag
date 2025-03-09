const { TARGET_API } = require("../config/env");

const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: TARGET_API,
  changeOrigin: true,
  pathRewrite: (path, req) => {
    console.log(path, "before");
    let searchPath = path.replace("/?", "");
    searchPath = "/search.json?" + searchPath;
    searchPath += "&fields=key,title,author_name,editions,first_sentence";
    return searchPath;
  },
  logger: console,
});

module.exports = { apiProxy };
