# HeroSearch

*HeroSearch is an user friendly websited for browsing Marvel superhero comics and series.*

HeroSearch is my capstone project for Brainstation's full-stack web development bootcamp. We had to plan and execute a functional full-stack application within two weeks. HeroSearch was created using create-react-app, react-router, SASS and axios on the front-end, a Node/Express backend API with JWT for auth, and Knex to query a MySQL database. This README.md will include instructions to install and setup HeroSearch. 

# Installation 

Follow these steps to setup and run a local instance of HeroSearch
(You will need node, npm and MySQL already installed)

1. Clone and download this repo

**Setup the back-end**
1. Install server dependencies

    Run `npm install` from inside server 
  
```
  $ cd server
  $ npm install
```

2. Create a new MySQL database with <NAME_YOUR_DATABASE> and a new table with <NAME_YOUR_TABLE>. The columns within your table should have the following properties. 
 ![image](https://user-images.githubusercontent.com/15685136/145258610-eca7235a-7f07-4e5b-a209-d8733a1a6b5d.png)
 
3. Setup `knexfile.js` and change placeholder with your own. 

```
 module.exports = {
  development: {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: <YOUR USER>,
        password: <YOUR PASSWORD>,
        database: <NAME_YOUR_DATABASE>
      }
    }
  };
```

4. Register for a `PUBLIC_KEY` and `PRIVATE_KEY` on Marvel API, and obtain a `JSON_SECRET_KEY`. Rename `.env` and change the placeholder with your own value. 

```
  PUBLIC_KEY= <YOUR PUBLIC KEY>
  PRIVATE_KEY= <YOUR PRIVATE KEY>
  JSON_SECRET_KEY=<YOUR SECRET KEY>
```

5. Start the server

```
  $ node server.js
```

**Setup the front-end**
1. Install client side dependencies

Run `npm install` from inside the client directory with the following code 

```
   $ cd client
   $ npm install
 ```
    
2. Start the React app

```
   $ npm start
```

