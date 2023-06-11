import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";



export default function Signin() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 // const userLogin = useSelector((state) => state.userLogin);
 // const { error, userInfo } = userLogin;

 // useEffect(() => {
   // if (userInfo) {
     // history.push("/saved");
 //   }
 // }, [history, userInfo]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:3200/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./user";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        
        <form onSubmit={handleSubmit} action="/signin" method="post">
          <h3>Sign In</h3>

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

          <div className="mb-2">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div> 

          <div className="d-grid">
            <input type="submit" className="btn btn-primary" onClick={()=>{
              history("/ ");
            }} />
              Submit
            
          </div>

          <p className="link_container">
        <a href="/Reset" >Forgot Password?</a>
      </p>

          <p className="forgot-password text-right">
           Don't have an account? <a href="/Signup">Sign Up</a>
          </p>

          
        </form>
      </div>
    </div>
  );
}
