require("dotenv").config();
const express = require("express");
const proxyRoutes = require("./routes/proxyRoutes.js");
const { errorHandler } = require("./middlewares/errorHandler.js");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use("/search", proxyRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
