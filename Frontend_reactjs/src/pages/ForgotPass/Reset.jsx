import React, {Component} from 'react';
import "./Reset.css";

export default class Reset extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const { email } = this.state;
        console.log(email);
        fetch("http://localhost:3200/reset-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "User");
            alert(data.status);
        });
    }

    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit} method="post" action="/reset-password" >
          <h3>Reset-Password</h3>

          <div className="mb-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <p className="forgot-password text-right">
           Don't have an account? <a href="/Signup">Sign Up</a>
          </p>

        </form>
        </div>
    </div>
        );
    }
}