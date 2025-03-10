const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const proxyRoutes = require("./src/routes/proxyRoutes.js");
const { errorHandler } = require("./src/middlewares/errorHandler.js");
const apiRoutes = require("./src/routes/apiRoutes.js");
const { PORT } = require("./src/config/env.js");

const path = require("path");
const app = express();
console.log(path.join(__dirname, "/client/dist/index.html"));
app.use(cors());
app.use(helmet());
app.get("/api", apiRoutes);

app.use("/proxy", proxyRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
