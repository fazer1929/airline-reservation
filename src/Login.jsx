import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const formStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "40px",
    "border-radius": "10px",
    "margin": "auto"
  }
  const containerStyle = {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%,-50%)",
  }
  const [isAdmin, setIsAdmin] = useState(false)
  const radioRef = useRef(null);
  const toogleAdmin = () => {
    setIsAdmin(radioRef.current.checked)
  }
  return (
    <div style={containerStyle}>

      <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2' }}>Welcome to Airline Reservation System</h1>
      <form style={formStyle}>
        <h3>Sign In</h3>

        <div class="form-check mt-2">
          <input class="form-check-input" onClick={() => toogleAdmin()} type="radio" name="radioUserAdmin" id="radioUser" checked />
          <label class="form-check-label" for="radioAdmin">
            User
          </label>
        </div>
        <div class="form-check mb-2">
          <input ref={radioRef} onClick={() => toogleAdmin()} class="form-check-input" type="radio" name="radioUserAdmin" id="radioAdmin" />
          <label class="form-check-label" for="radioAdmin">
            Admin
          </label>
        </div>

        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        {
          !isAdmin &&
          <p className="forgot-password text-right">
            <Link to={"/signup"}>Create Account?</Link>
          </p>
        }
      </form>
    </div>
  );
}

export default Login;