import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "./NewPass.css";

const NewPass = () =>  {
    const { id, token } = useParams();

    const history = useNavigate();

    const [data2, setData] = useState(false);

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const userValid = async () => {
        const res = await fetch("/new-password", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status == 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();

        if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            const res = await fetch("http://localhost:3200/new-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            });

            const data = await res.json()

            if (data.status == 201) {
                setPassword("")
                setMessage(true)
            } else {
                toast.error("! Token Expired generate new Link",{
                    position: "top-center"
                })
            }
        }
    }

    useEffect(() => {
        userValid()
        setTimeout(() => {
            setData(true)
        }, 3000)
    }, [])

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={this.handleSubmit} method="post" action="/new-password" >
      <h3>Reset-Password</h3>

      <div className="mb-3">
        <label>New Password </label>
        <input
          type="password"
          className="form-control"
          id='password'
          value={password}
          placeholder="Enter new Password"
          onChange={setval}

        />
      </div>

      <div className="d-grid">
        <button type="submit" 
        className="btn btn-primary" 
        onClick={sendpassword}>
          Confirm
        </button>
      </div>
    </form>
    </div>
</div>
    );
}

export default NewPass
