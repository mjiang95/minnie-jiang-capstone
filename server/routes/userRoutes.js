const router = require("express").Router();
const jwt = require("jsonwebtoken");
const knex = require('knex')(require('../knexfile').development);

const jsonSecretKey = process.env.JSON_SECRET_KEY;

router.post('/register', (req, res) => {

    const { username, name, password } = req.body;
    knex('marvel_login_user_name')
    .insert({ username, name, password })
    res.status(200).json({ success: "true" });

})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
        knex('users')
        .where({ email: 'hi@example.com' })
        .then(rows => 
            if (user && user.password === password) {
            res.status(200).json({ token: jwt.sign({ name: user.name }, jsonSecretKey) });
        } else {
            res.status(403).json({
                token: "",
                error: {
                    message: "Error logging in. Invalid username/password combination.",
                },
            });)
    }
})

router.get("/current", (req, res) => {
    res.json(req.decode);
});

module.exports = router;