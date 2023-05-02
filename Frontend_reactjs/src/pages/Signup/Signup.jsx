import React, { useState, useEffect } from "react";
import "./Signup.css";

export default function Signup({history}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 // useEffect(() => {
   // if (userInfo) {
     // history.push("/");
 //   }
 // }, [history, userInfo]);

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(name, email, password);
      fetch("http://localhost:3200/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          name,
          password,
       
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "User");
          if (data.status === "ok") {
           return alert("Registration Successful");
          }
          else {
            alert("Something went wrong");
           }
        });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit} method="post" action="/signup" >
          <h3>Sign Up Form</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="login text-right">
            Already registered? <a href="/signin">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
