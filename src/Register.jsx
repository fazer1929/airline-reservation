import React from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const formStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "30px",
    "border-radius": "10px",
    "margin": "auto",
    "paddingBottom": "20px"
  }
  const containerStyle = {
    "margin":"auto 20px"
  }
    return (

      <div style={containerStyle}>
              <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign':'center', 'paddingTop': "20px" }}>Welcome to Airline Reservation System</h1>

      <form style={formStyle}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name + Middle Name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>User name</label>
          <input type="text" className="form-control" placeholder="Enter Username" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your Age"
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>&nbsp;&nbsp;&nbsp;
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="radioGender" id="radioMale" checked />
              <label class="form-check-label" for="radioMale">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="radioGender" id="radioFemale" />
              <label class="form-check-label" for="radioFemale">
                Female
              </label>
            </div>
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right" >
          <Link to={"/"}>Already registered. sign in?</Link>
          {/* Already registered <a href="/sign-in">sign in?</a> */}
        </p>
      </form>
      </div>
    )
  }

  export default Register;