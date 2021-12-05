const express = require ('express');
const axios = require("axios");
const app = express();
const cors = require('cors');
const knex = require("knex")(require("./knexfile").development);


require('dotenv').config();

app.use(express.json());
app.use(cors());

const marvelRoutes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes')

app.use("/api/marvel", marvelRoutes);
app.use("/users", userRoutes);

const {PORT} = process.env;

app.listen(PORT, function() {
    console.log('Hello World');
})







