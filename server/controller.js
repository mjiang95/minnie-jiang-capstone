

const jwt = require(jsonwebtoken);
const user = (This is where you would get the user from your db)
  router.post('/login', (req, res) => {
    let user_name = req.body.username 
    let user_email = req.body.email
    let password = req.body.password
    if(user.password === password){
     // create token 
     }
  })