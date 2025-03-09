const { PORT } = require("./src/config/env.js");
const express = require("express");
const proxyRoutes = require("./src/routes/proxyRoutes.js");
const { errorHandler } = require("./src/middlewares/errorHandler.js");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use("/search", proxyRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
