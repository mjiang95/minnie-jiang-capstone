import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import "./SignUp.scss";

function SignUp(props) {
  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/users/register", {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        props.history.push("/login");
      });
  };

  return (
    <section className="signup-page">
      <div className="signup">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSignUp}>
          <Input label="Name" name="name" type="text" />
          <Input label="Username" name="username" type="text" />
          <Input label="Password" name="password" type="password" />
          <div className="signup-button">
            <button className="submit" type="submit">
              Sign Up!
            </button>
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
