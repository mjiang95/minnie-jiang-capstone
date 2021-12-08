import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import "./Login.scss";

function LogIn(props) {
  const handleLogIn = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        let token = res.data.token;
        sessionStorage.setItem("authToken", token);
        props.history.push("/home");
      });
  };

  return (
    <section className="login-page">
      <div className="login">
        <h1>Log In</h1>
        <form className="login-form" onSubmit={handleLogIn}>
          <Input
            label="Username"
            name="username"
            type="text"
            className="login-username"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            className="login-password"
          />
          <div className="login-buttons">
            <button className="submit" type="submit">
              Log In
            </button>
            <Link className="signup-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LogIn;
