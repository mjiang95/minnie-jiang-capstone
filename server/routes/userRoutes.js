const router = require("express").Router();
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile").development);

const jsonSecretKey = process.env.JSON_SECRET_KEY;

router.post("/register", (req, res) => {
  const { username, name, password } = req.body;
  knex("marvel_login_user_name")
    .insert({ username, name, password })
    .then(() => {
      res.status(200).json({ success: "true" });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/login", (req, res) => {
  const { name, username, password } = req.body;

  knex("marvel_login_user_name")
    .where({ username, password })
    .then((rows) => {
      console.log(rows[0].username);
      if (username === rows[0].username && password === rows[0].password) {
        res
          .status(200)
          .json({ token: jwt.sign({ name: rows[0].name }, jsonSecretKey) });
      } else {
        res.status(403).json({
          token: "",
          error: {
            message: "Error logging in. Invalid username/password combination.",
          },
        });
      }
    });
});

router.get("/current", (req, res) => {
  res.json(req.decode);
});

module.exports = router;
