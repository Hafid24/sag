const express = require("express");
const helmet = require("helmet");

const proxyRoutes = require("./src/routes/proxyRoutes.js");
const { errorHandler } = require("./src/middlewares/errorHandler.js");
const apiRoutes = require("./src/routes/apiRoutes.js");
const { PORT } = require("./src/config/env.js");

const app = express();

app.use(helmet());
app.get("/", apiRoutes);

app.use("/search", proxyRoutes);
app.use("/api", proxyRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
