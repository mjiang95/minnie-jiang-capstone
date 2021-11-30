const express = require('express');
const router = express.Router();
const axios = require("axios");
const md5 = require('md5');
const app = express();
// const cors = require('cors');

require('dotenv').config();

// app.use(express.json());
// app.use(cors());


const {PUBLIC_KEY, PRIVATE_KEY} = process.env

//the documentation specifies using a long string that changes on a request by request basis, so a time stamp is used below
let timeStamp = new Date()

let strToHash = timeStamp+PRIVATE_KEY+PUBLIC_KEY
console.log("This is before the string is hashedStr", strToHash)


//MD5 is a hashing algorithim, the key word md5 needs to be imported via CDN so we can use it 
let hashedStr = md5(strToHash);
console.log("This is after the string is hashed", hashedStr)

router.route("/")
    .get((req, res) => {
   
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hashedStr}`)
    .then( response => {
        res.send(
        response.data.data.results
        );

        // console.log(req.params.characterId)
    })
    .catch(err => {
        console.log(err);
    })
});

router.route("/:characterId")
    .get((req, res) => {

    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.characterId}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hashedStr}`)
    .then( response => {
        res.send(
        response.data.data.results[0]
        );

        console.log(req.params.characterId)
    })
    .catch(err => {
        console.log(err);
    })
});

router.route('/:characterId/comics') 
    .get((req, res) => {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.characterId}/comics?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hashedStr}`)
    .then( response => {
        res.send(
        response.data.data.results[0]
        );
    })
});

router.route('/:characterId/series')
    .get((req,res) => {
   
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.characterId}/series?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hashedStr}`)
    .then( response => {
        res.send(
        response.data.data.results[0]
        );
    })
});




module.exports = router;