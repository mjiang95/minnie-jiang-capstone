const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const knex = require("knex")(require("./knexfile").development);

require("dotenv").config();

app.use(express.json());
app.use(cors());

const marvelRoutes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
const comicsRoutes = require("./routes/comicsRoutes");
const seriesRoutes = require("./routes/seriesRoutes");

app.use("/api/marvel", marvelRoutes);
app.use("/users", userRoutes);
app.use("/api/comics", comicsRoutes);
app.use("/api/series", seriesRoutes);

const { PORT } = process.env;

app.listen(PORT, function () {
  console.log("Hello World");
});
