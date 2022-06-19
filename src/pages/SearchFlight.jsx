import React from 'react'
import { Link } from 'react-router-dom'

function SearchFlight() {

  const formStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "30px",
    "border-radius": "10px",
    "margin": "auto",
    "paddingBottom": "20px"
  }
  const cardsStyle = {
    "width": "80%",
    "background": "#fff",
    "padding": "30px",
    "border-radius": "10px",
    "margin": "auto",
    "marginTop" :"15px",
    
    "paddingBottom": "20px"
  }
  const containerStyle = {
    "margin":"auto 20px"
  }
    return (

      <div style={containerStyle}>
              <h1 style={{ "color": "#f1f2f6", "marginBottom": "40px", "fontSize": "2.5rem", "letterSpacing": '1.2', 'textAlign':'center', 'paddingTop': "20px" }}>Search Flight</h1>

      <form style={formStyle}>
        <h3>Find Flight</h3>

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
          <label>Depart Date</label>
          <input
            type="date"
            className="form-control"
          />
        </div>

        <div class="form-group col-md-4">
      <label for="inputState">Class</label>
      <select id="inputState" class="form-control">
        <option selected>First Class</option>
        <option>Economy Class</option>
        <option>Bussiness Class</option>
        

      </select>
    </div>




        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>

      </form>

      <form style={cardsStyle}>
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <div class="md-4">
        <p>Testing</p>
    </div>
    <div class="md-4">
        <p>Testing</p>
    </div>
    <div class="md-4">
        <p>Testing</p>
    </div>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
      </form>

      </div>
    )
  }

  export default SearchFlight;