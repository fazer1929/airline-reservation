import React from 'react'
import { Link } from 'react-router-dom'

function Reservation() {

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
              <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign':'center', 'paddingTop': "20px" }}>Book Ticket</h1>

      <form style={formStyle}>
        <h3>Flight Details</h3>
        <div class="form-group col-md-4">
      <label for="inputState">Flight No.</label>
      <select id="inputState" class="form-control">
        <option selected>F101</option>
        <option>F102</option>
        <option>F103</option>
        <option>F104</option>
        <option>F105</option>
        <option>F106</option>
        <option>F107</option>
        <option>F108</option>
        <option>F109</option>

      </select>
    </div>
        
        <div className="form-group col-md-4">
          <label>Travel Date</label>
          <input
            type="date"
            className="form-control"
          />
        </div>

        <div class="form-group col-md-4">
      <label for="inputState">Class</label>
      <select id="inputState" class="form-control">
        <option selected>First Class</option>
        <option>Second Class</option>
        <option>Bussiness Class</option>
        

      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Source</label>
      <select id="inputState" class="form-control">
        <option selected>Raipur</option>
        <option>Bilaspur</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Pune</option>
        <option>Banglore</option>
        <option>Raigarh</option>
        <option>Durg</option>

      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Destination</label>
      <select id="inputState" class="form-control">
      <option selected>Raipur</option>
        <option>Bilaspur</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Pune</option>
        <option>Banglore</option>
        <option>Raigarh</option>
        <option>Durg</option>

      </select>
    </div>


        <div className="form-group col-md-4">
          <label>Fare (INR)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Amount "
          />
        </div>

        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

      </form>
      </div>
    )
  }

  export default Reservation;