const express = require ('express');
const axios = require("axios");
const app = express();
const cors = require('cors');
const md5 = require('md5');

require('dotenv').config();

app.use(express.json());
app.use(cors());

const marvelRoutes = require('./routes/routes');
app.use("/api/marvel", marvelRoutes);
const {PORT, PUBLIC_KEY, PRIVATE_KEY} = process.env;

app.listen(PORT, function() {
    console.log('Hello World');
})







